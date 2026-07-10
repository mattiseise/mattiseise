---
title: "Moodle-kurssin pedagoginen auditointi yhdellä komennolla"
slug: "moodle-kurssin-pedagoginen-auditointi"
part: 1
totalParts: 1
series: "Moodle-kurssin pedagoginen auditointi"
seriesSlug: "moodle-kurssin-pedagoginen-auditointi"
topic: "pedagogy"
description: "Rakensin agentin, joka lukee Moodle-kurssin varmuuskopion ja kertoo, ovatko tavoitteet, opetus ja arviointi linjassa. Oman kurssini auditointi paljasti 83 duplikaattia ja yhden 137 aktiviteetin hirviöosion."
keyword: "Moodle-kurssin auditointi"
date: "2026-07-10T12:30:00+03:00"
nosto: "Auditoin oman Moodle-kurssini agentilla. Tulos: 289 aktiviteettia, 83 duplikaattia, yksi 137 aktiviteetin hirviöosio — ja analysointitason tehtäviä noin 1 %. Päivän käsityö muuttui minuuttien ajoksi, ja korjauslista tuli valmiiksi priorisoituna. Kirjoitin auki, miten auditointi toimii ja mitä se ei saa päättää. 👇"
---

Ammatillisen koulutuksen Moodle-kurssit ovat harvoin kertaluonteisia rakennelmia. Ne ovat vuosien kerrostumia: aktiviteetteja on lisätty, vanhoja ei ole raaskittu poistaa, ja jossain vaiheessa kukaan ei enää muista, miksi osiossa seitsemän on kolme eri versiota samasta tehtävästä.

Tiesin tämän omalta kohdaltani, mutta en tiennyt kuinka pahasti. Selvittääkseni asian rakensin **auditointiagentin** — ja ajoin sen ensimmäiseksi oman kurssini kimppuun.

## Mitä auditointi tekee

Ajatus on yksinkertainen: opettaja ottaa kurssista Moodlen varmuuskopion (.mbz-tiedosto) ja ajaa yhden komennon. Agentti purkaa varmuuskopion, jäsentää kurssin rakenteen ja ajaa siitä kolme analyysiä:

- **Rakenneanalyysi**: osioiden koko, aktiviteettityyppien jakauma, duplikaatit, rikkinäiset linkit ja tyhjät osiot.
- **Bloomin taksonomian jakauma**: millä ajattelun tasoilla kurssin tehtävät liikkuvat — muistamisesta ja soveltamisesta analysointiin ja arviointiin.
- **Linjakkuustarkastus**: kattavatko kurssin sisällöt ePerusteiden ammattitaitovaatimukset, ja kertovatko tavoitteet, opetus ja arviointi samaa tarinaa.

Lopputulos on PDF-raportti. Olennaista on, että raportti on toimenpidelähtöinen, ei kuvaileva: jokaisesta havainnosta seuraa konkreettinen korjausehdotus ja aika-arvio. Opettaja ei saa esseetä kurssinsa tilasta, vaan priorisoidun työlistan.

## Mitä oma kurssini paljasti

Auditoin 45 osaamispisteen web-ohjelmoinnin kurssini. Numerot puhuvat puolestaan:

- **289 aktiviteettia**, joista 142 teoriasivua ja 126 tehtävää — runko oli vahva.
- **Bloomin jakauma vinossa**: soveltamistason tehtäviä 43 %, mutta analysointitason tehtäviä noin 1 %. Kurssi opetti tekemään, mutta ei juuri erittelemään tai perustelemaan.
- **Yksi osio oli kasvanut 137 aktiviteetin hirviöksi**, jossa opiskelijan navigointi oli käytännössä arpapeliä.
- **83 duplikaattiaktiviteettia** eri osioissa — pedagoginen polku ei ollut selkeä edes tekijälleen.
- Viisi opiskelijoiden nimillä nimettyä tyhjää osiota ja muutama rikkinäinen linkki — kerrostumia, joita ei kukaan ollut huomannut.

> Auditointi, joka aiemmin olisi vaatinut päivän käsityötä, valmistuu nyt minuuteissa — ja tulos on rehellisempi, koska kone ei kaunistele omaa kurssia.

Viimeinen kohta on tärkein. Oman kurssin arviointi käsin on vaikeaa samasta syystä kuin oman tekstin oikoluku: silmä liukuu tutun yli. Agentti ei tunne kurssia eikä sen historiaa, joten se laskee ja raportoi ilman selittelyä.

Raportin toimenpidelista tuli valmiiksi priorisoituna aika-arvioineen: rakenteen jakaminen ammattitaitovaatimuksittain (4–6 h), duplikaattien ratkaisu (3–4 h), Bloomin tasapainon korjaus analysointitason tehtävillä (8–12 h). Korjaukset saattoi aloittaa sieltä, missä vaikutus opiskelijalle on suurin.

## Mitä agentti ei päätä

Tässäkin raja on sama kuin kaikessa muussa tekoälyn käytössäni opetustyössä: **agentti analysoi, opettaja päättää.**

Raportti voi kertoa, että analysointitason tehtäviä on 1 %. Se ei voi tietää, että osa niistä tehdään lähiopetuksessa ilman Moodle-jälkeä. Se voi laskea duplikaatit, mutta opettaja tietää, mitkä niistä ovat tarkoituksellisia rinnakkaisia polkuja. Siksi raportti on ehdotus, ei tuomio — ja siksi jokainen toimenpide kulkee opettajan harkinnan kautta ennen toteutusta.

Agentti ei myöskään koske kurssiin. Se lukee varmuuskopiota, ei tuotantoympäristöä, eikä se muuta mitään. Opiskelijadataa analyysiin ei mene: varmuuskopio otetaan ilman opiskelijatietoja.

## Miksi tämä kannattaa

Kurssin laadun ja opiskelijan oikeusturvan kannalta olennaiset kysymykset — kattaako kurssi vaatimukset, mittaako arviointi oikeita asioita, löytääkö opiskelija perille — ovat juuri niitä, joihin ei arjessa ehdi pysähtyä. Auditointi tekee pysähtymisestä halpaa: kun tarkistus maksaa minuutteja eikä päivää, sen voi tehdä joka lukukausi.

Tekninen toteutus ja esimerkkiraportti on kuvattu tarkemmin [case-sivulla](/caset/moodle-kurssiauditointi). Ja jos haluat vastaavan auditoinnin omille kursseillesi tai oppilaitoksellesi, se onnistuu — yksittäisestä kurssista oppilaitostason yhteenvetoon.
