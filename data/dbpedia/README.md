# DBpedia

## Conversion script
Use: node dbpedia-histograph.js -f '*.json'

Use of quotes is mandatory, because of automatic bash wildcard expansion.

## Harvest
Harvest van dbpedia plaatsen, volgens onderstaande query.
Bij nieuwe harvest aanpassen:
- Je naam
- De datum waarop je de query uitvoert
- Let op het pagineren (LIMIT, OFFSET) van de resultaten in sets van 1000, DBpedia kan niet alle resultaten ineens leveren via het endpoint op http://dbpedia.org/sparql
- Let op de formatting van het resultaat (Turtle, pretty printed)
- Let op: er staan resultaten tussen die ofwel plaatsen (woonkernen) ofwel gemeentes, ofwel beide zijn
```
PREFIX grs: <http://www.georss.org/georss/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>

CONSTRUCT { 
  ?place a <http://dbpedia.org/ontology/PopulatedPlace> ;
    dc:created "2015-11-23" ;
    dc:source <http://dbpedia.org> ;
    dc:creator "Joop Vanderheiden" ;
    rdfs:label ?label ;
    grs:point ?geometry ;
    dbpedia-owl:country ?country ;
    <http://dbpedia.org/ontology/governingBody> ?governing_body ;
    dbpedia-owl:isPartOf ?part_of ;
    dbpedia-owl:abstract ?abstract ;
    owl:sameAs ?sameas .
}
WHERE {
  {
    SELECT DISTINCT ?place ?label ?country ?geometry ?part_of ?governing_body ?sameas ?abstract
    WHERE {
      ?place a <http://dbpedia.org/ontology/PopulatedPlace> ;
        rdfs:label ?label ;
        dbpedia-owl:country ?country ;
        grs:point ?geometry .
        OPTIONAL {?place dbpedia-owl:isPartOf ?part_of}
        OPTIONAL {?place <http://dbpedia.org/property/date> ?date}
        OPTIONAL {?place <http://dbpedia.org/ontology/governingBody> ?governing_body}
        OPTIONAL {?place owl:sameAs ?sameas}
        OPTIONAL {?place dbpedia-owl:abstract ?abstract}
        FILTER (?country = <http://dbpedia.org/resource/Netherlands>)
        FILTER (langMatches(lang(?label), "nl"))
        FILTER (langMatches(lang(?abstract), "nl"))
        FILTER (regex(?sameas, "nl.", "i") || regex(?sameas, "//dbpedia", "i") || regex(?sameas, "wikidata", "i") || regex(?sameas, "geonames", "i"))
    }
    ORDER BY ?label
  }
}
LIMIT 1000
OFFSET 0

## Harvest monumentnamen
Harvest van dbpedia monumentnamen, volgens onderstaande query.
---
PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
PREFIX dbp_prop: <http://nl.dbpedia.org/property/>

SELECT DISTINCT 
                (STR(?code) AS ?rijksmonumentNr)
                (STR(?naam) AS ?naam)
                (STR(?origNaam) as ?orignaam)
                ?plaats
                (STR(?status) AS ?status)
                (STR(?abstract) AS ?abstract)

WHERE
{
  {?x dbpedia-owl:name ?naam ;
      dbp_prop:monumentstatus ?status . 
  OPTIONAL { ?x dbpedia-owl:codeNationalMonument ?code }
  OPTIONAL { ?x dbpedia-owl:location ?plaats }
  OPTIONAL { ?x dbpedia-owl:originalName ?origNaam }
  OPTIONAL { ?x dbpedia-owl:abstract ?abstract }
  FILTER isLiteral(?status)
  FILTER regex(?status, "Rijksmonument", "i")
  FILTER (!regex(?plaats, "http://nl.dbpedia.org/resource/Nederland", "i"))

}
}
