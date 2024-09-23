import Header from './Header';
import './App.css';
import Mainimg from './Header1';
import Articles from './Articles';
import Tutorial from './Tutorial';
import Subscribe from './Subscribe';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Mainimg/>
      <Articles/>
      <Tutorial/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
