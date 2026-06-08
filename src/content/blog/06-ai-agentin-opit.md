---
title: "Agenttijärjestelmä ei ole projekti vaan prosessi: vuoden tärkeimmät opit"
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
nosto: "Vuosi oman AI-agentin rakentamista opetti minulle ennen kaikkea tämän: järjestelmä ei tule koskaan lopullisesti valmiiksi. Tässä osassa kokoan neljä tärkeintä oppia luotettavuudesta ja luottamuksesta — sekä rehellisen listan siitä, mikä on edelleen kesken. Jos en halua agenttini piilottelevan virheitä, en voi tehdä niin itsekään. 👇"
---

Olen käyttänyt reilun vuoden oman tekoälyagentin rakentamiseen, hajottamiseen ja rakentamiseen uudelleen. Tämä on sarjan viimeinen osa, ja siksi kokoan tähän ne tärkeimmät opit, jotka koko matka jätti käteen — sekä ne kohdat, joissa työ on edelleen kesken.

Tärkein oivallus on yksinkertainen: **agenttijärjestelmä ei ole projekti, jolla on selkeä valmistumispäivä**. Se on jatkuva prosessi. Se elää, muuttuu ja vaatii huomiota myös sen jälkeen, kun ensimmäinen toimiva versio on jo käytössä. Tämä ei ole epäonnistuminen. Se on normaali osa sitä, mitä tapahtuu, kun järjestelmää käytetään oikeassa arjessa eikä vain demossa.

## Opit, jotka jäivät käteen

### 1. Laatu voittaa hypen

Tärkein dokumenttini ei ole mikään yksittäinen taito, integraatio tai automaatio. Se on **luotettavuusprotokolla**.

Clausilla on vain kolme sallittua statusta:

- **ei tehty**
- **todennäköisesti korjattu**
- **korjattu**

Sanaa **korjattu** ei saa käyttää ilman näyttöä. Jos kyse on käyttäjälle näkyvästä virheestä, kuittaukseen tarvitaan todiste: esimerkiksi kuvakaappaus, onnistunut tarkistus tai muu selkeä vahvistus. Pelkkä arvio siitä, että "tämän pitäisi nyt toimia", ei riitä.

Luotettavuusprotokollan suosikkirivini on tämä: **optimismi ei ole todiste**.

Käytännössä tämä näkyy viestinnässä näin. Kun Claus oli nostanut kaatuneen palvelun takaisin pystyyn, se ei ilmoittanut: "korjattu, pitäisi toimia nyt". Sen sijaan viesti kuului näin: "MC on taas ylhäällä. Validointi: restart-skripti meni läpi, Tailscale osoittaa oikeaan porttiin ja localhost vastaa HTTP 200."

Ero voi kuulostaa pieneltä, mutta käytännössä se on ratkaiseva. Ensimmäinen on toive. Toinen on todiste. Juuri tällaisen viestin perusteella uskallan antaa agentille seuraavalla kerralla enemmän vastuuta.

### 2. Muisti on luottamuksen perusta

Jos et voi tarkistaa, mitä agentti muistaa, et koskaan uskalla delegoida sille mitään oikeasti tärkeää.

Siksi vaihdoin mustan laatikon selattavaan muistiin. En halunnut järjestelmää, joka vain väittää muistavansa asioita. Halusin järjestelmän, jonka muistin voin itse avata, lukea ja arvioida.

Luottamus ei synny siitä, että agentti kuulostaa vakuuttavalta. Luottamus syntyy siitä, että voin tarkistaa, onko se oikeassa.

### 3. Yksinkertaisempi järjestelmä on lähes aina parempi

Yksi gateway, selattava muisti ja muutama hyvin rajattu taito toimivat käytännössä paremmin kuin kolmekymmentä erillistä palvelua, joista jokaisella on oma watchdoginsa ja oma tapansa hajota.

Joka kerta kun järjestelmään lisätään uusi osa, lisätään samalla myös uusi paikka, jossa jokin voi rikkoutua. Ja jos rikkoutuminen tapahtuu taustalla, se voi jäädä huomaamatta pitkäksikin aikaa.

Monimutkaisuus ei siis ole vain tehon hinta. Se on myös riski, joka alkaa yleensä näkyä silloin, kun järjestelmän pitäisi toimia huomaamattomasti.

### 4. Hiljainen epäonnistuminen on pahin epäonnistuminen

Virhe ei ole pahin asia, mitä agenttijärjestelmässä voi tapahtua. Pahinta on se, että virhe jää piiloon.

Otan mieluummin yhden selkeän, analysoidun virheviestin kuin täydellisen hiljaisuuden. Tämä on sama sääntö, jonka annoin agentilleni ja jota yritän itsekin noudattaa: **virheen saa tehdä, mutta sitä ei saa piilotella**.

Hiljainen epäonnistuminen on vaarallista siksi, että se näyttää onnistumiselta tai ainakin normaalilta toiminnalta. Juuri siksi se on vaikein huomata ja usein myös kallein korjata.

## Mikä on edelleen kesken — rehellisesti

Jos en halua piilotella virheitä, en halua piilotella myöskään keskeneräisyyttä.

On kuitenkin tärkeää huomata, mitä tämä keskeneräisyys tarkoittaa. Kyse ei ole ennen kaikkea puuttuvista ominaisuuksista tai "kivoista lisätoiminnoista". Kyse on **luotettavuusvelasta**. Se on agenttijärjestelmän todellinen keskeneräisyys: ne kohdat, joissa järjestelmään ei vielä voi täysin luottaa.

### Token- ja mallivuodot eivät ole vielä täysin hallinnassa

Järjestelmän pitäisi käyttää ensisijaisesti yhtä edullista mallireittiä. Silti kustannuksia syntyy yhä paikoista, joita ei huomaa yhdellä vilkaisulla. Näitä ovat esimerkiksi:

- cron-ajojen mallikentät,
- skriptien omat provider-asetukset,
- käynnissä olevat sessiot,
- fallbackit eli varareitit.

Tätä varten järjestelmässä on jo oma valvontansa, mutta jo se kertoo ongelman luonteesta: tarvitaan vahti varmistamaan, ettei toinen vahti käytä väärää mallia väärässä paikassa.

### Fallback on edelleen varovasti kahlittu

Automaattinen mallinvaihto ei ole vielä elegantisti ratkaistu. Tällä hetkellä se lähinnä mittaa, lokittaa ja hälyttää. Se ei vielä uskalla vaihtaa mallia itsenäisesti, koska osassa 4 kuvattu 7900 prosentin käyttöaste rikkoi luottamuksen tähän mekanismiin kerran jo perusteellisesti.

Toisin sanoen järjestelmässä on kyllä hälytin, mutta varsinainen automaattinen sammutus- tai suojausjärjestelmä ei ole vielä kytketty täysin käyttöön.

### Legacy-OpenClaw elää edelleen Hermeksen alla

Käyttöliittymä ja gateway ovat nyt Hermeksessä, mutta osa cron-ajastuksista käyttää edelleen vanhoja OpenClaw-polkuja ja skriptejä.

Ratkaisu toimii, mutta sen alla kulkee yhä vanhaa verisuonistoa. Arkkitehtuuri ei siis ole vielä täysin puhdas, vaikka päällimmäinen käyttökokemus onkin jo muuttunut selvästi paremmaksi.

### Muisti ei ole vielä täysin konsolidoitu

Selattava vault on nyt ensisijainen muisti, mutta vanha vektorivarasto ei ole vielä kokonaan poistunut käytöstä. Esimerkiksi sähköpostin louhinta ja osa vanhasta sisällöstä elävät siellä edelleen.

Siksi on rehellisempää sanoa, että **musta laatikko on korvautumassa markdown-pohjaisella muistilla**, kuin väittää, että siirtymä olisi jo täysin valmis.

### Cron-ajojen kokonaisuus ei ole vielä yhdellä silmäyksellä ymmärrettävä

Tilanne on parempi kuin ennen, mutta ei vielä yksinkertainen. Osa cron-ajastuksista on tavallisia skriptejä ilman agenttia, osa käyttää kielimallia, osa näyttää provider-kenttiä, joita ne eivät oikeasti käytä, ja osa skripteistä käyttää omia ympäristömuuttujiaan.

Tämä tekee kustannusten ja virheiden diagnosoinnista edelleen turhan hankalaa. Liian usein ongelma löytyy vasta siinä vaiheessa, kun joku kysyy: "miksi tästä tuli laskua?"

### Tehtäväjärjestelmän rajat eivät ole vielä täysin pitävät

Kanban, Notion ja automaattiset agenttityöt on eroteltu nykyään paljon selkeämmin kuin OpenClaw-aikana. Silti sama asia voi edelleen joskus päätyä kahteen paikkaan.

Ongelma ei siis ole enää se sama sekava kolmen inboxin tilanne, josta kirjoitin osassa 2. Nyt ongelma on hienovaraisempi: rajat ovat paremmat, mutta eivät vielä täysin idioottivarmat.

### Automaatiot riippuvat edelleen ulkoisten palveluiden sessioista

Jumppavaraukset, sähköposti, pelilunastajat, kalenterit ja Notion toimivat kaikki vain niin kauan kuin tokenit, evästeet ja käyttöoikeudet pysyvät kunnossa.

Järjestelmä osaa nykyään jo kertoa selkeästi, jos kirjautuminen täytyy uusia. Se ei kuitenkaan poista sitä perusfaktaa, että automaatiot ovat yhä riippuvaisia ulkoisten palveluiden istunnoista ja oikeuksista.

### Oikea itsekorjaus on edelleen kesken

Järjestelmä osaa havaita paljon ja raportoida paljon. Sen sijaan turvallinen automaattinen korjaaminen on edelleen tarkoituksella rajattu.

Syy on selvä: agentti ei saa sahata omaa oksaansa. Gatewayn uudelleenkäynnistykset, mallinvaihdot ja provider-konfiguraatiot ovat yhä liian riskialttiita toimia siihen, että ne voisi antaa täysin automaattisesti agentin hoidettaviksi ilman ihmisen hyväksyntää.

Tämä ei ole puute vaan tietoinen rajoitus. Luotettavuus on tässä tärkeämpää kuin näyttävä autonomia.

## Mitä tämä keskeneräisyys oikeastaan kertoo?

Tämä lista ei nolota minua. Päinvastoin pidän sitä hyödyllisenä mittarina.

Se kertoo, että mittaan järjestelmän keskeneräisyyttä oikealla tavalla. En kysy ensimmäisenä, mitä ominaisuuksia vielä puuttuu. Kysyn, missä luotettavuus, kustannusnäkyvyys ja arkkitehtuurin siisteys eivät vielä ole sillä tasolla, jolla niiden pitäisi olla.

Juuri tämä on agenttijärjestelmän todellinen työlista.

## Lopuksi: työpari, ei pomo eikä orja

Tärkein asia jää ehkä helpoimmin taka-alalle, ellei sitä sano ääneen: agenttini ei korvaa minua.

Se ei kirjoita sähköpostejani puolestani, koska haluan tehdä sen itse. Se ei tee päätöksiä puolestani. Se ei ole esimies eikä automaattinen korvike omalle ajattelulleni.

Sen sijaan se tekee jotakin paljon hyödyllisempää. Se muistaa ne asiat, jotka itse helposti unohdan. Se hoitaa rutiinit, joita en mielelläni tee. Ja se pysyy hiljaa silloin, kun kaikki on kunnossa.

Siksi en ajattele sitä pomona enkä orjana. Ajattelen sitä **työparina**.

Jos tästä koko sarjasta jäisi mieleen vain yksi ajatus, toivoisin sen olevan tämä: **älä rakenna tekoälyä, joka tekee vaikutuksen — rakenna tekoälyä, johon voit luottaa**. Ja kun se toimii hyvin, anna sen olla hiljaa.

## Yhteenveto

Vuosi oman agentin kanssa opetti, että sen arvo ei synny näyttävyydestä vaan luotettavuudesta. Tärkeintä ovat selkeät ja rehelliset statukset, selattava muisti, yksinkertainen rakenne ja sellaiset virhekäytännöt, jotka eivät anna ongelmien jäädä piiloon.

Järjestelmä ei tule koskaan täysin valmiiksi, eikä sen tarvitsekaan. Riittää, että se ansaitsee luottamuksen vähän kerrallaan.

Kiitos, että luit koko sarjan.

---

**Haluatko rakentaa oman agentin — tai välttää nämä kahdeksan kuoppaa ilman, että ajat itse niihin?** Autan sekä kouluttajana että konsulttina: [tutustu koulutuksiin ja agenttisprinttiin](https://seise.org/#koulutukset) tai [ota suoraan yhteyttä](https://seise.org/#yhteys). Ja jos aihe kiinnostaa, [verkostoidutaan LinkedInissä](https://www.linkedin.com/in/mattiseise/) — jatketaan keskustelua siellä.
