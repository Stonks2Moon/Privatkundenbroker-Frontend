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

## Struktur des Codes

Grundsätzlich kann die Struktur des Codes mehrere Bereiche untergliedert werden. Im Unterordner **boot** können andere Libraries importiert werden. Dafür wird jeweile eine neue Boot-Datei angelegt, wodruch im Code auf diese dann zugefriffen werden kann. Im Unterordner **Components** werden einzelne UI-Elemente programmiert, die entweder oftmals wiederverwendet werden, oder in sich abgekapselt sein sollten. Der Unterorder **Pages** enthält alle einzelnen Webpages, die wiederum Components werden können. Der Unterorder **Layout** beihnhaltet zwei verschieden Layouts: das Login- und Mainlayout. Somit werden die jeweiligen Pages dann in das passende Layout eingebettet. Geregelt wird dies und das Routing zwischen den Pages über die **index.js** und die **routes.js** im Unterordner **Router**. Interessant sind zusätzlich die Unterordern **Store** und **I18N**. Im **Store**-Unterordner kann eine Viezahl an Datenmodellen angelegt werden, die persistent Daten innerhalb der WebApp speichern und ändern können. So bietet sich darüber an, Nutzerdaten zu speichern und bspw. die aktuellen UI-Einstellungen wie die Sprache oder der Farbmodus. Auf die Funktionsweise der Unterstützung der Mehrsprachigkeit durch den Unterordner **I18N** wird nachfolgend genauer eingegangen. 

## Aufbau der WebApp

Die Trading-App für Privatkunden ist hauptsächlich in 5 Bereiche unterteilt:
- Übersicht
- Order-Bereich
- Transaktionen
- Rechnungen
- Profil-Bereich

### Übersicht

Auf der Übersichtsseite erhält der Nutzer Einblicke über seine aktuellen Depotwerte. Dabei wird ein PieChart von eCharts angezeigt, das im Verhältnis die Verteilung der eigenen Positionen darstellt. In der Auflistung der Depotwerte wird angezeigt, wie viele Anteile im Besitz sind, was der durchschnittliche Kaufwert ist und der aktuelle Kurs. Darüber hinaus wird der aktuelle Gesamtwert und das Gewinn/Verlust-Verhältnis dargestellt.

Zusätzlich wird dem Nutzer ein Einblick in sein Verrechnungskonto gewährt. Dabei werden seine IBAN, der aktuelle Kontostand und die neusten Transaktionen angezeigt. Ebenso kann eine Auszahlung an ein angegeben Bankkonto aufgegeben werden.

Zuletzt werden im untersten Bereich die aktuell offenen Order angezeigt. Dabei wird die Information geliefert, um welche Position es sich handelt, was der Ausführungstyp ist, wie viele gekauft oder verkauft werden und wann diese Order aufgegeben wurde. Außerdem ist es möglich, eine offene Order händisch zu entfernen.

### Order-Bereich

Im Order-Bereich erhält der Nutzer eine Übersicht über die aktuell beliebtesten Aktien. Ebenso kann eine spezielle Akite gesucht werden. Angezeigt wird dabei der Name der Aktie, die ID, wie auch der aktuelle Kurs und die Kursveränderung zum Vortag. Wählt der Nutzer eine Aktie aus, so landet er auf der Orderseite, auf der angezeigt wird, ob gerade der Handel aktiv ist. Ebenso werden erneut der aktuelle Kurs wie auch die Kursveränderung zum Vortag sowol prozentual als auch absolut. Darüber hinaus wird in einem Chart der Kursverlauf dargestellt, der im Zeitraum angepasst werden kann. Des Weiteren kann eine Kaufs- oder Verkaufsorder plaziert werden. Dabei wählt der Nutzer den Order-Typ (Limit, Market, Stop Market, Stop Limit) aus und gibt die notwendigen Order-Informationen an. Im Hintergrund wird gleichzeitig jede zehn Sekunden der aktuelle Kurs abgefragt und angepasst.

### Transaktionen

Im Transaktions-Bereich wird dem Nutzer eine Übersicht aller bisherigen Transaktionen geliefert. Darunter fallen alle Aktienkäufe, Verkäufe, Einzahlungen und Auszahlungen. Dabei wird farblich hinterlegt, ob es sich um eine Minderung des Kontostandes handelt oder einer Erhöherung. Ebenso werden Abbrüche von gelöschten offenen Order angezeigt. Der Nutzer erhält immer eine Übersicht über den Wert der Transaktion, das Ausführungsdatum, beim Aktienhandel die Anzahl und bei Geldeinzahlungen und -auszahlungen das jeweilige Bankkonto.

### Rechnungen

Des Weiteren werden dem Nutzer im Rechnungs-Bereich alle Rechnungen aufgelistet. Innerhalb der Rechnung werden die Kontaktdaten dargestellt, Informationen zum Kunden und dem Depot. Es folgt eine Auflistung der Positionen inklusive der Beschreibung und dem Wert. Mit Addition der Transaktionsgebühr ergibt sich der vollständige Rechnungspreis.

### Profil-Bereich

Der Nutzer kann die Sprache der WebApp anpassen, zur Zeit Deutsch und Englisch. Ebenso kann zwischen dem Hell- und Dunkelmodus gewechselt werden. In der Profil-Übersicht werden alle Kontaktdaten und die Kundennummer aufgelistet. Dabei kann nachträglich die Adresse aktualisiert und das Passwort geändert werden.

## Features

### Mehrsprachigkeit
Da die Web-App auf die Mehrsprachigkeit ausgelegt werden soll, ist es notwendig, mehrere Sprachen zu unterstützen. Im Ordner **i18n** befindet sich eine zentrale Datei, die **index.js** die dafür zuständig ist, die jeweiligen Sprachdateien zu laden. Die dementsprechenden Sprachdateien werden in einem Unterordern innerhalb **i18n** mit einer neuen Datei **index.js** angelegt. In dieser Datei werden alle relevanten Anzeigetexte angegeben. Durch das Erstellen einer solchen Datei kann unkompliziert eine weitere Sprache hinzugefügt werden, sobald die Texte händisch übersetzt worden sind. Im Code kann somit über **$t.kuerzel** auf den Anzeigetext zugegriffen werden. Dieser passt sich der ausgewählten Sprache an.

### User Experience

Zusätzlich wurde für die beste User Experience sowohl der Hell- als auch Dunkelmodus implementiert, um den Nutzer, nach seinen Präferzen, das best mögliche User Interface zu liefern. Darüber hinaus wird ein automatisierter Login angeboten, wenn sich der Nutzer nicht vorher abgemeldet hat.

### Diagramme

Um dem Nutzer möglichst klar dazustellen, wie sein aktuelles Depotverhältnis aufgestellt ist, oder wie der Aktienkurs einer Aktie in der Vergangenheit verlaufen ist, wurden zwei Chart-Typen eingebaut. Für das Depotverhältnis viel die Wahl auf ein PieChart, einem Kreisdiagramm, da somit einfach, intuitiv und sehr übersichtlich das Verhältnis der einzelnen Positionen dargestellt wird. Zusätzlich kann bei Auswahl einer Aktie der genau Depotwert angezeigt werden.
Für den Aktienkursverlauf wird eine dargestellt.
Beide Charts stammen aus der Librarie der ECHarts. Die Wahl dafür fiel vor allem aufgrund der robusten und flexiblen Charttypen. Ein großer Punkt ist die gute Performance bei immer größer Anzahl an anzuzeigenden Daten. Des Weiteren ist positiv, dass die Charts viele Konfigurationsmöglichkeiten bieten, die auch ausgereift dokumentiert sind.
