# Motoridentifisering

## Formål
Dette beslutningstreet brukes som mentorstøtte for nye ansatte. Det skal hjelpe medarbeideren å stoppe usikre saker før feil del, feil løfte eller feil diagnose gis.

```mermaid
flowchart TD
    A["Motor skal identifiseres"] --> B{"Typeplate/dataplate tilgjengelig?"}
    B -- "Nei" --> C["Bygg alternativ ID fra bilder, servicebok, faktura og komponentnummer"]
    B -- "Ja" --> D["Les hele nummeret med prefiks, suffiks og bokstaver"]
    C --> E{"Nok data til produsentoppslag?"}
    D --> E
    E -- "Nei" --> F["Marker usikkerhet og be om flere bilder/målinger"]
    F --> E
    E -- "Ja" --> G["Kontroller modell, variant, rating og applikasjon"]
    G --> H["Verifiser i produsentkilde før delvalg"]
```

## Produsentverifikasjon
Alle delnumre, garantikrav, intervaller og tekniske grenseverdier skal kontrolleres mot offisiell produsentdokumentasjon.
