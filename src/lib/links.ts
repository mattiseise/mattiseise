/**
 * Ulkoiset linkit, joiden liikenne halutaan mitata.
 *
 * Linkeissä on rel="noreferrer" (tietosuojasyistä), joka estää Referer-otsakkeen
 * lähettämisen. Ilman UTM-parametreja seise.orgista tuleva liikenne näkyisi
 * kohdesivuston analytiikassa "direct"-liikenteenä eikä sitä voisi erottaa
 * suorista käynneistä. UTM-parametrit kulkevat URL:ssä, joten ne toimivat
 * referrer-politiikasta riippumatta.
 *
 * Vastinpari toiseen suuntaan: aiperusteet.fi:n footerissa on
 * ?utm_source=ai-perusteet&utm_medium=referral&utm_campaign=kurssi
 */

const AIPERUSTEET = "https://aiperusteet.fi/";

/**
 * aiperusteet.fi-linkki UTM-merkinnällä.
 * @param campaign Mistä kohdasta seise.orgia linkki tulee — näkyy GA4:ssä
 *                 campaign-kenttänä, jolloin eri sijoituspaikkojen tehon voi erottaa.
 */
export function aiperusteetUrl(campaign: string): string {
    const params = new URLSearchParams({
        utm_source: "seise-org",
        utm_medium: "referral",
        utm_campaign: campaign,
    });
    return `${AIPERUSTEET}?${params.toString()}`;
}
