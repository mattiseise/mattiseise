/**
 * Jaetut JSON-LD-palaset. Person-entiteetti upotetaan jokaiselle
 * artikkelisivulle inlinenä (pelkkä @id-viittaus etusivun entiteettiin
 * ei resolvoidu hakukoneilla sivujen yli luotettavasti).
 */
export const BASE = "https://seise.org";

export const PERSON = {
  "@type": "Person",
  "@id": `${BASE}/#person`,
  name: "Matti Seise",
  url: BASE,
  jobTitle: "ICT-erityisopettaja, tekoälykouluttaja ja AI-kehittäjä",
  sameAs: [
    "https://www.linkedin.com/in/mattiseise/",
    "https://github.com/mattiseise",
    "https://www.youtube.com/@MattiSeise",
  ],
};

export function breadcrumbLd(items: { name: string; item?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.item ? { item: it.item } : {}),
    })),
  };
}
