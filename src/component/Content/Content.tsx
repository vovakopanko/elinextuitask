import style from './Content.module.css'
import Finder from './Finder/Finder';
import SideBar from './SideBar/SideBar';

const Content = () => {
    return <div className={style.application__content}>
        <SideBar />
        <Finder />
    </div>
}

export default Content;