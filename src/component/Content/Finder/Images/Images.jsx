import { Grid, makeStyles } from "@material-ui/core";
import Image from "./Image";
import style from "./Images.module.css";

const useStyles = makeStyles((theme) => ({
  images: {
    border: "1px solid black",
    padding: 5,
  },
}));

const Images = ({ image }) => {
  const styless = useStyles();
  return (
    <div className={style.block__images}>
      <Grid container>
        {image.map((img) => (
          <Grid xs={4} key={img.id} item className={styless.images}>
            <Image img={img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Images;
