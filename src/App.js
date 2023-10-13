import logo from './logo.svg';
import './App.css';
import About from './About'
import { Route, Routes, Link, HashRouter } from "react-router-dom";
import HomePage from './HomePage';
import Navbar from './Navbar';
import Footer from './Footer';
import Bear from './Bear';
function App() {
  return (
    <div className="App">

    <HashRouter>

    <Navbar/>

      <Routes>
        <Route exact path="/" element = {<HomePage/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/projects/bear" element = {<Bear/>}/>
      </Routes>

    <Footer/>
    </HashRouter>
    </div>


  );
}

export default App;
