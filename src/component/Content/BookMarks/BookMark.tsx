import { Box, Button, makeStyles } from "@material-ui/core";

import { Photo } from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  image: {
    width: "90%",
    height: 500,
    margin: 20,
  },
  button: {
    margin: 10,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

type PropsType = {
  photo: Photo
}

const Bookmark: React.FC<PropsType> = ({ photo }) => {
  const onRemoveFavoritesPhoto = (id: string) => {
    const photo = localStorage["addFavorites"];
    const results = JSON.parse(photo);
    for (let i = 0; i < results.length; i++)
      if (results[i].id === id) results.splice(i, 1);
    localStorage["addFavorites"] = JSON.stringify(results);
  };

  const styless = useStyles();

  const srcPath =
    "https://farm" +
    photo.farm +
    ".staticflickr.com/" +
    photo.server +
    "/" +
    photo.id +
    "_" +
    photo.secret +
    ".jpg";
  return (
    <Box>
      <Box>
        <img
          src={srcPath}
          alt={photo.title}
          className={styless.image}
        />
        {photo.title}
      </Box>
      <Box className={styless.button}>
        <Button
          variant="contained"
          onClick={() => onRemoveFavoritesPhoto(photo.id)}
        >
          Remove it
        </Button>
      </Box>
    </Box>
  );
};

export default Bookmark;
