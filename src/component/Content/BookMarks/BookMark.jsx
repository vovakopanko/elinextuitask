import { Box, Button, makeStyles } from "@material-ui/core";

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

const Bookmark = ({ photo }) => {
  const onRemoveFavoritesPhoto = () => {
    localStorage.removeItem('addFavorites');
  };

  const styless = useStyles();

  const srcPath =
    "https://farm" +
    photo.img.farm +
    ".staticflickr.com/" +
    photo.img.server +
    "/" +
    photo.img.id +
    "_" +
    photo.img.secret +
    ".jpg";
  return (
    <Box>
      <Box>
        <img
          src={srcPath}
          alt="Photo provided Flickr"
          className={styless.image}
        />
        {photo.img.title}
      </Box>
      <Box className={styless.button}>
        <Button variant="contained" onClick={() => onRemoveFavoritesPhoto()}>
          Remove it
        </Button>
      </Box>
    </Box>
  );
};

export default Bookmark;
