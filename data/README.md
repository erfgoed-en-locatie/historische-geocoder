# Datasets

## Datasets die geometrieën leveren

- BAG, Geonames, Gemeentegeschiedenis en Getty TGN vormen de 'basis' van de geocoder en leveren het merendeel van de geometrieën.
- BAG, Geonames en TGN zijn zoveel mogelijk ge-aligned
- Gemeentegeschiedenis is nu de enige bron die historische polygonen levert
- Ook `verdwenen dorpen` levert geometrieën, zie https://github.com/erfgoed-en-locatie/historische-geocoder/blob/gh-pages/data/verdwenen-dorpen/verdwenen-dorpen.json


## Datasets die toponiemen leveren

- Datasets als poorterboeken, rekeningen van de Illustre Lieve Vrouwe Broederschap, Simon Hart, militieregisters geven naamvarianten (alternatieve namen en spellingsvarianten).
- de naamvarianten worden gekoppeld aan TGN, gemeentegeschiedenis of geonames
- Zie als voorbeeld https://github.com/erfgoed-en-locatie/historische-geocoder/blob/gh-pages/data/poorterboeken/poorterboeken_places.csv
- De toponiemlijsten beperken zich niet altijd tot Nederland, zie dit kaartje met in de ILVB voorkomende plaatsen: http://www.islandsofmeaning.nl/projects/herkomst_ilvb_leden/


## Typen

- Tot op heden vooral plaatsen en gemeenten
- Binnenkort straten (nationaal wegenbestand, historische straatnaam datasets), Franse departementen, graafschappen, etc.