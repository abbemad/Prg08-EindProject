Algemeen:
Heeft een goede mappenstructuur en tot nu toe is het duidelijk waar alles staat.

Bij het opstarten van de game, in het begin verschijnt een tekst van een verhaal.
De tekst duurdt te lang waardoor je pas na het gehele verhaal pas de melding krijgt dat je op het "ship" moet drukken om de game te starten. De intro in een zwart lettertype is ook niet duidelijk leesbaar ik zal dit aanpassen in je CSS naar wit of een andere duidelijke kleur. 

De start button zou ik echter vervangen door een nieuwe button te maken die een Start knop weergeeft. 

In het begin van de game had ik niet echt het idee wat ik moest doen, dit kwam meer omdat ik in eerste instantie de score niet zag omdat deze heel klein was afgebeeld ook in zwarte letters, dit zou ik ook aanpassen.

Als je dood gaat doordat je één van de draken of bats raakt staat de try again knop rechtsbovenaan ik zou deze centreren in je game dit oogt een stuk beter en valt de button ook niet over je score heen. Vervolgens zou ik als je dood gaat ook de eindscore ergens weergeven want als ik nu dood ga zie ik niet hoe ver ik nou daadwerkelijk gekomen ben.

Als ik het spel speel met de buttons werkt dit echter goed alleen kan ik oneindig doorgaan als ik mijn ship helemaal naar boven zet buiten het kader dit kan zowel onder als boven. De draken en bats spawnen niet buiten het kader waardoor je dus niet geraakt word en niet dood gaat. 

Voicelines: 
Voicelines worden getoont in de console log misschien is het een leuk idee om ze te weergeven in de game zelf en niet alleen in de consolelog

startScreen:
Van de onRepeat functie een betere oplossing vinden. Dit zou opgelost kunnen worden met een for loop + array

Enums:
Aanwezig worden ook gebruikt werkt.

Singleton: Kan overal aangeroepen worden werkt ook.

Strategy: Behaviour files worden hiervoor gebruikt en toegepast

Encapsulation:
Er wordt met private, public en protected gewerkt

Composition:
Dit werkt is toegepast staat in document: 
EngineFire.ts

Inheritance:
GameObjects.ts klopt
enemies.ts klopt

Enumeraties:
Nog niet helemaal voltooid zoals je dit zelf ook al aangaf, is er wel mee bezig om het te verwerken in zijn project, als dit werkt is het spel ook uitdagender.

Polymorphisme:
Playscreen.ts, dragon en bat komen van enemies 
Dit werkt niks meer aan doen.

Library:
Word gebruikt het schip komt aanvliegen alleen de playknop ontbreekt of is onduidelijk omdat het schip eigenlijk de playknop is.

Observer:
Toegepast op player en dragon

De game bevat bijna alle requirements echter zitten er in dit spel nog teveel bugs om te spelen ook overlappen er veel dingen zoals de score en is het nog niet duidelijk genoeg om het spel te spelen, ook zijn er een aantal hele kleine aanpassingen die de game een stuk beter kunnen maken (zoals je zelf al noemde de moeilijkheidsgraad+enums). Ondanks dat alles in het spel zit wat erin moet zitten zou ik dit toch een onvoldoende moeten geven omdat het geheel niet goed werkt. Diagrams zijn ook duidelijk en sluiten aan op je code. 

Naast dat goed op weg! En ga zo door

___________________________________

Spelen:
Ontwijk de draken en bats
Probeer het einde te halen ;) (Er is geen einde)
Arrowkeys gebruik je om het vliegtuig te besturen
Alleen up en down werken

Interface: 
Meerdere interfacen gebruikt, voornamlijk behaviour

Static utility method:
Wanneer draaktje vliegtuig raakt ben je dood en is het gameOver geld ook voor de bat

Singleton:
Toegevoegd zodat je overal de game kan aanroepen, in mijn geval is het gebruikt om de game te laten beindigen

Strategy:
De behaviour files, flying en dead

Encapsulation:
Er wordt met private, public en protected gewerkt

Composition:
EngineFire.ts

Inheritance:
GameObjects.ts
enemies.ts

Enumeraties:
eunumeration.ts wordt gebruikt om de snelheid van de draakjes te controleren, zo kan je de moeilijkheid van de game aanpassen.
(Om de moeilijkheid van de game toe te passen moet je de difficulty aanpassen in dragon.ts) Het plan is om op het startscherm de mogelijkheid te geven om te kiezen, nu staat hij vast op easy.

Polymorphisme:
Playscreen.ts, dragon en bat komen van enemies

Library:
Er wordt gebruik gemaakt van een animation library die de game dus uitlegt en de playknop aan het begin laat verschuiven.

Observer:
Is aanwezig bij plane en dragon.


Link voor te spelen:
https://jaehaerystef.github.io/Prg08-EindProject/
