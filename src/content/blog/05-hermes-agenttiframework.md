---
title: "Kaaoksesta kontrolliin: miksi vaihdoin koko agenttialustan"
slug: "hermes-agenttiframework"
part: 5
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "Vaihdoin agenttini OpenClaw'sta Hermekseen: yksi gateway, selattava muisti ja automaatiot, jotka vihdoin toimivat. Kaaoksesta kontrolliin."
keyword: "AI-agenttiframework"
date: "2026-06-23"
cover: "/images/blog/05-kaaos_kontrolli.jpg"
coverAlt: "Kaksi läppäriä: vasemmalla OpenClawin sekava punainen järjestelmäkaavio, oikealla Hermeksen siisti vihreä dashboard."
nosto: "Vaihdoin agenttini koko alustan yhdestä syystä: halusin käyttää järjestelmää, en korjata sitä. OpenClaw'sta Hermekseen siirtyminen tarkoitti matkaa 30 erillisestä palvelusta yhteen gatewayhin ja mustasta laatikosta kohti selattavaa muistia. Osa 5 kertoo, mitä muuttui — ja miksi paras merkki onnistumisesta oli se, että järjestelmä alkoi tuntua tylsältä. 👇"
---

Edelliset osat kuvasivat, miten ensimmäinen agenttijärjestelmäni kasvoi liian monimutkaiseksi. Se alkoi vähitellen keksiä yhä uusia tapoja epäonnistua: osa virheistä oli kalliita, osa hiljaisia ja osa suoraan vaarallisia.

Tässä osassa kerron käännekohdasta. Jossain vaiheessa tajusin, etten enää rakentanut assistenttia. Ylläpidin infrastruktuuria. Se ei ollut se tavoite, jonka vuoksi olin lähtenyt rakentamaan agenttia.

## Yksi syy oli muita tärkeämpi

Vaihdoin **OpenClaw'sta** **Hermekseen**. Hermes on Nous Researchin avoimen lähdekoodin agenttiframework, joka julkaistiin alkuvuodesta 2026. Se on mallista riippumaton, eli sen alla voi käyttää eri kielimalleja. Sen päälle on rakennettu muun muassa pysyvä muisti, automaattiset taidot, monikanavainen viestintä ja luonnollisen kielen ajastus.

Nämä tekniset ominaisuudet eivät kuitenkaan olleet varsinainen syy vaihtoon.

Tärkein syy oli yksinkertaisempi: **halusin agentin, jota voin käyttää, en järjestelmää, jota joudun jatkuvasti korjaamaan**.

Kaikki muu seurasi tästä periaatteesta.

## Mikä muuttui konkreettisesti?

### Yksi gateway korvasi 30 launchd-palvelua

Hermes hoitaa Telegramin, Slackin, ajastetut työt ja webhookit natiivisti yhden prosessin kautta. Edellisessä järjestelmässä jokainen kanava, synkronointi ja taustatyö oli oma palvelunsa omine watchdogeineen.

Tämä muutos vähensi liikkuvien osien määrää merkittävästi. Ja kun liikkuvia osia on vähemmän, myös hiljaisen hajoamisen paikkoja on vähemmän.

### Mustasta laatikosta kohti selattavaa muistia

Vanha vektorikanta oli sama 376 megatavun kulupommi, josta kerroin osassa 3. Se alkoi väistyä markdown-pohjaisen muistin tieltä. Uutta muistia voin selata Obsidianissa samalla tavalla kuin tavallisia muistiinpanoja.

Tämä muutti luottamuksen kannalta paljon. Haku on paikallinen, eikä jokainen kysely ole rajapintakutsu. Vielä tärkeämpää on se, että voin tarkistaa, mitä agentti "muistaa" minusta. Avaan tiedoston ja luen sen.

Muisti, jota ei voi tarkistaa, ei ole oikeastaan muisti. Se on uskon asia. Agentille, jolle aikoo delegoida oikeita tehtäviä, usko ei riitä.

Rehellisyyden vuoksi on sanottava, ettei vanha vektorivarasto ole vielä kokonaan poissa. Sähköpostin louhinta ja osa vanhasta sisällöstä elävät siellä edelleen. Selattava muisti on kuitenkin ensisijainen suunta. Kyse on siirtymästä, ei valmiista lopputilasta.

### Kolmesta tehtävälistasta kohti yhtä näkymää

Mission Control, MC2 ja markdown-silta sulautuivat pääosin yhteen näkymään. Suurin osa siitä kirjanpitotaakasta, josta kerroin osassa 2, katosi.

Rajat eivät ole vielä täydellisiä. Sama tehtävä voi edelleen joskus päätyä kahteen paikkaan. Silti ero entiseen kolmen rinnakkaisen inboxin sekamelskaan on suuri. Nyt tehtävienhallinta tuntuu taas välineeltä, ei omalta ylläpidettävältä järjestelmältään.

## Kun järjestelmä alkoi tuntua oikealta — eli tylsältä

Parhaat onnistumiset eivät tuntuneet futuristisilta. Ne tuntuivat siltä, että jokin aiemmin ärsyttävä asia vain lakkasi olemasta ongelma.

### Jumppavaraukset jatkuivat ilman draamaa

Osassa 2 kuvaamani jumppavarausten automaatio jatkoi toimintaansa alustanvaihdon jälkeen. Tunnit varautuvat itsestään, ja agentti varmistaa maanantaisin, että viikon varaukset menivät oikein.

Onnistunut automaatio ei tunnu taikuudelta. Se vain poistaa saman turhan klikkauksen viikosta toiseen.

### Matkavalmistelut muuttuivat näkyviksi

Lontoon-matkaa varten agentti loi automaattisesti kortin, jossa luki **67 prosenttia valmiina**. Se löysi lennot ja listasi, mitä vielä puuttui.

En luottanut siihen heti. Ennen käyttöönottoa 31 testiä meni läpi. Vasta sen jälkeen uskalsin antaa sen seurata matkavalmisteluja oikeasti.

### Sähköpostit alkoivat järjestyä itsestään

Saapuva posti alkoi lajittua kategorioihin, kuten taloyhtiöön, OAJ-asioihin ja muihin toistuviin aiheisiin. Minun ei tarvinnut enää tehdä samaa lajittelua käsin.

Tämä on pieni asia, mutta juuri tällaiset pienet asiat ratkaisevat, tuntuuko agentti arjessa hyödylliseltä.

### Virheilmoituksista tuli ymmärrettäviä

Ilmaispelien automaattinen lunastaja ei enää kaada viestikanavaan 240 sekunnin aikakatkaisua ja konekielistä virhepinoa. Jos kirjautuminen on vanhentunut, se sanoo yksinkertaisesti: **kirjautuminen tarvitaan**.

Tämä on edellisen osan oppi käytännössä: virheilmoituksen pitää kertoa seuraava järkevä toimenpide, ei vain paljastaa teknistä sotkua.

### Lomamoodi vähensi turhaa työtietoa

Kirjoitan tätä lomalta. Dashboardin työvalikko kytkeytyi pois automaattisesti loman ajaksi. Aamubriiffi näyttää nyt yleissään, ei työmatkakeliä.

Agentti tietää, että olen poissa töistä, eikä tarjoa minulle työasioita silloin, kun en niitä tarvitse.

## Mutta vaihto ei ollut taikatemppu

En halua antaa alustanvaihdosta liian siistiä kuvaa. Se olisi epärehellistä ja epäuskottavaa.

Kyse ei ollut puhtaasta leikkauksesta, jossa vanha järjestelmä katosi ja tilalle ilmestyi virheetön uusi kokonaisuus. OpenClaw'n kaaosta on purettu paljon, ja kontrolli on parantunut selvästi. Siirtymä on silti edelleen kesken.

Käytännössä keskeneräisyys näkyy kolmessa paikassa:

- osa Hermeksen ajastetuista töistä pyörittää edelleen vanhoja OpenClaw-skriptejä taustalla,
- muisti on siirtymässä mustasta laatikosta selattavaan vaultiin, mutta työ ei ole täysin valmis,
- tehtäväjärjestelmän rajat ovat paremmat kuin ennen, mutta eivät vielä täysin pitävät.

Tämä ei ole epäonnistuminen. Se on rehellinen välivaihe.

Kun joku seuraavan kerran esittelee "saumatonta migraatiota", kannattaa kysyä, mikä osa vanhasta jäi elämään pinnan alle. Jotakin jää lähes aina. Tärkeintä on tietää, mitä jäi — ei piilottaa sitä.

## Mitä migraatiosta kannattaa oppia?

Jos olisin jälleen jumissa liian monimutkaisen agenttijärjestelmän kanssa, tekisin kolme asiaa samalla tavalla uudelleen:

1. **Valitse alusta, joka hoitaa peruskanavat puolestasi.** Älä rakenna ja ylläpidä itse Telegram-, Slack- ja cron-liimaa, jos valmis framework tekee sen vakaammin.
2. **Tee muistista selattava.** Jos et voi avata ja lukea, mitä agentti tietää, et voi kunnolla luottaa siihen etkä korjata sitä.
3. **Mittaa onnistumista tylsyydellä.** Mitä vähemmän järjestelmä vaatii huomiotasi, sitä parempi se on. Jännitys on automaatiossa usein merkki siitä, että jokin on rikki.

## Yhteenveto

En vaihtanut alustaa siksi, että Hermes olisi ollut muodikkaampi. Vaihdoin, koska halusin lakata olemasta järjestelmäni ylläpitäjä ja alkaa olla sen käyttäjä.

Se tavoite toteutui suurelta osin. Yksi gateway, pääosin selattava muisti ja pienempi joukko taitoja korvasivat kolmenkymmenen palvelun viidakon. Yksinkertaisempi versio teki lopulta enemmän hyödyllistä työtä kuin monimutkainen.

Samalla on rehellistä sanoa, ettei "kaaoksesta kontrolliin" tarkoittanut "kaaoksesta valmiiksi". Kontrolli parani, mutta järjestelmä ei muuttunut täydelliseksi.

Viimeisessä osassa kokoan, mitä tästä kaikesta jäi käteen — ja mikä on edelleen kesken.

---

**Onko teidän agenttinne demo vai tuotantokäytössä oleva järjestelmä?** Rakennan agentteja, jotka kestävät päivittäistä käyttöä eivätkä vain näytä hyvältä esittelyssä. [Katso agenttisprintti](https://seise.org/#koulutukset).
