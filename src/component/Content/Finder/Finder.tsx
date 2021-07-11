import style from './Finder.module.css'

const Finder = () => {
    return <div className={style.content__finder}>
        <div><input placeholder="Write description of your search ..." /></div>
        <div><button>{`< Back`}</button> . . . <button>{`Forward >`}</button></div>
        <div>Photo List</div>
    </div>
}

export default Finder