import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import styled from "styled-components";
import { Recipe } from "../common/types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface CardProps {
  recipe: Recipe;
}

const testData: Recipe[] = [
  {
    id: "23",
    author: "nuts",
    ingredients: "",
    steps: "",
    pictureIds: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-nuts-main-image-700-350-bb95ac2.jpg?quality=90&resize=385%2C350",
    ],
    title: "deez",
  },
  {
    id: "24",
    author: "nuts",
    ingredients: "",
    steps: "",
    pictureIds: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-nuts-main-image-700-350-bb95ac2.jpg?quality=90&resize=385%2C350",
    ],
    title: "deez",
  },
];

export const RecipeGrid = (props: any) => {
  return (
    <ImageList rowHeight={180}>
      {testData.map((item) => (
        <Cards key={item.id} recipe={item} />
      ))}
    </ImageList>
  );
};

const Cards = (props: CardProps) => {
  const { recipe } = props;
  const image = recipe.pictureIds[0];
  return (
    <ImageListItem onClick={() => {}}>
      <img src={image} alt={recipe.title} />
      <ImageListItemBar
        title={recipe.title}
        subtitle={<span>by: {recipe.author}</span>}
      />
    </ImageListItem>
  );
};

const Cards2 = (props: CardProps) => {
  const { recipe } = props;
  const image = recipe.pictureIds[0];
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
