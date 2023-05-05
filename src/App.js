import logo from './logo.svg';
import './App.css';

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
        <div className='NavbarDiv'>
          <ul className='NavbarUL'>
            <li><a href="locasthost:3000">Home</a></li>
            <li>About</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
