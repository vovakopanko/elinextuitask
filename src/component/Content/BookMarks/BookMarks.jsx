import { Box } from '@material-ui/core'
import style from './BookMarks.module.css'

const BookMarks = () => {
    return <div className={style.content__bookmarks}>
        <Box>
            <img src="" alt="Block image"></img>
            <div>
                <button>Remove It!</button>
                <input></input>
            </div>
        </Box>
    </div>
}

export default BookMarks