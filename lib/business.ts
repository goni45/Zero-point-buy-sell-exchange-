export const BUSINESS = {
  name: "Zero Point Buy Sell Exchange",
  tagline: "মোবাইল ফোন কেনাবেচার এক বিশ্বস্ত প্রতিষ্ঠান",
  legalName: "Zero Point Buy Sell Exchange",
  domain: "zeropointbyx.com",
  email: "kmdhridoy489@gmail.com",
  phone: "01684-377617",
  phoneIntl: "+8801684377617",
  whatsapp: "8801781685200",
  whatsappDisplay: "+880 1781-685200",
  address: {
    line1: "অলকা নদী বাংলা কমপ্লেক্স (দ্বিতীয় তলা)",
    line2: "শপ নং -২৩৫, রামবাবু রোড, গাঙ্গিনাপাড়",
    line3: "ময়মনসিংহ, ২২০০",
    full:
      "অলকা নদী বাংলা কমপ্লেক্স (দ্বিতীয় তলা), শপ নং -২৩৫, রামবাবু রোড, গাঙ্গিনাপাড়, ময়মনসিংহ, ২২০০",
  },
  hours: [
    { days: "শনি – বৃহস্পতিবার", time: "সকাল ১০:০০ – রাত ৯:৩০" },
    { days: "শুক্রবার", time: "সকাল ১০:০০ – রাত ৯:০০" },
  ],
  socials: {
    facebook: "https://www.facebook.com/www.zeropoinbuysellexchange/",
    youtube:
      "https://www.youtube.com/watch?si=HzZxGUYbyqCP2CF1&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExejRjcXh2WlBiZTlacTBJcnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR65so5GdnXqlH0TMqdWPYbPS91hJNBClFST1T_QpLZeF1YvFOsw_DAkw4mm9g_aem_9vPnVB7cYMtg9_LbyjIb8g&v=_NjyXrvgiW0&feature=youtu.be",
    tiktok: "https://www.tiktok.com/@zeropointbuysellexchang",
  },
} as const;

export const WA_NUMBER = "8801781685200";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const formatBDT = (price: number): string =>
  `৳${price.toLocaleString("en-US")}`;

export const googleMapsEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Rambabu Road, Ganginapar, Mymensingh 2200") +
  "&output=embed";
