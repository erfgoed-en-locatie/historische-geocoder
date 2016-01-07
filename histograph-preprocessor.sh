#!/bin/bash
# Converters for histograph data
echo "Process Atlas der Verstedelijking"
node data/atlas-verstedelijking/atlas-verstedelijking-histograph.js -f data/atlas-verstedelijking/atlas-verstedelijking.geojson
echo
echo "Process BAG places"
node data/bag/bag-histograph.js -f data/bag/bag_nl_woonplaatsen_with_gn_tgn.csv
echo
echo "Process Carnaval places"
node data/carnaval/carnaval-histograph.js -f data/carnaval/carnaval.csv
echo
echo "Process DBpedia places"
node data/dbpedia/dbpedia-histograph.js -f 'data/dbpedia/*ld.json'
echo
echo "Process Gemeentegeschiedenis..."
node data/gemeentegeschiedenis/gemeentegeschiedenis-histograph.js
echo
echo "Process geonames places"
node data/geonames/geonames-histograph.js -f data/geonames/geonames_nl_places.csv
echo
echo "Process geonames alternative place names"
node data/geonames-altnames/geonames-altnames-histograph.js -f data/geonames-altnames/geonames-altnames.csv
echo
echo "Process geonames municipalities"
node data/geonames-municipalities/geonames-municipalities-histograph.js -f data/geonames-municipalities/geonames-municipalities.csv
echo
echo "Process gewesten regions"
node data/gewesten/gewesten-histograph.js -f 'data/gewesten/*.geojson'
echo
echo "Process Illustere Lieve Vrouwe-broederschap places"
node data/ilvb/ilvb-histograph.js -f data/ilvb/ilvb.csv
echo
echo "Process Leiden straten"
node data/leiden-straten/leiden-straten-histograph.js -f data/leiden-straten/leiden-oud-nieuw.csv
echo
echo "Process Militieregisters municipalities"
node data/militieregisters/militieregisters-histograph.js -f data/militieregisters/militieregisters.csv
echo
echo "Process Nationaal Wegenbestand roads"
node data/nationaal-wegenbestand/nwb-histograph.js -f data/nationaal-wegenbestand/nationaal_wegenbestand_wegvakken_combined.geojson
echo
echo "Process OpenStreetMap places"
node data/osm-places/osm-places-histograph.js -f data/osm-places/osm-places.geojson
echo
echo "Process Pleiades places"
node data/pleiades/pleiades-histograph.js -f data/pleiades/pleiades.csv
echo
echo "Process Poorterboeken places"
node data/poorterboeken/poorterboeken-histograph.js -f data/poorterboeken/poorterboeken_places.csv
echo
echo "Process CBS provinces"
node data/provincies/provincies-histograph.js -f data/provincies/provincies.csv
echo
echo "Process Simon Hart municipalities"
node data/simon-hart/simon-hart-histograph.js -f data/simon-hart/simon-hart.csv
echo
echo "Process Thesaurus of Geographical Names place concepts"
node data/tgn/tgn-histograph.js -f data/tgn/tgn-nl-concepts.csv -t
echo
echo "Process Thesaurus of Geographical Names alternative labels for places"
node data/tgn-terms/tgn-terms-histograph.js -f data/tgn-terms/tgn-nl-altnames.csv
echo
echo "Process Verdwenen Dorpen places"
node data/verdwenen-dorpen/verdwenen-dorpen-histograph.js -f data/verdwenen-dorpen/verdwenen-dorpen.csv
echo
echo "Process VOC-opvarenden municipalities"
node data/voc-opvarenden/voc-opvarenden-histograph.js -f data/voc-opvarenden/voc_opvarenden_v1.csv
echo
echo "Finished!"
