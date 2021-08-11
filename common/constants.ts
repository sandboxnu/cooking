export const PICTURES = {
  pictures: [
    {
      pictureUrl: "https://i0.wp.com/keepfresh.com.au/wp-content/uploads/2015/07/Watermelon-Square.png?resize=250%2C195&ssl=1",
      author: "deez",
      id: "1",
    },
    {
      pictureUrl: "https://external-preview.redd.it/lApf4dLuIrnlR7xlUilsJNP8u1gjGp30NzV9Gfrr-GA.jpg?auto=webp&s=d0a902d724160e711f97f005bf7125ce22b77bdd",
      author: "nuts",
      id: "2",
    },
  ],
} as const;

// note: this migth change in the future
export const RECIPES = {
  posts: [
    {
      url: "https://i0.wp.com/keepfresh.com.au/wp-content/uploads/2015/07/Watermelon-Square.png?resize=250%2C195&ssl=1",
      author: "deez",
      ingredients: "1. square\n2. water\n3. melon",
      steps: "1. cut\n2. throw in bowl\n3. eat!",
      id: "1",
    },
    {
      url: "https://external-preview.redd.it/lApf4dLuIrnlR7xlUilsJNP8u1gjGp30NzV9Gfrr-GA.jpg?auto=webp&s=d0a902d724160e711f97f005bf7125ce22b77bdd",
      author: "nuts",
      ingredients: "1. left beef\n2. none",
      steps: "1. none\n2. pizza\n3. ???\n4. profit.",
      id: "2",
    },
  ],
};
