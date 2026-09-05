// People with a digital business card at /card/:slug.
//
// The slug is what goes on the printed card's QR code and on an NFC card, so
// it is short, lowercase and never changes once printed. Add a person here and
// drop their .vcf and QR into public/vcard/ — the page does the rest.

export const people = {
  mukesh: {
    slug: "mukesh",
    first: "Mukesh",
    last: "Ramani",
    title: "President",
    // Display form and dial form kept separate: the card shows the spaced
    // number, the tel: link needs E.164.
    phone: "+1 732 347 9171",
    phoneHref: "tel:+17323479171",
    email: "mukesh.ramani@sahajanandtechnologies.com",
    // Static files, not generated in the browser: iOS opens a .vcf link
    // straight into the Contacts preview, which a Blob download does not do.
    vcard: "/vcard/mukesh-ramani.vcf",
    qr: "/vcard/mukesh-ramani-qr.svg",
  },
};

export const personBySlug = (slug) => people[String(slug || "").toLowerCase()] || null;
