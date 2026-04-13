# digicorder

Een interactieve webapplicatie waarmee gebruikers hun favoriete tv-zenders kunnen selecteren. Het project focust op een moderne gebruikerservaring met realtime feedback en een strikte limiet op het aantal selecties.

Over het project

Mijn Digicorder is een interface waar de gebruiker uit een lijst van populaire Vlaamse zenders (zoals VRT 1, VTM, Play, etc.) precies 3 favorieten moet kiezen. Pas wanneer er exact drie zenders zijn geselecteerd, kan de gebruiker de selectie opslaan.

Belangrijkste functionaliteiten:
Interactieve zenderlijst: Visuele feedback wanneer een zender wordt geselecteerd (highlighting).

Dynamische teller: Houdt live bij hoeveel zenders er zijn aangevinkt.

Selectielimiet: Zodra er 3 zenders zijn gekozen, worden de overige zenders uitgeschakeld om meerder selecties te voorkomen.

Live Preview: De namen van de gekozen zenders verschijnen direct in een "Jouw Favorieten" sectie.

Bevestigingsmodal: Een Bootstrap-modal die een gepersonaliseerde tekst toont na het opslaan (bijv. "Je koos voor VRT 1, VTM en Play").

Gebruikte Technieken
Het project is gebouwd met een moderne front-end stack:

HTML: Voor de structurele opbouw van de pagina.

SCSS: Gestyled met een custom design-systeem (BEM-methodologie). Gebruik van CSS-variabelen en :has() selectors voor geavanceerde styling.

JavaScript: "Vanilla" JavaScript voor de logica, DOM-manipulatie en event-handling.

Bootstrap 5: Voor het grid-systeem, spacing utilities en de modal-component.

Google Fonts: Gebruik van het 'Inter' font voor een cleane uitstraling.
