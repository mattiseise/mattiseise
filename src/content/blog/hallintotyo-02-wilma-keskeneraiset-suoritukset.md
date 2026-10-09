---
title: "Miten sain Wilman näyttämään keskeneräiset suoritukset yhdellä vilkaisulla"
slug: "wilma-keskeneraiset-suoritukset-nakyviin"
part: 2
totalParts: 7
series: "Tekoäly opettajan hallintotyössä"
seriesSlug: "tekoaly-opettajan-hallintotyossa"
topic: "automation"
description: "Vaaleanpunainen korostus nostaa keskeneräiset suoritukset esiin Wilmasta. Näin rajaan korostuksen ja tarkistan, että se osuu oikeisiin kohtiin."
keyword: "Wilma- ja itslearning-automaatiot"
date: "2026-10-10T00:00:00+03:00"
cover: "/images/blog/kausi-1-opettajan-hallintotyo/02-wilma-suoritus-kesken-vaaleanpunainen-korostus.jpg"
coverAlt: "Havainnekuva: keskeneräiset suoritukset on korostettu vaaleanpunaisella."
---

Wilman ongelma ei tässä tapauksessa ollut tiedon puute. Keskeneräinen suoritus oli kyllä näkyvissä. Se vain hukkui muiden merkintöjen sekaan.

Kun tarkistan yhden opiskelijan tilannetta, löydän sen katsomalla. Kun sama tarkistus toistuu monessa kohdassa, työ muuttuu silmäilyksi. Katso rivi, katso merkintä, katso seuraava rivi. Halusin, että tarkistettava kohta erottuu heti.

![Havainnekuva Wilman opintosuorituksista ilman korostusta](/images/blog/kausi-1-opettajan-hallintotyo/01-wilma-opintosuoritukset-ilman-korostusta.jpg "Ennen")
![Havainnekuva Wilman opintosuorituksista: ES-merkinnät vaaleanpunaisella](/images/blog/kausi-1-opettajan-hallintotyo/02-wilma-suoritus-kesken-vaaleanpunainen-korostus.jpg "Jälkeen")

*Kuvat ovat havainnekuvia. Alkuperäinen suoritusmerkintä säilyy näkyvissä myös korostuksen jälkeen.*

## Mitä skripti tekee

Tein Tampermonkey-käyttäjäskriptin, joka lisää keskeneräisiin suorituksiin vaaleanpunaisen korostuksen. Kuvan esimerkissä tunniste on ES. Omassa näkymässäni korostuksen kohde voidaan tunnistaa myös Wilman käyttämästä elementin luokasta.

Siksi toteutusta ei kannata tehdä niin, että koko sivulta etsitään kirjaimet ”ES”. Ehto rajataan suoritusnäkymän oikeaan merkintään. Muuten osumia voi tulla otsikoista tai muusta tekstistä.

Korostus muuttaa vain selaimessa näkyvää näkymää. Suoritusmerkintä, päivämäärä ja muut tiedot säilyvät. Minä avaan tilanteen ja päätän, mitä sille tehdään.

## Näin teet vastaavan korostuksen

Skriptin tekemiseen ja asentamiseen on [yhteinen Tampermonkey-ohje](/blog/tampermonkey-tekoaly-kayttajaskripti). Tämän työkalun osalta etenisin näin:

1. Avaa opintosuoritusnäkymä ja tunnista yksi varmasti keskeneräinen sekä yksi valmis suoritus.
2. Katso selaimen kehittäjätyökaluilla, mikä HTML-elementti sisältää merkinnän. Selvitä, onko keskeneräisellä suorituksella oma luokka vai tunnistetaanko se kentän tekstistä.
3. Tee rakenteesta pieni esimerkki, jossa nimet, tunnisteet ja linkkien opiskelijakohtaiset osat on korvattu keksityillä arvoilla.
4. Pyydä tekoälyltä skripti, joka korostaa vain määritellyn ehdon täyttävän elementin ja jättää tekstin luettavaksi.
5. Asenna skripti Tampermonkeyyn ja tarkista osumat alkuperäisistä merkinnöistä.

Tällaisen tehtävänannon antaisin:

> Tee Tampermonkey-käyttäjäskripti vain oman Wilmani opintosuoritusnäkymään. Alla on anonymisoitu HTML-esimerkki keskeneräisestä ja valmiista suorituksesta. Korosta keskeneräinen suoritus vaaleanpunaisella esimerkkien eron perusteella. Älä etsi ES-tekstiä koko sivulta. Säilytä kaikki tekstit ja linkit. Älä tee verkkopyyntöjä, muuta lomakekenttiä tai paina painikkeita. Jos tunniste ei löydy, älä korosta mitään. Kerro, mitä minun pitää muuttaa oman sivuni osoitetta varten.

## Mistä tiedän, että se toimii

Testaan ainakin keskeneräisen, valmiin ja tyhjän merkinnän. Vain ensimmäisen pitää korostua. Tarkistan myös toisen opiskelijan näkymän ja sivun uudelleenlatauksen.

Jos näkymä päivittyy ilman sivulatausta, korostuksen pitää päivittyä mukana. Vanha väri ei saa jäädä valmiiksi muuttuneeseen suoritukseen. Tämän voi lisätä tekoälylle omaksi korjauspyynnökseen.

Skriptin saa pois päältä Tampermonkeyn hallintapaneelista. Kun sen jälkeen lataan sivun uudelleen, näen alkuperäisen näkymän. Jos Wilman rakenne muuttuu, otan korostuksen pois käytöstä ja tarkistan ehdon uudelleen.

Lopputulos on pieni: yksi merkintä ei enää huku taulukkoon. Minulle se on hyödyllisempi kuin uusi raportti, joka pitäisi erikseen muistaa avata.
