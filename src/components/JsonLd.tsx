/**
 * Structured data (JSON-LD) for Google and AI search engines (GEO).
 * Renders Person + ProfessionalService + WebSite + FAQPage entities,
 * connected via sameAs to LinkedIn, YouTube and GitHub.
 */
export default function JsonLd() {
  const person = {
    "@type": "Person",
    "@id": "https://seise.org/#person",
    name: "Matti Seise",
    givenName: "Matti",
    familyName: "Seise",
    jobTitle: "ICT-erityisopettaja, tekoälykouluttaja ja AI-kehittäjä",
    description:
      "ICT-erityisopettaja ja AI-kehittäjä, joka rakentaa tuotantoon tekoälyagentteja, automaatioita ja pedagogisia työkaluja.",
    url: "https://seise.org",
    image: "https://seise.org/images/mattivaaka.jpg",
    email: "mailto:seise@seise.org",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Helsinki",
      addressCountry: "FI",
    },
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Helsinki Business College",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Haaga-Helia ammattikorkeakoulu",
      },
    ],
    hasCredential: [
      "Tietojenkäsittelytieteen maisteri (2011)",
      "Ammatillinen opettaja (Haaga-Helia, 2013)",
      "Ammatillinen erityisopettaja (Haaga-Helia, 2018)",
    ],
    knowsAbout: [
      "Generatiivinen tekoäly",
      "Multi-agent-järjestelmät",
      "RAG (Retrieval-Augmented Generation)",
      "Selainautomaatio (Playwright, Selenium)",
      "Pedagoginen suunnittelu",
      "Erityispedagogiikka",
      "Tekoäly opetuksessa",
      "Python",
      "TypeScript",
    ],
    sameAs: [
      "https://www.linkedin.com/in/mattiseise/",
      "https://github.com/mattiseise",
      "https://www.youtube.com/@MattiSeise",
    ],
  };

  const service = {
    "@type": "ProfessionalService",
    "@id": "https://seise.org/#service",
    name: "Tekoälykoulutukset ja AI-kehitys — Matti Seise",
    description:
      "Räätälöityjä tekoälykoulutuksia opettajille, asiantuntijoille ja organisaatioille sekä agentti- ja automaatiokehityksen toteutuksia.",
    provider: { "@id": "https://seise.org/#person" },
    url: "https://seise.org",
    areaServed: { "@type": "Country", name: "Suomi" },
    priceRange: "150 €/h + alv",
    serviceType: [
      "Tekoälykoulutus",
      "AI-konsultointi",
      "Agentti- ja automaatiototeutukset",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tekoälykoulutukset",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Tekoälykoulutus — tuntiveloitus",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 150,
            priceCurrency: "EUR",
            unitText: "tunti",
            valueAddedTaxIncluded: false,
          },
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 2,
            unitText: "tunti",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "AI-perusteet henkilöstölle",
            description:
              "Mitä generatiivinen tekoäly osaa, mitä ei, ja miten siitä saa konkreettisen hyödyn arkityöhön. Painopiste käsillä tekemisessä.",
            provider: { "@id": "https://seise.org/#person" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Tekoäly opetuksessa",
            description:
              "Tehtävien suunnittelu, arviointi ja eriyttäminen tekoälyn aikakaudella — saavutettavuus mukana koko ajan.",
            provider: { "@id": "https://seise.org/#person" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Agentit ja automaatio",
            description:
              "Multi-agent-arkkitehtuurit, työkalut ja RAG. Työpajan jälkeen mukaan lähtee suunnitelma ensimmäisestä omasta agentista.",
            provider: { "@id": "https://seise.org/#person" },
          },
        },
      ],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": "https://seise.org/#website",
    url: "https://seise.org",
    name: "Matti Seise — Tekoälykouluttaja & rakentaja",
    inLanguage: "fi-FI",
    publisher: { "@id": "https://seise.org/#person" },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": "https://seise.org/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "Mitä tekoälykoulutus opettajille sisältää?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Käytännönläheistä työpajatyöskentelyä: tehtävien suunnittelua, arviointia ja eriyttämistä tekoälyn aikakaudella. Saavutettavuus ja erityispedagogiikka mukana koko ajan. Sisältö räätälöidään koulutusasteen ja kohderyhmän mukaan.",
        },
      },
      {
        "@type": "Question",
        name: "Mitä AI-agentti tekee organisaatiossa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tekoälyagentti hoitaa toistuvia työnkulkuja, kirjoittaa luonnoksia, tarkistaa rutiinitehtäviä ja kommunikoi muiden työkalujen kanssa rajapintojen kautta. Se eroaa chatbotista siinä, että se voi käyttää työkaluja, päättää seuraavasta askeleesta ja palauttaa tulokset osaksi prosessia. Hyvin rakennettu agentti säästää tunteja viikossa, ei vain vastaa kysymyksiin.",
        },
      },
      {
        "@type": "Question",
        name: "Miten tekoälyä voi käyttää arvioinnissa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tekoäly soveltuu hyvin arvioinnin tukivälineeksi: nopea palaute oppilaalle, kriteerien sanallistus, eriyttäminen ja saavutettavuuden parantaminen. Tärkeintä on suunnitella arviointi siten, että opettaja säilyttää ammatillisen viimeisen sanan ja tekoäly toimii laadun varmistajana — ei korvaajana. Constructive alignment ja Bloomin taksonomia toimivat suunnittelun runkona.",
        },
      },
      {
        "@type": "Question",
        name: "Mikä on minimiveloitus ja matkakustannukset?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tuntiveloitus on 150 €/h + alv ja minimiveloitus on 2 tuntia. Matkakulut Helsingin ulkopuolelle veloitetaan erikseen Verohallinnon päivärahojen ja kilometrikorvausten mukaan. Toteutus joko paikan päällä tai etänä sopimuksen mukaan.",
        },
      },
      {
        "@type": "Question",
        name: "Toimiiko etänä toteutettu koulutus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kyllä — etäkoulutukset toimivat hyvin, kun ryhmä on enintään noin 20 osallistujaa ja sisältö on suunniteltu vuorovaikutteiseksi. Etätoteutus mahdollistaa hands-on-harjoitukset omilla työkaluilla ja säästää matkakulut.",
        },
      },
    ],
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [person, service, website, faq],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
