#!/usr/local/bin/node

/* 
 * Conversion script for militieregisters data set
 * Converts input ilvb csv to two separate ndjson files for vertices and edges
 */
 
// dependencies
var argv = require('optimist')
    .usage('Transforms pleiades data set into Histograph input format.\nUsage: $0')
    .demand('f')
    .alias('f', 'file')
    .describe('f', 'Load a file')
    .argv,
  fs = require('fs'),
  parse = require('csv-parse'),
  path = require('path');

// files
var pitFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'pleiades.pits.ndjson'),
	relationFileNameOut = path.join(path.dirname(path.resolve(argv.file)), 'pleiades.relations.ndjson');

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

parse(fs.readFileSync(argv.file, {encoding: 'utf8'}), {delimiter: ',', escape: '\\'}, function(err, data) {

  if (err) {
    console.log(err);
  } else {
  
    console.log("Parsing vertices...");
    data.shift(); // Skip CSV header

    data.forEach(function(obj){
      var internaluri = obj[1];
                
      if (usedURIs.indexOf(internaluri) === -1) {
      
        var vertex = {
          id: internaluri,
          name: obj[4],
          type: (obj[11] === "river" || obj[11] === "lake") ? "hg:Water" : "hg:Place",
          geometry: {'type': 'Point', 'coordinates': [ parseFloat(obj[10]), parseFloat(obj[9]) ] },
          data: {
            currentPlaceName: obj[5],
            source: obj[12]
          },              
          "hasBeginning": parseInt(obj[8]) + "-01-01",
          "hasEnd": parseInt(obj[7]) + "-01-01",
          uri: obj[2]
        }

        fs.appendFileSync(pitFileNameOut, JSON.stringify(vertex, null, 0) + "\n");
        
        // EDGES
        if (obj[6] != "0" && obj[6] !== "" && obj[6] !== "NULL") {
          var geonamesURI = obj[6];
          
          var edge = {
            from: internaluri,
            to: geonamesURI,
            label: "hg:sameHgConcept"
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
