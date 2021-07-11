import style from './SideBar.module.css'
import sky from './../../../image/sky.png'
import book from './../../../image/book.png'

const SideBar = () => {
    return <div className={style.content__sideBar}>
        <img className={style.sideBar__sky} src={sky} alt="sky user" width="60" height="60" />
        <img className={style.sideBar__book} src={book} alt="book store" width="60" height="60" />
    </div>
}

export default SideBar;