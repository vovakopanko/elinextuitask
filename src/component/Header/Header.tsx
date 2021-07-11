import logo from './../../image/logo.png'
import style from './Header.module.css'

const Header = () => {
    return <div className={style.application__header}>
        <div className={style.header__nameApp}><b>Image Finder</b></div>
        <div className={style.header__iconApp}><img alt="icon users" src={logo} width="30" height="30" /></div>
    </div>
}

export default Header;