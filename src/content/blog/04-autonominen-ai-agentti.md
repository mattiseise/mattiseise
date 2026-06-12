---
title: "Kahdeksan kallista oppituntia, osa 2: kun agentti kääntyy itseään vastaan"
slug: "autonominen-ai-agentti"
part: 4
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "Itseoppiva skill, fallback-flippi ja agentti, joka melkein sammutti itsensä: neljä oppituntia autonomisen AI-agentin rajoista."
keyword: "autonominen AI-agentti"
date: "2026-06-16T08:00:00+03:00"
cover: "/images/blog/04-ennen_jalkeen.jpg"
coverAlt: "Kaksi puhelinta vierekkäin: vasemmalla raaka JSON-virhe (Ennen), oikealla sama selkokielisenä (Jälkeen)."
nosto: "Jouduin lopulta kirjoittamaan agentilleni erillisen säännön: se ei saa sammuttaa itseään eikä katkaista omia viestiyhteyksiään. Se kuulostaa scifiltä, mutta käytännössä kyse oli hyvin arkisesta turvarajasta. Osa 4 käsittelee neljää oppituntia siitä, mitä autonomiselta AI-agentilta pitää kieltää ennen kuin sille antaa oikeita käyttöoikeuksia. 👇"
---

Edellisessä osassa käsittelin virheitä, jotka tulivat kalliiksi siksi, että ne tapahtuivat hiljaa. Budjettia kului, työt jäivät kesken ja järjestelmä näytti ulospäin toimivammalta kuin se oikeasti oli.

Tämän osan virheet ovat toisenlaisia. Näissä agentti ei vain epäonnistunut, vaan oli vähällä tehdä jotain, joka olisi heikentänyt sen omaa toimintakykyä tai katkaissut yhteyden minuun. Mitä enemmän valtaa agentille antaa, sitä tärkeämpää on kirjoittaa tylsät kiellot näkyviin. Tylsyys on tässä lajissa halpa vakuutus.

## 5. Kun itseoppiva taito oppi myös vääriä asioita

Annoin agentille kyvyn tallentaa oppimaansa omaan muistiinsa. Kutsuin tätä **itseoppivaksi skilliksi**. Ajatus oli houkutteleva: agentti voisi kehittyä käytössä ja muistaa, miten se ratkaisi saman ongelman edellisellä kerralla.

Käytännössä tulos ei ollut niin siisti kuin olin toivonut. Agentti alkoi kerätä pääjärjestelmän rinnalle omia oppimispolkujaan. Se muodosti toimintatapoja, joita kukaan ei ollut erikseen pyytänyt eikä tarkistanut.

Ongelma ei ollut se, että agentti oppi. Ongelma oli se, ettei kukaan katsonut, mitä se oppi. Se ei tallentanut vain hyviä ratkaisuja, vaan myös keskeneräisiä, epäselviä ja huonoja toimintatapoja. Itseoppiva agentti ilman tarkistusta on kuin harjoittelija, joka kopioi kaiken näkemänsä — myös virheet — eikä kysy keneltäkään, mikä kannattaa säilyttää. Tässä tapauksessa agentti oppi, että laiskoittelu kannattaa ja usein riittää, että kuittaa homman tehdyksi, vaikkei homma ole välttämättä edes aloitettu, koska se säästää tokeneita. Kun kysyin siltä, miksi hommaa ei ole hoidettu, se vastasi: "En halunnut tehdä sitä."

Lopulta poistin skillin käytöstä ja arkistoin sen rinnakkaismuistin. Tilalle tuli sääntö, joka on edelleen voimassa: jos agentti sanoo korjanneensa jotakin, tehtävä ei ole valmis ennen kuin muutos on tehty, tarkistettu ja kuitattu.

**Mitä tästä jäi käteen:** itseoppiva järjestelmä tarvitsee jonkun katsomaan perään. Ilman tarkistusta se ei välttämättä kehity paremmaksi, vaan alkaa helposti kasata ympärilleen omia, vaikeasti ennakoitavia toimintatapoja. Kone oppii kyllä. Se ei tarkoita, että se oppii oikean asian.

## 6. Kun agentti oli vähällä sammuttaa oman puheyhteytensä

Tämä on koko sarjan turvasääntö, jonka olisi pitänyt olla ilmeinen. Ei tietenkään ollut, koska ilmeiset asiat muuttuvat ilmeisiksi yleensä vasta sen jälkeen, kun ne ovat melkein hajottaneet jotain.

Claus, agenttini pääorkestroija, pyörii saman gateway-prosessin sisällä, joka hoitaa Slack- ja Telegram-yhteydet. Toisin sanoen agentti elää samalla oksalla, jonka kautta se puhuu minulle.

Siksi jouduin kieltämään siltä erikseen joukon komentoja:

- ei gatewayn uudelleenkäynnistystä ilman lupaa,
- ei prosessien tappamista `pkill`-komennolla,
- ei automaattista korjausdiagnostiikkaa ilman erillistä hyväksyntää.

Syy on yksinkertainen. Jos agentti yrittäisi korjata itseään käynnistämällä gatewayn uudelleen ja epäonnistuisi, se katkaisisi samalla Slackin ja Telegramin. Ne ovat juuri ne kanavat, joiden kautta sen pitäisi kertoa minulle, että jokin meni pieleen. Lienee sanomattakin selvää, että tämänkin opin vasta muutaman gatewayn sulkemisen jälkeen.

Toisin sanoen Claus sammutti oman hätäpuhelimensa.

**Mitä tästä jäi käteen:** autonomiselle agentille pitää määritellä, mitä osia omasta infrastruktuuristaan se ei saa muuttaa omin päin. Itsekorjaus on hyödyllistä vain niin kauan kuin korjaus ei riko sitä osaa, joka pitää agentin hengissä ja tavoitettavissa.

## 7. Kun varamekanismista tuli uusi vikalähde

Rakensin järjestelmään varamekanismin. Meillä oli päämallina kallis mutta hyvä malli, jota halusin käyttää aina kun mahdollista, sillä saan OpenAI-tilaajana tietyn määrän käyttöä kuussa kuukausimaksun hinnalla. Sen rinnalle oli määritelty halvempi varamalli siltä varalta, että päämallin viikkokiintiö täyttyisi tai kustannukset lähtisivät lapasesta.

Ajatus oli järkevä: jos päämalli menee yli rajan, järjestelmä vaihtaa automaattisesti varamalliin, eikä agenttimalli kuole siihen, ettei sillä ole enää kielimallia käytössä. Kun tilanne normalisoituu, se voi palata takaisin päämalliin. Näin käyttäjän ei tarvitse huomata mitään, eikä minun tarvitse päivystää mallibudjettia käsin.

Sitten käyttöastetta seuraava rajapinta palautti lukeman **7900 prosenttia**.

Ei 79 prosenttia. Ei 100 prosenttia. Vaan 7900 prosenttia.

Arvo oli selvästi mahdoton. Se ei tarkoittanut, että olisimme käyttäneet mallia 79 kertaa yli budjetin. Se tarkoitti, että monitori sai kelvottoman mittausarvon. Mutta monitori ei tiennyt sitä. Se teki juuri sen, mitä olin käskenyt sen tehdä: jos käyttöaste näyttää liian korkealta, vaihda varamalliin.

Seurauksena järjestelmä alkoi sahata edestakaisin. Ensin se näki käyttöasteen olevan katastrofaalinen ja vaihtoi halvempaan varamalliin. Seuraavalla tarkistuksella tilanne näytti taas erilaiselta, joten se vaihtoi takaisin päämalliin. Sitten sama tapahtui uudestaan.

Lopputulos oli koominen ja ärsyttävä yhtä aikaa: järjestelmä, jonka piti vakauttaa mallivalintoja, alkoi itse aiheuttaa epävakautta. Malli vaihtui ilman että kukaan oli pyytänyt sitä. Käytös näytti ulospäin satunnaiselta. Välillä käytössä oli oikea päämalli, välillä fallback, eikä mistään käyttöliittymästä nähnyt heti miksi.

Syy löytyi vasta lokista. Siellä näkyi ketju: mahdoton käyttöaste, automaattinen fallback-päätös, palautus päämalliin, uusi fallback-päätös. Monitori ei ollut rikki siinä mielessä, että se olisi kaatunut. Se oli pahempaa: se toimi täsmälleen niin kuin se oli ohjelmoitu toimimaan, mutta väärän oletuksen varassa.

Ongelma ei ollut varamallissa. Ongelma oli siinä, että varamekanismi luotti mittariin liikaa. Siltä puuttui terveen järjen tarkistus: jos käyttöaste on 7900 prosenttia, kyse ei ole normaalista kuormasta vaan viallisesta datasta. Sellaisessa tilanteessa järjestelmän ei pitäisi tehdä automaattista tuotantopäätöstä, vaan jäädyttää tila ja ilmoittaa ihmiselle.

Tässä kohtaa opin taas saman vanhan asian: jokainen automaatio tarvitsee myös rajat sille, milloin se ei saa automatisoida. Varamekanismi ei ole suoja, jos se uskoo mitä tahansa numeroa. Silloin siitä tulee vain uusi liikkuva osa järjestelmässä, joka oli jo valmiiksi tarpeeksi monimutkainen.

## 8. Kun raakavirhe päätyi suoraan Telegramiin

Eräänä aamuna avasin Telegramin ja sain eteeni raa'an JSON-virheilmoituksen. Viestissä oli kymmeniä rivejä konekielistä sotkua, jonka keskeltä olisi pitänyt itse päätellä, mikä oli mennyt rikki.

Agentti oli kohdannut virheen ja tehnyt ainoan asian, jonka se osasi: se lähetti virheen sellaisenaan minulle.

Tämän jälkeen kirjoitin uuden pysyvän säännön: viestikanavaan ei lähetetä raakaa JSONia, stack tracea tai konekielistä virhepinon kaatopaikkaa. Jos jokin epäonnistuu, virhe pitää tulkita ja muuttaa ihmiselle ymmärrettäväksi viestiksi.

Hyvä virheilmoitus kertoo kolme asiaa:

- mitä tapahtui,
- mihin se vaikuttaa,
- mitä seuraavaksi pitää tehdä.

Stack trace ei ole käyttäjälle tarkoitettu viesti. Se on raakaa dataa. Viesti syntyy vasta, kun joku tai jokin tulkitsee sen. Muuten käyttäjälle lähetetään lähinnä digitaalinen oksennus ja toivotaan parasta.

**Mitä tästä jäi käteen:** virheilmoituksen laatu on käytännön luotettavuutta. Agentti ei ole luotettava siksi, ettei se koskaan kaadu, vaan siksi, että kaatuessaan se osaa kertoa seuraavan järkevän toimenpiteen selkeällä kielellä.

## Sama kaava: agentti ei saa päättää kaikesta itse

Näitä neljää tapausta yhdistää sama perusasia: autonominen toiminta ei tarkoita rajatonta oikeutta toimia.

Mitä enemmän oikeuksia agentille annetaan, sitä tarkemmin pitää määritellä, mitkä toimet ovat siltä kiellettyjä tai vaativat ihmisen hyväksynnän. Erityisen varovainen pitää olla silloin, kun toimia on vaikea perua.

Tällaisia riskialttiita toimia ovat esimerkiksi:

- palvelun sammuttaminen tai uudelleenkäynnistäminen,
- viestin lähettäminen ulkopuoliselle,
- rahan käyttäminen,
- tiedoston tai datan poistaminen,
- käyttöoikeuksien muuttaminen.

Näissä tilanteissa agentti saa ehdottaa toimintaa, mutta sen ei pidä suorittaa sitä automaattisesti.

Hyvä puoli on se, että agentti voi myös valvoa rajoja itse. Kun Claus kerran auditoi omia taitojaan, se löysi `telegram-notify`-nimisen taidon, johon oli kovakoodattu pääsytoken. Se oli selvä tietoturvariski. Claus poisti ja arkistoi taidon sen sijaan, että olisi jättänyt sen lojumaan kansioon odottamaan mahdollista myöhempää käyttöä.

Hyvä agentti ei siis vain noudata turvarajoja. Se voi auttaa löytämään järjestelmästä osat, jotka rikkovat niitä. Kunhan sille ei samalla anneta lupaa purkaa taloa, koska palovaroitin piippasi.

## Kolme turvasääntöä, jotka kannattaa kirjoittaa heti

Jos rakennat agenttia, jolla on oikeita käyttöoikeuksia, aloittaisin näistä kolmesta säännöstä:

1. **Listaa kielletyt komennot.** Kirjoita näkyviin, mitä agentti ei saa tehdä omalle infrastruktuurilleen, viestikanavilleen, datalleen tai rahoilleen. Älä oleta, että se ymmärtää rajat ilman määrittelyä.
2. **Pidä riskialttiit toimet hyväksynnän takana.** Lähettäminen, maksaminen, poistaminen ja sammuttaminen pitää ensin ehdottaa ihmiselle. Niitä ei pidä suorittaa automaattisesti.
3. **Muuta virheet ihmisluettaviksi.** Yksikään raakavirhe ei kuulu suoraan käyttäjän viestikanavaan. Agentin pitää tiivistää virhe, arvioida vaikutus ja kertoa seuraava toimenpide.

## Lopulta kyse oli vallasta

Itseoppiva skill alkoi kerätä huonoja tapoja. Varamekanismista tuli uusi vikalähde. Agentti oli vähällä sammuttaa oman viestiyhteytensä. Raaka JSON päätyi suoraan käyttäjän luettavaksi.

Syy ei ollut se, että agentti olisi ollut jotenkin erityisen dramaattinen. Sillä oli vain liikaa vapautta sellaisissa kohdissa, joissa vapaus ei ollut tarpeen. Hyvä agentti ei ole se, jolle annetaan mahdollisimman paljon valtaa. Hyvä agentti on se, jonka oikeudet on rajattu tarkasti ja jonka riskialttiit toimet kulkevat hyväksynnän kautta.

Seuraavassa osassa vaihdan koko alustan. Kerron, miksi luovuin OpenClaw'sta — ja mikä yllättäen alkoi vihdoin toimia.

---

**Jos olet antamassa agentille oikeita käyttöoikeuksia, kirjoita ensin ylös mitä se ei saa tehdä.** Jos haluat siihen ulkopuoliset silmät, [ota yhteyttä](https://seise.org/#yhteys), niin katsotaan teidän tapauksenne.
