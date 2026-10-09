---
title: "Miten lopetin opintosuunnitelman kopioimisen käsin Wilmaan"
slug: "opintosuunnitelma-excelista-wilmaan"
part: 6
totalParts: 7
series: "Tekoäly opettajan hallintotyössä"
seriesSlug: "tekoaly-opettajan-hallintotyossa"
topic: "automation"
description: "Opintosuunnitelman muokkaaja lukee Excelin ja nykyisen suunnitelman esikatseluun. Asennus, täyttötavat ja tarkistus ennen tallennusta."
keyword: "Wilma- ja itslearning-automaatiot"
date: "2026-10-10T00:00:00+03:00"
cover: "/images/blog/kausi-1-opettajan-hallintotyo/11-opintosuunnitelman-muokkaaja.jpg"
coverAlt: "Opintosuunnitelman muokkaajan pääikkuna keksityllä esimerkkidatalla."
---

Opintosuunnitelman sisältö on päätetty. Tiedot ovat Excelissä. Silti ne pitää viedä Wilmaan kenttä kerrallaan.

Yksi rivi menee nopeasti. Useampi rivi ja sama työ uudelleen seuraavalle opiskelijalle alkavat jo tuntua. Halusin käyttää aikani suunnitelman tarkistamiseen, en saman rakenteen naputteluun.

Tästä syntyi **Opintosuunnitelman muokkaaja**. Projektin nimi GitHubissa on Opiskelusuunnitelmoittaja. Sovellus tuo rivit esikatseluun, antaa muokata niitä ja täyttää avoimen Wilma-lomakkeen. Minä avaan oikean opiskelijan ja tallennan lopuksi itse.

![Opintosuunnitelman muokkaajan pääikkuna keksityllä esimerkkidatalla](/images/blog/kausi-1-opettajan-hallintotyo/11-opintosuunnitelman-muokkaaja.jpg)

*Kuva on projektin dokumentaatiosta ja käyttää keksittyä esimerkkidataa. Kuvan käyttöliittymä on versiosta 2.4.0; lataussivulla on uudempi versio.*

## Asennus Macille tai Windowsille

Avaa [sovelluksen lataussivu](https://github.com/mattiseise/Opiskelusuunnitelmoittaja/releases/latest). Avaa uusimman julkaisun **Assets**-lista ja valitse oman koneesi paketti.

- **Apple Silicon -Mac:** lataa `macos-arm64.dmg`, avaa se ja vedä sovellus Ohjelmat-kansioon.
- **Windows 10/11:** lataa `windows-x64.zip`, pura se pysyvään kansioon ja käynnistä `OpintosuunnitelmanTayttaja.exe` sieltä.

Koneella pitää olla Google Chrome. Pythonia ei tarvitse asentaa erikseen. **Source code** -paketit ovat kehittäjille.

Sovellus ei ole Applen notarisoima eikä Windows-paketti koodiallekirjoitettu, joten ensimmäinen avaus voi vaatia erillisen sallimisen. Tarkat alustakohtaiset ohjeet ovat [projektin asennusohjeessa](https://github.com/mattiseise/Opiskelusuunnitelmoittaja#asennus). Hallinnoidun työkoneen asennus sovitaan oman IT:n kanssa.

## Valmistele Excel ja lomakkeen asetukset

Sovelluksen mukana tulee Excel-pohja. Yksi välilehti vastaa yhtä suunnitelmapohjaa. Sen sarakkeissa ovat osaamistavoite, laajuus, suoritustapa tai osaamisen hankkiminen ja suoritusajankohta. **Ohje Excelistä** näyttää rakenteen sovelluksessa.

Muokkaa pohja omia opintoja vastaavaksi. Tallenna Excel ja paina sovelluksesta **Lataa uudelleen**, jotta muutokset näkyvät esikatselussa.

Wilman lomakkeet vaihtelevat. Oman lomakkeen kenttien ja rivinlisäyspainikkeen valitsimet määritetään sovelluksen **Asetukset**-ikkunassa. Jos mukana tuleva kenttäkartoitus ei vastaa omaa lomaketta, se pitää sovittaa ennen käyttöä. Tarkemmat ohjeet ja vianetsintä ovat [projektin dokumentaatiossa](https://github.com/mattiseise/Opiskelusuunnitelmoittaja#vianetsintä).

## Täyttö vaihe vaiheelta

1. Paina **Käynnistä Chrome**. Sovellus avaa erillisen selainprofiilin. Kirjaudu Wilmaan itse siinä ikkunassa.
2. Avaa oikean opiskelijan opintokortti ja siitä Opintosuunnitelma-lomake **muokkaustilaan**. Jätä välilehti auki.
3. Valitse lähde-Excel ja tarvittavat opinnot. Jos muokkaat olemassa olevaa suunnitelmaa, paina **Hae nykyiset rivit Wilmasta**.
4. Tarkista esikatselu. Muokkaa soluja kaksoisnapsauttamalla, poista valinta tarpeettomilta riveiltä ja järjestä rivit haluamaasi järjestykseen. Tarkista myös ajankohdat.
5. Valitse täyttötapa alla olevan ohjeen mukaan. Paina **Täytä lomake** ja tarkista vahvistusikkunassa näkyvä opiskelijan nimi.
6. Seuraa täytön lokia. **Keskeytä** pysäyttää työn rivin jälkeen.
7. Tarkista lopputulos Wilman lomakkeella. Tarkista myös mahdollinen päivämäärä- ja päivittäjärivi. Paina vasta tämän jälkeen **Tallenna tiedot** Wilmassa.

![Esikatselu, jossa suunnitelman rivejä on muokattu](/images/blog/kausi-1-opettajan-hallintotyo/12-opintosuunnitelman-esikatselu.jpg)

*Keksitty esimerkkidata. Esikatselu näyttää lomakkeelle vietävät rivit ennen täyttöä.*

## Valitse täyttötapa tarkoituksen mukaan

**Lisää lomakkeen loppuun** säilyttää nykyiset rivit ja lisää valitut rivit niiden perään. Käytän tätä, kun haluan lisätä sisältöä koskematta vanhaan.

**Korvaa lomakkeen nykyiset rivit** kirjoittaa esikatselun sisällön nykyisten rivien päälle. Tämä sopii suunnitelman järjestelyyn ja muokkaukseen. Korvaus vahvistetaan erikseen. Ylijääviä tallennettuja rivejä voi jäädä tyhjiksi; tarkistan yhteenvedon ja poistan tarvittavat rivit käsin Wilmassa.

**Täydennä puuttuvat** vertaa osaamistavoitteita ja lisää vain puuttuviksi tunnistetut rivit. Se ei vertaa suunnitelman koko sisältöä. Jos olemassa olevan rivin ajankohta tai suoritustapa pitää muuttaa, pelkkä täydennys ei tee sitä.

Kun nykyiset rivit haetaan Wilmasta, oletukseksi vaihtuu korvaustila. Tarkistan siis täyttötavan joka kerta, en pelkästään ensimmäisessä käyttöönotossa.

## Mikä muuttui omassa työssäni

Työ muuttui kopioimisesta tarkistamiseksi. Minun pitää edelleen tietää, mitä opiskelijan suunnitelmaan kuuluu. Sovellus ei valitse opiskelijaa tai päätä sisältöä.

Nykyinen toteutus käyttää Playwrightia ja kytkeytyy sovelluksen käynnistämään Chromeen. Vanha versio käytti Seleniumia. Tässä ohjeessa käytän nykyistä graafista sovellusta, koska valmiin paketin käyttöönotto on helpompaa kuin Python-ympäristön rakentaminen.

Sovellus täyttää kenttiä, joten sen vaikutus on eri kuin värikorostuksella. Ensimmäinen kokeilu kannattaa tehdä testiympäristössä keksityillä riveillä. Jos täyttö keskeytyy, tarkistan lomakkeen nykyisen tilanteen ennen uutta yritystä. En käynnistä samaa lisäystä uudelleen sokkona.

Tekoäly auttoi tekemään työkalun. Käytön aikana työkalu siirtää valittua tietoa sovitulla tavalla. Suunnitelma ja sen tallentaminen jäävät minulle.
