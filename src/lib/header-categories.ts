export type HeaderSubCategory = {
  name: string;
  slug: string;
  description?: string;
};

export type HeaderCategory = {
  name: string;
  slug?: string;
  description?: string;
  sub: HeaderSubCategory[];
};

export const headerCategories: HeaderCategory[] = [
  {
    name: "Tech",
    slug: "tech",
    description: "Gadgets and hardware",
    sub: [{ name: "Tech & Gadgets", slug: "tech", description: "Technology and hardware" }],
  },
  {
    name: "Creative",
    description: "Art, design, and media",
    sub: [
      { name: "Art", slug: "art", description: "Paintings and visual art" },
      { name: "Design", slug: "design", description: "Product and graphic design" },
      { name: "Film & Video", slug: "film", description: "Movies and documentaries" },
      { name: "Music", slug: "music", description: "Albums and instruments" },
      { name: "Publishing", slug: "publishing", description: "Books and magazines" },
    ],
  },
  {
    name: "Games",
    slug: "games",
    description: "Tabletop and video games",
    sub: [{ name: "Games", slug: "games", description: "Board and video games" }],
  },
  {
    name: "Community",
    description: "Local and green projects",
    sub: [
      { name: "Community", slug: "community", description: "Local and civic projects" },
      { name: "Environment", slug: "environment", description: "Eco and sustainability" },
      { name: "Lifestyle", slug: "lifestyle", description: "Health and living" },
    ],
  },
  {
    name: "Learning",
    slug: "education",
    description: "Education and teaching",
    sub: [{ name: "Education", slug: "education", description: "Learning and teaching" }],
  },
];
