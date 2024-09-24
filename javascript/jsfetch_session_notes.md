# API

Eine API ist eine Sammlung von Regeln, wie auf eine Datenbank zugegriffen werden kann

Unterschiedliche Apps, die auf die selbe Datenbank zugreifen, halten sich an die selbe, in der API-Doku definierten Regeln

## Browser APIs

### fetch

Beschreibt die Regeln, nach denen man Daten aus dem Browser abruft

der ganze JS code steht nur ein einzeler Prozessor Thread zur Verfügung, deshalb ist die Dauer eines `fetch()` relevant. Dafür gibt es und braucht es **asynchronen code**.

**JSON**:

- universelles Format, das alle Programmiersprachen kennen
- hilft Dateien, die in bestimmten Programmiersprachen geschrieben sind, Daten aus anderen Dateien (ggf) aus anderen Programmiersprachen zu übersetzen
- heißt, weil die Art wie man Objekte (und anderes) beschreibt, sehr wie man es in JS beschreibt
- in der Regel werden Daten via API im Format .JSON zurückgegeben bzw zur Verfügung gestellt

`fetch(ressource)`
in der Regel http-resourcen, also URI
http und https sind verschiedene Netzwerk-Protokolle

`fetch()` holt also Daten, die über API von Applicationen/Datenbanken zu Verfügung gestellt werden, und zwar in der Regel im Format json

#### asynch function

für fetch() brauche ich `asynch function`

darin müssen dann zwei methods angewendet werden:

mit `await fetch()` keyword wird die Ausführung der fn ans Ende gestellt, damit andere fns ausgeführt werden, die danach im script stehen und direkt ausgeführt werden können

mit `json()` wird aus dem fetch-response ein object in meiner app, damit meine app mit dem aus dem fetch() "übersetzten" object und den darin enthaltenen Daten weiter arbeiten kann

dann können meine anderen fn das so gewonenne Objekt nutzen, und zB zum rendern der Daten im Browser nutzen

Nach diesem Muster auswendig lernen:

### DOM

Schnittstelle zu den html elementen

die sprechen wir in der Regel mit `document.` an

xy.innerHTML = "" -> damit löschen wir erstmal raus, was wir in nem element als textContent erstmal nicht brauchen
