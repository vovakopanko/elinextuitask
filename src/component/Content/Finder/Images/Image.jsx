import style from "./Images.module.css";

const Image = ({ img }) => {
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
    <div className={style.block__image}>
      <img src={srcPath} alt="random img" />
    </div>
  );
};

export default Image;
