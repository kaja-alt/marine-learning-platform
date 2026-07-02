# Feilsøking

## Formål
Dette beslutningstreet brukes som mentorstøtte for nye ansatte. Det skal hjelpe medarbeideren å stoppe usikre saker før feil del, feil løfte eller feil diagnose gis.

```mermaid
flowchart TD
    A["Symptom mottatt"] --> B{"Kan videre drift gi skade?"}
    B -- "Ja" --> C["Anbefal stans og eskaler til teknisk ansvarlig"]
    B -- "Nei" --> D["Samle motor-ID, historikk, bilder og feilkoder"]
    C --> D
    D --> E{"Er symptomet knyttet til system?"}
    E -- "Nei" --> F["Still spørsmål om når feilen oppstår"]
    F --> E
    E -- "Ja" --> G["Kontroller grunnpunkter: væske, filter, luft, strøm, reim"]
    G --> H{"Peker kontrollen på konkret komponent?"}
    H -- "Nei" --> I["Anbefal videre måling/verkstedtest"]
    H -- "Ja" --> J["Verifiser del og reparasjon mot produsentdata"]
```

## Produsentverifikasjon
Alle delnumre, garantikrav, intervaller og tekniske grenseverdier skal kontrolleres mot offisiell produsentdokumentasjon.
