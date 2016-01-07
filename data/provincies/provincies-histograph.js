/* 
 * Conversion script for gemeentegeschiedenis data set
 * Converts input gemeentegeschiedenis csv to two separate ndjson files for vertices and edges
 */
 
// dependencies
var argv = require('optimist')
    .usage('Transforms provincies data set into Histograph input format.\nUsage: $0')
    .demand('f')
    .alias('f', 'file')
    .describe('f', 'Load a file')
    .argv,
    fs = require('fs'),
    parse = require('csv-parse'),
    path = require('path');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'provincies.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'provincies.relations.ndjson');

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
  edges = [],
  becameList = [];

parse(fs.readFileSync(argv.file, {encoding: 'utf8'}), {delimiter: ',', escape: '\\'}, function(err, data) {

  if (err) {
    console.log(err);
  } else {

    console.log("Parsing province vertices...");
    data.shift(); // Skip CSV header

    data.forEach(function (obj) {
        // EDGES
        if (obj[3] !== "0" && obj[3] !== "") {
          tgnuri = obj[3];
		  geonamesuri = obj[4];
		  gguri = obj[5];
          
          var edge1 = {
            from: geonamesuri,
            to: tgnuri,
            label: "hg:sameHgConcept"
          };

		  var edge2 = {
			from: geonamesuri,
			to: gguri,
			label: "hg:sameHgConcept"
		  };

		  var edge3 = {
			from: tgnuri,
			to: gguri,
			label: "hg:sameHgConcept"
		  };

          fs.appendFileSync(relationFileNameOut, JSON.stringify(edge1, null, 0) + "\n");
          fs.appendFileSync(relationFileNameOut, JSON.stringify(edge2, null, 0) + "\n");
          fs.appendFileSync(relationFileNameOut, JSON.stringify(edge3, null, 0) + "\n");
        }
    });
  }
});
