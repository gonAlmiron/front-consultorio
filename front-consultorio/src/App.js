
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import NavBar from './components/NavBar/NavBar';
import FooterDos from './components/Footer/FooterDos';
// import NavBarDos from './components/NavBar/NavBarDos';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      {/* <NavBarDos/> */}
      <NavBar/>
      <Home/>
      <FooterDos/>
    </div>
  );
}


export default App;
