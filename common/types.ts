/**
 * The database representation of a picture
 * @param recipeId optional for now, but in the future this might be required
 */
export type Picture = {
  id: number;
  author: string;
  pictureUrl: string;
  recipeId?: string;
};

/**
 * The database representation of a recipe
 * @param photoIds references to photos/creations of this recipe
 */
export type Recipe = {
  id: number;
  author: string;
  ingredients: string;
  steps: string;
  pictureIds: Array<string>;
  title: string;
};

/**
 * The internap representation of a recipe after being processed from the database
 */
export type IRecipe = {
  id: number;
  author: string;
  ingredients: string;
  steps: string;
  pictureIds: Array<Picture>;
  title: string;
};
