# VOC Opvarenden

Bron: VOC Opvarenden

Periode: 1680-1794

Auteur: Drs A.J.M. van Velzen en Prof.dr. F.S. Gaastra

Website: http://vocopvarenden.nationaalarchief.nl/

Uri bron: https://easy.dans.knaw.nl/ui/datasets/id/easy-dataset:48604

Beschrijving: Personeelsadministratie VOC 18e eeuw: persoonsgegevens van personeel op zee en overzee, gekoppeld aan alle scheepsreizen van de VOC. De data zijn overgenomen uit de 18e-eeuwse scheepssoldijboeken en ingetypt in een relationele database.

Licentie: nog onbekend

Bewerkingen:

- Uit de gehele set (versie 2011) zijn de unieke plaatsnamen gehaald (ca. 140.000) uit het "Herkomst"-veld gehaald
- Voorlopig simpelweg op naam vergeleken met de Nederlandse (en enkele Deense) plaatsnamen uit Simon Hart, via de Histopo API
- De gevonden plaatsen zijn gemapped naar geonames
- Het gros; de buitenlandse plaatsnamen vallen daardoor buiten deze gemapte set
- Tevens is waar mogelijk de in histopo al aanwezige KloekeCode opgenomen


TODO:
- Naast het gemapte resultaat zijn 276 plaatsen gevonden, die meer dan 1 vermelding hebben in geonames. Daarvan kan nog gekeken worden of die "opgelost" zouden kunnen worden.
- naast de default mapping zou een fuzzy search ook nog wel het een en ander kunnen opleveren

Bewerker: phpetra@xs4all.nl

Datum: 19-01-2015 

Use: `node voc-opvarenden-histograph.js -f voc_opvarenden_v1.csv`
