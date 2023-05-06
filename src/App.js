import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Breadcrumbs123 from './breadcrumbs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='App-Description'>
          1- Create a fully responsive navbar on React<br/>
          1.5- using CSS grid and flexbox.<br/>
          2- Additionally, display breadcrumbs with the menu dropdown<br/>
          2.5- on mobile screen size.
        </p>
        <p>----------------------------</p>
        <div><Navbar /></div>
        <div style={{ fontSize: '10px' }}>
          Below are Harcoded Breadcrumbs
        </div>
        <div><Breadcrumbs123 /></div>

      </header>
    </div>
  );
}

export default App;
