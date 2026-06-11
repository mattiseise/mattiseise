/**
 * FAQ-sisältö yhdestä paikasta: näkyvä FAQ-osio (Faq.tsx) ja
 * hakukoneiden FAQPage-rakennedata (JsonLd.tsx) lukevat samaa dataa,
 * jolloin ne eivät voi ajautua epäsynkkaan.
 */
export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Mitä tekoälykoulutus opettajille sisältää?",
    a: "Käytännönläheistä työpajatyöskentelyä: tehtävien suunnittelua, arviointia ja eriyttämistä tekoälyn aikakaudella. Saavutettavuus ja erityispedagogiikka mukana koko ajan. Sisältö räätälöidään koulutusasteen ja kohderyhmän mukaan.",
  },
  {
    q: "Mitä tekoälyagentti tekee organisaatiossa?",
    a: "Tekoälyagentti hoitaa toistuvia työnkulkuja, kirjoittaa luonnoksia, tarkistaa rutiinitehtäviä ja keskustelee muiden työkalujen kanssa rajapintojen kautta. Se eroaa chatbotista siinä, että se osaa käyttää työkaluja, päättää seuraavasta askeleesta ja palauttaa tulokset osaksi prosessia. Hyvin rakennettu agentti säästää tunteja viikossa eikä vain vastaa kysymyksiin.",
  },
  {
    q: "Miten tekoälyä voi käyttää arvioinnissa?",
    a: "Tekoäly soveltuu hyvin arvioinnin tukivälineeksi: nopea palaute oppilaalle, arviointikriteerien sanallistaminen, eriyttäminen ja saavutettavuuden parantaminen. Tärkeintä on suunnitella arviointi niin, että opettajalla säilyy ammatillinen päätösvalta ja tekoäly toimii laadun varmistajana, ei korvaajana. Bloomin taksonomia ja linjakas opetus (constructive alignment) toimivat suunnittelun runkona.",
  },
  {
    q: "Miten tietosuoja hoidetaan koulutuksissa ja automaatioissa?",
    a: "Työ tehdään tietosuojalähtöisesti: minimidatalla, tilaajan ympäristössä ja ilman opiskelijatietojen tarpeetonta siirtämistä ulkopuolisiin palveluihin. Automaatiot eivät tee pedagogisia päätöksiä eivätkä siirrä opiskelijadataa ulos tilaajan hyväksymästä ympäristöstä. Koulutusten harjoitukset suunnitellaan niin, ettei niissä tarvitse käsitellä henkilötietoja.",
  },
  {
    q: "Mikä on minimiveloitus ja matkakustannukset?",
    a: "Tuntiveloitus on 150 €/h + alv ja minimiveloitus on 2 tuntia. Matkakulut Helsingin ulkopuolelle veloitetaan erikseen Verohallinnon päivärahojen ja kilometrikorvausten mukaan. Toteutus joko paikan päällä tai etänä sopimuksen mukaan.",
  },
  {
    q: "Toimiiko etänä toteutettu koulutus?",
    a: "Kyllä — etäkoulutus toimii hyvin, kun ryhmä on enintään noin 20 osallistujaa ja sisältö on suunniteltu vuorovaikutteiseksi. Etätoteutus mahdollistaa käytännön harjoitukset osallistujien omilla työkaluilla ja säästää matkakulut.",
  },
  {
    q: "Miten varaan koulutuksen tai tarjouksen?",
    a: "Lähetä viesti osoitteeseen seise@seise.org tai LinkedInin kautta. Kerro lyhyesti kohderyhmä, tavoite ja toivottu aikataulu — vastaan yleensä saman tai seuraavan arkipäivän aikana ja toimitan tarjouksen sopimuksen mukaan.",
  },
];
