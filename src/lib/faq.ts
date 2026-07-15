import type { Locale } from "@/lib/blog";

/**
 * FAQ-sisältö yhdestä paikasta: näkyvä FAQ-osio (Faq.tsx) ja
 * hakukoneiden FAQPage-rakennedata (JsonLd.tsx) lukevat samaa dataa,
 * jolloin ne eivät voi ajautua epäsynkkaan.
 */
export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Mitä tekoälykoulutus opettajille sisältää?",
    a: "Käytännön työpajaa: tehtävien suunnittelua, arviointia, eriyttämistä ja tekoälyn järkevää käyttöä arjen työssä. Saavutettavuus ja erityispedagogiikka eivät ole lisäkalvo, vaan osa tekemistä. Sisältö sovitetaan koulutusasteeseen ja kohderyhmään.",
  },
  {
    q: "Mitä tekoälyagentti tekee organisaatiossa?",
    a: "Agentti hoitaa rajattuja työnkulkuja: hakee tietoa, käyttää työkaluja, tarkistaa rutiineja ja palauttaa tuloksen prosessiin. Hyvä agentti ei ole taikuri. Se on tylsä, lokitettu ja hyödyllinen työkalu, joka säästää aikaa juuri siksi, että sen tehtävä on rajattu.",
  },
  {
    q: "Miten tekoälyä voi käyttää arvioinnissa?",
    a: "Tekoäly soveltuu hyvin arvioinnin tueksi: nopea palaute opiskelijalle, arviointikriteerien sanallistaminen, eriyttäminen ja saavutettavuuden parantaminen. Tärkeintä on suunnitella arviointi niin, että opettajalla säilyy ammatillinen päätösvalta ja tekoäly toimii laadun varmistajana, ei korvaajana. Bloomin taksonomia ja linjakas opetus toimivat suunnittelun runkona.",
  },
  {
    q: "Miten tietosuoja hoidetaan koulutuksissa ja automaatioissa?",
    a: "Työ tehdään tietosuojalähtöisesti: minimidatalla, tilaajan ympäristössä ja ilman opiskelijatietojen tarpeetonta siirtämistä ulkopuolisiin palveluihin. Automaatiot eivät tee pedagogisia päätöksiä eivätkä siirrä opiskelijadataa ulos tilaajan hyväksymästä ympäristöstä. Koulutusten harjoitukset suunnitellaan niin, ettei niissä tarvitse käsitellä henkilötietoja.",
  },
  {
    q: "Mikä on minimiveloitus ja miten matkakulut lasketaan?",
    a: "Tuntiveloitus on 150 €/h + alv, ja minimiveloitus on 2 tuntia. Matkakulut Helsingin ulkopuolelle veloitetaan erikseen Verohallinnon päivärahojen ja kilometrikorvausten mukaan. Toteutus paikan päällä tai etänä sopimuksen mukaan.",
  },
  {
    q: "Toimiiko etänä toteutettu koulutus?",
    a: "Kyllä — etäkoulutus toimii hyvin, kun ryhmässä on enintään noin 20 osallistujaa ja sisältö on suunniteltu vuorovaikutteiseksi. Etätoteutus mahdollistaa harjoitukset osallistujien omilla työkaluilla ja säästää matkakulut.",
  },
  {
    q: "Miten varaan koulutuksen tai pyydän tarjouksen?",
    a: "Lähetä viesti osoitteeseen seise@seise.org tai LinkedInin kautta. Kerro lyhyesti kohderyhmä, tavoite ja toivottu aikataulu — vastaan yleensä saman tai seuraavan arkipäivän aikana.",
  },
];

export const faqItemsEn: FaqItem[] = [
  {
    q: "What does AI training for teachers include?",
    a: "Hands-on workshop work: designing assignments, assessment and differentiation in the age of AI. Accessibility and special education are present throughout. Content is tailored to the education level and audience.",
  },
  {
    q: "What does an AI agent do in an organization?",
    a: "An AI agent handles recurring workflows, drafts documents, checks routine tasks and talks to other tools via APIs. It differs from a chatbot in that it can use tools, decide the next step and return results into the process. A well-built agent saves hours every week instead of just answering questions.",
  },
  {
    q: "How can AI be used in assessment?",
    a: "AI works well as an assessment aid: fast feedback for students, verbalizing criteria, differentiation and improving accessibility. The key is designing assessment so the teacher keeps professional authority and AI acts as a quality check, not a replacement. Bloom's taxonomy and constructive alignment provide the framework.",
  },
  {
    q: "How is privacy handled in trainings and automations?",
    a: "All work is privacy-first: minimal data, in your environment, and without unnecessary transfer of student data to external services. Automations don't make pedagogical decisions and don't move student data outside approved environments. Training exercises are designed so no personal data is needed.",
  },
  {
    q: "What is the minimum billing and how are travel costs handled?",
    a: "The hourly rate is €150/h + VAT with a 2-hour minimum. Travel outside Helsinki is billed separately according to Finnish Tax Administration per diems and mileage. Delivery on-site or remote by agreement.",
  },
  {
    q: "Does remote training work?",
    a: "Yes — remote training works well with groups of up to about 20 participants and interactive content. It enables hands-on exercises with participants' own tools and saves travel costs.",
  },
  {
    q: "How do I book a training or request a quote?",
    a: "Send a message to seise@seise.org or via LinkedIn. Briefly describe the audience, goal and preferred schedule — I usually reply within one business day.",
  },
];

export function getFaqItems(locale: Locale): FaqItem[] {
  return locale === "en" ? faqItemsEn : faqItems;
}
