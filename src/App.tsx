import { Box, makeStyles } from '@material-ui/core';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

const useStyles = makeStyles((theme) => ({
  appBlock: {
    textAlign: "center",
  }

}));

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.appBlock}>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
