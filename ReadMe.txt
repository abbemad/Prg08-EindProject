Readme voor game

Instalatie:
1. Fork de game van github
2. copy de github link en plaats deze in de git bash
3. in gitbash clone github + (link van github)
4. Open de folder in visual studio code
5. Compile (shift control b)
6. Start je localhost programma en plaats de code daar om het te kunnen draaien


Spelen:
Ontwijk de draken
Probeer het einde te halen ;) (Er is geen einde)
Arrowkeys gebruik je om het vliegtuig te besturen
Alleen up en down werken

Interface: 
Meerdere interfacen gebruikt, voornamlijk behaviour

Static utility method:
Wanneer draaktje vliegtuig raakt ben je dood en is het gameOver

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

Enumeraties:
eunumeration.ts wordt gebruikt om de snelheid van de draakjes te controleren, zo kan je de moeilijkheid van de game aanpassen.
(Om de moeilijkheid van de game toe te passen moet je de difficulty aanpassen in dragon.ts) Het plan is om op het startscherm de mogelijkheid te geven om te kiezen, nu staat hij vast op easy.

Polymorphisme:
In de playscreen is te zien dat de objecten dragon worden aangemaakt door middel van een array.

Library:
Er wordt gebruik gemaakt van een animation library die de game dus uitlegt en de playknop aan het begin laat verschuiven.

Observer:
Is aanwezig bij plane en dragon.


Link voor te spelen:
https://jaehaerystef.github.io/Prg08-EindProject/
