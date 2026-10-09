---
title: "Näin tein oman selainapurin tekoälyn ja Tampermonkeyn avulla"
slug: "tampermonkey-tekoaly-kayttajaskripti"
part: 4
totalParts: 7
series: "Tekoäly opettajan hallintotyössä"
seriesSlug: "tekoaly-opettajan-hallintotyossa"
topic: "automation"
description: "Vaiheittainen ohje: ongelman rajaus, anonymisoitu HTML-esimerkki, tehtävänanto, skriptin asennus ja testaus."
keyword: "Wilma- ja itslearning-automaatiot"
date: "2026-10-10T00:00:00+03:00"
cover: "/images/blog/kausi-1-opettajan-hallintotyo/07-tampermonkey-editori-wilma-korostusscripti.jpg"
coverAlt: "Tampermonkeyn editori ja Wilman näkymää muokkaava käyttäjäskripti."
---

Kun näytän Wilman ja itslearningin korostuksia, kysymys on usein sama: miten tuollainen tehdään?

Käytin Tampermonkeytä. Se on selainlaajennus, joka ajaa pieniä JavaScript-ohjelmia valituilla verkkosivuilla. Näillä käyttäjäskripteillä voi korostaa merkintöjä, piilottaa sarakkeita tai lisätä oman valintapaneelin.

Tekoäly auttoi koodissa. Työnkulun ja testauksen jouduin määrittelemään itse.

## 1. Rajaa yksi muutos

Kirjoita ensin, mitä haluat. Esimerkiksi: ”Haluan, että suoritusnäkymän keskeneräinen merkintä korostuu vaaleanpunaisella.” Tai: ”Haluan itse valita tuntimerkintätaulukon näkyvät sarakkeet.”

Kirjoita myös, mitä skripti saa tehdä. Korostustyökalussa riittää näkymän tyylin muuttaminen. Se ei tarvitse lomakkeiden täyttöä, verkkopyyntöjä tai tallennuspainikkeita.

## 2. Selvitä sivun rakenne

Avaa haluttu näkymä itse. Napsauta kohdetta hiiren oikealla ja valitse **Tarkista / Inspect**. Selaimen kehittäjätyökalu näyttää kohteen HTML-elementin.

Tunnista kohteen luokka, sitä ympäröivä solu tai rivi sekä merkintä, jonka perusteella muutos tehdään. Pelkkä kuva ei aina kerro näitä. Kehittäjätyökalujen **Copy selector** voi auttaa, mutta pitkä, rivinumeroon sidottu valitsin voi hajota taulukon muuttuessa.

Tee tekoälylle pieni HTML-esimerkki. Korvaa nimet, opiskelijatunnukset, osoitteiden tunnisteet ja muut henkilötiedot keksityillä. Älä kopioi koko sivua. Lisää yksi tapaus, johon muutoksen pitää osua, ja yksi, johon sen ei pidä osua.

## 3. Pyydä skripti ja selitys

Tällainen runko toimii tehtävänantona:

> Tee Tampermonkey-käyttäjäskripti alla olevien anonymisoitujen HTML-esimerkkien perusteella. Tavoite: [yksi tarkka muutos]. Oikea kohde tunnistetaan näin: [ehto]. Skripti saa muuttaa vain näkymän tyylejä. Se ei saa tehdä verkkopyyntöjä, lähettää tietoja, muuttaa lomakekenttiä tai painaa painikkeita. Käytä mahdollisimman vakaata valitsinta. Jos sivun rakenne ei vastaa esimerkkiä, jätä se ennalleen. Lisää @match-rajaus vain oman palveluni osoitteeseen ja tarvittavaan näkymään. Selitä jokainen osa ja anna testitapaukset sekä ohje käytöstä poistamiseen.

[Saraketyökalussa](/blog/wilma-sarakkeiden-piilotus) lisään tähän valintapaneelin ja asetusten tallentamisen selaimeen. [Wilma-korostuksessa](/blog/wilma-keskeneraiset-suoritukset-nakyviin) ja [itslearning-korostuksessa](/blog/itslearning-arvioimattomat-palautukset) kuvaan tunnistusehdon niiden omissa kirjoituksissa.

## 4. Asenna Tampermonkey ja oma skripti

1. Avaa [Tampermonkeyn virallinen sivu](https://www.tampermonkey.net/) ja valitse oma selaimesi. Asenna laajennus sen osoittamasta selainkaupasta.
2. Avaa Tampermonkeyn valikko ja valitse **Create a new script / Luo uusi skripti**.
3. Korvaa editorin mallisisältö saamallasi koko käyttäjäskriptillä, myös alun `==UserScript==`-otsake mukana.
4. Tarkista `@match`: sen pitää osoittaa omaan palveluusi ja tarvittavaan näkymään. Älä jätä kohteeksi kaikkia verkkosivuja.
5. Lue tekoälyn selitys ja tarkista, että toteutus tekee vain pyytämäsi muutoksen. Tallenna editorin **File → Save** -toiminnolla.
6. Varmista hallintapaneelista, että skripti on käytössä. Lataa kohdesivu uudelleen.

![Tampermonkeyn editorissa avattu Wilman käyttäjäskripti](/images/blog/kausi-1-opettajan-hallintotyo/07-tampermonkey-editori-wilma-korostusscripti.jpg)

*Kuvassa on omaan ympäristööni rajattu skripti. Sen osoiterajaus ja valitsimet eivät ole yleispätevä asennuspaketti.*

Chromessa ja Edgessä skriptien suorittaminen voi vaatia laajennuksen tiedoista **Allow User Scripts / Salli käyttäjäskriptit** -asetuksen. Vanhemmissa selainversioissa tähän käytetään kehittäjätilaa. Ajantasainen menettely on [Tampermonkeyn ohjeessa](https://www.tampermonkey.net/faq.php?q=Q209). Hallinnoidulla työkoneella laajennuksen salliminen voi kuulua IT:lle.

## 5. Testaa yksi muutos kerrallaan

Katso ensin varmasti oikea osuma. Katso sitten valmis merkintä, tyhjä kohta ja muu vastaavan näköinen elementti. Lataa sivu uudelleen. Kokeile myös näkymän päivittymistä ja toista taulukkoa.

Jos jokin menee väärin, kerro tekoälylle havainto täsmällisesti: ”Valmis suoritus korostuu myös. Tässä on sen anonymisoitu rakenne.” Epämääräinen ”ei toimi” ei vielä kerro, mikä pitää korjata.

## Jos mitään ei tapahdu

Tarkista ensin, että skripti on päällä ja sivun osoite sopii `@match`-rajaukseen. Varmista selaimen lupa suorittaa käyttäjäskriptejä. Sen jälkeen tarkista, löytääkö valitsin enää oikean elementin. Sivun sisältö voi myös latautua vasta myöhemmin tai olla kehyksen sisällä.

Älä korjaa tätä laajentamalla skriptiä kaikille sivuille. Selvitä, mikä rajaus tai tunnistus on väärä.

## Poista käytöstä ja palauta näkymä

Avaa Tampermonkeyn hallintapaneeli, kytke kyseinen skripti pois ja lataa sivu uudelleen. Tyylimuutos katoaa. Saraketyökalun tallennettu valinta voi jäädä selaimeen, mutta pois päältä oleva skripti ei käytä sitä.

Näihin kirjoituksiin ei ole liitetty alkuperäisten korostus- ja sarakeskriptieni ladattavaa pakettia. Ohje on niiden toimintaperiaatteen toteuttamiseen omaan näkymään. Wilman ja itslearningin rakenteet sekä osoitteet vaihtelevat, joten oma testaus kuuluu käyttöönottoon.

Minulle tämä on ollut käytännöllinen tapa käyttää tekoälyä. Kuvaan yhden ärsyttävän työvaiheen ja rakennan siihen pienen apurin. Kun se toimii, minun ei tarvitse ajatella sitä joka kerta uudelleen.
