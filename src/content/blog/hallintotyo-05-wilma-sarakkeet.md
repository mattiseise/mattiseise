---
title: "Miten rauhoitin Wilman näkymää piilottamalla turhat sarakkeet"
slug: "wilma-sarakkeiden-piilotus"
part: 5
totalParts: 7
series: "Tekoäly opettajan hallintotyössä"
seriesSlug: "tekoaly-opettajan-hallintotyossa"
topic: "automation"
description: "Sarakkeet-paneelista valitsen, mitä tuntimerkintätaulukossa näkyy. Ohje oman näkymän rajaamiseen ja valintojen testaamiseen."
keyword: "Wilma- ja itslearning-automaatiot"
date: "2026-10-10T00:00:00+03:00"
cover: "/images/blog/kausi-1-opettajan-hallintotyo/06-wilma-tuntimerkinnat-siistitty-sarakkeet-paneeli.jpg"
coverAlt: "Havainnekuva Wilman tuntimerkinnöistä ja Sarakkeet-valintapaneelista."
---

Kaikki tieto voi olla tarpeellista joskus. Kaikkea ei tarvitse nähdä koko ajan.

Wilman tuntimerkintätaulukossa on paljon sarakkeita. Jos tarkistan yhtä asiaa, joudun suodattamaan muut pois omassa päässäni. Halusin tehdä valinnan kerran ja saada rauhallisemman näkymän.

![Havainnekuva Wilman tuntimerkinnöistä kaikki sarakkeet näkyvissä](/images/blog/kausi-1-opettajan-hallintotyo/05-wilma-tuntimerkinnat-kaikki-sarakkeet.jpg "Ennen")
![Havainnekuva rajatusta Wilma-taulukosta ja Sarakkeet-paneelista](/images/blog/kausi-1-opettajan-hallintotyo/06-wilma-tuntimerkinnat-siistitty-sarakkeet-paneeli.jpg "Jälkeen")

*Kuvat ovat havainnekuvia. Jälkimmäisessä näkyy, mitä käyttäjä on valinnut piiloon.*

## Minä valitsen sarakkeet

Tein Tampermonkey-skriptin, joka lisää näkymään **Sarakkeet**-paneelin. Valintaruuduista voin ottaa sarakkeita pois ja palauttaa ne. **Näytä kaikki** tuo koko taulukon takaisin.

Valinnat tallentuvat selaimen localStorageen. Samalla selainprofiililla näkymä säilyy seuraavalle käyttökerralle. Toisella koneella tai profiililla teen valinnat erikseen. Selaintietojen tyhjentäminen voi nollata ne.

Tämä ei poista tuntimerkintöjä. Se piilottaa sarakkeita minun selaimessani. Piilotettua tietoa voi edelleen tarvita toisessa työvaiheessa, joten palautus kuuluu työkalun perustoimintoihin.

## Näin teen saman omaan taulukkoon

Aloita [Tampermonkey-ohjeesta](/blog/tampermonkey-tekoaly-kayttajaskripti). Sarakkeiden piilotuksessa pelkkä yhden solun piilottaminen ei riitä: otsikon ja kaikkien sen alle kuuluvien solujen pitää pysyä samassa kohdassa.

1. Avaa tuntimerkintänäkymä ja päätä, mitkä sarakkeet tarvitset juuri nyt. Säilytä opiskelijan tunnistamiseen tarvittava tieto, jos käsittelet yksilökohtaisia merkintöjä.
2. Tarkista kehittäjätyökaluilla otsikot ja yksi taulukon rivi. Selvitä myös yhdistetyt otsikot ja `colspan`-arvot.
3. Tee rakenteesta anonymisoitu esimerkki. Anna tekoälylle sekä otsikot että vähintään kaksi erilaista riviä.
4. Pyydä valintapaneeli, selaimeen tallentuvat asetukset ja **Näytä kaikki** -toiminto.
5. Testaa yksi sarake kerrallaan. Otsikoiden ja lukujen pitää pysyä kohdakkain.

Tehtävänantoon lisäisin tämän:

> Tee Tampermonkey-skripti tämän tuntimerkintätaulukon rakenteeseen. Lisää Sarakkeet-paneeli, jossa voin itse valita näkyvät sarakkeet. Piilota valitun sarakkeen otsikko ja sen solut yhdessä. Huomioi colspan- ja rowspan-rakenteet; jos rakennetta ei voi tunnistaa luotettavasti, älä muuta taulukkoa. Tallenna vain sarakevalinnat localStorageen. Lisää Näytä kaikki -painike. Älä tallenna taulukon sisältöä, tee verkkopyyntöjä tai muuta merkintöjä. Kohdista skripti vain tämän Wilman tuntimerkintäpolkuihin.

Omassa toteutuksessani käytetyt polut ovat `/groups/*/attendance*` ja `/profiles/classes/*/attendance*`. Ne ovat esimerkkejä omasta ympäristöstäni. Tarkista oman sivusi osoite ennen `@match`-rajausta.

## Mitä testaan

Piilotan yhden keskellä olevan sarakkeen ja palautan sen. Kokeilen myös ensimmäistä ja viimeistä saraketta sekä yhdistettyjä otsikoita. Sen jälkeen lataan sivun uudelleen ja varmistan, että valinnat säilyvät ja paneelista voi edelleen palauttaa kaiken.

Jos otsikko siirtyy eri kohtaan kuin luvut, työkalu pitää ottaa pois käytöstä. Väärin kohdistuva taulukko on huonompi kuin leveä taulukko.

Kytken skriptin pois Tampermonkeystä ja lataan sivun uudelleen, kun haluan alkuperäisen näkymän. Asetuksia kannattaa tarkistaa myös silloin, kun siirryn toiseen työvaiheeseen: aiemmin piilotettu sarake voi nyt olla olennainen.

Tämä ei ole näyttävä automaatio. Ruudulla on vain vähemmän asioita. Juuri sitä tarvitsin.
