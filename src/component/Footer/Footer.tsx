import { Box } from '@material-ui/core';
import style from './Footer.module.css'

const Footer:React.FC = () => {
    return <Box className={style.application__footer}>
        <b>
            Copyrights
        </b>
    </Box>
}

export default Footer;