import './App.css';
import NavbarComponent from './components/NavbarComponent';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="home">
      <div id="app">
        <NavbarComponent />
        <AboutMe />
        <Work />
      </div>
    </div>
  );
}

export default App;
