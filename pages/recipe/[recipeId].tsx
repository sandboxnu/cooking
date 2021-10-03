import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { IRecipe, Picture } from '../../common/types';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpotlightImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
`;

const CarouselImage = styled.img`
  object-fit: contain;
  max-height: 300px;
`;
const CarouselItem = styled.div`
  margin: 5px;
  max-height: 300px;
`;

const Carousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const RecipeText = styled.div`
  width: 100%;
  margin-left: 40px;
`;

const Highlight = styled.img`
  border-color: #6495ed;
  border-style: solid;
  object-fit: contain;
  max-height: 300px;
`;

const testPicture: Picture = {
  id: 1,
  author: 'deez nuts',
  description: 'great recipe!',
  pictureUrl:
    'https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw=',
  recipeId: 1,
};

const testPicture2: Picture = {
  id: 3,
  author: 'taylor swift',
  description: 'cookie',
  pictureUrl:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/taylor-swift-1602170077.jpg?resize=640:*',
  recipeId: 1,
};

const testPicture1: Picture = {
  id: 2,
  author: 'deez nuts 2',
  description: 'great recipe 2!',
  pictureUrl:
    'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
  recipeId: 2,
};

const testRecipe: IRecipe = {
  id: 1,
  author: 'Mr. Deez',
  ingredients: '1. deez \n 2.nuts',
  steps: '1. deez \n 2.nuts',
  pictures: [testPicture1, testPicture, testPicture2],
  title: 'fuc',
  description: 'deez nuts',
};
/**
 * Page To Display A Singular Recipe
 */
export default function Recipe() {
  const router = useRouter();
  const { recipeId } = router.query;
  const [spotlightPhoto, setSpotlightPhoto] = useState<Picture>(undefined);

  //TODO: get real recipe from recipeId
  const recipe = testRecipe;

  /**
   * Anticipating recipe being loaded from db query
   */
  useEffect(() => {
    setSpotlightPhoto(recipe.pictures[0] ?? undefined);
  }, [recipe]);

  return (
    <div>
      <Main>
        <SpotlightImage src={spotlightPhoto?.pictureUrl} />
        <Carousel>
          {recipe.pictures.map((picture: Picture) => (
            <CarouselItem onClick={() => setSpotlightPhoto(picture)}>
              {picture.id === spotlightPhoto?.id ? (
                <Highlight src={picture.pictureUrl} />
              ) : (
                <CarouselImage src={picture.pictureUrl} />
              )}
            </CarouselItem>
          ))}
        </Carousel>
        <RecipeText>
          <Typography variant='h1'>{recipe.title}</Typography>
          <Typography variant='h6'>By: {recipe.author}</Typography>
          <Typography variant='h5'>Ingredients:</Typography>
          {recipe.ingredients.split('\n').map((ingredient) => {
            return <Typography>{ingredient}</Typography>;
          })}
          <Typography variant='h5'>Steps:</Typography>
          {recipe.steps.split('\n').map((step) => {
            return <Typography>{step}</Typography>;
          })}
        </RecipeText>
      </Main>
    </div>
  );
}
