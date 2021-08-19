import { useRouter } from 'next/dist/client/router';

/**
 * Page To Display A Singular Recipe
 */
export default function Recipe() {
  const router = useRouter();
  const { recipeId } = router.query;

  //TODO: get real recipe from recipeId
}
