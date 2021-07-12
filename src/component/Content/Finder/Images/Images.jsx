import Image from "./Image";
import style from "./Images.module.css";

const Images = ({ image }) => {
  return (
    <div className={style.images__block}>
      {image.map((img) => (
        <Image key={img} img={img} />
      ))}
    </div>
  );
};

export default Images;
