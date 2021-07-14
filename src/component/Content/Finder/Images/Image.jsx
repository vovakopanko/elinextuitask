import { Box, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import { addFavorites } from "../../../../services/api";
import TextField from "@material-ui/core/TextField";

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

const Image = ({ img }) => {
  const [tag, setTeg] = useState([]);
  const [idPhoto, setIdPhoto] = useState([]);

  useEffect(() => {
    addFavorites(idPhoto);
  }, [idPhoto]);

  const onAddFavoritesPhoto = (photoId) => {
    setIdPhoto(photoId);
  };

  const onKeyPressHandler = (e,tags) => {
    if (e.keyCode === 13) {
      alert(`You add tags : ${tags} `);
    }
  };

  const onAddTagsForCurrentPhoto = (event) => {
    setTeg(event);
    console.log(event);
  };
  const styless = useStyles();

  const srcPath =
    "https://farm" +
    img.farm +
    ".staticflickr.com/" +
    img.server +
    "/" +
    img.id +
    "_" +
    img.secret +
    ".jpg";
  return (
    <Box>
      <Box>
        <img src={srcPath} alt="random img" className={styless.image} />
      </Box>
      <Box className={styless.button}>
        <Button variant="contained" onClick={() => onAddFavoritesPhoto(img.id)}>
          Bookmark it <PlaylistAddCheckIcon />
        </Button>
      </Box>
      <Box>
        <form className={styless.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Some tags ?"
            variant="filled"
            onKeyDown={(e) => onKeyPressHandler(e,e.target.value)}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Image;
