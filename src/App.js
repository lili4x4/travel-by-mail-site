import "./App.css";
import logo from './assets/TravByMail_Logo_Base.png'
import logoCorner from './assets/TravByMail_Logo_GenericIcon.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-text">COMING SOON</h1>
        <img className="logo-central" src={logo} alt="Travel By Mail" />
        <img className="logo-corner" src={logoCorner} alt="stamp" />
      </header>
    </div>
  );
}

export default App;
