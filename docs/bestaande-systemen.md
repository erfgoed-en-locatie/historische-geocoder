# Onderzoek bestaande systemen

##Histopo.nl

- Methode:
  - MySQL database, GeoNames als basis
  - Eigen IDs toegekend aan plaatsen
  - Transformatie data: Handmatig

- Bronnen: 
  -	gemeentegeschiedenis.nl, niet in eigen database maar links naar de concepten, via hun API
  - Militieregister
  - Herkomstonderzoek Simon Hart
  - Verdwenen dorpen

##Pelagios / Pleiades

Pleiades: Gazetteer (databron)
Pelagios: Platform waarop links tussen gazetteers worden gemaakt

- Mogelijkheden:
  - Verschillende bronvermeldingen per object opvragen
  - Gerelateerde objecten vinden o.b.v. voorkomens in bronnen (TF-IDF?)
  - API met zoekfunctionaliteiten voor object types, locaties, etc 
	https://github.com/pelagios/pelagios-api-v3/blob/master/README.md
  - Heatmaps op basis van geometrieën (pelagios-heatmap)

- Methode:
  - Triple store met API a la CitySDK
  - Transformatie data: RDF beschrijving van data, data2pelagios scripts
  - Vier databronnen zijn de 'basis for alignment', waaraan nieuwe databronnen aan kunnen refereren als ze data toevoegen via 				skos:exactMatch
  - skos:closeMatch kan gebruikt worden voor het linken van historische varianten aan hun hedendaagse equivalent
  - Gebruik van oa LAWD ontology (http://lawd.info/)
  - Temporeel aspect: startDate, endDate
  - Puntgeometrieen

- Bronnen:
  - Ca. 20 databronnen (= gazetteers) die toegevoegd kunnen worden na RDF-conversie

##iDAI.Gazetteer

Eén van de basisdatabronnen die gebruikt worden in Pelagios, erg uitgebreid

- Mogelijkheden:
  - "Contains" / "Falls within" relaties tussen objecten
  - Provenance (alleen directe bronvermelding, geen reasoningstappen)
  - Similar places: op basis van naam of locatie
  - Fuzzy search op naam

- Bronnen:
  - Arachne, Zenon, GeoNames

##PastPlace

Gazetteer met Britse GIS-data tussen 1801 en 2001, via API bereikbaar.

- Mogelijkheden:
  - REST API met verschillende responseformaten
  - Zoeken binnen een container (= ander object), fuzzy matches

- Methode:
  - Object database gebaseerd op 'places' en 'units'

- Bronnen:
  - Documentary evidence, geen archeologische finds
  - Census reports, historical gazetteers, travellers' tails, historical maps

##Kulttuurisampo

Finse cultuurdatabase, semantic web technologie

- Mogelijkheden:
  -	Relaties leggen tussen verschillende mensen (= instances), reasoning stappen weergeven
  - Zoeken op tijdlijn en kaart
  - API?

- Methode:
  - Semantic Web mappings, reasoning
  - ONKI ontology framework (met endpoint):
	http://www.seco.tkk.fi/publications/2008/hyvonen-et-al-building-2008.pdf
  -	Thesaurus-to-ontology. Bestaande / algemeen geaccepteerde ontologieen aangevuld om met de thesauri-termen om te kunnen gaan
  - Finse ontology (YSO), 23.000 termen cross-domain
  - Simpele alignment tools om per dataset daaraan te relateren

- Bronnen:
  - 20 bronnen: musea, bibliotheken, archieven

##Edinburgh Geoparser / Unlock

- Mogelijkheden:
  - Tekstherkenning, haalt plaatsnamen uit tekst, query naar Unlock
  - Unlock: ZoekAPI, zoeken met bounding boxes, types, postcodes of buffers
  - Unlock: Lijkt niet gelinkt te worden, alle bronnen slechts samengevoegd
  - Unlock: Mogelijkheid tot vinden van 'meest-waarschijnlijke' resultaat

- Methode:
  - Unlock: Eigen features, geen georelaties

- Bronnen:
  - Unlock: gekoppeld aan verschillende bronnen waaronder GeoNames, ook aan DEEP, een Britse historische plaatsnamen dataset, maar deze lijkt niet gekoppeld aan de andere

##TopoTime

- Onderzoek naar genuanceerde (fuzzy) temporele representatie
- Model met waarschijnlijkheid/zekerheid van het begin/eind van events
- Geometrische representatie (bijv. 'overlap' te berekenen tussen twee events)
- Beperkte functionaliteit 