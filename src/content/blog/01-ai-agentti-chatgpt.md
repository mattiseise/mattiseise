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

Olen ammatillinen erityisopettaja ja opetan tieto- ja viestintätekniikkaa. Työpäiväni koostuu pienistä rutiineista: Wilmasta, itslearningista, opiskelijatapaamisista, Notion-listoista, taloyhtiön sähköposteista ja OAJ-asioista.

Yksittäin mikään näistä ei ole vaikea. Se on vähän ongelman juoni. Ne vievät aikaa niin pieninä siivuina, ettei sitä huomaa ennen kuin iltapäivällä ihmettelee, mihin työpäivä meni. Vastaus on yleensä: tiedon siirtämiseen paikasta toiseen. Ihmiskunnan huippuhetkiä.

Kun aloin käyttää **tekoälyä** näiden rutiinien helpottamiseen, yksi raja tuli nopeasti vastaan: **chatbot** ei automaattisesti vähennä työtä. Joskus se vain siirtää työn uuteen laatikkoon, jonka nimi on nyt prompti.

Työkalu oli parempi, mutta minun piti edelleen avata se, muotoilla pyyntö ja käynnistää tehtävä itse. Halusin, ettei jokainen työvaihe ala sillä, että minä muistan olla tehokas.

Tässä sarjassa kerron, miten rakensin oman **tekoälyagentin** tätä varten. Kerron myös kahdeksasta virheestä, jotka opettivat enemmän kuin yksikään onnistunut demo. Aloitetaan perusasiasta: mitä eroa on chatilla ja agentilla?

## Chatti odottaa, agentti toimii

**Chatbot** on reaktiivinen. Se odottaa, että avaat sen ja kerrot, mitä tarvitset. Se voi olla erittäin hyödyllinen apuri, mutta sitä pitää käskeä joka kerta erikseen.

**Agentti** toimii toisin. Se voi seurata sovittuja asioita taustalla ja käynnistyä, kun jokin ennalta määritelty tapahtuma toteutuu. Se voi reagoida esimerkiksi kalenterimerkintään, saapuvaan sähköpostiin tai tiettyyn kellonaikaan.

Ero ei ole välttämättä kielimallissa. Sama malli voi olla sekä chatbotin että agentin taustalla. Käytännön ero on arkisempi: **kuka aloittaa työn**.

Minulle ero näkyy kolmessa kohdassa:

- **Konteksti on valmiina.** Agentti tietää jo, kuka olet, mitä teet ja mikä on sinulle tärkeää. Samaa taustaa ei tarvitse selittää uudelleen joka aamu.
- **Tehtävän käynnistää tapahtuma.** Agentti voi herätä kalenterimerkinnästä, sähköpostista tai kellonajasta. Sen toiminta ei riipu siitä, muistatko avata sovelluksen.
- **Lopputulos tulee oikeaan paikkaan.** Sinun ei tarvitse kiertää lähteestä toiseen. Agentti tuo olennaisen tiedon sovittuun kanavaan silloin, kun sitä tarvitaan.

## Aamubriiffi: yksi viesti riittää

Selkein esimerkki omasta agentistani on **aamubriiffi**. Annoin agentilleni nimeksi Claus. Joka aamu Claus lähettää minulle yhden tiiviin Telegram-viestin.

Viestissä on vain asiat, joihin minun pitää reagoida:

- päivän kalenteripoikkeamat,
- myöhässä olevat tehtävät,
- sähköpostit, joista seuraa uusi tehtävä.

Viestissä ei ole yleistä tilanneraporttia, varmuuden vuoksi lisättyä säätä eikä listaa kiinnostavista uutisista. Sen ei tarvitse todistaa olevansa töissä. Sen pitää kertoa, mikä vaatii huomiota tänään.

Claus esiintyy pienenä rapuhahmona. Kun se aloittaa työnsä, viestin ensimmäinen rivi on usein: "Rapu on töissä…". Aamutervehdys kuuluu: "Moi Matti 🦀". Yksityiskohta on pieni, mutta taustalla pyörivä järjestelmä tuntuu vähemmän kylmältä, kun sillä on edes vähän persoonallisuutta. Tämä on tosin myös tapa antaa cron-jobille rapu. Kaikilla on harrastuksensa.

Aamubriiffin paras ominaisuus ei ole se, mitä viestissä on. Paras ominaisuus on se, mitä siitä on jätetty pois.

Sää mainitaan vain, jos se vaikuttaa päivän päätöksiin, kuten siihen, voiko työmatkan tehdä auton sijaan pyörällä. Sähköposti mainitaan vain, jos siitä seuraa tehtävä. Järjestelmän tila kerrotaan vain, jos jokin on rikki. Hyvä agenttiviesti ei ole mahdollisimman kattava. Se näyttää vain sen, mikä on juuri sillä hetkellä olennaista.

Illalla kello 20 Claus lähettää toisen viestin. Siinä ovat illan poikkeamat ja huomisen varaukset. Aamulla tarvitsen tietoa tästä päivästä, illalla huomisesta. Sama tieto on eri aikaan eri tavalla hyödyllistä.

Käytännössä saan kaksi lyhyttä viestiä päivässä. Yhteensä niissä on vain muutama rivi tekstiä. Se riittää.

## Hiljaisuus on ominaisuus

Tein agentilleni heti alussa yhden tärkeän säännön: se ei lähetä tyhjää statusviestiä.

Se ei siis lähetä tällaisia ilmoituksia:

- "Ei mitään uutta tänään."
- "Tarkistin sähköpostisi, kaikki kunnossa."
- "Kaikki näyttää normaalilta."

Jos kerrottavaa ei ole, agentti on hiljaa.

Sääntö kuulostaa pieneltä, mutta siitä tuli yllättävän tärkeä. Monet digitaaliset avustajat kuittaavat, vahvistavat ja raportoivat jatkuvasti. Se näyttää hyödylliseltä, kunnes huomaa rakentaneensa uuden ilmoituskanavan vanhojen päälle.

Halusin agentin, joka vähentää hälyä eikä tuota sitä lisää. Siksi viestillä pitää olla kynnys. Kun Claus lähettää ilmoituksen, tiedän, että asia kannattaa tarkistaa.

## Mistä oman agentin rakentaminen kannattaa aloittaa?

Jos harkitset oman agentin rakentamista, älä aloita liian isosta. Älä yritä rakentaa heti assistenttia, joka hoitaa kaiken, muistaa kaiken ja pelastaa vielä sielunkin. Valitse ensin yksi selkeä ja toistuva ongelma.

1. **Valitse yksi kipupiste.** Etsi rutiini, joka toistuu usein ja vie turhaan aikaa. Minulla se oli aamun tilannekuvan kokoaminen.
2. **Päätä, mikä käynnistää agentin.** Käynnistyykö se kellonajasta, kalenterimerkinnästä, sähköpostista vai jostakin muusta tapahtumasta?
3. **Päätä, minne agentti viestii.** Tuleeko viesti Telegramiin, sähköpostiin, Notioniin vai johonkin muuhun kanavaan?
4. **Määrittele, milloin agentti on hiljaa.** Tämä on yhtä tärkeää kuin se, milloin agentti toimii. Ilman tätä sääntöä rakennat helposti vain uuden ilmoituskanavan.

## Mitä tästä jäi käteen

**Chatbot** on työkalu, jonka sinä käynnistät. **Agentti** on työpari, joka voi käynnistyä itse sovituissa tilanteissa.

Agentista on hyötyä vasta, kun se tuntee tilanteen, toimii oikeaan aikaan ja tuo olennaisen tiedon oikeaan paikkaan. Yhtä tärkeää on, että se osaa olla hiljaa silloin, kun mitään olennaista ei ole tapahtunut.

En tarvinnut parempaa chattia. Tarvitsin järjestelmän, joka herää ennen minua.

Seuraavassa osassa kerron, miten ensimmäinen yritykseni rakentaa tällainen agentti kasvoi 30 taustapalveluksi ja kolmeksi rinnakkaiseksi tehtävälistaksi — ja miksi se oli virhe.

---

**Rakennatko omaa agenttia?** Voin auttaa suunnittelemaan sen niin, ettei ensimmäinen versio muutu omaksi pikku käyttöjärjestelmäkseen. Katso koulutukset: [seise.org/#koulutukset](https://seise.org/#koulutukset). Ja jos haluat seurata sarjaa, [verkostoidutaan LinkedInissä](https://www.linkedin.com/in/mattiseise/).
