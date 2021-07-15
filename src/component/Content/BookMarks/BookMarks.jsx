import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import Bookmark from "./BookMark";
import style from "./BookMarks.module.css";

const useStyles = makeStyles((theme) => ({
  photos: {
    border: "1px solid black",
    padding: 5,
  },
}));

const BookMarks = () => {
  const [Photos, getPhotos] = useState([]);

  useEffect(() => {
    const photo = localStorage.getItem("addFavorites");
    getPhotos(JSON.parse(photo));
  }, [Photos]);

  const styless = useStyles();
  return (
    <Box className={style.content__bookmarks}>
      <Grid container>
        
        {Photos!==null?Photos.map((p) => (
          <Grid xs={4} key={p.id} item className={styless.photos}>
            <Bookmark photo={p} />
          </Grid>
        )):<Box/>}
      </Grid>
    </Box>
  );
};

export default BookMarks;
