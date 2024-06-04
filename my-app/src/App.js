import './App.css';
import NavbarComponent from './components/NavbarComponent';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="home">
      <div id="app">
        <NavbarComponent />
        <AboutMe />
        <Experience />
        <Project />
      </div>
    </div>
  );
}

export default App;
