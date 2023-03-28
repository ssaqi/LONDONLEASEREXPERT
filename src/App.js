import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Contain from './Components/contain/Contain';
import Centerimg from './Components/centerImg/Centerimg';
import Video from './Components/Videosection/Video';
import Avail from './Components/Available/Avail';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  <>
  <Header/>
  <Navbar/>
  <Banner/>
  <Contain/>
  <Centerimg/>  
  <Video/>
  <Avail/>
  <Footer/>
  </>
  );
}

export default App;
