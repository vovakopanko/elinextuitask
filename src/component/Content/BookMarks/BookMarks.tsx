import { Box, Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { Photo } from "../../../services/api";
import Bookmark from "./BookMark";
import style from "./BookMarks.module.css";

const useStyles = makeStyles((theme) => ({
  photos: {
    border: "1px solid black",
    padding: 5,
  },
}));

const BookMarks: React.FC = () => {
  const [photos, setPhotos] = useState<Array<Photo>>([]);

  useEffect(() => {
    const photoJson = localStorage.getItem("favorites");

    if (photoJson) {
      const photos: Array<Photo> = JSON.parse(photoJson);
      setPhotos(photos);
    }
  }, [photos]);

  // const onRemoveAllFavoritesPhoto = () => {
  //   localStorage.removeItem("addFavorites");
  // };

  const styless = useStyles();

  return (
    <Box className={style.content__bookmarks}>
      <Grid container>
        {photos !== null ? (
          photos.map((p: Photo) => (
            <Grid xs={4} key={p.id} item className={styless.photos}>
              <Bookmark photo={p} />
            </Grid>
          ))
        ) : (
          <Box />
        )}
      </Grid>
      {/* <Button variant="contained" onClick={() => onRemoveAllFavoritesPhoto()}>
        Remove all
      </Button> */}
    </Box>
  );
};

export default BookMarks;
