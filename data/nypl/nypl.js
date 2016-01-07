var yauzl = require("yauzl");
var fs = require("fs"),
    JSONStream = require('JSONStream'),
    es = require('event-stream'),
    path = require('path'),
    pitStream = fs.createWriteStream(path.resolve(__dirname, "./nypl.pits.ndjson")),
    relStream = fs.createWriteStream(path.resolve(__dirname, "./nypl.relations.ndjson"));

yauzl.open(path.resolve(__dirname, "./nypl-perris-brooklynt.geojson.zip"), function(err, zipfile) {
  if (err) throw err;
  zipfile.on("entry", function(entry) {
    if (/\/$/.test(entry.fileName)) {
      return;
    }
    zipfile.openReadStream(entry, function(err, readStream) {
      if (err) throw err;

      //readStream.pipe(fs.createWriteStream(entry.fileName));
      readStream
          .pipe(JSONStream.parse('features.*'))
          .pipe(es.mapSync(function (data) {
            //twee pits:
            //  eentje straat + huisnummer (id)
            //  eentje naam (id+name)
            //console.log(data)
            //return data

            if (data.properties.number || data.properties.name) {
              var pit = {
                id: data.properties.id,
                type: "hg:Building",
                data: {
                  // TODO: add data
                },
                geometry: data.geometry,
                hasBeginning: data.properties.layer_year + "-01-01",
                hasEnd: data.properties.layer_year + "-12-31"
              };

              if (data.properties.number && data.properties.street && data.properties.name) {
                pit.name = data.properties.number + " " + data.properties.street;
                pitStream.write(JSON.stringify(pit) + "\n");

                pit.name = data.properties.name;
                pit.id = pit.id + "-name";
                delete pit.geometry;
                pitStream.write(JSON.stringify(pit) + "\n");

                var relation = {
                  from: data.properties.id,
                  to: data.properties.id + "-name",
                  label: "hg:sameHgConcept"
                };
                relStream.write(JSON.stringify(relation) + "\n");

              } else if (data.properties.number && data.properties.street) {
                pit.name = data.properties.number + " " + data.properties.street;
                pitStream.write(JSON.stringify(pit) + "\n");
              } else if (data.properties.name) {
                pit.name = data.properties.name;
                pitStream.write(JSON.stringify(pit) + "\n");
              }
            }
          }));
    });
  });
});
