import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './Pages/Home.js';
import About from './Pages/About';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Description from './appDescription.js';
import Breadcrumbs123 from './breadcrumbs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Description />
        <p>----------------------------</p>
        <div><Navbar /></div>
        <div><Breadcrumbs123 /></div>
        <div style={{ fontSize: '10px' }}>
          (Breadcrumbs)
        </div>
        <p>----------------------------</p>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </header>
      </Router>
    </div>
  );
}

export default App;
