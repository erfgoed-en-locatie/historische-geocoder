#!/usr/local/bin/node

/* 
 * Conversion script for Leidse straten data set
 * Converts input nwb csv to two separate ndjson files for vertices and edges
 */
 
// dependencies
var argv = require('optimist')
		.usage('Transforms leidse-straten data set into Histograph input format.\nUsage: $0')
		.demand('f')
		.alias('f', 'file')
		.describe('f', 'Load a file')
		.argv,
	parse = require('csv-parse'),
	fs = require('fs'),
	path = require('path');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'leiden-straten.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'leiden-straten.relations.ndjson');

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
	edge = {},
	edges = [],
	nwbURI;

parse(fs.readFileSync(argv.file, {encoding: 'utf8'}), {delimiter: ',', escape: '\\'}, function(err, data) {

  if (err) {
    console.log(err);
  } else {
  
    console.log("Parsing vertices...");
    data.shift(); // Skip CSV header

    data.forEach(function(obj){
      var internaluri = obj[0];

      if (usedURIs.indexOf(internaluri) === -1) {
	  
        var vertex = {
			id: obj[0],
			name: obj[2],
			//source: source,
			type: "hg:Street",
			data: {
				currentName: obj[3],
				placeName: obj[4]
			}
        };
        
		if (!(obj[12] == "")) {
			vertex.geometry = JSON.parse(obj[12]);
		}

        fs.appendFileSync(pitFileNameOut, JSON.stringify(vertex, null, 0) + "\n");
        
        // EDGES
        if (obj[13] != "0" && obj[13] !== "") {
          nwbURI = obj[13];
          
          edge = {
            from: internaluri,
            to: nwbURI,
            label: "hg:sameHgConcept"
          };

          edges.push(edge);
          fs.appendFileSync(relationFileNameOut, JSON.stringify(edge, null, 0) + "\n");
        }
          
        if (obj[14] != "0" && obj[14] !== "") {
          nwbURI = obj[14];
          
          edge = {
            from: internaluri,
            to: nwbURI,
            label: "hg:within"
          };

          edges.push(edge);
          fs.appendFileSync(relationFileNameOut, JSON.stringify(edge, null, 0) + "\n");

        }
        
        usedURIs.push(internaluri);
      }
    });

    console.log(usedURIs.length + " vertices parsed.");
    console.log(edges.length + " edges parsed.");
  }
});
