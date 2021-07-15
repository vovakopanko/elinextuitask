import logo from './../../image/user.png'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { Box } from '@material-ui/core';

const Header:React.FC = () => {
    return <Box className={style.application__header}>
        <Box className={style.header__nameApp}>
            <b>
                Image Finder
            </b>
        </Box>
        <Box className={style.header__iconApp}>
            <NavLink to="/registration" >
                <img alt="icon users" src={logo} width="40" height="40" />
            </NavLink>
        </Box>
    </Box>
}

export default Header;