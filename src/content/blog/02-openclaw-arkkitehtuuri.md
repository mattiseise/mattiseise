---
title: "Kun oma AI-assistentti muuttuu käyttöjärjestelmäksi: OpenClaw'n opetus"
slug: "openclaw-arkkitehtuuri"
part: 2
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "OpenClaw kasvoi 30 launchd-palveluksi ja kolmeksi tehtävälistaksi. Tarina siitä, miksi oma AI-assistentti muuttui pieneksi käyttöjärjestelmäksi."
keyword: "AI-agentin arkkitehtuuri"
date: "2026-06-11"
cover: "/images/blog/02-gateway_alhaalla.jpg"
coverAlt: "Läppärin terminaalissa pitkä lista launchd-palveluita, osa punaisena; vieressä puhelin täynnä Telegram-hälytyksiä."
nosto: "Rakensin ensimmäisen AI-assistenttini 30 taustapalvelusta ja kolmesta rinnakkaisesta tehtävälistasta. Lopulta jokaisella osalla oli oma tapansa hajota — ja yksi unohtunut watchdog lähetti 63 turhaa hälytystä peräkkäin. Osa 2 kertoo, miksi liian monimutkainen arkkitehtuuri voi olla agentin pahin vihollinen. 👇"
---

Edellisessä osassa kuvasin agentin, joka herää ennen minua ja pysyy hiljaa, kun kaikki toimii. Tässä osassa kerron, mitä rakensin ensimmäiseksi **OpenClaw'lla** — ja miksi kokonaisuus karkasi lopulta käsistä.

Ongelma ei ollut se, ettei tekoäly olisi osannut. Ongelma oli se, että rakensin järjestelmän liian monesta liikkuvasta osasta.

## Hyvä alusta: OpenClaw

Ensimmäinen agenttialustani oli **OpenClaw**. Se on itse hostattu **Node.js**-gateway, joka yhdistää viestisovellukset, kuten Telegramin ja Slackin, tekoälyagentteihin.

Ajatus oli hyvä, ja alusta oli pätevä. Ongelma ei ollut OpenClaw itsessään. Ongelma oli se, mitä rakensin sen päälle.

## Ensimmäinen automaatio: jumppavaraukset

OpenClaw'n vahvuus näkyi parhaiten ensimmäisessä automaatiossani. Rakensin sen varaamaan ryhmäliikuntatuntini.

Käyn Urheiluhalleilla **Les Mills** -tunneilla: **BodyCombatissa** sunnuntaisin, maanantaisin ja torstaisin sekä **BodyPumpissa** sunnuntaisin. Varausikkuna avautuu vain noin 15 päivää etukäteen. Jos paikan haluaa saada, pitää muistaa kirjautua oikeana iltana joka viikko.

Tämä on juuri sellainen pieni rutiini, joka ei ole vaikea mutta joka unohtuu helposti — usein juuri silloin, kun tunti ehtii täyttyä.

Tämän olisi voinut tehdä heti alusta alkaen yksinkertaisella skriptillä. Silti tein siitä ensin agentin tehtävän. Jälkikäteen ajatellen se oli hyvä ratkaisu, koska ongelmaa ei vielä alussa tunnettu tarpeeksi hyvin.

## Vaihe 1 — agentti selvittää sivuston toiminnan

Varausjärjestelmässä ei ollut valmista rajapintaa. Siksi laitoin agentin selvittämään, miten sivusto toimii **Playwright**-selainautomaatiolla.

Agentti kävi läpi kirjautumisen, tallensi istunnon, etsi oikean varauspolun ja poimi talteen ne verkkopyynnöt, joilla varaus tehdään ja perutaan.

Tätä vaihetta ei olisi ollut järkevää kovakoodata etukäteen. Ensin piti ymmärtää, mitä sivusto oikeasti tekee. Tällaisessa epäselvässä alkuvaiheessa agentti on parhaimmillaan: se auttaa tutkimaan, kokeilemaan ja kokoamaan toimivan mallin sotkuisesta järjestelmästä.

## Vaihe 2 — agentti tekee varaukset keskustellen

Kun varauspolku oli selvillä, rakensin **booking-management**-taidon. Sen jälkeen riitti, että sanoin Clausille: "varaa ensi viikon tunnit".

Claus laski päivämäärät, teki varaukset ja kuittasi Telegramiin lyhyesti:

- 🥋 BodyCombat varattu
- 🏋️‍♀️ BodyPump varattu

Jos tunti oli täynnä tai sitä ei esimerkiksi pyhien takia löydy kalenterista, Claus ei esittänyt tilannetta virheenä. Se kertoi asian sellaisena kuin se oli: "❌ Varausta ei saatu tehtyä. Tuntia ei löydy kalenterista.".

Yhden turvallisuussäännön kirjasin heti alussa. Peruutusta ei voi perua. Siksi Claus pyytää aina vahvistuksen ennen kuin se peruu varauksen.

## Vaihe 3 — agentista tulee valvoja

Tässä vaiheessa syntyi tärkein oivallus.

Kun varaaminen oli saatu toimimaan, purin ratkaisun takaisin tavalliseksi automaatioksi. Lopputuloksena oli neljä ajastettua taustatyötä, jotka eivät tarvitse kielimallia lainkaan. Esimerkiksi lauantaina kello 17.01 kone varaa seuraavan sunnuntain BodyCombatin ja kello 18.11 saman päivän BodyPumpin.

Tällainen ratkaisu on halpa, nopea ja luotettava. Se ei kuluta tokeneita eikä tarvitse päättelyä joka viikko uudelleen.

Agentti ei kuitenkaan kadonnut. Sen rooli muuttui. Se siirtyi varsinaisen automaation yläpuolelle valvomaan lopputulosta.

Joka maanantai kello 10 erillinen tarkistus käy varaushistorian läpi ja varmistaa, että viikon tunnit on todella varattu. Agentti siis suorittaa logiikan, tarkistaa tuloksen ja vertaa sitä odotettuun lopputulokseen. Jos kaikki täsmää, se pysyy hiljaa. Viesti tulee vain, jos jokin poikkeaa odotetusta.

Tästä tuli malli, jota olen käyttänyt myöhemminkin:

- anna agentin selvittää epäselvä ongelma,
- muuta valmis ratkaisu tavalliseksi automaatioksi,
- jätä agentti valvomaan, että lopputulos on oikea.

Agentti on liian kallis tekemään saman rutiinivarauksen joka viikko. Se on kuitenkin erittäin hyödyllinen silloin, kun jokin menee vikaan ja poikkeama pitää tunnistaa.

## Mutta en pysähtynyt tähän: kolmekymmentä palvelua

Alkuperäinen tavoite oli rakentaa assistentti. Vähitellen siitä kasvoi pieni käyttöjärjestelmä, jolla oli yksi käyttäjä ja yksi ylläpitäjä: minä.

Kaikki pyöri **macOS:n launchd-palveluina**. Se on sama mekanismi, jolla käyttöjärjestelmä käynnistää taustaprosesseja. Mukana oli watchdogeja, kalenterisynkronointeja, sähköpostisynkronointeja, Notion-synkronointeja ja varmuuskopioita.

Palveluiden määrä kasvoi noin kolmeenkymmeneen. Jokaisella palvelulla oli oma tilansa, oma lokinsa ja oma tapansa hajota. Koska ne olivat erillisiä, jokaista piti myös ylläpitää ja valvoa erikseen.

Tässä kohtaa automaatio ei enää vähentänyt kuormaa. Se alkoi tuottaa omaa ylläpitotyötään.

## Kolme inboxia samalle ihmiselle

Suurin sotku syntyi tehtävienhallinnasta. Rakensin samaa tarkoitusta varten kolme rinnakkaista järjestelmää:

- **Mission Control** — selainpohjainen tehtävälista ja järjestelmänäkymä
- **MC2** — seuraava versio, joka tuli ensimmäisen rinnalle mutta ei korvannut sitä
- **Claus–Cowork-silta** — markdown-tiedostoihin perustuva viestintätapa, jossa Claus kirjoitti pyynnöt yhteen tiedostoon ja toinen tekoälyistunto, **Cowork**, vastasi toiseen

Käytännössä minulla oli kolme inboxia samaa työtä varten. Järjestelmät eivät keskustelleet kunnolla keskenään, joten sama tehtävä saattoi elää yhtä aikaa Notionissa, Mission Controlissa, MC2:ssa, markdown-sillassa ja muistitiedostossa.

Kun päivitin yhden paikan, muut jäivät vanhentuneiksi. Tehtävienhallinnan piti vähentää muistamista, mutta se lisäsi uuden kerroksen kirjanpitoa.

Tästä tuli sarjan ensimmäinen kova opetus: **jos agentilla on monta inboxia, ihmiselle syntyy enemmän työtä, ei vähemmän**.

## Vanha koira, joka haukkui omaa ruumistaan

Seuraava ongelma liittyi **watchdogeihin**. Watchdog on palvelu, jonka tehtävä on valvoa toista palvelua ja hälyttää, jos se kaatuu. Oikein käytettynä se on hyödyllinen. Väärin käytettynä siitä tulee uusi häiriön lähde.

Kun myöhemmin siirryin uuteen järjestelmään, vanha OpenClaw-watchdog jäi vahingossa päälle. Se tarkisti endpointtia, jota ei enää ollut olemassa, ja päätteli siitä, että gateway oli alhaalla.

Sen jälkeen se lähetti Telegramiin viestin: "🔴 OpenClaw Gateway alhaalla!". Sitten se lähetti saman viestin uudelleen. Ja uudelleen. Lopulta ilmoituksia tuli 63 peräkkäin.

Vanha koira haukkui omaa ruumistaan, eikä kukaan ollut kertonut sille, että se oli jo kuollut.

Opetus oli yksinkertainen: **automaation purkaminen on yhtä tärkeää kuin sen rakentaminen**. Kun järjestelmä korvataan uudella, vanha pitää sammuttaa kokonaan. Muuten ympärille jää zombeja valvomaan haamuja.

## Konfiguraatio ei aina ole lähdekoodi

Toinen klassinen virhe liittyi OpenClaw'n ajastettuihin töihin. Ne elivät `jobs.json`-tiedostossa, joka näytti tavalliselta asetustiedostolta. Oletin, että sitä voisi muokata käsin.

Avasin tiedoston, korjasin ajastuksen ja tallensin muutoksen. Illalla kaikki näytti hyvältä.

Aamulla muutos oli kadonnut.

Syy selvisi myöhemmin. Gateway piti ajastettuja töitä omassa muistissaan ja kirjoitti `jobs.json`-tiedoston uudelleen oman sisäisen tilansa perusteella käynnistyessään. Tiedosto ei ollut järjestelmän totuus. Se oli vain tallennettu näkymä ohjelman ajonaikaisesta tilasta.

Käsin tehty muutos näytti onnistuneelta, mutta katosi ensimmäisessä uudelleenkäynnistyksessä.

Tästä jäi pysyvä sääntö: **ajastetut työt luodaan käyttöliittymän tai komentorivin kautta, ei muokkaamalla tiedostoa käsin**. Jos järjestelmällä on oma ajonaikainen tilansa, tiedoston muokkaaminen on kuin yrittäisi korjata peilikuvaa partakoneella.

## Mitä näillä virheillä oli yhteistä?

Yksikään näistä ongelmista ei johtunut siitä, ettei tekoäly olisi osannut. Ne olivat tavallisia järjestelmävirheitä:

- unohtunut taustaprosessi,
- ajonaikainen tila,
- hajautettu totuus,
- liian monta paikkaa samalle tiedolle.

Agenttijärjestelmässä tällaiset virheet ovat tavallista hankalampia, koska ne tapahtuvat taustalla. Tavallinen sovellus kaatuu usein näkyvästi käyttäjän edessä. Agentti voi hajota yöllä, jatkaa näennäisesti toimintaansa ja kertoa ongelmasta aamulla joko 63 viestillä tai ei ollenkaan.

## Yhteenveto

OpenClaw oli hyvä alusta, mutta rakensin sen päälle liian suuren kokonaisuuden: 30 palvelua, kolme tehtävälistaa ja joukon watchdogeja, joista jokaisella oli oma tapansa epäonnistua.

Mitä enemmän liikkuvia osia lisäsin, sitä enemmän syntyi paikkoja hiljaiselle hajoamiselle. Monimutkaisuus ei ollut tehosta maksettava hinta. Se oli vain hinta, jonka järjestelmä alkoi periä joka päivä.

**Agentti kannattaa rakentaa niin yksinkertaiseksi kuin mahdollista — ja jättää monimutkaisuus vain sinne, missä siitä on oikeasti hyötyä.**

Seuraavassa osassa mennään konkreettisiin virheisiin: kahdeksaan tilanteeseen, joissa tämä koneisto oli vähällä tyhjentää lompakon tai hajottaa itsensä. Aloitan kalleimmasta — siitä, miten 22 prosenttia viikon tekoälybudjetista kului yhdessä yössä.

---

**Onko sinullakin oma 30 palvelun hirviö?** Suunnittelen ja yksinkertaistan agenttiarkkitehtuureja tuotantoon: tutustu [OpenClaw-projektiin](https://seise.org/#projektit) ja [agenttisprinttiin](https://seise.org/#koulutukset).
