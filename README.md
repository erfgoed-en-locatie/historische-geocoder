# Historische Geocoder / Gazetteer (old repo!)

**Let op:** De historische geocoder is te vinden op https://github.com/histograph/histograph. Voor pagina met uitleg over concepten en relaties, zie: http://histograph.io. Deze repository wordt niet langer gebruikt of bijgewerkt en is alleen beschikbaar ter documentatie/archivering.

**Please note**: For Histograph please start at http://histograph.io and use the code in https://github.com/histograph/. This is an earlier version no longer maintained or supported.

## Documentatie
De directory [`docs`](docs) bevat een aantal _user stories_ in scenario's in [`use-cases`](docs/use-cases) en verkennende aantekeningen over [`ontologie`](docs/ontology) en queries.

## Datasets
Beoogde datasets, datadumps van vrij beschikbare databronnen bevinden zich in de directory [`data`](data). Een paar pointers zijn te vinden in de [readme](data/readme.md). De scripts die hier staan kunnen het best genegeerd worden, zie daarvoor de actuele versies in https://github.com/histograph.

- Atlas van de Verstedelijking
- BAG - plaatsen en gemeentes, later misschien panden en adressen
- Carnavalsplaatsen in Brabant
- [DBpedia](http://dbpedia.org) onderdeel [plaatsnamen](data/dbpedia)
- Geonames
- Gemeentegeschiedenis](data/gemeentegeschiedenis)
- [Gewesten, uit Atlas van de Verstedelijking](data/gewesten)
- Illustre Lieve Vrouwe Broederschap
- Militieregisters (geen open data)
- Nationaal Wegenbestand
- OpenStreetMap
- [Pleiades, Ancient Places, Names and Locations](data/pleiades)
- Poorterboeken
- [CBS-provincies](data/provincies)
- Herkomstonderzoeken Simon Hart (geen open data)
- Getty Thesaurus of Geographic Names
- Verdwenen dorpen
- [VOC Opvarenden](data/voc-opvarenden)



## Links

- [iDAI.gazetteer](https://gazetteer.dainst.org/)
- [Pelagios](https://github.com/pelagios)
- [Histopo](http://www.histopo.nl/)
- [Gemeentegeschiedenis](http://www.gemeentegeschiedenis.nl/)
- [PastPlace](http://www.pastplace.org/)
- [Kulttuurisampo](http://www.kulttuurisampo.fi/?lang=en)
- [Edinburgh Geoparser](http://www.ltg.ed.ac.uk/clusters/Edinburgh_Geoparser.html)
- [Topotime](http://kgeographer.com/wp/topotime/)
- [GeoHumanities SIG](http://geohumanities.org/)
- [Lausanne meeting](http://geohumanities.org/?q=lausanne-notes)
- [NYPL Meeting: Moving Historical Geodata to the Web](http://geohumanities.org/?q=nypl-meeting-2014)

Voor vergelijking van deze bestaande systemen, zie [`bestaande-systemen.md`](docs/bestaande-systemen.md).

Gebruik voor bulk-conversie van alle data (onder linux/mac):
```
./histograph-preprocessor.sh
```
