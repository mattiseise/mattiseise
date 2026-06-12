---
title: "Agenttijärjestelmä ei ole projekti vaan prosessi: mitä vuodesta jäi käteen"
slug: "ai-agentin-opit"
part: 6
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "Mitä vuosi oman AI-agentin rakentamista opetti luotettavuudesta, muistista ja luottamuksesta — ja mikä on yhä rehellisesti kesken."
keyword: "AI-agentin opit"
date: "2026-06-18T08:00:00+03:00"
cover: "/images/blog/06-mika_toimii.jpg"
coverAlt: "Läppärin näytöllä kaksi saraketta: vihreä 'Mikä toimii' ja keltainen 'Ongelmat' eli luotettavuusvelka."
nosto: "Vuosi oman AI-agentin rakentamista opetti ainakin tämän: järjestelmä ei tule lopullisesti valmiiksi. Tässä osassa kokoan, mitä opin luotettavuudesta ja luottamuksesta — sekä listaan rehellisesti, mikä on edelleen kesken. Jos en halua agenttini piilottelevan virheitä, en voi tehdä niin itsekään. 👇"
---

Olen käyttänyt reilun vuoden oman tekoälyagentin rakentamiseen, hajottamiseen ja rakentamiseen uudelleen. Tämä on sarjan viimeinen osa, joten kokoan tähän ne asiat, jotka matkasta jäivät käteen — ja ne kohdat, joissa työ on edelleen kesken.

Yksi havainto nousi muita sitkeämmin esiin: **agenttijärjestelmä ei ole projekti, jolla on selkeä valmistumispäivä**. Se elää, muuttuu ja vaatii huomiota myös sen jälkeen, kun ensimmäinen toimiva versio on käytössä. Tämä ei ole epäonnistuminen. Se on sitä, mitä tapahtuu, kun järjestelmää käytetään oikeassa arjessa eikä vain demossa, jossa kaikki toimii tasan sen kolme minuuttia.

## Opit, jotka jäivät käteen

### 1. Todisteet ovat parempia kuin hyvä fiilis

Tärkein dokumenttini ei ole mikään yksittäinen taito, integraatio tai automaatio. Se on **luotettavuusprotokolla**.

Clausilla on vain kolme sallittua statusta:

- **ei tehty**
- **todennäköisesti korjattu**
- **korjattu**

Sanaa **korjattu** ei saa käyttää ilman näyttöä. Jos kyse on käyttäjälle näkyvästä virheestä, kuittaukseen tarvitaan todiste: esimerkiksi kuvakaappaus, onnistunut tarkistus tai muu selkeä vahvistus. Pelkkä arvio siitä, että "tämän pitäisi nyt toimia", ei riitä. Olen kuullut sen lauseen tietokoneilta liian monta kertaa, yleensä juuri ennen seuraavaa virhettä.

Luotettavuusprotokollan suosikkirivini on tämä: **optimismi ei ole todiste**.

Käytännössä tämä näkyy viestinnässä näin. Kun Claus oli nostanut kaatuneen palvelun takaisin pystyyn, se ei ilmoittanut: "korjattu, pitäisi toimia nyt". Sen sijaan viesti kuului näin: "MC on taas ylhäällä. Validointi: restart-skripti meni läpi, Tailscale osoittaa oikeaan porttiin ja localhost vastaa HTTP 200."

Ero voi kuulostaa pieneltä, mutta käytännössä se ratkaisee, uskallanko antaa agentille seuraavalla kerralla enemmän vastuuta. Ensimmäinen viesti on toive. Toinen näyttää, mitä oikeasti tarkistettiin.

### 2. Muisti pitää pystyä avaamaan

Jos et voi tarkistaa, mitä agentti muistaa, et koskaan uskalla delegoida sille mitään oikeasti tärkeää.

Siksi vaihdoin mustan laatikon selattavaan muistiin. En halunnut järjestelmää, joka vain väittää muistavansa asioita. Halusin järjestelmän, jonka muistin voin itse avata, lukea ja arvioida.

Luottamus ei synny siitä, että agentti kuulostaa vakuuttavalta. Luottamus syntyy siitä, että voin tarkistaa, onko se oikeassa. Tämä on tylsempää kuin lupaukset kaikkitietävästä assistentista, mutta tylsyys on tässä kohtaa ominaisuus.

### 3. Yksinkertaisempi järjestelmä hajoaa yleensä vähemmän

Yksi gateway, selattava muisti ja muutama hyvin rajattu taito toimivat käytännössä paremmin kuin kolmekymmentä erillistä palvelua, joista jokaisella on oma watchdoginsa ja oma tapansa hajota.

Joka kerta kun järjestelmään lisätään uusi osa, lisätään samalla myös uusi paikka, jossa jokin voi rikkoutua. Ja jos rikkoutuminen tapahtuu taustalla, se voi jäädä huomaamatta pitkäksikin aikaa.

Monimutkaisuus ei siis ole vain tehon hinta. Se on myös riski, joka alkaa yleensä näkyä juuri silloin, kun järjestelmän pitäisi toimia huomaamattomasti.

### 4. Hiljainen epäonnistuminen on pahin epäonnistuminen

Virhe ei ole pahin asia, mitä agenttijärjestelmässä voi tapahtua. Pahinta on se, että virhe jää piiloon.

Otan mieluummin yhden selkeän, analysoidun virheviestin kuin täydellisen hiljaisuuden. Tämä on sama sääntö, jonka annoin agentilleni ja jota yritän itsekin noudattaa: **virheen saa tehdä, mutta sitä ei saa piilotella**.

Hiljainen epäonnistuminen on vaarallista siksi, että se näyttää onnistumiselta tai ainakin normaalilta toiminnalta. Juuri siksi se on vaikein huomata ja usein myös kallein korjata.

## Mikä oli kesken — ja mitä on jo korjattu

Jos en halua piilotella virheitä, en halua piilotella myöskään keskeneräisyyttä. Samalla olisi epärehellistä jättää kuva siihen, että kaikki listatut ongelmat ovat edelleen samassa tilassa. Osa niistä on jo korjattu. Osa on rajattu. Osa on yhä ärsyttävästi olemassa.

Tässä keskeneräisyys ei tarkoita vain puuttuvia ominaisuuksia tai "olisi kiva joskus" -listaa. Kyse on **luotettavuusvelasta**: niistä kohdista, joissa järjestelmään ei vielä voi täysin luottaa ilman tarkistuksia.

### Token- ja mallivuotoja on saatu kuriin

Yhdessä vaiheessa kustannuksia syntyi paikoista, joita ei nähnyt yhdellä vilkaisulla: cron-ajojen mallikentistä, skriptien omista provider-asetuksista, käynnissä olevista sessioista ja fallbackeista.

Tätä varten järjestelmään lisättiin valvontaa. Nyt mallireittejä tarkistetaan erikseen, automaattisten ajojen kustannuksia seurataan tarkemmin ja epäilyttävistä mallivalinnoista tulee ilmoitus. Se ei ole kaunista, mutta toimii paremmin kuin aiempi malli, jossa lasku kertoi totuuden jälkikäteen.

Tietotekniikka on välillä kerroksittain pinottua epäluuloa. Tässä tapauksessa epäluulo oli ihan aiheellista.

### Fallback on kahlittu tarkoituksella

Automaattinen mallinvaihto ei ole enää vapaa tekemään mitä haluaa. Osassa 4 kuvattu 7900 prosentin käyttöaste rikkoi luottamuksen siihen mekanismiin aika perusteellisesti.

Korjaus ei ollut se, että fallbackista tehtiin entistä älykkäämpi ja rohkeampi. Korjaus oli tylsempi: automaattista vaihtoa rajoitettiin, mittareille lisättiin järkevyystarkistuksia ja epäselvässä tilanteessa järjestelmän pitää mieluummin jäädyttää tila ja ilmoittaa ihmiselle kuin vaihtaa mallia omin päin.

Toisin sanoen järjestelmässä on nykyään enemmän käsijarrua. Se on hyvä asia. Kaikkien turvamekanismien ei tarvitse olla näyttäviä. Osa saa olla vain estoja, jotka estävät konetta olemasta liian itsevarma.

### Legacy-OpenClaw elää vielä joissakin kohdissa

Käyttöliittymä ja gateway ovat nyt Hermeksessä, mutta kaikki vanha ei kadonnut yhdellä leikkauksella. Osa automaatioista käyttää edelleen vanhoja OpenClaw-polkuja tai sieltä periytyviä skriptejä.

Tätä on purettu, mutta ei kokonaan. Ero aiempaan on se, että vanha osa ei enää ole näkymätön. Se on tunnistettu, rajattu ja vähitellen korvattavissa. Se on huomattavasti parempi tilanne kuin se, että vanha watchdog haukkuu kuollutta gatewaytä 63 viestin verran.

### Muisti on siirtynyt selattavaan suuntaan

Selattava vault on nyt ensisijainen muisti. Se on iso muutos verrattuna vanhaan mustaan laatikkoon, jossa piti vain luottaa siihen, että agentti muistaa oikein.

Vanhaa vektorivarastoa ei silti voi vielä väittää kokonaan kuopatuksi. Esimerkiksi sähköpostin louhinta ja osa vanhasta sisällöstä elävät edelleen siellä. Siksi rehellisin muotoilu on edelleen tämä: **musta laatikko on korvautumassa markdown-pohjaisella muistilla**. Suunta on oikea, mutta hautajaispuhetta vanhalle muistille ei kannata vielä pitää.

### Cron-ajot ovat näkyvämpiä, mutta eivät vielä kauniita

Cron-ajojen tilanne on parempi kuin ennen. Hiljaiset ajot ovat oikeasti hiljaisia, virheet pyritään tulkitsemaan ihmiselle ja kustannuksia seurataan tarkemmin.

Silti kokonaisuus ei ole vielä sellainen, jonka ymmärtää yhdellä vilkaisulla. Osa ajoista on tavallisia skriptejä ilman agenttia, osa käyttää kielimallia, osa näyttää provider-kenttiä, joita ne eivät oikeasti käytä, ja osa skripteistä käyttää omia ympäristömuuttujiaan.

Tämä on parempi kuin ennen, mutta ei vielä siisti. Liian usein ongelma löytyy edelleen vasta siinä vaiheessa, kun joku kysyy: "miksi tästä tuli laskua?" Yleensä se joku olen minä, hieman kireämmällä äänenpainolla.

### Tehtäväjärjestelmän rajat ovat paremmat

Kanban, Notion ja automaattiset agenttityöt on eroteltu nykyään paljon selkeämmin kuin OpenClaw-aikana. Kanban on tarkoitettu automatisoitaville agenttitöille. Notion ja muu tehtävälista ovat enemmän niitä asioita varten, jotka minun pitää itse hoitaa.

Se ei tarkoita, että raja olisi täydellinen. Sama asia voi edelleen joskus päätyä väärään paikkaan tai kahteen paikkaan. Mutta ongelma ei ole enää se sama kolmen rinnakkaisen inboxin sekamelska, josta kirjoitin osassa 2.

Nyt ongelma on hienovaraisempi: rajat ovat paremmat, mutta eivät vielä täysin idioottivarmat. Ja jos järjestelmä ei ole idioottivarma, löydän kyllä ajan mittaan sen idiootin.

### Ulkoiset palvelut pysyvät ulkoisina palveluina

Jumppavaraukset, sähköposti, pelilunastajat, kalenterit ja Notion toimivat kaikki vain niin kauan kuin tokenit, evästeet ja käyttöoikeudet pysyvät kunnossa.

Tätä ei voi korjata kokonaan omasta järjestelmästä käsin. Sen voi vain tehdä näkyväksi. Siksi virheilmoituksia on muutettu niin, että ne kertovat suoraan, jos kirjautuminen pitää uusia tai jos jokin palvelu odottaa ihmistä. Se ei poista riippuvuutta ulkoisista palveluista, mutta se poistaa arvaamisen. Se on jo paljon.

### Oikea itsekorjaus on rajattu, ei unohdettu

Järjestelmä osaa havaita paljon ja raportoida paljon. Se osaa myös korjata joitakin asioita. Mutta turvallinen automaattinen korjaaminen on edelleen tarkoituksella rajattu.

Syy on selvä: agentti ei saa sahata omaa oksaansa. Gatewayn uudelleenkäynnistykset, mallinvaihdot ja provider-konfiguraatiot ovat liian riskialttiita toimia siihen, että ne voisi antaa täysin automaattisesti agentin hoidettaviksi ilman ihmisen hyväksyntää.

Tämä ei ole puute vaan tietoinen rajoitus. Luotettavuus on tässä tärkeämpää kuin näyttävä itseohjautuvuus.

## Mitä tämä lista kertoo?

Tämä lista ei nolota minua. Se on hyödyllinen mittari, vaikka näyttääkin vähän siltä kuin olisin julkaissut oman remonttilistani verkkoon. Toisaalta sitähän tämä on.

Se kertoo, että mittaan järjestelmää oikeasta suunnasta. En kysy ensimmäisenä, mitä ominaisuuksia vielä puuttuu. Kysyn, missä luotettavuus, kustannusnäkyvyys ja arkkitehtuurin siisteys eivät vielä ole sillä tasolla, jolla niiden pitäisi olla.

Hyvä merkki on se, että osa listasta on jo muuttunut historiaksi. Vielä parempi merkki olisi se, että seuraavan vuoden päästä lista on lyhyempi eikä vain paremmin nimetty.

## Lopuksi: työpari, ei pomo eikä orja

Yksi asia jää helposti taka-alalle, ellei sitä sano ääneen: agenttini ei korvaa minua.

Se ei kirjoita sähköpostejani puolestani, koska haluan tehdä sen itse. Se ei tee päätöksiä puolestani. Se ei ole esimies eikä automaattinen korvike omalle ajattelulleni.

Sen sijaan se tekee jotakin paljon hyödyllisempää. Se muistaa ne asiat, jotka itse helposti unohdan. Se hoitaa rutiinit, joita en mielelläni tee. Ja se pysyy hiljaa silloin, kun kaikki on kunnossa.

Siksi en ajattele sitä pomona enkä orjana. Ajattelen sitä **työparina**.

Jos tästä sarjasta jäisi mieleen vain yksi ajatus, toivoisin sen olevan tämä: **älä rakenna tekoälyä, joka tekee vaikutuksen — rakenna tekoälyä, johon voit luottaa**. Ja kun se toimii hyvin, anna sen olla hiljaa.

## Mitä tästä jäi jäljelle?

Vuosi oman agentin kanssa opetti, että näyttävyys on huono mittari. Paljon hyödyllisempiä ovat selkeät ja rehelliset statukset, selattava muisti, yksinkertainen rakenne ja virhekäytännöt, jotka eivät anna ongelmien jäädä piiloon.

Järjestelmä ei tule koskaan täysin valmiiksi, eikä sen tarvitsekaan. Riittää, että se ansaitsee luottamuksen vähän kerrallaan.

Kiitos, että luit koko sarjan.

---

**Haluatko rakentaa oman agentin — tai mieluummin välttää nämä kuopat ennen kuin ajat itse niihin?** [Katso koulutukset ja agenttisprintti](https://seise.org/#koulutukset), [ota yhteyttä](https://seise.org/#yhteys) tai [verkostoidutaan LinkedInissä](https://www.linkedin.com/in/mattiseise/), jos aihe kiinnostaa.
