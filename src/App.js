import logo from './logo.png';
import './App.css';
import Navbar from './Components/Navigation-Bar/Navbar'
import Playerinfo from './Components/PLayer-Information/Playerinfo'

function App() {
  return (
    <div className="App">
      <Navbar logo={logo}></Navbar>
      <Playerinfo></Playerinfo>
    </div>
  );
}

export default App;
