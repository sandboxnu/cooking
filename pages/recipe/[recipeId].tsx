import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { IRecipe, Picture } from '../../common/types';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

// root: {
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'space-around',
//   overflow: 'hidden',
//   backgroundColor: theme.palette.background.paper,
// },
// imageList: {
//   flexWrap: 'nowrap',
//   // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//   transform: 'translateZ(0)',
// },
// title: {
//   color: theme.palette.primary.light,
// },
// titleBar: {
//   background:
//     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
// },

const StyledImageList = styled.ImageList`
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
`;

const testPicture: Picture = {
  id: 1,
  author: 'deez nuts',
  description: 'great recipe!',
  pictureUrl:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F323042&psig=AOvVaw0O4dRnviMlso4HFqKTe0jB&ust=1629480360372000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjxoMPNvfICFQAAAAAdAAAAABAD',
  recipeId: 1,
};

const testRecipe: IRecipe = {
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
      <div>
        <img src={spotlightPhoto?.pictureUrl} />
        <StyledImageList cols={2.5}>
          {recipe.pictures.map((picture: Picture) => (
            <ImageListItem key={picture.pictureUrl}>
              <img src={picture.pictureUrl} alt={picture.description} />
              <ImageListItemBar
                title={picture.description}
                classes={
                  {
                    // root: classes.titleBar,
                    // title: classes.title,
                  }
                }
              />
            </ImageListItem>
          ))}
        </StyledImageList>
      </div>
    </div>
  );
}
