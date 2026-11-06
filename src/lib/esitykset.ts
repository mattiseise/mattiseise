/**
 * Esitykset ja videot: yksi lähde etusivun osiolle (components/Videos.tsx) ja /esitykset-sivulle.
 *
 * Videot ovat sarjakuvaesitysmoottorilla tehtyjä piirrettyjä videoita (puhe, tekstitys ja luvut),
 * julkaisu: scripts/julkaise-sarjakuva.py. Diaesitys: scripts/rakenna-esitys.py.
 * Kestot on pyöristetty minuuteiksi, jotta ne eivät vanhene pienistä repliikkimuutoksista.
 */

export type Video = {
  slug: string;
  href: string;
  minutes: number;
  chapters: number;
  /** Hahmot kortin kulmaan (public/hahmot/<id>.svg). */
  cast: readonly string[];
  color: string;
  fi: { title: string; tagline: string; blurb: string };
  en: { title: string; tagline: string; blurb: string };
};

export const VIDEOS: readonly Video[] = [
  {
    slug: "agenttiputki",
    href: "/esitykset/agenttiputki/",
    minutes: 8,
    chapters: 13,
    cast: ["sune", "rasmus", "linnea"],
    color: "#60a5fa",
    fi: {
      title: "Pedagoginen agenttiputki",
      tagline: "Miksi yksi tekoäly ei riitä?",
      blurb:
        "Näin oppimateriaali kulkee agenttiputken läpi. Sune suunnittelee, Rasmus rakentaa, kolme tarkastajaa testaa ja kaksi porttia päättää. Lopuksi opettaja hyväksyy.",
    },
    en: {
      title: "Pedagoginen agenttiputki",
      tagline: "The pedagogical agent pipeline",
      blurb:
        "How learning material moves through an AI agent pipeline: one agent plans, one builds, three reviewers test and two gates decide. The teacher approves at the end.",
    },
  },
  {
    slug: "opettajan-apurit",
    href: "/esitykset/opettajan-apurit/",
    minutes: 6,
    chapters: 7,
    cast: ["es-korostin", "sarakevalitsin", "muokkaaja"],
    color: "#fbbf24",
    fi: {
      title: "Opettajan apurit",
      tagline: "Pienet apurit Wilmaan ja itslearningiin",
      blurb:
        "Tekoälyn avulla tehdyt apurit, jotka helpottavat opettajan työtä Wilmassa ja itslearningissa. Lopuksi näytetään, miten sellaisen voi tehdä itse.",
    },
    en: {
      title: "Opettajan apurit",
      tagline: "Small helpers for Wilma and itslearning",
      blurb:
        "Small tools built with AI that make a teacher's work in Wilma and itslearning easier, and how you can build one yourself.",
    },
  },
  {
    slug: "esteiden-raivaajat",
    href: "/esitykset/esteiden-raivaajat/",
    minutes: 6,
    chapters: 5,
    cast: ["eriyttaja", "viikkopolku", "nayttoprojekti"],
    color: "#a3e635",
    fi: {
      title: "Esteiden raivaajat",
      tagline: "Erityinen tuki ilman tavoitteista tinkimistä",
      blurb:
        "Raivaajatiimi eriyttää tehtävänannot, kokoaa opiskelijan oman viikkoaikataulun ja rakentaa yksilöllisen näyttöprojektin. Tuki auttaa opiskelijaa pääsemään alkuun, pitämään työn käynnissä ja jakamaan sen sopiviin osiin.",
    },
    en: {
      title: "Esteiden raivaajat",
      tagline: "Clearing obstacles in special needs support",
      blurb:
        "A team of AI helpers that differentiates assignments, builds a student's own weekly schedule and an individual skills demonstration project, without lowering the goals.",
    },
  },
];

/** Diaesitys (staattinen, 19 diaa). */
export const SLIDES = {
  href: "/esitykset/tekoaly-tyossa-ja-arjessa/",
  slides: 19,
  fi: {
    title: "Näin käytän tekoälyä työssä ja arjessa",
    blurb:
      "Opettajan työkalut, agenttiputki, joka tekee kurssin, oma avustaja ja arjen automaatiot. Selattavissa myös puhelimella.",
  },
  en: {
    title: "How I use AI at work and at home",
    blurb:
      "Teacher tools, an agent pipeline that builds a course, my own assistant and everyday automations. Works on a phone too.",
  },
} as const;
