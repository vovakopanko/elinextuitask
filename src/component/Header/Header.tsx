import logo from './../../image/logo.png'
import style from './Header.module.css'
import AppsIcon from '@material-ui/icons/Apps';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <div className={style.application__header}>
        <div className={style.header__nameApp}><b>Image Finder</b> <AppsIcon /></div>
        <div className={style.header__iconApp}>
            <NavLink to="/registration" >
                <img alt="icon users" src={logo} width="50" height="50" />
            </NavLink>
        </div>
    </div>
}

export default Header;