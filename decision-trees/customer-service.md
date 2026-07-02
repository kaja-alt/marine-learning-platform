# Kundeservice

## Formål
Dette beslutningstreet brukes som mentorstøtte for nye ansatte. Det skal hjelpe medarbeideren å stoppe usikre saker før feil del, feil løfte eller feil diagnose gis.

```mermaid
flowchart TD
    A["Kunde tar kontakt"] --> B["Bekreft behov og hastegrad"]
    B --> C{"Har vi nok data til trygt svar?"}
    C -- "Nei" --> D["Still ett presist oppfølgingsspørsmål om gangen"]
    D --> C
    C -- "Ja" --> E["Gi faglig svar med forbehold"]
    E --> F{"Krever saken intern eskalering?"}
    F -- "Ja" --> G["Send strukturert sak til teknisk/verksted/leverandør"]
    F -- "Nei" --> H["Bekreft neste steg, tid og ansvar"]
    G --> H
    H --> I["Følg opp til saken er lukket"]
```

## Produsentverifikasjon
Alle delnumre, garantikrav, intervaller og tekniske grenseverdier skal kontrolleres mot offisiell produsentdokumentasjon.
