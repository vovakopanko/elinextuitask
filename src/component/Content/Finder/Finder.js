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
  const [page, setPage] = useState(1);
  const [emptyPage, setEmptyPage] = useState();
  const [searchName, setSearchName] = useState("Belarus");

  useEffect(() => {
    getImages(count, searchName)
      .then((Response) => {
        console.log(Response);
        setImage(Response.data.photos.photo);
        setPage(Response.data.photos.pages);
        setEmptyPage(Response.data.photos.total);
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

      {emptyPage ? (
        <Box>
          <Box className={classes.root}>
            <Pagination
              count={20}
              variant="outlined"
              shape="rounded"
              defaultPage={1}
              count={page}
              onChange={(e, page) => onNumberChange(e.target.value, page)}
            />
          </Box>
           <Box>
            <Images image={image} />
          </Box>
        </Box>
      ) : (
        <Box>
          <span>
            No images here. Would you try to search for anything else?
          </span>
        </Box>
      )}
    </div>
  );
};

export default Finder;
