// dependencies
var glob = require("glob");
var argv = require('optimist')
      .usage('Transforms gewesten data set into Histograph input format.\nUsage: $0')
      .demand('f')
      .alias('f', 'file')
      .describe('f', 'Load a file')
      .argv;
var fs = require('fs'),
    path = require('path');
var JSONStream = require('JSONStream');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'gewesten.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'gewesten.relations.ndjson');

try {
	fs.openSync(pitFileNameOut, 'r');
	fs.unlinkSync(pitFileNameOut);
} catch (e) {}

try {
	fs.openSync(relationFileNameOut, 'r');
	fs.unlinkSync(relationFileNameOut);
} catch (e) {}

// objects
var edges = [],
    vertex = {},
    edge = {};

glob(argv.file, function (er, files) {
	files.forEach(function(file) {
        console.log("Reading file " + file);
        fs.createReadStream(file).pipe(JSONStream.parse('features.*')).on('data', function (obj){

          if (obj.properties.gewest !== undefined) {
			var id = obj.properties.id.substr(1, obj.properties.id.length - 2);
            
			vertex = {
                id: id,
                name: obj.properties.gewest,
                type: 'hg:Gewest',
                geometry: obj.geometry
            };

			if (obj.properties.startyear) {
				vertex["hasBeginning"] = obj.properties.startyear + "-01-01";
			}

			if (obj.properties.endyear) {
				vertex["hasEnd"] = obj.properties.endyear + "-01-01";
			}

            fs.appendFileSync(pitFileNameOut, JSON.stringify(vertex, null, 0) + '\n');

            // EDGES
            // tgn
            if (obj.properties.tgn && obj.properties.tgn !== "") {
                var tgnURI = obj.properties.tgn;

                edge = {
                    from: id,
                    to: tgnURI,
                    label: "hg:sameHgConcept"
                };

                edges.push(edge);
                fs.appendFileSync(relationFileNameOut, JSON.stringify(edge, null, 0) + "\n");
            }

            // dbpedia
            if (obj.properties.dbpedia && obj.properties.dbpedia !== "") {
                var dbpediaURI = obj.properties.dbpedia;

                edge = {
                    from: id,
                    to: dbpediaURI,
                    label: "hg:sameHgConcept"
                };

                edges.push(edge);
                fs.appendFileSync(relationFileNameOut, JSON.stringify(edge, null, 0) + "\n");
            }
          }
        });
    });
});

