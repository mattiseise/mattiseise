---
title: "Kahdeksan kallista oppituntia, osa 1: kun tekoäly epäonnistuu hiljaa"
slug: "llm-kustannukset"
part: 3
totalParts: 6
series: "Oman AI-agentin rakentaminen"
seriesSlug: "oman-ai-agentin-rakentaminen"
description: "22 % viikon AI-budjetista paloi yhdessä yössä. Neljä kallista ja hiljaista virhettä oman tekoälyagentin rakentamisesta — ja mitä niistä oppi."
keyword: "LLM-kustannukset"
date: "2026-06-11T08:00:00+03:00"
cover: "/images/blog/03-karkaavat_kustannukset.jpg"
coverAlt: "Läppärin dashboard, jossa token-käyttögraafi piikkaa punaisena — karkaavat tekoälykustannukset."
nosto: "Yhdessä yössä taustatyö käytti 22 prosenttia viikon AI-budjetistani — ilman varoitusta ja ilman näkyvää virheilmoitusta. Se ei ollut yksittäinen poikkeus, vaan yksi neljästä kalliista virheestä, joissa ongelma ei ollut kaatuminen vaan hiljaisuus. Osa 3 käsittelee agentin vaarallisinta vikaa: sitä, että se voi epäonnistua niin siististi, ettei kukaan huomaa mitään. 👇"
---

Agentteja rakentaessa parhaat muistijäljet eivät yleensä synny niistä kerroista, kun kaikki meni oikein. Ne syntyvät niistä kerroista, kun järjestelmä teki väärän asian, liian kalliin asian tai ei tehnyt mitään — ja näytti silti ulospäin ihan tyytyväiseltä itseensä.

Minulle näitä kertyi kahdeksan. Tässä osassa on niistä ensimmäiset neljä. Ne olivat erilaisia virheitä, mutta sama vaiva toistui: sain tietää ongelmasta liian myöhään tai en ollenkaan.

Seuraavassa osassa mennään astetta ikävämpiin tapauksiin: niihin, joissa agentti ei vain epäonnistunut hiljaa, vaan oli vähällä sahata omaa oksaansa.

## 1. Kun 22 prosenttia viikkobudjetista kului yhdessä yössä

Tämä oli koko sarjan kallein läksy. Ei näyttävä katastrofi, vaan sellainen tavallinen automaatiovirhe, jossa laskuri tekee yön aikana oman pienen performanssinsa.

Eräs tekoälyistunto oli ajastettu heräämään taustalla joka toinen tunti ja tekemään lyhyen tilannekatsauksen. Ajatus oli ihan järkevä: agentti tarkistaa tilanteen säännöllisesti ja kertoo vain, jos jokin vaatii huomiota.

Ongelma oli siinä, mitä tapahtui jokaisella herätyksellä. Agentin piti tarkistaa kahden tunnin välein, että onhan se hereillä ja järjestelmä kunnossa. Koska olin sössinyt, agentti latasi koko muistijärjestelmäni kontekstiin: 376 megatavua vektoridataa. Koska suoritus ei ehtinyt ajaa tätä alun perin rutiinihommaksi suunniteltua toimintoa hitaalla paikallisella mallilla, se vaihtoi itse, minulta kysymättä, mallin kalleimpaan saatavilla olevaan malliin, jotta sai homman tehtyä. Se vain sattui kuluttamaan tekoälybudjettiani aivan älyttömän paljon.

Yksittäinen ajo ei näyttänyt dramaattiselta. Mutta kun sama raskas ajo toistui yön aikana neljä kertaa, kustannus kasvoi nopeasti. Aamulla kello kahdeksan 22 prosenttia koko viikon AI-budjetista oli jo käytetty.

Teknisesti mikään ei ollut rikki. Järjestelmä teki juuri sen, mitä olin käskenyt sen tehdä. Se vain teki sen tavalla, joka oli tuhansia kertoja kalliimpi kuin olin tarkoittanut. Pieni ero, jos sattuu pitämään rahasta.

**Mitä tästä jäi käteen:** muisti ei saa olla näkymätön kustannus. Jokainen automaattinen herätys, joka lataa suuren kontekstin, on toistuva lasku. Kustannus pitää nähdä ajoa kohti, ei vasta kuukauden lopussa. Kuukausiraportti on tässä kohtaa lähinnä kuolinilmoitus.

## 2. Kun väärä Python-versio teki virheistä satunnaisen näköisiä

Sähköpostiautomaationi käytti pakettia nimeltä `agentmail`. Paketti oli asennettu järjestelmän Python 3.9 -ympäristöön. Agentti taas ajoi osan skripteistä virtuaaliympäristössä, jossa käytössä oli Python 3.11.

Tästä syntyi juuri sellainen virhe, jonka kanssa saa kulutettua elämäänsä turhaan. Välillä skriptit toimivat, välillä ne kaatuivat `module not found` -virheeseen. Ongelma näytti satunnaiselta, vaikka se ei ollut sitä. Eri ajot käyttivät eri Python-tulkkia ja eri pakettipolkua.

Käytin tuntikausia siihen, että etsin vikaa agentista ja sen päättelystä. Todellinen syy oli paljon arkisempi: sama vanha `PATH`- ja ajoympäristöongelma, joka on kiusannut ohjelmistokehitystä jo vuosikymmeniä. Tekoäly ei poistanut sitä. Se vain antoi sille uuden hatun.

**Mitä tästä jäi käteen:** AI-agentin vaikeimmat bugit eivät useinkaan liity tekoälyyn. Ne liittyvät ympäristöön, jossa agentti toimii. Taustalla ajettava skripti voi käyttää eri käyttäjää, eri polkua ja eri Python-versiota kuin se ympäristö, jossa itse testasit koodin.

## 3. Kun Firecrawl epäonnistui mutta raportoi onnistumista

Yksi ajastettu työ etsi verkosta naapuruston myynnissä olevia kohteita. Eräänä päivänä kaikki 16 hakua epäonnistuivat, koska komentoa `firecrawl` ei enää löytynyt koneelta.

Pelkkä epäonnistuminen ei olisi ollut kovin vakavaa. Vakavaa oli se, miten skripti käyttäytyi epäonnistumisen jälkeen. Se palautti paluukoodin 0, mikä tarkoittaa käyttöjärjestelmälle onnistunutta suoritusta.

Dashboardilla kaikki näytti siis olevan kunnossa. Hälytystä ei tullut. Kukaan ei nähnyt, että haut olivat olleet rikki päiväkausia. Löysin ongelman vasta sattumalta, kun avasin lokit aivan toisen asian takia. Klassinen valvontaratkaisu: ihminen katsoo vahingossa oikeaan paikkaan.

**Mitä tästä jäi käteen:** epäonnistumisen pitää näkyä epäonnistumisena. Skripti, joka ei tee työtään mutta palauttaa onnistumisen, on vaarallisempi kuin skripti, joka kaatuu kunnolla. Se ei vain epäonnistu, vaan piilottaa myös tiedon siitä.

## 4. Kun kuittiparseri jäi aikarajaan kiinni viideksi päiväksi

Kuittien käsittelyyn tarkoitettu taustatyö `expense-parse-hourly` yritti jäsentää kymmenen kuittia yhdellä ajokerralla. Jokainen kuitti vaati oman kielimallikutsunsa, ja yksi kutsu kesti yleensä 20–30 sekuntia.

Paperilla tämä näytti pieneltä työltä. Käytännössä kymmenen kuittia vei noin 250 sekuntia, mutta taustatyölle oli asetettu 120 sekunnin aikaraja. Siksi ajo katkesi joka kerta ennen kuin työ ehti valmistua.

Sama virhe jatkui viisi päivää. Tulosteet oli ohjattu `/dev/null`-polkuun eli käytännössä roskakoriin. Dashboard näytti punaista, mutta ei kertonut, miksi työ epäonnistui. Viiden päivän kuitit jäivät käsittelemättä, vaikka ongelma olisi ollut helppo korjata heti, jos virheviesti olisi tullut näkyviin.

**Mitä tästä jäi käteen:** taustatyö pitää mitoittaa aikarajan mukaan, ja virheilmoitusten pitää päätyä paikkaan, josta ne nähdään. Olisin korjannut ongelman muutamassa minuutissa, jos olisin saanut näkyviin edes yhden selkeän timeout-viestin. Mutta olin näppärä ja lähetin sen roskakoriin.

## Bonus: kun halvempi malli teki järjestelmästä kalliimman

Testasin myös paikallista **Gemma 4** -mallia taustatöiden halvemmaksi vaihtoehdoksi. Ajatus oli houkutteleva: oma malli omalla koneella, ei pilvilaskua jokaisesta ajosta.

Käytännössä ratkaisu ei ollut niin edullinen kuin se ensin näytti. Paikallinen malli oli noin 37 kertaa hitaampi kuin pilvimalli. Tehtävä, jonka pilvimalli teki 6 sekunnissa, vei paikalliselta mallilta 3 minuuttia 35 sekuntia. Lisäksi tulos oli lyhyempi ja vähemmän käyttökelpoinen.

Säästö ajoa kohti oli alle 0,001 dollaria. Vastineeksi automaatio hidastui selvästi ja muuttui vähemmän luotettavaksi, kun ajo ei ehtinyt valmiiksi siihen 120 sekunnin suoritusaikaan. Se johti siihen, että kuitit eivät läheskään aina tulleet käsitellyiksi.

**Mitä tästä jäi käteen:** halvempi inferenssi ei aina tee järjestelmästä halvempaa. Tokenin hinta on vain yksi rivi laskussa. Jos malli tekee työn liian hitaasti, heikentää tulosta tai lisää epävarmuutta, kustannus siirtyy muualle. Yleensä ihmisen työajaksi, mikä on kätevä tapa valehdella itselleen säästäneensä rahaa.

## Sama vaiva: virheet tapahtuivat näkymättömissä

Näitä tapauksia yhdistää yksi asia: mikään niistä ei hälyttänyt ajoissa. Budjetti kului, haut jäivät tekemättä, kuitit jäivät käsittelemättä ja ympäristövirheet näyttivät satunnaisilta. Ulospäin järjestelmä vaikutti pitkään lähes normaalilta.

Siksi agentin pahin vika ei ole se, että se kaatuu. Kaatuminen voi olla jopa palvelus, jos se pysäyttää työn ja tekee ongelman näkyväksi.

Vaarallisempaa on hiljainen epäonnistuminen: järjestelmä jatkaa toimintaansa, näyttää onnistuneelta ja jättää silti olennaisen työn tekemättä.

Tästä syntyi myöhemmin yksi säännöistäni: **virheitä saa tapahtua, mutta niitä ei saa piilottaa**. Agentti saa olla hiljaa, kun kaikki on kunnossa. Se ei saa olla hiljaa silloin, kun jokin on rikki.

## Kolme suojausta, jotka olisivat säästäneet paljon vaivaa

Jos rakentaisin nämä osat uudelleen, aloittaisin kolmesta suojauksesta:

1. **Mittaa kustannus jokaiselta ajokerralta.** Jokainen automaattinen herätys on toistuva lasku. Aseta kustannukselle raja ja hälytä heti, jos yksittäinen ajo ylittää sen.
2. **Tee epäonnistumisesta näkyvä ja onnistumisesta hiljainen.** Virhetulosteita ei pidä ohjata roskakoriin. Paluukoodi 0 tarkoittaa onnistumista, ja sen pitää perustua todelliseen onnistumiseen.
3. **Pidä ajoympäristö yksiselitteisenä.** Käytä yhtä Python-versiota, yhtä virtuaaliympäristöä ja selkeästi määriteltyjä polkuja. Moni satunnaiselta näyttävä agenttibugi johtuu siitä, että taustatyö ei aja samassa ympäristössä kuin testaus.

## Lopulta kyse oli näkyvyydestä

Nämä neljä virhettä olivat kalliita eri tavoilla. Yhdessä tapauksessa paloi budjettia, toisessa hajosi ajoympäristö, kolmannessa epäonnistuminen naamioitui onnistumiseksi ja neljännessä työ jäi viideksi päiväksi aikarajan taakse.

Agentin luotettavuus ei synny siitä, ettei se koskaan epäonnistu. Se syntyy siitä, että epäonnistuminen huomataan heti.

Hiljainen onnistuminen on hyvä ominaisuus. Hiljainen epäonnistuminen on riski.

Seuraavassa osassa siirrytään kustannuksista selviytymiseen: neljään tilanteeseen, joissa agentti oli vähällä kääntyä itseään vastaan.

---

**Jos rakennat agenttia ja haluat välttää nämä samat kuopat, se on ihan järkevä tavoite.** Teen tätä työtä konsulttina ja kouluttajana — [pyydä tarjous agenttisprintistä](https://seise.org/#yhteys).
