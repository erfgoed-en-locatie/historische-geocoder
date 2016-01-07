/*
 * Conversion script for DBpedia places data set
 * Converts input DBpedia JSON-LD to two separate ndjson files for vertices and edges
 */
 
// dependencies
var glob = require("glob");
var argv = require('optimist')
      .usage('Transforms DBpedia data set into Histograph input format.\nUsage: $0')
      .demand('f')
      .alias('f', 'file')
      .describe('f', 'Load a file')
      .argv;
var fs = require('fs'),
    path = require('path');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'dbpedia.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'dbpedia.relations.ndjson');

try {
	fs.openSync(pitFileNameOut, 'r');
	fs.unlinkSync(pitFileNameOut);
} catch (e) {}

try {
	fs.openSync(relationFileNameOut, 'r');
	fs.unlinkSync(relationFileNameOut);
} catch (e) {}

// objects
var usedURIs = [], 
    edges = [];

glob(argv.file, function (er, files) {
	files.forEach(function(file) {
		var data = JSON.parse(fs.readFileSync(file, {encoding: 'utf8'}));

		console.log('Parsing vertices...');    

		data['@graph'].forEach(function(obj){
		  var internaluri = obj['@id'].split("/");
      internaluri = internaluri[internaluri.length - 1];
		  
		  if (usedURIs.indexOf(internaluri) === -1) {

			var coordinates = obj['http://www.georss.org/georss/point'][0]['@value'].split(' ').reverse();
			

			var vertex = {
			  id: internaluri,
			  name: obj['http://www.w3.org/2000/01/rdf-schema#label'][0]['@value'],
				type: 'hg:Place',
			  geometry: {'type': 'Point', 'coordinates': [ parseFloat(coordinates[0]), parseFloat(coordinates[1]) ] },
			  //startDate: '',
			  //endDate: '',
			  uri: obj['@id']
			};
			
			if (vertex.name.search('gemeente') !== -1) {
				vertex.type = 'hg:Municipality';
			}

			fs.appendFileSync(pitFileNameOut, JSON.stringify(vertex, null, 0) + '\n');
			
			// EDGES
			obj['http://www.w3.org/2002/07/owl#sameAs'].forEach(function(sameAsURI) {
				if (sameAsURI.substr(0, 24) === 'http://sws.geonames.org/') {
					var geonamesURI = sameAsURI.split('/');
					geonamesURI = 'geonames/' + geonamesURI[geonamesURI.length - 2];
				  
					var edge = {
					  from: internaluri,
					  to: geonamesURI,
					  label: 'hg:sameHgConcept'
					};

					edges.push(edge);     
					fs.appendFileSync(relationFileNameOut, JSON.stringify(edge, null, 0) + '\n');
				}
			});
			usedURIs.push(internaluri);
		  }
		});

		console.log(usedURIs.length + ' vertices parsed.');
		console.log(edges.length + ' edges parsed.');
	});
});
