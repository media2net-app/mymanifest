export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  { id: "art", name: "Art", slug: "art", description: "Paintings, sculptures, and visual art" },
  { id: "comics", name: "Comics", slug: "comics", description: "Comic books and graphic novels" },
  { id: "design", name: "Design", slug: "design", description: "Product and graphic design" },
  { id: "film", name: "Film & Video", slug: "film", description: "Movies, documentaries, and video" },
  { id: "food", name: "Food & Craft", slug: "food", description: "Food, drink, and crafts" },
  { id: "games", name: "Games", slug: "games", description: "Tabletop and video games" },
  { id: "music", name: "Music", slug: "music", description: "Albums, concerts, and instruments" },
  { id: "tech", name: "Tech & Gadgets", slug: "tech", description: "Technology and hardware" },
  { id: "publishing", name: "Publishing", slug: "publishing", description: "Books and magazines" },
  { id: "lifestyle", name: "Lifestyle", slug: "lifestyle", description: "Health, fitness, and living" },
  { id: "community", name: "Community", slug: "community", description: "Local and civic projects" },
  { id: "environment", name: "Environment", slug: "environment", description: "Eco and sustainability" },
  { id: "education", name: "Education", slug: "education", description: "Learning and teaching" },
];
