import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes,Link , BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Content from './Content';
import About from './About';
import SimpleMap from './Map';
import Employees from "./Employees"
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/content">Rent<span>Car</span></a>
                        <div><ul className="navbar-nav mr-auto">
                            <li className="nav-item "><a href="/home" className="nav-link">Home</a></li>
                            <li className="nav-item "><a href="/about" className="nav-link">About</a></li>
                            <li className="nav-item "><a href="/map" className="nav-link">Contact</a></li>
                            <li className="nav-item "><a href="/emp" className="nav-link">Employees</a></li>
                        </ul>
                        </div>
                </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/content" element={<Content/>}/>
          <Route path="/home" element={<Home/> }/>
          <Route path="/about" element={<About />}/>
          <Route path="/map" element={<SimpleMap />}/>
          <Route path="/emp" element={<Employees />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
