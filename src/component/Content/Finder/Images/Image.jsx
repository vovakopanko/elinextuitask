import { makeStyles } from "@material-ui/core";
import style from "./Images.module.css";

const useStyles = makeStyles({
  image: {
    width: "90%",
    height: 500,
    margin: 20,
  },
});

const Image = ({ img }) => {
  const styless = useStyles();

  const srcPath =
    "https://farm" +
    img.farm +
    ".staticflickr.com/" +
    img.server +
    "/" +
    img.id +
    "_" +
    img.secret +
    ".jpg";
  return (
    <div>
      <div>
        <img src={srcPath} alt="random img" className={styless.image} />
      </div>
      <div className={style.block__bookmark}>
        <button>Bookmark it</button>
      </div>
      <div>
        <input
          placeholder="some tags?"
          className={style.block__description}
        ></input>
      </div>
    </div>
  );
};

export default Image;
