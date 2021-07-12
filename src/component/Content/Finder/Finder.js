import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";
import { getImages } from "../../../services/api";
import style from "./Finder.module.css";
import Images from "./Images/Images";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
    // float: "right",
    marginLeft: "auto",
  },
  search: {},
}));

const Finder = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getImages().then((Response) => {
      setImage(Response.data.photos.photo);
    });
  }, []);

  const classes = useStyles();

  return (
    <div className={style.content__finder}>
      <Box component="span" m={1}>
        <TextField className={classes.search} label="Search Images"></TextField>
      </Box>
      <Box className={classes.root}>
        <Pagination count={20} variant="outlined" shape="rounded" />
      </Box>
      <Box>
        <Images image={image} />
      </Box>
    </div>
  );
};

export default Finder;
