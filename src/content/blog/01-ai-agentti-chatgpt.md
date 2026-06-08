---
title: "Miksi rakensin oman AI-agentin enkä vain käyttänyt ChatGPT:tä?"
slug: "ai-agentti-chatgpt"
part: 1
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "Agentti vs. chatbot: miksi taustalla toimiva tekoälytyöntekijä voittaa promptattavan chatin arjen rutiineissa — erityisopettajan kokemus."
keyword: "AI-agentti"
date: "2026-06-09T00:00:00+03:00"
cover: "/images/blog/01-aamubriiffi.jpg"
coverAlt: "Puhelin yöpöydällä näyttää Telegramin aamubriiffin kello 6.30 talvisena aamuna."
nosto: "En tarvinnut uutta chattia. Tarvitsin järjestelmän, joka herää ennen minua, tietää mitä pitää tarkistaa ja pysyy hiljaa, kun kaikki on kunnossa. Tässä sarjassa kerron, miten rakensin sellaisen — ja mitä opin niistä virheistä, jotka olisi ollut hyvä tehdä halvemmalla. Osa 1 käsittelee tärkeintä eroa: mikä erottaa agentin chatbotista? 👇"
---

Olen ammatillinen erityisopettaja ja opetan tieto- ja viestintätekniikkaa. Työpäiväni koostuu monista pienistä rutiineista: Wilmasta, itslearningista, opiskelijatapaamisista, Notion-listoista, taloyhtiön sähköposteista ja OAJ-asioista.

Yksittäin nämä asiat eivät ole vaikeita. Ongelma syntyy siitä, että ne vievät aikaa vähän kerrallaan. Tunti katoaa sinne, toinen tänne. Illalla huomaan, että suuri osa päivästä on kulunut tiedon siirtämiseen paikasta toiseen.

Kun aloin käyttää **tekoälyä** näiden rutiinien helpottamiseen, huomasin nopeasti yhden rajoituksen: **chatbot** ei välttämättä vähennä työtä. Se voi vain siirtää työn uuteen paikkaan.

Työkalu oli parempi, mutta minun piti edelleen avata se, muotoilla pyyntö ja käynnistää tehtävä itse. Halusin jotain muuta. Halusin, ettei jokainen työvaihe alkaisi minusta.

Tässä sarjassa kerron, miten rakensin oman **tekoälyagentin** tätä varten. Kerron myös kahdeksasta virheestä, jotka opettivat enemmän kuin yksikään onnistunut demo. Aloitetaan perusasiasta: mitä eroa on chatilla ja agentilla?

## Chatti odottaa, agentti toimii

**Chatbot** on reaktiivinen. Se odottaa, että avaat sen ja kerrot, mitä tarvitset. Se voi olla erittäin hyödyllinen apuri, mutta sitä pitää käskeä joka kerta erikseen.

**Agentti** toimii toisin. Se voi seurata sovittuja asioita taustalla ja käynnistyä, kun jokin ennalta määritelty tapahtuma toteutuu. Se voi reagoida esimerkiksi kalenterimerkintään, saapuvaan sähköpostiin tai tiettyyn kellonaikaan.

Ero ei välttämättä ole tekoälyn älykkyydessä. Sama kielimalli voi olla sekä chatbotin että agentin taustalla. Olennaisin ero on siinä, **kuka aloittaa työn**.

Käytännössä ero näkyy kolmessa asiassa:

- **Konteksti on valmiina.** Agentti tietää jo, kuka olet, mitä teet ja mikä on sinulle tärkeää. Samaa taustaa ei tarvitse selittää uudelleen joka aamu.
- **Tehtävän käynnistää tapahtuma.** Agentti voi herätä kalenterimerkinnästä, sähköpostista tai kellonajasta. Sen toiminta ei riipu siitä, muistatko avata sovelluksen.
- **Lopputulos tulee oikeaan paikkaan.** Sinun ei tarvitse etsiä tietoa eri lähteistä. Agentti tuo olennaisen tiedon sovittuun kanavaan silloin, kun sitä tarvitaan.

## Aamubriiffi: yksi viesti riittää

Selkein esimerkki omasta agentistani on **aamubriiffi**. Annoin agentilleni nimeksi Claus. Joka aamu Claus lähettää minulle yhden tiiviin Telegram-viestin.

Viestissä on vain asiat, joihin minun pitää reagoida:

- päivän kalenteripoikkeamat,
- myöhässä olevat tehtävät,
- sähköpostit, joista seuraa uusi tehtävä.

Viestissä ei ole yleistä tilanneraporttia, varmuuden vuoksi lisättyä säätä eikä listaa kiinnostavista uutisista. Sen tarkoitus ei ole näyttää kaikkea mahdollista. Sen tarkoitus on kertoa, mikä vaatii huomiota tänään.

Claus esiintyy pienenä rapuhahmona. Kun se aloittaa työnsä, viestin ensimmäinen rivi on usein: "Rapu on töissä…". Aamutervehdys kuuluu: "Moi Matti 🦀". Yksityiskohta on pieni, mutta se tekee taustalla toimivasta järjestelmästä helpommin lähestyttävän.

Aamubriiffin tärkein ominaisuus ei ole se, mitä viestissä on. Tärkeintä on se, mitä siitä on jätetty pois.

Sää mainitaan vain, jos se vaikuttaa päivän päätöksiin, kuten esimerkiksi siihen, voidaanko työmatka suorittaa auton sijaan pyörällä. Sähköposti mainitaan vain, jos siitä seuraa tehtävä. Järjestelmän tila kerrotaan vain, jos jokin on rikki. Hyvä agenttiviesti ei ole mahdollisimman kattava. Se näyttää vain sen, mikä on juuri sillä hetkellä olennaista.

Illalla kello 20 Claus lähettää toisen viestin. Siinä ovat illan poikkeamat ja huomisen varaukset. Aamulla tarvitsen tietoa tästä päivästä, illalla huomisesta. Sama tieto voi olla arvokasta eri tavalla eri aikaan.

Käytännössä saan kaksi lyhyttä viestiä päivässä. Yhteensä niissä on vain muutama rivi tekstiä. Se riittää.

## Hiljaisuus on ominaisuus

Tein agentilleni heti alussa yhden tärkeän säännön: se ei lähetä tyhjää statusviestiä.

Se ei siis lähetä tällaisia ilmoituksia:

- "Ei mitään uutta tänään."
- "Tarkistin sähköpostisi, kaikki kunnossa."
- "Kaikki näyttää normaalilta."

Jos kerrottavaa ei ole, agentti on hiljaa.

Sääntö kuulostaa yksinkertaiselta, mutta siitä tuli yllättävän tärkeä. Monet digitaaliset avustajat kuittaavat, vahvistavat ja raportoivat jatkuvasti. Se voi näyttää hyödylliseltä, mutta käytännössä se lisää ilmoitusten määrää.

Halusin agentin, joka vähentää hälyä eikä tuota sitä lisää. Siksi viestin arvo perustuu myös siihen, että se tulee vain tarpeeseen. Kun Claus lähettää ilmoituksen, tiedän, että asia kannattaa tarkistaa.

## Mistä oman agentin rakentaminen kannattaa aloittaa?

Jos harkitset oman agentin rakentamista, älä aloita liian suuresta kokonaisuudesta. Älä yritä rakentaa heti assistenttia, joka hoitaa kaiken. Valitse ensin yksi selkeä ja toistuva ongelma.

1. **Valitse yksi kipupiste.** Etsi rutiini, joka toistuu usein ja vie turhaan aikaa. Minulla se oli aamun tilannekuvan kokoaminen.
2. **Päätä, mikä käynnistää agentin.** Käynnistyykö se kellonajasta, kalenterimerkinnästä, sähköpostista vai jostakin muusta tapahtumasta?
3. **Päätä, minne agentti viestii.** Tuleeko viesti Telegramiin, sähköpostiin, Notioniin vai johonkin muuhun kanavaan?
4. **Määrittele, milloin agentti on hiljaa.** Tämä on yhtä tärkeää kuin se, milloin agentti toimii. Ilman tätä sääntöä rakennat helposti vain uuden ilmoituskanavan.

## Yhteenveto

**Chatbot** on työkalu, jonka sinä käynnistät. **Agentti** on työpari, joka voi käynnistyä itse sovituissa tilanteissa.

Agentin arvo ei synny vain siitä, että se osaa vastata kysymyksiin. Arvo syntyy siitä, että se tuntee tilanteen, toimii oikeaan aikaan ja tuo olennaisen tiedon oikeaan paikkaan. Yhtä tärkeää on, että se osaa olla hiljaa silloin, kun mitään olennaista ei ole tapahtunut.

En tarvinnut parempaa chattia. Tarvitsin järjestelmän, joka herää ennen minua.

Seuraavassa osassa kerron, miten ensimmäinen yritykseni rakentaa tällainen agentti kasvoi 30 taustapalveluksi ja kolmeksi rinnakkaiseksi tehtävälistaksi — ja miksi se oli virhe.

---

**Rakennatko omaa agenttia?** Autan suunnittelusta tuotantoon — kevyestä koulutusjohdannosta kokonaiseen agenttisprinttiin: [seise.org/#koulutukset](https://seise.org/#koulutukset). Ja jos haluat seurata sarjaa, [verkostoidutaan LinkedInissä](https://www.linkedin.com/in/mattiseise/).
