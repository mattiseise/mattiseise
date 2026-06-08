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

Agentteja rakentaessa parhaat opit eivät yleensä synny onnistumisista. Ne syntyvät niistä hetkistä, jolloin järjestelmä tekee väärän asian, liian kalliin asian tai ei tee mitään — ja onnistuu silti näyttämään ulospäin toimivalta.

Minulle tällaisia tilanteita kertyi kahdeksan. Tässä osassa käyn läpi niistä ensimmäiset neljä. Ne olivat keskenään erilaisia, mutta niissä oli sama perusongelma: sain tiedon virheestä liian myöhään tai en saanut sitä ollenkaan.

Seuraavassa osassa käsittelen neljä tapausta, joissa ongelma ei ollut enää pelkkä hiljainen epäonnistuminen, vaan se, että agentti oli vähällä kääntyä itseään vastaan.

## 1. Kun 22 prosenttia viikkobudjetista kului yhdessä yössä

Tämä on koko sarjan kallein oppitunti.

Eräs tekoälyistunto oli ajastettu heräämään taustalla joka toinen tunti ja tekemään lyhyen tilannekatsauksen. Ajatus oli järkevä: agentti tarkistaisi tilanteen säännöllisesti ja kertoisi vain, jos jokin vaatii huomiota.

Ongelma oli siinä, mitä tapahtui jokaisella herätyksellä. Agentti latasi koko muistijärjestelmäni uudelleen kontekstiin: 376 megatavua vektoridataa. Lisäksi se käytti kalleinta käytössä olevaa mallia ja täyttä konteksti-ikkunaa.

Yksittäinen ajo ei näyttänyt dramaattiselta. Mutta kun sama raskas ajo toistui yön aikana neljä kertaa, kustannus kasvoi nopeasti. Aamulla kello kahdeksan 22 prosenttia koko viikon AI-budjetista oli jo käytetty.

Teknisesti mikään ei ollut rikki. Järjestelmä teki juuri sen, mitä olin käskenyt sen tehdä. Se vain teki sen tavalla, joka oli tuhansia kertoja kalliimpi kuin olin tarkoittanut.

**Opetus:** muisti ei saa olla näkymätön kustannus. Jokainen automaattinen herätys, joka lataa suuren kontekstin, on toistuva lasku. Siksi kustannus pitää mitata ajoa kohti, ei vasta kuukauden lopussa. Kuukausiraportti kertoo ongelmasta vasta siinä vaiheessa, kun raha on jo kulunut.

## 2. Kun väärä Python-versio teki virheistä satunnaisen näköisiä

Sähköpostiautomaationi käytti pakettia nimeltä `agentmail`. Paketti oli asennettu järjestelmän Python 3.9 -ympäristöön. Agentti taas ajoi osan skripteistä virtuaaliympäristössä, jossa käytössä oli Python 3.11.

Tästä syntyi hankala ja hämäävä virhe. Välillä skriptit toimivat, välillä ne kaatuivat `module not found` -virheeseen. Ongelma näytti satunnaiselta, vaikka se ei ollut sitä. Eri ajot käyttivät eri Python-tulkkia ja eri pakettipolkua.

Käytin tuntikausia siihen, että etsin vikaa agentista ja sen päättelystä. Todellinen syy oli paljon arkisempi: sama vanha `PATH`- ja ajoympäristöongelma, joka on kiusannut ohjelmistokehitystä jo vuosikymmeniä.

**Opetus:** AI-agentin vaikeimmat bugit eivät useinkaan liity tekoälyyn. Ne liittyvät ympäristöön, jossa agentti toimii. Taustalla ajettava skripti voi käyttää eri käyttäjää, eri polkua ja eri Python-versiota kuin se ympäristö, jossa itse testasit koodin.

## 3. Kun Firecrawl epäonnistui mutta raportoi onnistumista

Yksi ajastettu työ etsi verkosta naapuruston myynnissä olevia kohteita. Eräänä päivänä kaikki 16 hakua epäonnistuivat, koska komentoa `firecrawl` ei enää löytynyt koneelta.

Pelkkä epäonnistuminen ei olisi ollut vakavaa. Vakavaa oli se, miten skripti käyttäytyi epäonnistumisen jälkeen. Se palautti paluukoodin 0, mikä tarkoittaa käyttöjärjestelmälle onnistunutta suoritusta.

Dashboardilla kaikki näytti siis olevan kunnossa. Hälytystä ei tullut. Kukaan ei nähnyt, että haut olivat olleet rikki päiväkausia. Löysin ongelman vasta sattumalta, kun avasin lokit aivan toisen asian takia.

**Opetus:** epäonnistumisen pitää näkyä epäonnistumisena. Skripti, joka ei tee työtään mutta palauttaa onnistumisen, on vaarallisempi kuin skripti, joka kaatuu selvästi. Se ei ainoastaan epäonnistu, vaan piilottaa myös tiedon epäonnistumisesta.

## 4. Kun kuittiparseri jäi aikarajaan kiinni viideksi päiväksi

Kuittien käsittelyyn tarkoitettu taustatyö `expense-parse-hourly` yritti jäsentää kymmenen kuittia yhdellä ajokerralla. Jokainen kuitti vaati oman kielimallikutsunsa, ja yksi kutsu kesti yleensä 20–30 sekuntia.

Paperilla tämä näytti pieneltä työltä. Käytännössä kymmenen kuittia vei noin 250 sekuntia, mutta taustatyölle oli asetettu 120 sekunnin aikaraja. Siksi ajo katkesi joka kerta ennen kuin työ ehti valmistua.

Sama virhe jatkui viisi päivää. Tulosteet oli ohjattu `/dev/null`-polkuun eli käytännössä roskakoriin. Dashboard näytti punaista, mutta ei kertonut, miksi työ epäonnistui. Viiden päivän kuitit jäivät käsittelemättä, vaikka ongelma olisi ollut helppo korjata heti, jos virheviesti olisi tullut näkyviin.

**Opetus:** taustatyö pitää mitoittaa aikarajan mukaan, ja virheilmoitusten pitää päätyä paikkaan, josta ne nähdään. Olisin korjannut ongelman muutamassa minuutissa, jos olisin saanut näkyviin edes yhden selkeän timeout-viestin.

## Bonus: kun halvempi malli teki järjestelmästä kalliimman

Testasin myös paikallista **Gemma 4** -mallia taustatöiden halvemmaksi vaihtoehdoksi. Ajatus oli houkutteleva: oma malli omalla koneella, ei pilvilaskua jokaisesta ajosta.

Käytännössä ratkaisu ei ollut niin edullinen kuin se ensin näytti. Paikallinen malli oli noin 37 kertaa hitaampi kuin pilvimalli. Tehtävä, jonka pilvimalli teki 6 sekunnissa, vei paikalliselta mallilta 3 minuuttia 35 sekuntia. Lisäksi tulos oli lyhyempi ja vähemmän käyttökelpoinen.

Säästö ajoa kohti oli alle 0,001 dollaria. Vastineeksi automaatio hidastui selvästi ja muuttui vähemmän luotettavaksi.

**Opetus:** halvempi inferenssi ei aina tarkoita halvempaa järjestelmää. Tokenin hinta on vain yksi osa kokonaisuutta. Jos malli tekee työn liian hitaasti, heikentää laatua tai lisää epävarmuutta, todellinen kustannus siirtyy muualle.

## Yhteinen ongelma: virheet tapahtuivat näkymättömissä

Näitä tapauksia yhdistää yksi asia: mikään niistä ei hälyttänyt ajoissa. Budjetti kului, haut jäivät tekemättä, kuitit jäivät käsittelemättä ja ympäristövirheet näyttivät satunnaisilta. Ulospäin järjestelmä vaikutti pitkään lähes normaalilta.

Siksi agentin pahin vika ei ole se, että se kaatuu. Kaatuminen voi olla jopa hyvä asia, jos se pysäyttää työn ja tekee ongelman näkyväksi.

Vaarallisempaa on hiljainen epäonnistuminen: järjestelmä jatkaa toimintaansa, näyttää ulospäin onnistuneelta ja jättää silti olennaisen työn tekemättä.

Tästä syntyi myöhemmin yksi tärkeimmistä säännöistäni: **virheitä saa tapahtua, mutta niitä ei saa piilottaa**. Agentti saa olla hiljaa, kun kaikki on kunnossa. Se ei saa olla hiljaa silloin, kun jokin on rikki.

## Kolme suojausta, jotka olisivat säästäneet paljon vaivaa

Jos rakentaisin nämä osat uudelleen, aloittaisin kolmesta suojauksesta:

1. **Mittaa kustannus jokaiselta ajokerralta.** Jokainen automaattinen herätys on toistuva lasku. Aseta kustannukselle raja ja hälytä heti, jos yksittäinen ajo ylittää sen.
2. **Tee epäonnistumisesta näkyvä ja onnistumisesta hiljainen.** Virhetulosteita ei pidä ohjata roskakoriin. Paluukoodi 0 tarkoittaa onnistumista, ja sen pitää perustua todelliseen onnistumiseen.
3. **Pidä ajoympäristö yksiselitteisenä.** Käytä yhtä Python-versiota, yhtä virtuaaliympäristöä ja selkeästi määriteltyjä polkuja. Moni satunnaiselta näyttävä agenttibugi johtuu siitä, että taustatyö ei aja samassa ympäristössä kuin testaus.

## Yhteenveto

Nämä neljä virhettä olivat kalliita eri tavoilla. Yhdessä tapauksessa paloi budjettia, toisessa hajosi ajoympäristö, kolmannessa epäonnistuminen naamioitui onnistumiseksi ja neljännessä työ jäi viideksi päiväksi aikarajan taakse.

Yhteinen opetus on yksinkertainen: agentin luotettavuus ei synny siitä, ettei se koskaan epäonnistu. Luotettavuus syntyy siitä, että epäonnistuminen huomataan heti.

Hiljainen onnistuminen on hyvä ominaisuus. Hiljainen epäonnistuminen on riski.

Seuraavassa osassa siirrytään kustannuksista selviytymiseen: neljään tilanteeseen, joissa agentti oli vähällä kääntyä itseään vastaan.

---

**Nämä virheet voi välttää helpommin, kun joku on tehnyt ne jo aiemmin.** Teen tätä työtä konsulttina ja kouluttajana — [pyydä tarjous agenttisprintistä](https://seise.org/#yhteys).
