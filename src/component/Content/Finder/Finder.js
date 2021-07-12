import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getImages } from "../../../services/api";
import style from "./Finder.module.css";
import Images from "./Images/Images";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
    marginLeft: "auto",
  },
  search: {},
}));

const Finder = () => {
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(1);
  const [searchName, setSearchName] = useState("IT technologies");

  useEffect(() => {
    getImages(count, searchName)
      .then((Response) => {
        setImage(Response.data.photos.photo);
      })
      .catch(() => <Redirect to="/finder" />);
  }, [count, searchName]);

  const onNameChange = (searchName) => {
    setSearchName(searchName);
  };

  const onNumberChange = (e, page) => {
    setCount(page);
  };

  const classes = useStyles();

  return (
    <div className={style.content__finder}>
      <Box component="span" m={1}>
        <TextField
          className={classes.search}
          label="Search Images"
          onChange={(e) => onNameChange(e.target.value)}
        ></TextField>
      </Box>
      <Box className={classes.root}>
        <Pagination
          count={20}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          onChange={(e, page) => onNumberChange(e.target.value, page)}
        />
      </Box>
      <Box>
        <Images image={image} />
      </Box>
    </div>
  );
};

export default Finder;
