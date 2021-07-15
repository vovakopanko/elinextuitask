import { Box } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import BookMarks from './BookMarks/BookMarks';
import style from './Content.module.css'
import Finder from './Finder/Finder';
import Login from './Login/Login';
import SideBar from './SideBar/SideBar';

const Content: React.FC = () => {
  return <Box className={style.application__content}>
    <SideBar />
    <Switch>
      <Route path="/finder" render={() => <Finder />} />
      <Route path="/bookmarks" render={() => <BookMarks />} />
      <Route path="/registration" render={() => <Login />} />
      <Route exact path="/" render={() => <Redirect to="/finder" />} />
    </Switch>
  </Box>
}

export default Content;