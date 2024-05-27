import './App.css';
import NavbarComponent from './components/NavbarComponent';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="home">
      <div id="app">
        <NavbarComponent />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
