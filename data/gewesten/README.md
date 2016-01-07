#Gewesten

Bron: Atlas der verstedelijking

Auteur: [Institute of the History of Art, Architecture and Urbanism (IHAAU)](http://bk.tudelft.nl/index.php?id=14929&L=0) van de faculteit Bouwkunde van de TU Delft (o.l.v. Reinout Rutte) en de [Rijksdienst voor het Cultureel Erfgoed](http://www.cultureelerfgoed.nl/) (o.l.v. Jaap Evert Abrahamse)

Website: [http://thoth.nl/Rubrieken/Architectuur---stedenbouw/Atlas-van-de-verstedelijking-in-nederland-1000-jaar-ruimtelijke-ontwikkeling]()

Licentie: Volgens Menne Kosian 'mag alles gebruikt worden'. Zou goed idee zijn hem nog even na te laten vragen welke CC licentie daar, voor wat betreft de geodata, dan opgeplakt zou kunnen worden.

Uit dit boek hebben we nog een vijftal pagina's (de C'tjes) gekregen met bestuurlijke indelingen. Vooral de eerste twee daarvan (1350 en 1650) lijken geschikt om de toenmalige gewesten etc. uit te destilleren.

NB: een wellicht betere versie voor de periode rond 1650 ligt in [http://nl.wikipedia.org/wiki/Republiek_der_Zeven_Verenigde_Nederlanden#mediaviewer/File:Republiek_der_Zeven_Verenigde_Nederlanden.svg]()

##Bewerking:
- Conversie van PDF naar DXF met behulp van Inkscape. Enig opschoonwerk is hierin gedaan: alle tekst en onnodige paden zijn verwijderd. Hiervoor zijn enige groepen paden 'gedegroupeerd'
- Transformatie van de DXF met behulp van qgis-processing script 'v.translate.points'. De points-bestanden C1.points en C2.points zijn hiervoor gebruikt
- Na succesvolle transformatie volgt fixed distance buffering m.b.v. vector geometry tools. Distance: 0.0001, dissolve boundaries zodat het aaneengesloten polygonen worden. 
- Buffers opschonen door ringen te verwijderen.
- Originele ringen (gaten) in geometrieen herstellen door vector overlay tool difference-operatie
- Bovenstaande buffer-stap herhalen per individueel gewest
- Handmatig tekstueel opnieuw toevoegen van gewest-namen
- Mapping naar DBpedia (waar mogelijk) en Thesaurus of Geographical Names (waar mogelijk)
- Uitvoer naar GeoJSON

##TODO:
- de DBpedia-mappings gebruikt resources die wellicht nog niet beschikbaar zijn in de DBpedia-dataset. Deze resources moeten worden geharvest en aangevuld.
- Namen die bij gewesten ontbreken uitvinden/toevoegen!
- Begin- en einddata toevoegen (gewesten\_1350 en gewesten\_1650) zegt daar iets over, neem ik aan?
- gewesten\_1650 wordt op dit moment niet ingelezen