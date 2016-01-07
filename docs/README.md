#Historische Geocoder documentatie

##overzicht

![overzicht geocoder apps](images/geocoder.png)

##publieksinterface

###[viewer](http://histograph.io/viewer/)

- Zoekinterface, toont resultaten op kaart. Met de juiste parameter wordt deze basic viewer met diverse advanced opties tot pro viewer.
- Repository op [https://github.com/histograph/viewer](https://github.com/histograph/viewer) 


###[geothesaurus](http://geothesaurus.nl)

- De geothesaurus biedt een tekstuele zoekinterface. Minstens zo belangrijk is dat de geothesaurus van elk hgconcept, elke pit en elke bron detailinformatie biedt op een eigen URI.
- Via content negotiation wordt op elke URI html, json of (todo) rdf geserveerd.
- Repository op [https://github.com/erfgoed-en-locatie/geothesaurus](https://github.com/erfgoed-en-locatie/geothesaurus)

##protools, voor erfgoedinstellingen en ontwikkelaars

###[api](http://api.histograph.io/)

- De api onsluit de Histograph database en ligt aan de basis van de viewer, de geothesaurus en de standaardisatietool.
- Repository op [https://github.com/histograph/api](https://github.com/histograph/api)
- Documentatie eveneens op [https://github.com/histograph/api](https://github.com/histograph/api)

###[standaardisatietool](http://locatienaaruri.erfgeo.nl/)

- Standaardiseert historische plaats- en gemeentenamen naar huidige naam en TGN-, Geonames- en/of GemeentegeschiedenisURI
- Repository op [https://github.com/erfgoed-en-locatie/place-identificator](https://github.com/erfgoed-en-locatie/place-identificator)

###[histodraw](http://erfgeo.nl/histodraw)

- Histodraw is gemaakt om eenvoudig geometriën (polygonen, lijnen en desnoods ook punten) te tekenen en de geojson eenvoudig te kopiëren. Handig als je bijvoorbeeld een verdwenen straat in wilt tekenen.
- Repository op [https://github.com/erfgoed-en-locatie/histodraw](https://github.com/erfgoed-en-locatie/histodraw)

##team tools

###[data importer](http://importer.erfgeo.nl/)

- Biedt ook niet-programmeurs binnen het team de mogelijkheid datasets  te beschrijven en dan(opnieuw) in de Histograph database op te nemen. Vervangt custom scripts die aangeleverde csv omzetten naar ndjson
- Repository op [https://github.com/erfgoed-en-locatie/pipo](https://github.com/erfgoed-en-locatie/pipo)



