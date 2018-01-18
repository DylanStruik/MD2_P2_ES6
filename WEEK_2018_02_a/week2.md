
---
### Week 2.

Dit is het vervolg op de classes die je in week 1 gemaakt hebt.   
Je gaat nu alle eerder gemaakte classes testen. De order class is de regelaar van alle bestellingen, vanuit deze order class maak je bestellingen en test je of alle methods in de sandwich, coffee, cake en soup classes werken.

Je komt erachter dat je ook je voorraad moet bijhouden van alle producten die je verkoopt, het is namelijk noodzakelijk dat je op het moment van bestellen al weet of je het gevraagde kunt aanbieden.

Voor de koffie is het ook nog noodzakelijk de status van het koffieapparaat bij te houden, dit
in verband met onderhoud, doorspoelen van leidingen, bijvullen van ingredienten.

```
1. Vul de classes aan zodat bij een bestelling eerst de voorraad gecheckt wordt.
    
2. Maak een nieuwe class aan: 
   VoorraadController
   
3. Maak een JSON bestand aan voor de voorraad van diverse producten.

4. Maak een JSON bestand aan waarin wordt bijgehouden hoevaak het koffiezetapparaat
   gebruikt is vanaf het laatste onderhoud dat gepleegd is. 
   
```
   
## VOORRAAD
```
- Methods voor het opvragen van een bepaalde voorraad, bijv voor soup.
- Methods voor het teruggeven van de voorraad aan de Order class. 
- Methods voor het lezen van de voorraad uit de JSON.
- Methods voor het bijwerken van de voorraad.
```

## Opmerking
Lokale bestanden kunnen niet gewijzigd met JavaScript, dat geldt dus ook voor je voorraad JSON bestand. Hiervoor moet je het bestand op een server zetten en benaderen met bijv. PHP.

Je kunt het ook in je programma doen voor testen maar dan zijn na afsluiten van je browser al je bestel- en voorraadgegevens weer weg.
