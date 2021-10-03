/**
 * The database representation of a picture
 * @param recipeId optional for now, but in the future this might be required
 */
export type Picture = {
  id: number;
  author: string;
  pictureUrl: string;
  description: string;
  recipeId?: number;
};

type BaseRecipe = {
  id: number;
  author: string;
  ingredients: string;
  steps: string;
  description: string;
  title: string;
};

/**
 * The database representation of a recipe
 * @param photoIds references to photos/creations of this recipe
 */
export type Recipe = BaseRecipe & {
  pictureIds: Array<string>;
};

/**
 * The internap representation of a recipe after being processed from the database
 */
export type IRecipe = BaseRecipe & {
  pictures: Array<Picture>;
};

export type PictureApiRequest = {
  author: string;
  pictureUrl: string;
  description?: string;
};

