import { Box, Button } from "@material-ui/core";
import style from "./BookMarks.module.css";

const BookMarks = () => {
  return (
    <div className={style.content__bookmarks}>
      <Box>
        <img src="" alt="Block image" />
        <Box>
          <Box>
            <Button color="primary">Remove It!</Button>
          </Box>
          <Box>
            <input></input>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BookMarks;
