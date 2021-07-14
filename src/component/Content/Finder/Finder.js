import { Box, Button, TextField } from "@material-ui/core";
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
      margin: 20,
    },
    marginLeft: "auto",
  },
  search: {
    fontSize: 54,
  },
  finder: {
    marginTop:30
  },
  button : {
    marginTop:20
  }
  
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
        console.log(Response)
        setImage(Response.data.photos.photo);
        setPage(Response.data.photos.pages);
        setEmptyPage(Response.data.photos.total);
      })
      .catch(() => <Redirect to="/finder" />);
  }, [count, searchName]);

  const onNumberChange = (e, page) => {
    setCount(page);
  };

  const onKeyPressHandler = (event, searchName) => {
    if (event.keyCode === 13) {
      setSearchName(searchName);
    }
  };

  const onClickHandler = (searchName) => {
    setSearchName(searchName);
  };

  const classes = useStyles();

  return (
    <div className={style.content__finder}>
      <Box component="span" m={1} className={classes.finder}>
        <TextField
          className={classes.search}
          label="Search Images"
          onKeyDown={(e) => onKeyPressHandler(e, e.target.value)}
        ></TextField>
      </Box>
      <Box className={classes.button}>
        <Button color="primary" onClick={() => onClickHandler("cat")}>
          Cat
        </Button>
        <Button color="primary" onClick={() => onClickHandler("mountains")}>
          Mountains
        </Button>
        <Button color="primary" onClick={() => onClickHandler("car")}>
          Car
        </Button>
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
          <Box>
            <b>No images here. Would you try to search for anything else?</b>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Finder;
