# Identifisering av reservedeler

## Formål
Dette beslutningstreet brukes som mentorstøtte for nye ansatte. Det skal hjelpe medarbeideren å stoppe usikre saker før feil del, feil løfte eller feil diagnose gis.

```mermaid
flowchart TD
    A["Forespørsel om del mottatt"] --> B{"Motor-ID dokumentert?"}
    B -- "Nei" --> C["Be om typeplate/dataplate og applikasjon"]
    C --> B
    B -- "Ja" --> D{"Komponent og posisjon kjent?"}
    D -- "Nei" --> E["Be om oversiktsbilde, monteringssted og funksjon"]
    E --> D
    D -- "Ja" --> F["Slå opp i produsentens parts catalogue"]
    F --> G{"Supersession, kit eller variantvalg?"}
    G -- "Ja" --> H["Kontroller tilbehør, pakninger og monteringsnotat"]
    G -- "Nei" --> I["Kontroller antall, pris, lager og returvilkår"]
    H --> I
    I --> J["Send dokumentert delbekreftelse med forbehold"]
```

## Produsentverifikasjon
Alle delnumre, garantikrav, intervaller og tekniske grenseverdier skal kontrolleres mot offisiell produsentdokumentasjon.
