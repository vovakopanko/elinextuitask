import { Grid } from "@material-ui/core";
import Image from "./Image";

const Images = ({ image }) => {
  return (
    <div>
      <Grid container>
        {image.map((img) => (
          <Grid xs={3} item>
            <Image key={img} img={img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Images;
