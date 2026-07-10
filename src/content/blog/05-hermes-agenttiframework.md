---
title: "Kaaoksesta kontrolliin: miksi vaihdoin koko agenttialustan"
slug: "hermes-agenttiframework"
part: 5
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "Vaihdoin agenttini OpenClaw'sta Hermekseen: yksi gateway, selattava muisti ja automaatiot, jotka vihdoin toimivat. Kaaoksesta kontrolliin."
keyword: "AI-agenttialusta"
date: "2026-06-18T08:00:00+03:00"
cover: "/images/blog/05-kaaos_kontrolli.jpg"
coverAlt: "Kaksi läppäriä: vasemmalla OpenClawin sekava punainen järjestelmäkaavio, oikealla Hermeksen siisti vihreä dashboard."
nosto: "Vaihdoin agenttini koko alustan yhdestä syystä: halusin käyttää järjestelmää, en korjata sitä joka toinen ilta. OpenClaw'sta Hermekseen siirtyminen tarkoitti matkaa 30 erillisestä palvelusta yhteen gatewayhin ja mustasta laatikosta kohti selattavaa muistia. Osa 5 kertoo, mitä muuttui — ja miksi paras merkki onnistumisesta oli se, että järjestelmä alkoi tuntua tylsältä. 👇"
---

Edellisissä osissa kerroin, miten ensimmäinen agenttijärjestelmäni kasvoi liian monimutkaiseksi. Se ei romahtanut komeasti savukoneen kanssa, vaan alkoi hiljalleen keksiä uusia tapoja epäonnistua: osa virheistä oli kalliita, osa hiljaisia ja osa suoraan vaarallisia.

Tässä osassa tullaan käännekohtaan. Jossain vaiheessa tajusin, etten enää rakentanut assistenttia. Ylläpidin infrastruktuuria. Se on hieno sana sille, että iltaisin saa tuijottaa lokia ja miettiä, miksi oma robotti taas murjottaa.

## Yksi syy riitti

Vaihdoin **OpenClaw'sta** **Hermekseen**. Hermes on Nous Researchin avoimen lähdekoodin agenttialusta, joka julkaistiin alkuvuodesta 2026. Se on mallista riippumaton, eli sen alla voi käyttää eri kielimalleja. Sen päälle on rakennettu muun muassa pysyvä muisti, automaattiset taidot, monikanavainen viestintä ja luonnollisen kielen ajastus.

Hyviä ominaisuuksia, kyllä. Ne eivät silti olleet varsinainen syy vaihtoon.

Syy oli arkisempi: **halusin agentin, jota voin käyttää, en järjestelmää, jota joudun jatkuvasti korjaamaan**.

Siitä päätöksestä loput sitten seurasivat.

## Mikä muuttui konkreettisesti?

### Yksi gateway korvasi 30 launchd-palvelua

Hermes hoitaa Telegramin, Slackin, ajastetut työt ja webhookit natiivisti yhden prosessin kautta. Edellisessä järjestelmässä jokainen kanava, synkronointi ja taustatyö oli oma palvelunsa omine watchdogeineen.

Tämä vähensi liikkuvien osien määrää kunnolla. Ja kun liikkuvia osia on vähemmän, on myös vähemmän paikkoja, joissa jokin voi hajota hiljaa ja odottaa, että huomaan sen vasta laskusta tai tyhjästä inboxista.

### Mustasta laatikosta kohti selattavaa muistia

Vanha vektorikanta oli sama 376 megatavun kulupommi, josta kerroin osassa 3. Se alkoi väistyä markdown-pohjaisen muistin tieltä. Uutta muistia voin selata Obsidianissa samalla tavalla kuin tavallisia muistiinpanoja.

Tämä muutti luottamusta paljon. Haku on paikallinen, eikä jokainen kysely ole rajapintakutsu. Vielä olennaisempaa on se, että voin tarkistaa, mitä agentti "muistaa" minusta. Avaan tiedoston ja luen sen. Ei erityisen futuristista, mutta erittäin rauhoittavaa.

Muisti, jota ei voi tarkistaa, ei ole oikeastaan muisti. Se on uskon asia. Agentille, jolle aikoo delegoida oikeita tehtäviä, usko on vähän huono käyttöliittymä.

Rehellisyyden vuoksi: vanha vektorivarasto ei ole vielä kokonaan poissa. Sähköpostin louhinta ja osa vanhasta sisällöstä elävät siellä edelleen. Selattava muisti on kuitenkin suunta, johon tämä on menossa. Kyse on siirtymästä, ei valmiista lopputilasta.

### Kolmesta tehtävälistasta kohti yhtä näkymää

Mission Control, MC2 ja markdown-silta sulautuivat pääosin yhteen näkymään. Suurin osa siitä kirjanpitotaakasta, josta kerroin osassa 2, katosi.

Rajat eivät ole vielä täydellisiä. Sama tehtävä voi edelleen joskus päätyä kahteen paikkaan. Silti ero entiseen kolmen rinnakkaisen inboxin sekamelskaan on iso. Nyt tehtävienhallinta tuntuu taas välineeltä, ei omalta lemmikkiprojektiltaan, joka syö omistajansa ajan.

## Kun järjestelmä alkoi tuntua oikealta — eli tylsältä

Parhaat onnistumiset eivät tuntuneet futuristisilta. Ne tuntuivat siltä, että jokin aiemmin ärsyttävä asia vain lakkasi olemasta ongelma.

### Jumppavaraukset jatkuivat ilman draamaa

Osassa 2 kuvaamani jumppavarausten automaatio jatkoi toimintaansa alustanvaihdon jälkeen. Tunnit varautuvat itsestään, ja agentti varmistaa maanantaisin, että viikon varaukset menivät oikein.

Onnistunut automaatio ei tunnu taikuudelta. Se vain poistaa saman turhan klikkauksen viikosta toiseen. Tässä iässä sekin lasketaan jo hyvinvoinniksi.

### Matkavalmistelut muuttuivat näkyviksi

Lontoon-matkaa varten agentti loi automaattisesti kortin, jossa luki **67 prosenttia valmiina**. Se löysi lennot ja listasi, mitä vielä puuttui.

En luottanut siihen heti. Ennen käyttöönottoa 31 testiä meni läpi. Vasta sen jälkeen uskalsin antaa sen seurata matkavalmisteluja oikeasti. Luottamus on kiva sana, mutta testit ovat parempia.

### Sähköpostit alkoivat järjestyä itsestään

Saapuva posti alkoi lajittua kategorioihin, kuten taloyhtiöön, OAJ-asioihin ja muihin toistuviin aiheisiin. Minun ei tarvinnut enää tehdä samaa lajittelua käsin.

Tämä on pieni asia, mutta juuri tällaiset pienet asiat ratkaisevat, tuntuuko agentti arjessa hyödylliseltä vai vain hienolta rakennelmalta, jota esitellään kerran ja vältellään sen jälkeen.

### Virheilmoituksista tuli ymmärrettäviä

Ilmaispelien automaattinen lunastaja on hyvä esimerkki pienestä automaatiosta, joka muuttuu nopeasti ärsyttäväksi, jos se epäonnistuu huonosti.

Sen tehtävä on yksinkertainen: tarkistaa palvelut, joissa jaetaan määräaikaisia ilmaispelejä, ja lunastaa ne automaattisesti ennen kuin tarjous päättyy. Käytännössä tämä tarkoittaa esimerkiksi Epic Gamesin viikoittaisia ilmaispelijakoja, Prime Gamingin pelietuja ja GOGin kampanjapelejä.

Miksi tällaista edes kannattaa automatisoida? Koska ilmaispelit ovat usein aikarajattuja. Ne eivät välttämättä maksa mitään, mutta ne pitää muistaa käydä nappaamassa juuri oikealla viikolla. Jos sen tekee käsin, se on taas yksi pieni tarkistettava asia lisää. Jos sen automatisoi, pelikirjasto kasvaa taustalla ilman että minun tarvitsee käydä katsomassa kolmea eri kauppapaikkaa.

Ainakin teoriassa.

Käytännössä palvelut vaativat kirjautumisia, selainistuntoja, evästeitä, joskus kaksivaiheista tunnistautumista ja välillä käyttöliittymiä, jotka muuttuvat ilman varoitusta. Epicin ostosnappi voi latautua iframeen, Prime Gaming voi vaatia tilin linkitystä, GOG voi yksinkertaisesti unohtaa kirjautumisen. Automaatio ei siis epäonnistu abstraktisti. Se epäonnistuu hyvin arkisesti: selain ei ole enää kirjautuneena, nappia ei löydy, ostosikkuna ei lataudu tai palvelu jää odottamaan käyttäjää.

Alkuperäinen ongelma oli, että tällainen epäonnistuminen näkyi minulle konekielisenä roskana. Viestikanavaan saattoi tulla 240 sekunnin aikakatkaisu, pitkä virhepino ja teknisiä rivejä siitä, mikä Playwrightin tai selaimen sisällä meni pieleen. Se oli totta, mutta hyödytöntä.

Minun ei tarvitse tietää ensimmäisenä, että `locator.click` odotti nappia 90 sekuntia tai että headless-selain jäi kirjautumisruutuun. Minun pitää tietää, mitä seuraavaksi pitää tehdä.

Siksi virheilmoitukset muutettiin ihmisen kokoisiksi.

Jos Epic, Prime tai GOG ei ole enää kirjautuneena, viestin pitää sanoa suoraan: **kirjautuminen tarvitaan**. Jos Prime Gamingin ulkoisen pelikoodin haku epäonnistuu, mutta Prime-sisäinen lunastus onnistui, sen pitää sanoa sekin. Jos yksi Epic-peli jäi jumiin ostosikkunaan mutta toinen ehti lunastua, raportin pitää erottaa nämä toisistaan eikä väittää koko ajoa epäonnistuneeksi.

Tämä on edellisen osan oppi käytännössä: virheilmoituksen pitää kertoa seuraava järkevä toimenpide, ei vain näyttää, että koneella on paha päivä.

Huono virheilmoitus sanoo:

> Timeout 240000ms exceeded.

Parempi virheilmoitus sanoo:

> Epic-kirjautuminen on vanhentunut. Avaa selain näkyvänä ja kirjaudu sisään uudelleen.

Ensimmäinen on todiste siitä, että automaatio kaatui. Toinen on ohje, jolla ihminen saa sen takaisin töihin.

### Lomamoodi vähensi turhaa työtietoa

Toinen pieni mutta käytännössä tärkeä parannus oli lomamoodi.

Kirjoitan tätä lomalta. Se tarkoittaa, että en halua aamulla järjestelmältä samaa näkymää kuin työpäivänä. Normaalisti dashboard voi näyttää työasioita: työkalenteria, työmatkakeliä, työpäivään liittyviä muistutuksia ja muita asioita, joista on hyötyä arkena. Lomalla ne ovat lähinnä melua.

Tätä varten dashboardin työvalikko kytkeytyi pois automaattisesti loman ajaksi. Aamubriiffi ei enää yritä valmistella minua työpäivään, jota ei ole. Se näyttää yleissään, ei työmatkakeliä. Se ei työnnä työasioita eteen vain siksi, että ne teknisesti olisivat saatavilla.

Tämä kuulostaa pieneltä käyttöliittymäasialta, mutta ero on iso. Huono automaatio on innokas kaikissa tilanteissa. Se näyttää kaiken, mitä se tietää, koska se ei ymmärrä tilannetta. Parempi automaatio osaa olla hiljaa.

Jos olen töissä, työvalikko on hyödyllinen. Jos olen lomalla, sama valikko on turha muistutus siitä, mistä yritän olla hetken irti. Agentin ei pidä vain kerätä tietoa. Sen pitää ymmärtää, milloin tieto kannattaa jättää näyttämättä.

Tämä on pieni voitto sekä teknisesti että verenpaineen kannalta. Järjestelmä ei muuttunut älykkääksi siksi, että se lisäsi uuden näkymän. Se muuttui paremmaksi siksi, että se osasi poistaa väärän näkymän oikealla hetkellä.

## Mutta vaihto ei ollut taikatemppu

En halua antaa alustanvaihdosta liian siistiä kuvaa. Se olisi epärehellistä ja myös vähän epäilyttävää.

Kyse ei ollut puhtaasta leikkauksesta, jossa vanha järjestelmä katosi ja tilalle ilmestyi virheetön uusi rakennelma. OpenClaw'n kaaosta on purettu paljon, ja kontrolli on parantunut selvästi. Siirtymä on silti edelleen kesken.

Käytännössä keskeneräisyys näkyy kolmessa paikassa:

- osa Hermeksen ajastetuista töistä pyörittää edelleen vanhoja OpenClaw-skriptejä taustalla,
- muisti on siirtymässä mustasta laatikosta selattavaan vaultiin, mutta työ ei ole täysin valmis,
- tehtäväjärjestelmän rajat ovat paremmat kuin ennen, mutta eivät vielä täysin pitävät.

Tämä ei ole epäonnistuminen. Se on välivaihe, jonka tunnistaminen on hyödyllisempää kuin sen lakaisu maton alle.

Kun joku seuraavan kerran esittelee "täysin kivutonta migraatiota", kannattaa kysyä, mikä osa vanhasta jäi elämään pinnan alle. Jotakin jää lähes aina. Olennaisinta on tietää, mitä jäi — ei teeskennellä, ettei mitään jäänyt.

## Mitä tekisin uudelleen?

Jos olisin jälleen jumissa liian monimutkaisen agenttijärjestelmän kanssa, tekisin kolme asiaa samalla tavalla uudelleen:

1. **Valitse alusta, joka hoitaa peruskanavat puolestasi.** Älä rakenna ja ylläpidä itse Telegram-, Slack- ja cron-liimaa, jos valmis framework tekee sen vakaammin.
2. **Tee muistista selattava.** Jos et voi avata ja lukea, mitä agentti tietää, et voi kunnolla luottaa siihen etkä korjata sitä.
3. **Mittaa onnistumista tylsyydellä.** Mitä vähemmän järjestelmä vaatii huomiotasi, sitä parempi se on. Jännitys on automaatiossa usein merkki siitä, että jokin on rikki.

## Mitä tästä jäi käteen?

En vaihtanut alustaa siksi, että Hermes olisi ollut muodikkaampi. Vaihdoin, koska halusin lakata olemasta järjestelmäni ylläpitäjä ja alkaa olla sen käyttäjä.

Se onnistui suurelta osin. Yksi gateway, pääosin selattava muisti ja pienempi joukko taitoja korvasivat kolmenkymmenen palvelun viidakon. Yksinkertaisempi versio teki lopulta enemmän hyödyllistä työtä kuin monimutkainen.

Samalla on rehellistä sanoa, ettei "kaaoksesta kontrolliin" tarkoittanut "kaaoksesta valmiiksi". Kontrolli parani, mutta järjestelmä ei muuttunut täydelliseksi. Harmillista kyllä, tekninen velka ei ymmärtänyt poistua kohteliaasti takaovesta.

Viimeisessä osassa kokoan, mitä tästä kaikesta jäi käteen — ja mikä on edelleen kesken.

---

**Onko teidän agenttinne oikeassa päivittäisessä käytössä vai lähinnä demona?** Jos haluat rakentaa agentin, jonka kanssa voi elää arkea eikä vain pitää esitystä, [katso agenttisprintti](https://seise.org/#koulutukset).
