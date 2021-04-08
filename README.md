# MoonStonks (private-moonstonks)

Trade the best stonks to the moon! 🚀🌑

## Hinweise

### Dependencies installieren
```bash
yarn
```

### Applikation starten

Zeitgleich muss das Backend lokal laufen.

```bash
quasar dev
```
## Technologieentscheidung

Heutzutage entwickelt sich der Trend, dass Nutzer ungern Apps installieren und stattdessen eine Webseite nutzen, die ihre Wünsche erfüllt. Zusätzlich kann eine Web-App, im Vergleich zu einer nativen oder Cross-Plattform-App, ohne Probleme sowohl auf Desktop- und mobilen Endgeräten genutzt werden. Aufgrund dieser Tatsache, wird die App nach dem Mobile First Ansatz entwickelt. Der Mobile First Ansatz ist nach dem Glossar des französischen Web-Analytics Unternehmens AT Internet eine Herangehensweise, den Entwurf einer Webanwendung mit der mobilen Version zu starten und diese dann an größere Bildschirme anzupassen, um unter anderem die Benutzerfreundlichkeit von Beginn an zu verbessern. Dementsprechend wurde für die Entwicklung des Frontends auf folgende Technologien gesetzt:

### Vue.js

Vue.js ist einer der bekanntesten State-of-the-Art Lösungen für Web-Applikationen, die sichmit nachfolgenden Vorteilen für die MoonStonks-WebApp durchsetzen konnten. Zum einem ist Vue.js einfach und schnell lernbar, im Hintergrund befindet sich eine große Entwickler-Community mit ausgereiften Dokumentationen. Ein großer Vorteil sind zudem die zahlreichen Integrationsmöglichkeiten externer Komponenten.

### Quasar

Aufbauend zu Vue.js wurde auf Quasar CLI gesetzt. Quasar stellt ein Vue.js unterstützendes Frontend-Framework dar, das die Möglichkeit bietet, bspw. Single-Page-Anwendungenund Progressiv-Web-Applikationen auf einer Codebasis zu erstellen. Für den Einsatz von Quasar sprechen vor allem ein sehr effizient gestalteter Entwicklungsprozess, eine ausgereifte Dokumentation und die Vielzahl an vorgefertigten Custom-Controls, die im Vergleichzu Vue.js sofort einsetzbar sind.

Weitere Vorteile:
- Erweiterbarkeit
- Cross-Plattform

## Aufbau der WebApp

Die Trading-App für Privatkunden ist hauptsächlich in 5 Bereiche unterteilt:
- Übersicht
- Order-Bereich
- Transaktionen
- Rechnungen
- Profil-Bereich

## Features

Da die Web-App auf die Mehrsprachigkeita ausgelegt werden soll, ist es notwendig, mehrere Sprachen zu unterstützen. Im Ordner **i18n** befindet sich eine zentrale Datei, die **index.js** die dafür zuständig ist, die jeweiligen Sprachdateien zu laden. Die dementsprechenden Sprachdateien werden in einem Unterordern innerhalb **i18n** mit einer neuen Datei **index.js** angelegt. In dieser Datei werden alle relevanten Anzeigetexte angegeben. Durch das Erstellen einer solchen Datei kann unkompliziert eine weitere Sprache hinzugefügt werden, sobald die Texte händisch übersetzt worden sind. Im Code kann somit über **$t.kuerzel** auf den Anzeigetext zugegriffen werden. Dieser passt sich der ausgewählten Sprache an.

Zusätzlich wurde sowohl der Hell- als auch Dunkelmodus implementiert, um den Nutzer, nach seinen Präferzen, das best mögliche User Interface zu liefern.
