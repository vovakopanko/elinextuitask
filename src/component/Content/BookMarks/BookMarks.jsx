import { Box, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import style from "./BookMarks.module.css";

const BookMarks = () => {
  const [Photos, getPhotos] = useState([]);

  useEffect(() => {
    const photo = localStorage.getItem("addFavorites") || [];
    getPhotos(JSON.parse(photo));
  });
  const srcPath =
    "https://farm" +
    Photos.farm +
    ".staticflickr.com/" +
    Photos.server +
    "/" +
    Photos.id +
    "_" +
    Photos.secret +
    ".jpg";

  return (
    <Box className={style.content__bookmarks}>
      <Box className={style.bookmark__block}>
        <img
          src={srcPath}
          alt="Photo provided Flickr"
          className={style.bookmark__img}
        />
        <Box>
          <Button color="primary">Remove It!</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BookMarks;
