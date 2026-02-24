export type Reward = {
  title: string;
  amount: number;
  description: string;
  backers?: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Startup = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: string;
  creator: string;
  creatorBio?: string;
  creatorAvatar?: string;
  image: string;
  goal: number;
  raised: number;
  backers: number;
  daysLeft: number;
  location?: string;
  risksAndChallenges?: string;
  faq?: FaqItem[];
  rewards?: Reward[];
};

export const startups: Startup[] = [
  {
    id: "solar-charger",
    title: "SunFlow — Portable Solar Charger",
    tagline: "Charge anywhere. Never run out of power.",
    description: "SunFlow is a compact, foldable solar panel that fits in your backpack.",
    longDescription: "SunFlow is a compact, foldable solar panel that fits in your backpack. With 25W output and USB-C PD, it charges phones, tablets, and even laptops. Perfect for hikers, digital nomads, and anyone who values freedom from power outlets.\n\nWe've spent 18 months on R&D with a focus on durability and efficiency. The panels are rated IP65 and the hinge mechanism has been tested for 10,000+ folds. Our manufacturing partner in Taiwan is ready for production — we just need your support to cover the first batch and tooling.",
    category: "Tech & Gadgets",
    creator: "EcoTech Labs",
    creatorBio: "EcoTech Labs is a small team in Amsterdam focused on sustainable consumer electronics. We've shipped two previous campaigns and believe in transparent, ethical production.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    goal: 50000,
    raised: 34200,
    backers: 412,
    daysLeft: 18,
    location: "Amsterdam, NL",
    risksAndChallenges: "Component supply is secured for the first run. Any delays would be due to customs or logistics; we've built in a 4-week buffer. We'll communicate openly via updates if anything shifts.",
    faq: [
      { question: "What's the warranty?", answer: "2 years on the panel and 1 year on the electronics. We'll provide a clear warranty card in the box." },
      { question: "Can it charge a laptop?", answer: "Yes — with USB-C PD it can charge most ultrabooks and MacBooks, though full charge will take longer than a wall adapter." },
      { question: "When do you ship?", answer: "We aim to ship rewards by August 2025. Backers will get tracking and updates." },
    ],
    rewards: [
      { title: "Early Bird", amount: 49, description: "One SunFlow unit. Save €20 off retail.", backers: 120 },
      { title: "SunFlow", amount: 69, description: "One SunFlow portable solar charger. All colors.", backers: 280 },
      { title: "SunFlow + Cable Kit", amount: 89, description: "SunFlow plus our USB-C and Lightning cable set.", backers: 12 },
    ],
  },
  {
    id: "urban-garden-kit",
    title: "GrowBox — Urban Garden Kit",
    tagline: "Fresh herbs and veggies from your windowsill.",
    description: "GrowBox is an all-in-one hydroponic kit for growing herbs and small vegetables indoors.",
    longDescription: "GrowBox is an all-in-one hydroponic kit for growing herbs and small vegetables indoors. No soil, no mess — just add water and our nutrient pods. Smart LED lighting and an app remind you when to harvest.\n\nWe want to make growing your own food accessible to every city dweller. The kit includes the unit, seeds for 3 herb varieties, and a 6-month supply of nutrients. The app works with iOS and Android and lets you track growth and get tips.",
    category: "Lifestyle",
    creator: "Green Roots",
    creatorBio: "Green Roots is a Berlin-based startup. We've run pop-up workshops in 5 cities and have a growing community of urban growers.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    goal: 25000,
    raised: 28900,
    backers: 623,
    daysLeft: 5,
    location: "Berlin, DE",
    risksAndChallenges: "We've already produced a small pilot batch. Main risk is demand exceeding our first run — we'll open a pre-order list and fulfill in waves if needed.",
    faq: [
      { question: "How much power does it use?", answer: "About 8W on average — similar to a small LED lamp. Timer and app help keep usage efficient." },
      { question: "Which herbs can I grow?", answer: "Basil, mint, parsley, cilantro, and our 'salad mix' for small leaves. We'll add more seed options post-campaign." },
    ],
    rewards: [
      { title: "GrowBox Standard", amount: 79, description: "One GrowBox unit + seeds + 6 months nutrients.", backers: 450 },
      { title: "GrowBox Duo", amount: 139, description: "Two units. Perfect for kitchen + living room.", backers: 173 },
    ],
  },
  {
    id: "community-bike-share",
    title: "WijkFiets — Neighborhood Bike Share",
    tagline: "Borrow a bike. Share the ride. Clean the air.",
    description: "WijkFiets is a community-owned bike share for neighborhoods without commercial schemes.",
    longDescription: "WijkFiets is a community-owned bike share for neighborhoods without commercial schemes. Members get a key to local hubs; bikes are maintained by volunteers and funded by small monthly fees.\n\nWe're piloting in three districts and need funds for 50 more bikes and 10 new hubs. Each hub has 5–8 bikes, a simple lock system, and a repair kit. Membership is €5/month and includes insurance. We work with local councils and housing associations to place hubs.",
    category: "Community",
    creator: "Stichting WijkFiets",
    creatorBio: "Stichting WijkFiets is a nonprofit in Rotterdam. We're cyclists, parents, and neighbors who want affordable, local mobility.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
    goal: 35000,
    raised: 18200,
    backers: 198,
    daysLeft: 42,
    location: "Rotterdam, NL",
    risksAndChallenges: "Weather and vandalism can affect bikes. We'll have a maintenance schedule and spare parts. If a hub underperforms, we'll relocate with community input.",
    faq: [
      { question: "How do I become a member?", answer: "After the campaign we'll open sign-up. You'll get a key and app access. First month is free for backers." },
      { question: "Where will the new hubs be?", answer: "We're in talks with two districts. Backers will get a say via a short survey once we're funded." },
    ],
    rewards: [
      { title: "Supporter", amount: 15, description: "Thanks on our site + 3 months free membership.", backers: 89 },
      { title: "Member + Key", amount: 60, description: "1 year membership + key. Early backer price.", backers: 109 },
    ],
  },
  {
    id: "indie-board-game",
    title: "Realm of Shadows — Board Game",
    tagline: "A cooperative strategy game for 2–5 players.",
    description: "Realm of Shadows is a fully illustrated board game where players work together to save a kingdom.",
    longDescription: "Realm of Shadows is a cooperative strategy board game for 2–5 players. You work together to save a kingdom from an ancient curse. 80+ cards, miniatures, and a modular board.\n\nDesigned by tabletop veterans and illustrated by award-winning artists. Playtime is 60–90 minutes. Production is lined up with a manufacturer in Poland — we need your support to print the first run and ship to backers worldwide.",
    category: "Games",
    creator: "Dice & Lore Studio",
    creatorBio: "We're a small studio in Utrecht. We've released two print-and-play games; this is our first full physical release.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    goal: 40000,
    raised: 52100,
    backers: 890,
    daysLeft: 12,
    location: "Utrecht, NL",
    risksAndChallenges: "Shipping and customs can cause delays. We're using EU and US fulfillment centers to reduce issues. If anything slips we'll update backers every two weeks.",
    faq: [
      { question: "Is it language-dependent?", answer: "The rulebook will be in English. Card text is minimal; we'll provide language packs (DE, NL, FR) as add-ons." },
      { question: "Solo mode?", answer: "Yes — official solo rules are included. You control two characters." },
    ],
    rewards: [
      { title: "Pledge", amount: 45, description: "Base game. All stretch goals included.", backers: 520 },
      { title: "Deluxe", amount: 75, description: "Game + premium box + art book.", backers: 310 },
      { title: "Retailer", amount: 180, description: "6 copies for retail. Inquire for more.", backers: 60 },
    ],
  },
  {
    id: "refill-app",
    title: "Refill — Find Refill Stations Near You",
    tagline: "Less plastic. More refill.",
    description: "Refill is an app that maps refill stations for water, detergent, coffee, and dry goods.",
    longDescription: "Refill is an app that maps refill stations for water, detergent, coffee, and dry goods. Users avoid single-use packaging; shops get more foot traffic.\n\nWe're live in 12 cities and want to expand across the Benelux and add features like loyalty rewards and business dashboards. This campaign funds the next year of development and community outreach.",
    category: "Environment",
    creator: "Zero Waste Digital",
    creatorBio: "Zero Waste Digital is a small team in Brussels. We built Refill as a side project and it's grown into a community of 15k+ users.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    goal: 20000,
    raised: 12400,
    backers: 356,
    daysLeft: 28,
    location: "Brussels, BE",
    risksAndChallenges: "We depend on partners and volunteers to keep data accurate. We'll invest in moderation and verification tools.",
    faq: [
      { question: "Is the app free?", answer: "Yes for users. Businesses can list for free; we'll offer premium listing later." },
      { question: "Which cities next?", answer: "Antwerp, Cologne, and Lille are next. Backers can vote for one more city." },
    ],
    rewards: [
      { title: "Thanks", amount: 5, description: "Your name in the app and our thanks.", backers: 200 },
      { title: "Pro for 1 year", amount: 25, description: "Pro features: offline maps, no ads, early access.", backers: 156 },
    ],
  },
  {
    id: "kids-coding-kit",
    title: "CodeBuddy — Learn to Code, Ages 6+",
    tagline: "Coding through stories and play.",
    description: "CodeBuddy is a subscription box that teaches kids programming with story-based challenges.",
    longDescription: "CodeBuddy is a subscription box that teaches kids programming with story-based challenges and a friendly robot character. Each month: a new adventure, physical components, and an app that runs on tablet or phone.\n\nNo screen-time guilt — it's creative, logical, and fun. Backed by educators and tested in 20 schools. The first box introduces sequences and loops; later boxes cover conditionals, variables, and simple projects.",
    category: "Education",
    creator: "LearnPlay Labs",
    creatorBio: "LearnPlay Labs is based in Munich. We're parents and educators who want coding to be as accessible as reading.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    goal: 30000,
    raised: 41000,
    backers: 720,
    daysLeft: 3,
    location: "Munich, DE",
    risksAndChallenges: "Subscription fulfillment is complex. We've partnered with a fulfillment center and will ship in monthly batches. First box ships in September.",
    faq: [
      { question: "What age exactly?", answer: "Ages 6–10 is the sweet spot. Older kids can go faster; we have 'challenge mode' for them." },
      { question: "Can schools order?", answer: "Yes — we have a school pack (10 boxes) and classroom guide. Contact us for a quote." },
    ],
    rewards: [
      { title: "1-month trial", amount: 29, description: "First box only. Perfect to try.", backers: 180 },
      { title: "6-month subscription", amount: 149, description: "6 monthly boxes. Save 15%.", backers: 410 },
      { title: "12-month subscription", amount: 249, description: "12 monthly boxes. Save 25%.", backers: 130 },
    ],
  },
];

export function getStartupById(id: string): Startup | undefined {
  return startups.find((s) => s.id === id);
}
