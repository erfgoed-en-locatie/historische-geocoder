> Begin oorspronkelijk document Menno + Petra

# Use Cases voor de Historische Geocoder

## Use cases die gebaseerd zijn op een bestaande vraag

Het Stadsarchief Amsterdam wil graag de in de onlangs op Vele Handen ingevoerde **Overgenomen Delen** (1892-1920) voorkomende geboorteplaatsen standaardiseren / geocoderen. Het gaat om 900.000 records, waarvan het aantal unieke schrijfwijzes  van plaatsnamen een stuk kleiner zal zijn. Bij elke plaatsnaam wordt ook de provincie teruggegeven.
Opm. Monika: "In de Overgenomen Delen staan de personen die tussen 1892 en 1920 zijn overleden of zijn vertrokken uit Amsterdam. Bij overlijden of vertrek werden hun gegevens ‘overgenomen’ van het kaartbestand (de Gezinskaarten) in een vastbladig register, vandaar de naam Overgenomen Delen." en “De Overgenomen Delen zijn niet alleen een prachtige bron om te achterhalen waar mensen gewoond hebben, maar vooral ook waar zij naar toe gingen als zij uit Amsterdam vertrokken. Ook zijn patronen in de emigratie naar Duitsland en naar Antwerpen voor en tijdens de Eerste Wereldoorlog te reconstrueren uit de gegevens in dit archiefbestand.”

Je zou dan met de geharmoniseerde data een infographic of animatie kunnen maken, waarin je ziet waarvandan mensen naar Amsterdam emigreerden of waarnaartoe de mensen vertrokken zijn, echter met het bijkomende euvel dat de bovengenoemde emigratie naar Duitsland en Antwerpen buiten de scope van E&L vallen??

Verschillende adressen en adressen van overledenen historisch geocoderen en koppelen aan huidige straatnamen kan ook nog relevant zijn.

Walther Hasselo zou graag over __geometrieën bij historische straatnamen__ beschikken.

Edwin Klijn van het NIOD wil een thematisch deel van de in Digitale Collectie opgenomen __beeldbank geocoderen en via een kaart (de erfgeoviewer) ontsluiten__. De geografische aanduidingen zijn hedendaags maar niet altijd even precies.

De Digitale Collectie wil graag __geografische verrijking__ van hun datasets, op basis van semi-genormaliseerde plaatsnaamaanduidingen en gebruikt hiertoe de Historische Geocoder.

*Opm. Monika: Concreter maken met een bestaande content provider die dit wil. Vraag is: je hebt 1 dataset dat je wilt verrijken, met daarin verschillende niveau's van ontbrekende gegevens die je wilt aanvullen. B.v. bij het ene object heb je een historische plaatsnaam, maar geen geo referentie. bij het andere object heb je een hedendaagse plaatsnaam, maar een historisch gebeurtenis zoals "gezicht op Heusden, 1710", waarvan je wilt dat er ook d ehistorische geoinformatie over Heuseden in 1710 wordt toegevoegd.*

*Andere mogelijkheid voor verdere concretisering: use case waarin het gaat om het verrijken van 2 verschillende datasets van 2 verschillende content providers die over dezelfde context beschikken. b.v. Rotterdam voor en na de oorlog, oid.?*

## Use cases door Menno en Petra bedacht ter illustratie

Rosa Merino Claros probeert in haar project aan de UvA **plaatsnamen in historische teksten te herkennen**. Daarbij zouden lijsten met aan de tekst contemporaine plaatsnaamvarianten nuttig zijn. Zo’n lijst wordt uit de HG Store gedownload om te gebruiken binnen de software waarmee de named entity recognition geschiedt (bijv. Stanford NLP).

Je kan een historische krantenbank doorzoeken op ‘Leeuwarden’, maar je zou ook alle **alternatieve namen en schrijfwijzes op kunnen halen** om daar een zoekactie mee te doen.

In twee te koppelen datasets zijn de plaatsen al gestandaardiseerd. Echter, in de ene is dat met Geonames gedaan, in de andere met de TGN. De Geocoder wordt gebruikt als **hub om van de ene naar de andere codering om te zetten**.

*Rein: waarom wil de eigenaar van de datasets dit? Het gaat hier (in beperkte zin) om alignment, een type thesaurusverrijking dat buiten de primaire scope van de HGC valt. De RCE is in de beste positie om te beslissen hoe hoog de geografische alignment tussen GeoNames, TGN, GTAA, VIAF, Kadaster LD, etc. etc. op de backlog moet komen.*

*Menno: de eigenaar wil dit om datasets waarin verschillende thesauri zijn gebruikt te kunnen koppelen.*

Iemand (dat zouden wij zelf kunnen zijn) maakt een **Historische Straatnamen Portal**. Hierin kunnen amateurhistorici en historische verenigingen hun lokale kennis invoeren. De data wordt met een bepaalde frequentie ingelezen in de HG Store.

Het IISG bouwt **een visualisatietool, die statistische data geografisch toont**. De geocoder wordt gebruikt om geometrieën op te halen waar de tool zelf niet over beschikt en om naamvarianten te geocoderen die de tool zelf niet kent.

**Use Cases E&L**

Op de volgende website staan de laatste versie van de use cases van E&L. Deze zijn na de scope-verkleining nog niet aangepast.

[http://erfgeo.nl/mediawiki/index.php/Overzicht_Use_Cases](http://erfgeo.nl/mediawiki/index.php/Overzicht_Use_Cases)




