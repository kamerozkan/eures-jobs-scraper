# EURES Jobs Scraper - European Job Portal, EU-wide

Scrape EURES, the official European job portal: job ads from the EU, Norway, Iceland, Liechtenstein and Switzerland by keyword, country and posting date. Employer, city, contract, schedule, apply URL, full description, ESCO occupation. No login. Pay per job.

**[Run it on Apify Store](https://apify.com/kamerozkan/eures-jobs-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/eures-jobs-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/eures-jobs-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/eures-jobs-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "keywords": [
    "software developer"
  ],
  "countries": [
    "ie",
    "nl"
  ],
  "postedWithin": "week",
  "maxResultsPerSearch": 50
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "id": "MTczNjYxMDQgNDM",
    "title": "Mitarbeiter_in Software-Entwicklung / Junior Software Developer",
    "employerName": "siehe Beschreibung",
    "country": "AT",
    "countries": [
      "AT"
    ],
    "regionCodes": [
      "AT130"
    ],
    "city": null,
    "address": null,
    "postalCode": null,
    "postedAt": "2026-09-25T19:45:01Z",
    "updatedAt": "2026-10-15T19:45:19Z",
    "contractType": "contracttohire",
    "schedule": [
      "parttime"
    ],
    "numberOfPosts": 1,
    "language": "de",
    "euresFlag": true,
    "escoOccupationUris": [
      "http://data.europa.eu/esco/occupation/f2b15a0e-e65a-438a-affb-29b9d50b77d1"
    ],
    "description": "Zeta Gastro e.U. ist ein Wiener Software- und Dienstleistungsunternehmen mit Fokus auf die Gastronomie. Mit der ZETA Plattform entwickeln wir digitale Lösungen für Gastronomiebetriebe, unter anderem für Personal, Finanzen, Küche, Reservierungen, Organisation und Marketing. Wir suchen ab sofort: 1 Mitarbeiter_in Software-Entwicklung / Junior Software Developer \nArbeitsstunden\n20 Stunden pro Woche\n\nArbeitszeit\nFlexible Arbeitszeiteinteilung unter der Woche\n\nAufgaben\nWeiterentwicklung und technische Umsetzung der ZETA Plattform; Frontend- und Backend-Entwicklung; Anbindung und Integration externer Plattformen und APIs; Fehleranalyse und Debugging; Testing neuer Funktionen; Lesen und Umsetzen technischer Dokumentationen; Erstellung und Pflege technischer Dokumentationen.\n\nAnforderungen / Qualifikationen\nGrundkenntnisse bzw. erste praktische Erfahrung in der Softwareentwicklung; technisches Verständnis; selbstständige und strukturierte Arbeitsweise; Interesse daran, neue Technologien und Systeme kennenzulernen; Problemlösungskompetenz; Deutsch- und/oder Englischkenntnisse (min A2-Kenntnisse) für die technische Kommunikation. Kein Führerschein erforderlich.\n\n*** Bewerber_innen ab 50+ sind herzlich Willkommen! ***\n\nGehalt\nLaut anwendbarem Kollektivvertrag und Einstufung auf Basis Vollzeit; tatsächliche Entlohnung entsprechend 20 Wochenstunden.\n\nArbeitsort / Zeit\nMaria-Trapp-Platz 1, 1220 Wien; flexible Arbeitszeiten unter der Woche / Remote Work möglich\n\nAnsprechperson\nNicolas Bergero\nBewerbungs-E-Mail:\ncontact@example.com Das Mindestentgelt für die Stelle als Mitarbeiter_in Software-Entwicklung / Junior Software Developer beträgt 2.420,00 EUR brutto pro Monat auf Basis Vollzeitbeschäftigung.",
    "url": "https://europa.eu/eures/portal/jv-se/jv-details/MTczNjYxMDQgNDM?lang=en",
    "employerWebsite": null,
    "employerSize": "microenterprise",
    "employerSectorCodes": [
      "n73.1.1"
    ],
    "startDate": "2026-09-25T00:00:00Z",
    "immediateStart": true,
    "contractNote": null,
    "applyUrl": null,
    "applyByEmail": false,
    "salaryMin": null,
    "salaryMax": null,
    "salaryCurrency": null,
    "salaryPeriod": null,
    "applicationDeadline": null,
    "requiredYearsOfExperience": null,
    "requiredLanguages": [],
    "escoSkillUris":
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/eures-jobs-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
