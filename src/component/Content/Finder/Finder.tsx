import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getPhotosDataAsync, getPhotosDataAsync as getImagesAsync, Photo } from "../../../services/api";
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
    marginTop: 30,
  },
  button: {
    marginTop: 20,
  },
}));

const Finder = () => {
  const [images, setImages] = useState<Array<Photo>>([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [emptyPage, setEmptyPage] = useState<number>();
  const [searchName, setSearchName] = useState("Belarus");
  const [wasError, setWasError] = useState(false);

  useEffect(() => {
    const loadImagesAsync = async () => {
      try {
        const photosData = await getPhotosDataAsync(count, searchName);
        if (photosData) {
          setImages(photosData.photo);
          setPage(photosData.pages);
          setEmptyPage(photosData.total);
          setCount(photosData.page);
        }
      }
      catch {
        setWasError(true);
      }
    }

    loadImagesAsync();
  }, [count, searchName]);

  const onNumberChange = (e: any, count: number) => {
    setCount(count);
  };

  const onKeyPressHandler = (event: any, searchName: string) => {
    if (event.keyCode === 13) {
      setCount(1);
      setSearchName(searchName);
    }
  };

  const onClickHandler = (searchName: string, count: number) => {
    setCount(count);
    setSearchName(searchName);
  };

  const classes = useStyles();

  if (wasError)
    return <Redirect to="/flickr" />

  return (
    <Box className={style.content__finder}>
      <Box component="span" m={1} className={classes.finder}>
        <TextField
          className={classes.search}
          label="Search Images"
          onKeyDown={(e:any) => onKeyPressHandler(e, e.target.value)}
        ></TextField>
      </Box>
      <Box className={classes.button}>
        <Button color="primary" onClick={() => onClickHandler("cat", 1)}>
          Cat
        </Button>
        <Button color="primary" onClick={() => onClickHandler("mountains", 1)}>
          Mountains
        </Button>
        <Button color="primary" onClick={() => onClickHandler("car", 1)}>
          Car
        </Button>
      </Box>
      {emptyPage ? (
        <Box>
          <Box className={classes.root}>
            <Pagination
              color="primary"
              variant="outlined"
              shape="rounded"
              defaultPage={1}
              count={emptyPage}
              page={count}
              onChange={(e, count) => onNumberChange(e, count)}
            />
          </Box>
          <Box>
            <Images images={images} />
          </Box>
        </Box>
      ) : (
        <Box>
          <Box>
            <b>No images here. Would you try to search for anything else?</b>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Finder;
