---
title: "Tekoäly opettajan hallintotyössä: neljä pientä työkalua"
slug: "tekoaly-opettajan-hallintotyossa"
part: 1
totalParts: 7
series: "Tekoäly opettajan hallintotyössä"
seriesSlug: "tekoaly-opettajan-hallintotyossa"
topic: "automation"
description: "Korostukset Wilmaan ja itslearningiin, rauhallisempi taulukko ja opintosuunnitelman täyttö Excelistä. Käytännön esimerkit ja ohjeet omaan työhön."
keyword: "Wilma- ja itslearning-automaatiot"
date: "2026-10-10T00:00:00+03:00"
cover: "/images/blog/kausi-1-opettajan-hallintotyo/02-wilma-suoritus-kesken-vaaleanpunainen-korostus.jpg"
coverAlt: "Havainnekuva: ES-merkinnät erottuvat vaaleanpunaisella."
---

**Päivitetty 10.10.2026:** Aiemmin blogissa ennakkona esitelty sarja on nyt julkaistu kokonaan. Kaikki seitsemän osaa kuvineen ja ohjeineen ovat luettavissa. Alta löydät linkit työkaluihin ja käyttöönottoon.

Opettajan työssä on paljon vaiheita, joissa tieto on jo olemassa mutta sen löytäminen tai siirtäminen vie aikaa. Katson taulukosta, mitä pitää tarkistaa. Etsin palautusta muiden merkintöjen seasta. Kopioin Excelistä saman rakenteen lomakkeelle uudelleen.

Yksittäinen kerta ei tunnu isolta. Toistuvana työnä se alkaa ärsyttää. Rakensin näihin kohtiin pieniä työkaluja tekoälyn avulla.

## Neljä työkalua, neljä rajattua tehtävää

1. [Wilman keskeneräiset suoritukset näkyviin](/blog/wilma-keskeneraiset-suoritukset-nakyviin). Vaaleanpunainen korostus auttaa löytämään tarkistettavan kohdan.
2. [itslearningin arvioimattomat palautukset näkyviin](/blog/itslearning-arvioimattomat-palautukset). Keltainen korostus nostaa esiin palautuksen, jonka arviointi näyttää puuttuvan.
3. [Wilman turhat sarakkeet pois tieltä](/blog/wilma-sarakkeiden-piilotus). Valitsen itse, mitä tuntimerkintätaulukosta näen.
4. [Opintosuunnitelma Excelistä Wilmaan](/blog/opintosuunnitelma-excelista-wilmaan). Sovellus täyttää valitsemani rivit. Minä tarkistan ja tallennan.

Kolme ensimmäistä ovat selaimessa toimivia Tampermonkey-käyttäjäskriptejä. Neljäs on erillinen sovellus. Niiden käyttöönotto ja vaikutus ovat erilaisia, joten käsittelen ne omissa kirjoituksissaan.

## Tekoäly auttoi rakentamaan työkalut

Kuvasin tavoitteen, pyysin toteutuksen, kokeilin ja korjasin. Tekoäly auttoi koodissa. Minun piti tietää, mikä merkintä on olennainen ja milloin työkalu toimii väärin.

Valmiit korostukset eivät tarvitse tekoälyä käytön aikana. Ne toimivat sovituilla säännöillä. Wilma on rajattu pois tekoälyagenttieni käytöstä. Lomakkeen täyttäjäkään ei keksi opiskelijalle suunnitelmaa: se siirtää ja muokkaa minun valitsemaani sisältöä.

Tämä ero kannattaa pitää mielessä. Tekoälyn avulla tehty työkalu voi olla ihan tavallinen ohjelma, joka tekee yhden asian ennustettavasti.

## Näin kokeilet samaa omassa työssä

Aloita yhdestä toistuvasta vaiheesta. Kirjoita, mitä teet nyt, mitä haluaisit nähdä tai siirtää ja mistä tunnistat oikean lopputuloksen. Jos tavoite on vain ”tee Wilmasta parempi”, tehtävä on vielä liian laaja.

Sarjan [Tampermonkey-ohjeessa](/blog/tampermonkey-tekoaly-kayttajaskripti) näytän, miten kuvaan käyttöliittymän rakenteen ja teen siitä skriptin tekoälyn kanssa. [Viimeisessä osassa](/blog/opettajan-aloitustarkistukset) kokoan työkalut yhdeksi tarkistusrutiiniksi.

Kuvituksessa käytetään havainnekuvia ja sovelluksen keksittyä esimerkkidataa. Ne näyttävät työvaiheen ilman opiskelijoiden henkilötietoja.

Sama kokonaisuus on mukana [Tekoäly työssä ja arjessa -esityksessä](/esitykset/tekoaly-tyossa-ja-arjessa/). Tässä sarjassa avaan sen, mitä dioihin ei mahdu: miten työkalut syntyivät ja miten vastaavaa voi kokeilla itse.
