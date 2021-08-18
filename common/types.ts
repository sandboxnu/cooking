/**
 * @param recipeId optional for now, but in the future this might be required
 */
export type Picture = {
  id: string;
  author: string;
  pictureUrl: string;
  recipeId?: string;
};

/**
 * @param photoIds references to photos/creations of this recipe
 */
export type Recipe = {
  id: string;
  author: string;
  ingredients: string;
  steps: string;
  pictureIds: Array<string>;
  title: string;
};
