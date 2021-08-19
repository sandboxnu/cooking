import { useRouter } from 'next/dist/client/router';

const testPicture = {
  id: 1,
  author: 'deez nuts',
  description: 'great recipe!',
  pictureUrl:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F323042&psig=AOvVaw0O4dRnviMlso4HFqKTe0jB&ust=1629480360372000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjxoMPNvfICFQAAAAAdAAAAABAD',
  recipeId: 1,
};

const testRecipe = {
  id: 1,
  author: 'Mr. Deez',
  ingredients: '1. deez \n 2.nuts',
  steps: '1. deez \n 2.nuts',
  pictures: [testPicture, testPicture, testPicture, testPicture],
  title: 'fuc',
  description: 'deez nuts',
};
/**
 * Page To Display A Singular Recipe
 */
export default function Recipe() {
  const router = useRouter();
  const { recipeId } = router.query;

  //TODO: get real recipe from recipeId
  const recipe = testPicture;
}
