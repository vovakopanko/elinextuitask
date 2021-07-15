import { Box, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import style from "./Images.module.css";
import { Photo } from "../../../../services/api";

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

type PropsType={
  img:Photo,
  setFavPhoto:any,
  favPhoto:Array<Photo>
}

const Image:React.FC<PropsType> = ({img,setFavPhoto,favPhoto}) => {
  const [tag, setTeg] = useState([]);
  const [bookmarks, setBookmarks] = useState(true);

  const onAddFavoritesPhoto = (id: string) => {
    setBookmarks(!bookmarks);
    if(bookmarks){
      setFavPhoto([...favPhoto, img]);
    } else {
    const photo = localStorage["favorites"];
    const results = JSON.parse(photo);
    for (let i = 0; i < results.length; i++)
    if (results[i].id === id) results.splice(i, 1);
    localStorage["favorites"] = JSON.stringify(results);
    }

  };

  const onKeyPressHandler = (e:any, tags:string) => {
    if (e.keyCode === 13) {
      alert(`You add tags : ${tags} `);
    }
  };

  // const onAddTagsForCurrentPhoto = (event) => {
  //   setTeg(event);
  //   console.log(event);
  // };

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
    <Box className={style.block__image}>
      <Box className={style.image__item}>
        <img
          src={srcPath}
          alt="Photo provided Flickr"
          className={styless.image}
        />
        {img.title}
      </Box>
      <Box className={`${styless.button}+${style.block__button}`}>
        <Button variant="contained" onClick={() => onAddFavoritesPhoto(img.id)}>
          Bookmark it
          {bookmarks ? <StarBorderIcon /> : <StarIcon color="primary" />}
        </Button>
      </Box>
      <Box className={style.block__field}>
        <form className={styless.root} noValidate autoComplete="off">
          <TextField
            id={img.id}
            label="Some tags ?"
            variant="filled"
            onKeyDown={(e:any) => onKeyPressHandler(e, e.target.value)}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Image;
