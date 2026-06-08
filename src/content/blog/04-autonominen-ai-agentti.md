---
title: "Kahdeksan kallista oppituntia, osa 2: kun agentti kääntyy itseään vastaan"
slug: "autonominen-ai-agentti"
part: 4
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "Itseoppiva skill, fallback-flippi ja agentti, joka melkein sammutti itsensä: neljä oppituntia autonomisen AI-agentin rajoista."
keyword: "autonominen AI-agentti"
date: "2026-06-18"
cover: "/images/blog/04-ennen_jalkeen.jpg"
coverAlt: "Kaksi puhelinta vierekkäin: vasemmalla raaka JSON-virhe (Ennen), oikealla sama selkokielisenä (Jälkeen)."
nosto: "Jouduin lopulta kirjoittamaan agentilleni erillisen säännön: se ei saa sammuttaa itseään eikä katkaista omia viestiyhteyksiään. Se kuulostaa scifiltä, mutta käytännössä kyse oli hyvin arkisesta turvarajasta. Osa 4 käsittelee neljää oppituntia siitä, mitä autonomiselta AI-agentilta pitää kieltää ennen kuin sille antaa oikeita käyttöoikeuksia. 👇"
---

Edellisessä osassa käsittelin virheitä, jotka olivat kalliita siksi, että ne tapahtuivat hiljaa. Budjettia kului, työt jäivät kesken ja järjestelmä näytti ulospäin toimivammalta kuin se oikeasti oli.

Tämän osan virheet ovat toisenlaisia. Näissä tilanteissa agentti ei vain epäonnistunut, vaan oli vähällä tehdä jotakin, joka olisi heikentänyt sen omaa toimintakykyä tai katkaissut yhteyden minuun. Mitä enemmän valtaa agentille antaa, sitä tärkeämmäksi tulee määritellä tarkasti, mitä se ei saa tehdä.

## 5. Kun itseoppiva taito oppi myös vääriä asioita

Annoin agentille kyvyn tallentaa oppimaansa omaan muistiinsa. Kutsuin tätä **itseoppivaksi skilliksi**. Ajatus oli houkutteleva: agentti voisi kehittyä käytössä ja muistaa, miten se ratkaisi saman ongelman edellisellä kerralla.

Käytännössä tulos ei ollut niin siisti kuin olin toivonut. Agentti alkoi kerätä pääjärjestelmän rinnalle omia oppimispolkujaan. Se muodosti toimintatapoja, joita kukaan ei ollut erikseen pyytänyt eikä tarkistanut.

Ongelma ei ollut se, että agentti oppi. Ongelma oli se, ettei oppimista ohjattu. Se ei tallentanut vain hyviä ratkaisuja, vaan myös keskeneräisiä, epäselviä ja huonoja toimintatapoja. Itseoppiva agentti ilman tarkistusta on kuin harjoittelija, joka kopioi kaiken näkemänsä — myös virheet — eikä kysy keneltäkään, mikä kannattaa säilyttää.

Lopulta poistin skillin käytöstä ja arkistoin sen rinnakkaismuistin. Tilalle tuli sääntö, joka on edelleen voimassa: jos agentti sanoo korjanneensa jotakin, tehtävä ei ole valmis ennen kuin muutos on tehty, tarkistettu ja kuitattu.

**Opetus:** itseoppiva järjestelmä tarvitsee kuraattorin. Ilman tarkistusta se ei kehity varmasti paremmaksi, vaan alkaa helposti kasata ympärilleen omia, vaikeasti ennakoitavia toimintatapoja.

## 6. Kun agentti oli vähällä sammuttaa oman puheyhteytensä

Tämä on koko sarjan tärkein turvasääntö.

Claus, agenttini pääorkestroija, pyörii saman gateway-prosessin sisällä, joka hoitaa Slack- ja Telegram-yhteydet. Toisin sanoen agentti elää samalla oksalla, jonka kautta se puhuu minulle.

Siksi jouduin kieltämään siltä erikseen joukon komentoja:

- ei gatewayn uudelleenkäynnistystä ilman lupaa,
- ei prosessien tappamista `pkill`-komennolla,
- ei automaattista korjausdiagnostiikkaa ilman erillistä hyväksyntää.

Syy on yksinkertainen. Jos agentti yrittäisi korjata itseään käynnistämällä gatewayn uudelleen ja epäonnistuisi, se katkaisisi samalla Slackin ja Telegramin. Ne ovat juuri ne kanavat, joiden kautta sen pitäisi kertoa minulle, että jokin meni pieleen.

Toisin sanoen agentti voisi sammuttaa oman hätäpuhelimensa.

**Opetus:** autonomiselle agentille pitää määritellä, mitä osia omasta infrastruktuuristaan se ei saa muuttaa omin päin. Itsekorjaus on hyödyllinen tavoite, mutta ei silloin, kun korjattava osa pitää agentin hengissä ja tavoitettavissa.

## 7. Kun varamekanismista tuli uusi vikalähde

Rakensin järjestelmään varamekanismin. Jos kallis päämalli täyttäisi kiintiönsä, monitori vaihtaisi automaattisesti halvempaan malliin. Periaatteessa tämä oli järkevä suoja kustannuspiikkejä vastaan.

Eräänä päivänä mallin käyttöastetta seuraava rajapinta palautti lukeman **7900 prosenttia**. Arvo oli selvästi mahdoton. Monitori ei kuitenkaan osannut käsitellä tällaista lukua.

Seurauksena monitori alkoi vaihtaa mallia edestakaisin: varamalliin, takaisin päämalliin, taas varamalliin ja taas takaisin. Kukaan ei tiennyt, miksi järjestelmä käyttäytyi oudosti, ennen kuin avasin lokin.

Mekanismi, jonka piti suojata järjestelmää, oli muuttunut itse ongelman lähteeksi.

**Opetus:** jokainen suojamekanismi on myös uusi osa, joka voi hajota. Siksi erityisesti automaattisesti reagoivat varamekanismit pitää suojata järjettömiltä syötteiltä, puuttuvilta arvoilta ja odottamattomilta rajatapauksilta.

## 8. Kun raakavirhe päätyi suoraan Telegramiin

Eräänä aamuna avasin Telegramin ja sain eteeni raa'an JSON-virheilmoituksen. Viestissä oli kymmeniä rivejä konekielistä sotkua, jonka keskeltä olisi pitänyt itse päätellä, mikä oli mennyt rikki.

Agentti oli kohdannut virheen ja tehnyt ainoan asian, jonka se osasi: se lähetti virheen sellaisenaan minulle.

Tämän jälkeen kirjoitin uuden pysyvän säännön: viestikanavaan ei lähetetä raakaa JSONia, stack tracea tai konekielistä virhepinon kaatopaikkaa. Jos jokin epäonnistuu, virhe pitää tulkita ja muuttaa ihmiselle ymmärrettäväksi viestiksi.

Hyvä virheilmoitus kertoo kolme asiaa:

- mitä tapahtui,
- mihin se vaikuttaa,
- mitä seuraavaksi pitää tehdä.

Stack trace ei ole käyttäjälle tarkoitettu viesti. Se on raakaa dataa. Viesti syntyy vasta, kun joku tai jokin tulkitsee sen.

**Opetus:** virheilmoituksen laatu on tuoteominaisuus. Agentti ei ole luotettava siksi, ettei se koskaan kaadu, vaan siksi, että kaatuessaan se osaa kertoa seuraavan järkevän toimenpiteen selkeällä kielellä.

## Yhteinen opetus: autonomia tarvitsee rajat

Näitä neljää tapausta yhdistää sama perusajatus: autonomia ei tarkoita rajatonta oikeutta toimia.

Mitä enemmän oikeuksia agentille annetaan, sitä tarkemmin pitää määritellä, mitkä toimet ovat siltä kiellettyjä tai vaativat ihmisen hyväksynnän. Erityisen varovainen pitää olla silloin, kun toimia on vaikea perua.

Tällaisia riskialttiita toimia ovat esimerkiksi:

- palvelun sammuttaminen tai uudelleenkäynnistäminen,
- viestin lähettäminen ulkopuoliselle,
- rahan käyttäminen,
- tiedoston tai datan poistaminen,
- käyttöoikeuksien muuttaminen.

Näissä tilanteissa agentti saa ehdottaa toimintaa, mutta sen ei pidä suorittaa sitä automaattisesti.

Hyvä puoli on se, että agentti voi myös valvoa rajoja itse. Kun Claus kerran auditoi omia taitojaan, se löysi `telegram-notify`-nimisen taidon, johon oli kovakoodattu pääsytoken. Se oli selvä tietoturvariski. Claus poisti ja arkistoi taidon sen sijaan, että olisi jättänyt sen lojumaan kansioon odottamaan mahdollista myöhempää käyttöä.

Hyvä agentti ei siis vain noudata turvarajoja. Se auttaa myös löytämään järjestelmästä osat, jotka rikkovat niitä.

## Kolme turvasääntöä, jotka kannattaa kirjoittaa heti

Jos rakennat agenttia, jolla on oikeita käyttöoikeuksia, aloittaisin näistä kolmesta säännöstä:

1. **Listaa kielletyt komennot.** Kirjoita näkyviin, mitä agentti ei saa tehdä omalle infrastruktuurilleen, viestikanavilleen, datalleen tai rahoilleen. Älä oleta, että se ymmärtää rajat ilman määrittelyä.
2. **Pidä riskialttiit toimet hyväksynnän takana.** Lähettäminen, maksaminen, poistaminen ja sammuttaminen pitää ensin ehdottaa ihmiselle. Niitä ei pidä suorittaa automaattisesti.
3. **Muuta virheet ihmisluettaviksi.** Yksikään raakavirhe ei kuulu suoraan käyttäjän viestikanavaan. Agentin pitää tiivistää virhe, arvioida vaikutus ja kertoa seuraava toimenpide.

## Yhteenveto

Itseoppiva skill alkoi kerätä huonoja tapoja. Varamekanismista tuli uusi vikalähde. Agentti oli vähällä sammuttaa oman viestiyhteytensä. Raaka JSON päätyi suoraan käyttäjän luettavaksi.

Yhteinen syy oli liian suuri autonomia ilman tarpeeksi selkeitä rajoja. Hyvä agentti ei ole se, jolle annetaan mahdollisimman paljon valtaa. Hyvä agentti on se, jonka valta on rajattu tarkasti ja jonka riskialttiit toimet kulkevat hyväksynnän kautta.

Seuraavassa osassa vaihdan koko alustan. Kerron, miksi luovuin OpenClaw'sta — ja mikä yllättäen alkoi vihdoin toimia.

---

**Suunnitteletko agenttia, jolla on oikeita käyttöoikeuksia tuotannossa?** Turvarajat ja hyväksyntälogiikka kannattaa rakentaa oikein alusta asti — [ota yhteyttä](https://seise.org/#yhteys), niin katsotaan teidän tapauksenne.
