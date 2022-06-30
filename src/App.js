// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Timer from './components/Timer'
import Colourr from './components/ColourPicker' 

let name = "mu"
function App() {
  return (
    <>
    <h1>Hello {name}</h1>

    <Navbar></Navbar>
    <Timer></Timer>
    <Colourr></Colourr>
    </>
  );
}

export default App;
