import logo from './../../image/user.jpg'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <div className={style.application__header}>
        <div className={style.header__nameApp}><b>Image Finder</b></div>
        <div className={style.header__iconApp}>
            <NavLink to="/registration" >
                <img alt="icon users" src={logo} width="40" height="40" />
            </NavLink>
        </div>
    </div>
}

export default Header;