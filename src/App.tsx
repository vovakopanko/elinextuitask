import './App.css';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

const App = () => {
  return (
    <div className="application">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
