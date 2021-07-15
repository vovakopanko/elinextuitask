import { Box, Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { Photo } from "../../../../services/api";
import Image from "./Image";
import style from "./Images.module.css";

const useStyles = makeStyles((theme) => ({
  images: {
    border: "1px solid black",
    padding: 5,
  },
}));

type PropsType = {
  images: Array<Photo>
}

const Images: React.FC<PropsType> = ({ images }) => {
  const [favPhoto, setFavPhoto] = useState([]);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favPhoto));
  }, [favPhoto]);

  const styless = useStyles();
  return (
    <Box className={style.block__images}>
      <Grid container>
        {images.map((image: Photo) => (
          <Grid xs={4} key={image.id} item className={styless.images}>
            <Image img={image} favPhoto={favPhoto} setFavPhoto={setFavPhoto} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Images;
