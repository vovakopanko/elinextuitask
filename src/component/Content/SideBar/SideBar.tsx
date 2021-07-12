import style from './SideBar.module.css'
import sky from './../../../image/sky.png'
import bookmarks from './../../../image/bookmarks.png'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return <div className={style.content__sideBar}>
        <NavLink to="/finder" activeClassName={style.sideBar__sky_active}>
            <img className={style.sideBar__sky}  src={sky} alt="sky user" width="60" height="60" ></img>
        </NavLink>
        <NavLink to="/bookmarks" activeClassName={style.sideBar__bookmarks_active}>
            <img className={style.sideBar__book} src={bookmarks} alt="book store" width="60" height="60" />
        </NavLink>
    </div>
}

export default SideBar;