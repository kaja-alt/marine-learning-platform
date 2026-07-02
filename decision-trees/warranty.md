# Garanti

## Formål
Dette beslutningstreet brukes som mentorstøtte for nye ansatte. Det skal hjelpe medarbeideren å stoppe usikre saker før feil del, feil løfte eller feil diagnose gis.

```mermaid
flowchart TD
    A["Garantiforespørsel mottatt"] --> B{"Kjøpsdata og motor-ID finnes?"}
    B -- "Nei" --> C["Hent faktura, serienummer, driftstimer og servicehistorikk"]
    C --> B
    B -- "Ja" --> D{"Feil dokumentert med bilder/måling?"}
    D -- "Nei" --> E["Be om dokumentasjon før vurdering"]
    E --> D
    D -- "Ja" --> F["Kontroller garantivilkår og produsentkrav"]
    F --> G{"Innenfor vilkår?"}
    G -- "Nei" --> H["Forklar avslag eller alternativ løsning skriftlig"]
    G -- "Ja" --> I["Send sak til produsent/leverandør med komplett grunnlag"]
```

## Produsentverifikasjon
Alle delnumre, garantikrav, intervaller og tekniske grenseverdier skal kontrolleres mot offisiell produsentdokumentasjon.
