---
title: "Miten sain Wilman näyttämään keskeneräiset suoritukset yhdellä vilkaisulla"
slug: "wilma-keskeneraiset-suoritukset-nakyviin"
part: 2
totalParts: 7
series: "Tekoäly opettajan hallintotyössä"
seriesSlug: "tekoaly-opettajan-hallintotyossa"
topic: "automation"
upcoming: true
plannedLabel: "Elokuu 2026"
description: "Wilman tieto keskeneräisistä suorituksista hukkuu taulukkoon. Tein tekoälyn avulla Tampermonkey-skriptin, joka korostaa ne vaaleanpunaisella — data ei muutu, vain oma näkymäni."
keyword: "Wilma-automaatio"
date: "2026-08-10T09:00:00+03:00"
cover: "/images/blog/kausi-1-opettajan-hallintotyo/02-wilma-suoritus-kesken-vaaleanpunainen-korostus.jpg"
coverAlt: "Wilman arviointinäkymä, jossa keskeneräinen suoritus on korostettu vaaleanpunaisella."
nosto: "Wilma kyllä näyttää keskeneräiset suoritukset, mutta ei aina niin, että ne huomaisi nopeasti. Tein tekoälyn avulla Tampermonkey-skriptin, joka korostaa ne vaaleanpunaisella. Ei pedagogisia päätöksiä, ei muutoksia dataan — skripti vain nostaa näkyviin sen, mikä vaatii opettajan huomiota. 👇"
---

Wilman ongelma ei tässä tapauksessa ollut se, etteikö tieto olisi olemassa. Tieto oli kyllä siellä. Se vain ei näkynyt sillä tavalla, että sen huomaisi nopeasti.

Minulla oli arviointinäkymä, jossa opiskelijan keskeneräinen suoritus näkyi muiden merkintöjen seassa. Ilman korostusta se oli helppo ohittaa, varsinkin kun rivejä ja soluja on paljon. Tämä on juuri sellaista hallinnollista työtä, joka ei yksittäisenä kertana tunnu isolta, mutta syö aikaa ja tarkkaavaisuutta koko ajan.

Vanha tapa oli käytännössä selaamista ja silmäilyä. Katso rivi, katso merkintä, tarkista päiväys, katso seuraava rivi. Ei erityisen vaikeaa, mutta virhealtista. Ihminen ei ole parhaimmillaan siinä, että hän yrittää huomata yhden pienen poikkeaman ruudun kokoisesta taulukosta.

![Wilman opintosuoritusnäkymä ilman korostusta](/images/blog/kausi-1-opettajan-hallintotyo/01-wilma-opintosuoritukset-ilman-korostusta.jpg "Ennen")
![Wilman opintosuoritusnäkymä, jossa keskeneräinen suoritus on korostettu vaaleanpunaisella](/images/blog/kausi-1-opettajan-hallintotyo/02-wilma-suoritus-kesken-vaaleanpunainen-korostus.jpg "Jälkeen")

Ratkaisin tämän **Tampermonkey-skriptillä**. Skripti käy Wilman arviointinäkymää läpi selaimessa ja korostaa vaaleanpunaisella ne kohdat, joissa opiskelijalla on suoritus kesken. Sääntö on yksinkertainen: jos arvosanakentässä on ES eli suoritus on kesken, rivi värjätään.

Tärkeä kohta: skripti ei muuta Wilman dataa. Se ei tallenna mitään, ei lähetä mitään eikä päätä mitään. Se muuttaa vain sitä, miltä näkymä näyttää minun selaimessani.

Tekoälyn rooli oli käytännöllinen. Annoin sille tavoitteen: haluan korostaa tietyt solut Wilman taulukossa, jotta keskeneräiset suoritukset näkyvät heti. Sen avulla syntyi JavaScript-/Tampermonkey-skripti, jota pystyin testaamaan ja muokkaamaan.

Ensimmäistä versiota ei tietenkään oteta käyttöön sokkona. Testasin, mitä se korostaa. Tarkistin, ettei se nappaa mukaan vääriä soluja. Katsoin, että korostus auttaa oikeasti eikä tee näkymästä vain värikkäämpää sekasotkua.

> Lopputulos oli yksinkertainen: keskeneräinen suoritus näkyy yhdellä vilkaisulla.

Tämä on minusta hyvä esimerkki järkevästä tekoälyn käytöstä opettajan hallintotyössä. Tekoäly ei tehnyt pedagogista päätöstä. Se ei arvioinut opiskelijaa. Se ei tulkinnut opiskelijan tilannetta. Se auttoi tekemään pienen työkalun, jolla huomaan tarkistettavat asiat nopeammin.

Hallinnollisen työn keventäminen ei aina tarkoita isoa järjestelmäuudistusta. Joskus se tarkoittaa sitä, että yksi tärkeä kohta värjätään niin, ettei se huku taulukkoon.

Seuraavassa jaksossa sama periaate viedään itslearningiin, jossa ongelmana ovat palautukset: ne ovat järjestelmässä, mutta opettaja ei näe niitä ilman erillistä tarkistuskierrosta.
