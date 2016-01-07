# Vragen aan de Geocoder

Beginnetje me vragen die we denken dat de geocoder zou moeten kunnen oplossen (in één of meerdere sub-vragen)

## Waar liep het Merwedekanaal in 1880?

- Probleem: "Keulsche Vaart" is een waterweg die deels is opgegaan in het Merwedekanaal, hoe kan dat in relaties tot uitdrukking gebracht worden?.
  - Merwedekanaal bestond niet in 1880, maar een gedeelte, de Keulsche Vaart, wél.
- Wat is precies de relatie tussen het Merwedekanaal en de Keulsche Vaart?
  - Waarom vinden wij deze twee wateren gerelateerd (of: hoe wordt een relatie tussen deze twee in de bron gedefinieerd)?
	  - Het zijn allebei waterwegen (zelfde type)
		- Ze liggen ongeveer op dezelfde plaats
- Is deze relatie dan uit te drukken in de eigenschappen op http://erfgoed-en-locatie.github.io/historische-geocoder/?
  - In feite zijn ze hetzelfde 'concept'
	- Zonder node/concept-datamodel uit te drukken in relatie?

PIT Keulsche Vaart > opgegaanIn / hg:absorbedBy, o.i.d. > PiT Merwedekanaal

- `q="Merwedekanaal"&period=1880`

Merwedekanaal NU, maar die heeft verkeerde datum. In de zoekgraaf zou de Keulsche Vaart dan de een historische relatie met het Merwedekanaal van nu moeten hebben, waardoor deze als resultaat gevonden wordt.

## Waar lag “Abcoude, Hollant”, in 1700?

- `q="Abcoude, Hollant"&period=1700`
- Probleem; Abcoude ligt nu in de provincie Utrecht maar lag vroeger in het gewest Hollant.

### Deelvragen

- `q="Hollant"&period=1700`

TODO: maak van alle antwoorden van de geocoder GeoJSON!
TODO: Response formaat als geen geometry bekend is?

Resultaat:

```json
{
  "id": "gewestenlijst/hollant",
  "source": "gewestenlijst",
  "label": "Hollant",
  "type": "hg:Gewest",
  "date_start": 1650,
  "date_end": 1710
}
```

- `q="Abcoude"&period=1700&ligtIn=gewestenlijst/hollant`

TODO: 
- er zijn verschillende ligtIn-relaties, en manieren om deze zoekvraag op te lossen. ligtIn kan worden uitgerekend aan de hand van de geometriën van de PIT's, of het kan een relatie zijn tussen twee PIT's, zelfs als de geometrie van beide PIT's niet bekend is.
- Verschil ligtIn / lagIn expliciet maken?

Resultaat:

```json
{
  "id": "opvarenden/abcoude",
  "source": "opvarenden",
  "label": "abcoude",
  "type": "hg:Plaats",
  "date_start": 1690,
  "date_end": 1700,
	"geometry": {
		geometrie van hedendaags Abcoude
	}
}
```

## Waar ligt de Kerkstraat in Sloten?

- `q="Kerkstraat, Sloten"`
- Probleem: Er zijn meerdere Slotens (FR, NH) dus die moeten eerst opgelost

### Deelvragen

Wil de gebruiker Kerkstraten in gemeentes of in plaatsen terugkrijgen? Of misschien alletwee?

- `q="Sloten"&type=hg:Plaats`

Resultaat:

```json
{
	"type": "FeatureCollection",
	"features": [
	  {
			"type": "Feature",
	    "geometry": {
	      "type": "Point",
	      "coordinates": [
					5.6500, 
					52.9000
				]
	    },
			"properties": {
				"id": "tgn/1048116",
	    	"source": "tgn",
	    	"label": "Sloten",
	    	"type": "hg:Plaats"
	    }
		},
	  {
			"type": "Feature",
	    "geometry": {
	      "type": "Point",
	      "coordinates": [
					4.8000, 
					52.3500
				]
	    },
			"properties": {
	  		"id": "tgn/7270897",
	   		"source": "tgn",
	    	"label": "Sloten",
	    	"type": "hg:Plaats"
			} 
	  }
	]
}
```

Er is overigens helemaal geen Kerkstraat in Sloten, wél een [Kerkstéég](http://www.openstreetmap.org/#map=19/52.89479/5.64591)! Of was er vroeger wel een Kerkstraat, en was het de bedoeling van deze use case die te vinden?

- `q="Kerksteeg"&ligtIn=tgn/7270897,tgn/1048116`

Resultaat:

```json
{
	"type": "Feature",
  "geometry": {
  	"type": "LineString",
    "coordinates": [
      [
        5.6455674,
        52.8946998
      ],
      [
        5.6457351,
        52.8947254
      ],
      [
        5.6457868,
        52.8947621
      ],
      [
        5.6464269,
        52.8948725
      ]
    ]
  },
	"properties": {
	  "id": "osm/w6553399",
	  "source": "osm",
	  "label": "Kerksteeg",
	  "class": "hg:Straat"
  }
}
```

## Ik wil alle straten van de Amsterdam(se grachtengordel) in 1754?

- `q="Amsterdam"&option=street&period=1754`
- Zijn in feite de volgende vragen:
    - welk Amsterdam bedoel je? (niet Amsterdam Drenthe)
    - met uri Amsterdam, geef me alle Pits vh type straat, die overlappen (in plaats en tijd) van die uri
    - overlappen met beschreven relatie (lagIn (?)) en bepaalde periode (1754)
				- Relatie lagIn kan een afgeleide zijn op basis van geometrieen, of direct uit bron


Dit even beter opschrijven, de vraag kan allerlei dingen betekenen:
- "amsterdam" > historische variant (bv. Amstelledamme) > alle straten die relatie hebben met die variant
- "amsterdam" > straten van nu die er in liggen > dan historische varianten van die straten
- "amsterdam" > geometrie > alle straten die in 1754 in die geometrie lagen
- "amsterdam" > Amstelledamme > alle straten van NU die in geometrie van Amstelledamme liggen

Voor deze use case kiezen we........

Straten die link hebben met Amsterdam/grachtengordel in 1754. Dus zowel in tijd als in plaats.

### Deelvragen

- `q="Amsterdam"&period=1754&forceGeometry=false`

```

[
	{
		amstelledamme
		jaar: 1700
		jaar: 1800
		mét geometrie!!!
	},
	{
		amsterdam
		zónder geometrie!!! kan dat wel?
		
		geometry: {}
	}
]
```


Response: PITs met ID's `gemeentegeschiedenis/amstelledamme`, `bag/AmsterdamNH`, `bag/AmsterdamDR` (niet filteren, alles retourneren)

- `type="hg:Straat"&ligtIn=bag/AmsterdamNH,bag/AmsterdamDR`

Response: PITs met type Straat die een hg:ligtIn relatie hebben met de PITs `bag/AmsterdamNH` en `bag/AmsterdamDR`
Voor het gemak: deze PITs hebben ID's `osm/straatvannu1` en `osm/straatvannu2`

- `type="hg:Straat"&lagIn=bag/AmsterdamNH,bag/AmsterdamDR&period=1754`



## Uit welke dorpen bestond Eindhoven 125 jaar geleden?

- `q="Eindhoven"&option=villages&period=-125`

### Deelvragen

- `q="Eindhoven"`

```json
{
	"type": "FeatureCollection",
	"features": [
	  {
			"type": "Feature",
			"geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              5.473251342773437,
              51.49335472541077
            ],
            [
              5.4107666015625,
              51.486086489639675
            ],
            [
              5.4087066650390625,
              51.4484441557646
            ],
            [
              5.4306793212890625,
              51.43003944716933
            ],
            [
              5.4622650146484375,
              51.42490192575532
            ],
            [
              5.505523681640625,
              51.42447377289693
            ],
            [
              5.524749755859375,
              51.43603249210615
            ],
            [
              5.5309295654296875,
              51.45058375685898
            ],
            [
              5.51239013671875,
              51.471546541834144
            ],
            [
              5.4869842529296875,
              51.485231326900056
            ],
            [
              5.473251342773437,
              51.49335472541077
            ]
          ]
        ]
      },
			"properties": {
				"id": "bag/eindhoven",
	    	"source": "bag",
	    	"label": "Eindhoven",
	    	"type": "hg:Plaats"
	    }
		},
	  {
			"type": "Feature",
	    "geometry": {
	      "type": "Point",
	      "coordinates": [
					5.4780597, 
					51.4395282
				]
	    },
			"properties": {
	  		"id": "osm/42616340",
	   		"source": "osm",
	    	"label": "Eindhoven",
	    	"type": "hg:Plaats"
			} 
	  }
	]
}
```

- `type=hg:plaats&ligtIn=bag/eindhoven,osm/42616340&period=-125`

TODO ligtIn of lagIn? Verschil in combinatie met `period=-125`? Keuze in design?

Response: PITs met type `hg:plaats` in periode 125 jaar geleden

## Welke straten liggen in het gebied met de volgende coördinaten? (bounding box)?

- `type=hg:Straat&geom="6.561637,53.31025"`



```json
{
	"type": "Feature",
  "geometry": {
    "type": "LineString",
		"coordinates": [
			[
			  6.54506,
			  53.30657
			],
			[
				6.54637,
				53.30674
			],
			[
				6.5595566,
				53.3084448
			],
			[
			  6.5596472,
			  53.308443
			],
			[
			  6.5597151,
			  53.30839
			],
			[
			  6.5595937,
				53.3075666
			]
    ]
  },
	"properties": {
	  "id": "osm/w296999915",
	  "source": "osm",
	  "label": "Meedenweg",
	  "class": "hg:Straat"
  }
}
```

### Options

In bovengenoemde vragen zijn options min of meer representatief voor de verschillende typen Classes die in de HG namespace kunnen bestaan.
Class vh type Plaats, Class vh type Waterweg, Class Wijk, Class Departement

 Al die classes krijgen eigen _business rules_:

- zo kan een Provincie nooit in een Plaats liggen
- een Plaats kan alleen "absorbed" worden door een Gemeente
- een Straat kan in een Plaats liggen of in een Gemeente maar niet andersom ... etc

