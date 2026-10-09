---
title: "Miten sain itslearningin näyttämään arvioimattomat palautukset selvästi"
slug: "itslearning-arvioimattomat-palautukset"
part: 3
totalParts: 7
series: "Tekoäly opettajan hallintotyössä"
seriesSlug: "tekoaly-opettajan-hallintotyossa"
topic: "automation"
description: "Tiedostokuvake ja puuttuva arviointi nostetaan esiin keltaisella. Ohje korostuksen rakentamiseen ja sen osumien tarkistamiseen."
keyword: "Wilma- ja itslearning-automaatiot"
date: "2026-10-10T00:00:00+03:00"
cover: "/images/blog/kausi-1-opettajan-hallintotyo/04-itslearning-palautettu-tehtava-keltainen-korostus.jpg"
coverAlt: "Havainnekuva itslearningin matriisista, jossa tiedostokuvakkeen ja viivan sisältävät solut on korostettu."
---

Opiskelija on palauttanut tehtävän. Palautus on itslearningissa. Silti minun pitää huomata se muiden solujen seasta.

Tämä on sama näkyvyysongelma kuin [Wilman keskeneräisissä suorituksissa](/blog/wilma-keskeneraiset-suoritukset-nakyviin). Järjestelmä säilyttää tiedon, mutta oikea kohta pitää löytää itse. Halusin erottaa palautetut työt, joiden arviointi näyttää vielä puuttuvan.

![Havainnekuva itslearningin arviointimatriisista ilman korostusta](/images/blog/kausi-1-opettajan-hallintotyo/03-itslearning-palautusmatriisi-ilman-korostusta.jpg "Ennen")
![Havainnekuva itslearningin arviointimatriisista keltaisilla korostuksilla](/images/blog/kausi-1-opettajan-hallintotyo/04-itslearning-palautettu-tehtava-keltainen-korostus.jpg "Jälkeen")

*Kuvat ovat havainnekuvia. Korostus on vihje avata palautus ja tarkistaa sen tila.*

## Kaksi ehtoa samassa solussa

Tampermonkey-skriptini etsii solua, jossa näkyy palautukseen viittaava tiedostokuvake ja arvioinnin kohdalla pelkkä viiva. Kun molemmat löytyvät samasta solusta, tausta muuttuu keltaiseksi.

Pelkkä viiva ei riitä: se voi tarkoittaa myös sitä, ettei palautusta ole. Pelkkä tiedostokuvake ei riitä: palautus voi olla jo arvioitu. Juuri näiden kahden ehdon yhdistelmä on tässä olennainen.

Skripti ei lue työn sisältöä eikä arvioi sitä. Se ei myöskään merkitse tehtävää käsitellyksi. Minä avaan korostetun palautuksen, katson työn ja annan palautteen tavalliseen tapaan.

## Näin rakennat vastaavan

Ensin tarvitset [Tampermonkeyn ja skriptin asennusohjeen](/blog/tampermonkey-tekoaly-kayttajaskripti). Sen jälkeen rajaat tunnistuksen oman itslearning-näkymäsi rakenteeseen.

1. Etsi matriisista palautus, jonka arviointi puuttuu. Katso kehittäjätyökaluilla solun rakenne.
2. Tunnista tiedostokuvakkeen elementti ja arviointimerkinnän elementti. Kuva voi olla esimerkiksi SVG tai luokalla merkitty kuvake; tunniste pitää tarkistaa omasta näkymästä.
3. Ota vertailuun jo arvioitu palautus sekä solu, jossa palautusta ei ole. Korvaa esimerkkien henkilötiedot ja tunnisteet keksityillä.
4. Pyydä skripti, joka tarkistaa molemmat ehdot yhden arviointisolun sisältä.
5. Kokeile kolmea esimerkkitilannetta ja tarkista korostetut palautukset avaamalla ne.

Tehtävänannon voi kirjoittaa näin:

> Tee Tampermonkey-skripti itslearningin arviointimatriisiin. Alla on kolme anonymisoitua solua: palautettu mutta arvioimaton, jo arvioitu ja palauttamaton. Korosta keltaisella vain solu, jossa on sekä palautuksen tiedostokuvake että arviointikentän viiva. Älä tulkitse muita solun tekstejä arvioinniksi. Säilytä alkuperäiset merkinnät. Poista korostus, jos ehto ei enää täyty näkymän päivittyessä. Älä tee verkkopyyntöjä, avaa palautuksia, arvioi tai muuta tietoja. Rajaa osoite oman itslearningini sivuun.

## Tarkista myös se, mikä ei korostu

Oikean osuman lisäksi pitää kokeilla vääriä osumia. Viiva ilman tiedostokuvaketta ei saa värittyä. Tiedostokuvake arvioinnin vieressä ei saa värittyä. Täydennettäväksi merkitty työ on oma tilansa, jota tämä ehto ei yksin ratkaise.

Kun olen arvioinut työn, tarkistan vielä, että korostus poistuu näkymän päivittyessä. Jos väri jää vanhasta tilasta, skriptin päivityslogiikka pitää korjata.

Tämä ei ole täydellinen lista kaikesta arvioitavasta. Se on yksi tapa nostaa tietty tarkistettava tilanne näkyviin. Kun itslearning muuttaa näkymää, myös tunnistus pitää tarkistaa uudelleen.

Minulle hyöty on siinä, että löydän palautteen odottajan nopeammin. Varsinainen palaute on edelleen minun työtäni.
