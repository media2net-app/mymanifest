export type Startup = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  creator: string;
  creatorAvatar?: string;
  image: string;
  goal: number;
  raised: number;
  backers: number;
  daysLeft: number;
  location?: string;
};

export const startups: Startup[] = [
  {
    id: "solar-charger",
    title: "SunFlow — Portable Solar Charger",
    tagline: "Charge anywhere. Never run out of power.",
    description: "SunFlow is a compact, foldable solar panel that fits in your backpack. With 25W output and USB-C PD, it charges phones, tablets, and even laptops. Perfect for hikers, digital nomads, and anyone who values freedom from power outlets. We've spent 18 months on R&D and are ready for production.",
    category: "Tech & Gadgets",
    creator: "EcoTech Labs",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    goal: 50000,
    raised: 34200,
    backers: 412,
    daysLeft: 18,
    location: "Amsterdam, NL",
  },
  {
    id: "urban-garden-kit",
    title: "GrowBox — Urban Garden Kit",
    tagline: "Fresh herbs and veggies from your windowsill.",
    description: "GrowBox is an all-in-one hydroponic kit for growing herbs and small vegetables indoors. No soil, no mess — just add water and our nutrient pods. Smart LED lighting and an app remind you when to harvest. We want to make growing your own food accessible to every city dweller.",
    category: "Lifestyle",
    creator: "Green Roots",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    goal: 25000,
    raised: 28900,
    backers: 623,
    daysLeft: 5,
    location: "Berlin, DE",
  },
  {
    id: "community-bike-share",
    title: "WijkFiets — Neighborhood Bike Share",
    tagline: "Borrow a bike. Share the ride. Clean the air.",
    description: "WijkFiets is a community-owned bike share for neighborhoods without commercial schemes. Members get a key to local hubs; bikes are maintained by volunteers and funded by small monthly fees. We're piloting in three districts and need funds for 50 more bikes and 10 new hubs.",
    category: "Community",
    creator: "Stichting WijkFiets",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
    goal: 35000,
    raised: 18200,
    backers: 198,
    daysLeft: 42,
    location: "Rotterdam, NL",
  },
  {
    id: "indie-board-game",
    title: "Realm of Shadows — Board Game",
    tagline: "A cooperative strategy game for 2–5 players.",
    description: "Realm of Shadows is a fully illustrated board game where players work together to save a kingdom from an ancient curse. 80+ cards, miniatures, and a modular board. Designed by tabletop veterans and illustrated by award-winning artists. Production is lined up — we need your support to print the first run.",
    category: "Games",
    creator: "Dice & Lore Studio",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    goal: 40000,
    raised: 52100,
    backers: 890,
    daysLeft: 12,
    location: "Utrecht, NL",
  },
  {
    id: "refill-app",
    title: "Refill — Find Refill Stations Near You",
    tagline: "Less plastic. More refill.",
    description: "Refill is an app that maps refill stations for water, detergent, coffee, and dry goods. Users avoid single-use packaging; shops get more foot traffic. We're live in 12 cities and want to expand across the Benelux and add features like loyalty rewards and business dashboards.",
    category: "Environment",
    creator: "Zero Waste Digital",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    goal: 20000,
    raised: 12400,
    backers: 356,
    daysLeft: 28,
    location: "Brussels, BE",
  },
  {
    id: "kids-coding-kit",
    title: "CodeBuddy — Learn to Code, Ages 6+",
    tagline: "Coding through stories and play.",
    description: "CodeBuddy is a subscription box that teaches kids programming with story-based challenges and a friendly robot character. Each month: a new adventure, physical components, and an app that runs on tablet or phone. No screen-time guilt — it's creative, logical, and fun. Backed by educators and tested in 20 schools.",
    category: "Education",
    creator: "LearnPlay Labs",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    goal: 30000,
    raised: 41000,
    backers: 720,
    daysLeft: 3,
    location: "Munich, DE",
  },
];

export function getStartupById(id: string): Startup | undefined {
  return startups.find((s) => s.id === id);
}
