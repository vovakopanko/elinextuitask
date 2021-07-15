import { Box, Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import Image from "./Image";
import style from "./Images.module.css";

const useStyles = makeStyles((theme) => ({
  images: {
    border: "1px solid black",
    padding: 5,
  },
}));

const Images = ({ image }) => {
  const [favPhoto, setFavPhoto] = useState([]);
  useEffect(() => {
    localStorage.setItem("addFavorites", JSON.stringify(favPhoto));
  }, [favPhoto]);

  const styless = useStyles();
  return (
    <Box className={style.block__images}>
      <Grid container>
        {image.map((img) => (
          <Grid xs={4} key={img.id} item className={styless.images}>
            <Image img={img} favPhoto={favPhoto} setFavPhoto={setFavPhoto}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Images;
