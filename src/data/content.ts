import {
  Clock3,
  Users,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  GraduationCap,
  Building2,
  Cpu,
  Vote,
} from "lucide-react";

// ... (LINKS, NAV_ITEMS, THEMES, PROOFS remain touched)

// We need to re-export or re-define TIMELINE to include icons.
// Since I can't easily merge imports in a partial replace without context, I'll update the imports and the TIMELINE array.
// I will use a larger block to ensure imports are present.


export const LINKS = {
  facebookGroup: "https://www.facebook.com/groups/1964335483871242",
  email: "seise@seise.org",
  phone: "+358415345404",
  linkedin: "https://www.linkedin.com/in/mattiseise/",
  youtube: "https://www.youtube.com/@MattiSeise",
  threads: "https://www.threads.com/@mattiseise",
};

export const NAV_ITEMS = [
  { href: "#etusivu", label: "Etusivu" },
  { href: "#teemat", label: "Teemat" },
  { href: "#facebook", label: "Yhteisö" },
  { href: "#nayttoa", label: "Näyttöä työstä" },
  { href: "#matka", label: "Tausta" },
  { href: "#faq", label: "FAQ" },
  { href: "#kysy", label: "Yhteys" },
];

export const THEMES = [
  {
    icon: ShieldCheck,
    title: "Vastuu ja anteeksipyynnön kulttuuri",
    kicker: "Minä sanon suoraan",
    problem:
      "Kun virheitä ei myönnetä, luottamus liittoon rapisee. Liitto ei ole täydellinen, mutta meidän on uskallettava myöntää virheemme ja ottaa oppia virheistämme.",
    solution:
      "Luodaan kulttuuri, jossa anteeksipyyntö ei ole heikkoutta, vaan keino palauttaa uskottavuus ja korjata virheet.",
    actions: [
      "Tehdään virheen myöntämisestä normaalia ja hyväksyttävää",
      "Varmistetaan, että anteeksipyyntö johtaa aina korjausliikkeisiin",
      "Vaaditaan rehelliset perustelut päätöksille ja virheille",
    ],
    meaning:
      "Sinua ei jätetä yksin selittelemään liiton virheitä. Luottamus palautuu, kun liitto kantaa vastuunsa.",
    quote: "”Heikkoa on virheen puolustelu. Vahvaa on korjaaminen.”",
  },
  {
    icon: Users,
    title: "Kentän ääni ja avoimuus",
    kicker: "Minä sanon suoraan",
    problem:
      "Suljettu valmistelu ja kabinettipäätökset etäännyttävät jäsenistöä. Emme voi toimia uskottavasti, jos emme kuuntele kenttää aidosti.",
    solution:
      "Kentän ääni on otettava todellisuustarkistukseksi, ei koristeeksi. Päätöksenteon on oltava avointa.",
    actions: [
      "Avataan päätöksenteko ymmärrettäväksi kaikille",
      "Tuodaan kentän kokemukset valmisteluun jo ennakoivasti",
      "Hyödynnetään 19 000 opettajan yhteisöä nopeana kanavana",
    ],
    meaning:
      "Päätökset osuvat paremmin siihen, mitä kouluissa oikeasti tapahtuu, kun arjen todellisuus on mukana.",
  },
  {
    icon: Sparkles,
    title: "Tekoäly ja tulevaisuuden työ",
    kicker: "Minä sanon suoraan",
    problem:
      "Monet opettajat kokevat tekoälyn uhkana, koska tukea, ohjeistusta ja osaamista ei ole riittävästi.",
    solution:
      "Tekoälystä tehdään opettajan työkalu, ei isäntää. Osaaminen ja selkeät pelisäännöt poistavat pelot.",
    actions: [
      "Tarjotaan käytännönläheistä koulutusta ja malleja",
      "Huolehditaan saavutettavuudesta ja erityisopetuksen tarpeista",
      "Viedään tekoälyosaaminen myös edunvalvonnan ytimeen",
    ],
    meaning:
      "Saat tukea muutokseen. Tekoäly helpottaa työtä, eikä jää vain huhujen ja pelkojen varaan.",
    timeline: [
      "2023: Voitto Teknologiateollisuus ry:n kilpailussa: ChatGPT:n hyödyntäminen opetuksessa.",
      "2023–2024: Jäsenenä Opetushallituksen pyöreässä pöydässä: tekoälyn linjaukset toisen asteen koulutuksessa.",
    ],
  },
  {
    icon: Building2,
    title: "Vähemmän portaita, enemmän toimintakykyä",
    kicker: "Minä sanon suoraan",
    problem:
      "Päätöksenteko ja vastuu jää välitasoille, jotka ovat jäsenille näkymättömiä ja epämääräisiä.",
    solution:
      "Yksinkertaistetaan rakennetta ja lisätään toimintakykyä. Valmistelu ei saa olla salailua.",
    actions: [
      "Tehdään valmistelusta näkyvää: kuka tekee ja miksi",
      "Avataan vaikuttaminen jo valmisteluvaiheessa",
      "Karsitaan turhia portaita ja byrokratiaa",
    ],
    meaning:
      "Liitto reagoi nopeammin. Näet, mitä on tulossa, ennen kuin päätökset on jo lyöty lukkoon.",
  },
];

export const PROOFS = [
  {
    icon: Users,
    title: "19 000 hengen yhteisö",
    text:
      "Facebook-ryhmä Opettajien edunvalvonta ja professio on kentän nopein tutka. Suurin osa tuntee minut tätä kautta — ja keskustelua seuraavat myös vaikuttajat ja media.",
  },
  {
    icon: ShieldCheck,
    title: "Kulttuurin muutos",
    text:
      "Olemme vieneet OAJ:ta kabinettityöskentelyorganisaatiosta kohti modernia neuvotteluorganisaatiota. Työtä on silti vielä tehtävänä, erityisesti ammatillisten puolella.",
  },
  {
    icon: ShieldCheck,
    title: "Vastuunotto käytäntöön",
    text:
      "Ajoin anteeksipyynnön merkitystä: kun mokataan, kädet ylös, anteeksi ja korjaus. Selittely ei palauta luottamusta.",
  },
  {
    icon: Clock3,
    title: "Vuosityöaika – esimerkkicase",
    text:
      "Vuosityöaikasopimus osoitti, mitä tapahtuu, kun kenttää ei kuunnella. Ansiotaso laski ja työmäärä kasvoi. Minulta se vei 9000 € vuodessa — uralla omakotitalon hinnan.",
  },
  {
    icon: Users,
    title: "Opiskelijajäsenet mukaan",
    text:
      "Ensimmäisellä kaudellani edistin opiskelijajäsenten mukaan ottamista valtuuston toimintaan. Avoimuus ei ole sana — se on tekoja.",
  },
  {
    icon: Building2,
    title: "Vähemmän portaita",
    text:
      "Sain nytkähtämään eteenpäin ponnen, joka edellyttää järjestön keventämistä ja päätöksenteon selkeyttämistä.",
  },
  {
    icon: Cpu,
    title: "Tekoälyosaaminen",
    text:
      "2023 Teknologiateollisuus ry:n kilpailuvoitto (ChatGPT opetuskäytössä) sekä OPH:n pyöreä pöytä tekoälyn käytöstä toisen asteen koulutuksessa (2023–2024).",
  },
];

export const TIMELINE = [
  { year: "2026", title: "Ehdolla OAJ:n valtuustoon", organization: "OAJ", text: "Tavoitteena reilu ja toimiva edunvalvonta.", icon: Vote },
  { year: "2023–2024", title: "Keskustelija: Tekoäly koulutuksessa", organization: "Opetushallitus", text: "Pyöreän pöydän keskustelut toisen asteen tekoälylinjauksista.", icon: Users },
  { year: "2023", title: "AI-kilpailuvoitto: ChatGPT opetuskäytössä", organization: "Teknologiateollisuus ry", text: "", icon: Cpu },
  { year: "2022–2026", title: "OAJ:n valtuuston jäsen", organization: "OAJ", text: "Uudenmaan vaalipiirin edustaja. Vaikuttamista sisältä päin.", icon: Vote },
  { year: "2019–", title: "Ammatillinen erityisopettaja", organization: "Helsinki Business College", text: "Tieto- ja viestintätekniikan opetus.", icon: Building2 },
  { year: "2018", title: "Ammatillisen erityisopettajan pätevyys", organization: "Haaga-Helia Ammattikorkeakoulu", text: "", icon: GraduationCap },
  { year: "2015–2019", title: "Tietotekniikka- ja erityisopettaja", organization: "Omnia", text: "Ammatillinen arki vahvistuu.", icon: Building2 },
  { year: "2013", title: "Opettajan pedagoginen pätevyys", organization: "Haaga-Helia Ammattikorkeakoulu", text: "", icon: GraduationCap },
  { year: "2011–2016", title: "Verkkotuotannon ja liiketalouden opettaja", organization: "Ammattiopisto Luovi", text: "Erityisen tuen arki tutuksi.", icon: Building2 },
  { year: "2010–2011", title: "Assistenttiopettaja", organization: "Helsingin yliopisto", text: "Ohjelmistotekniikan ja ohjelmoinnin kurssit.", icon: GraduationCap },
  { year: "2007–2010", title: "Ohjelmistokehittäjä, Scrum Master", organization: "Academica Oy", text: "Projektipäällikkö ja ketterän kehityksen asiantuntija.", icon: Building2 },
  { year: "2005–2011", title: "Tietojenkäsittelytiede (FM)", organization: "Helsingin yliopisto", text: "Opinnot ja opettajaksi kasvaminen.", icon: GraduationCap },
  { year: "2001–2007", title: "Opettajan sijaisuudet", organization: "Helsingin kaupunki", text: "Luokanopettajan ja aineenopettajan sijaisuuksia.", icon: Users },
];

export const FAQS = [
  {
    q: "Miksi “anteeksi” on sinulle tärkeä?",
    heading: "Anteeksipyyntö ei vie voimaa. Se palauttaa uskottavuuden.",
    body: "Virheiden tekeminen on inhimillistä, mutta niiden peittely syö luottamusta. Kun uskallamme myöntää virheemme avoimesti, voimme oppia niistä ja rakentaa kestävämpää toimintakulttuuria, jossa jokainen uskaltaa kantaa vastuunsa ilman pelkoa tai kasvojen menettämistä."
  },
  {
    q: "Eikö anteeksipyyntö tee liitosta heikon?",
    heading: "Ei. Heikkoa on virheen puolustelu. Vahvaa on korjaaminen.",
    body: "Todellinen johtajuus mitataan siinä, miten vaikeat tilanteet hoidetaan. Kun liitto pystyy myöntämään epäonnistumisen, se osoittaa selkärankaa ja kykyä uudistua. Jäsenistön luottamus ansaitaan rehellisyydellä ja avoimuudella, ei selittelyillä."
  },
  {
    q: "Miksi liitto toimii hitaasti?",
    heading: "Koska rakenne on liian monimutkainen ja valmistelu tapahtuu liian suljetusti.",
    body: "Päätöksenteko on nykyisellään liian moniportaista, jolloin asiat juuttuvat rattaisiin ja vastuu hämärtyy. Tarvitsemme suoraviivaisempaa toimintaa, jossa jäsenten ääni kuuluu nopeammin ja valmistelu on avointa alusta alkaen, jotta päätökset vastaavat aidosti kentän tarpeisiin."
  },
  {
    q: "Miksi AI kuuluu edunvalvontaan?",
    heading: "Koska se muuttaa työtä jo nyt — ja työnantajat hyödyntävät sitä jo.",
    body: "Tekoäly ei ole vain tulevaisuuden visio, vaan nykypäivän työkalu, joka muokkaa opettajan arkea ja toimenkuvaa. Meidän on oltava kehityksessä mukana määrittämässä pelisäännöt, jotta tekoälystä tulee opettajan renki eikä isäntä, ja jotta sen tuottavuushyödyt eivät koidu vain säästöiksi vaan myös työn keventämiseksi."
  },
  {
    q: "Miten äänestän?",
    heading: "Äänestysnumero on 13. OAJ toimittaa äänestysohjeet jäsenille.",
    body: "OAJ toimittaa tarkemmat äänestysohjeet kaikille äänioikeutetuille jäsenille vaalien aikana. Varmista, että yhteystietosi ovat ajan tasalla jäsenrekisterissä, ja käytä ääntäsi – se on suorin tapa vaikuttaa liiton tulevaan suuntaan."
  }
];
