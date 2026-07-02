# Reklamasjoner

## Formål
Dette beslutningstreet brukes som mentorstøtte for nye ansatte. Det skal hjelpe medarbeideren å stoppe usikre saker før feil del, feil løfte eller feil diagnose gis.

```mermaid
flowchart TD
    A["Kunde melder feil del eller feil leveranse"] --> B["Sammenlign ordre, plukkliste og levert del"]
    B --> C{"Stemmer levert del med ordren?"}
    C -- "Nei" --> D["Korriger leveranse og registrer intern feil"]
    C -- "Ja" --> E{"Var ordren basert på korrekt motor-ID?"}
    E -- "Nei" --> F["Avklar manglende data og ansvar"]
    E -- "Ja" --> G["Kontroller supersession, montering og kundens bruk"]
    G --> H{"Produktfeil sannsynlig?"}
    H -- "Ja" --> I["Opprett reklamasjon mot leverandør/produsent"]
    H -- "Nei" --> J["Forklar funn og foreslå riktig løsning"]
```

## Produsentverifikasjon
Alle delnumre, garantikrav, intervaller og tekniske grenseverdier skal kontrolleres mot offisiell produsentdokumentasjon.
