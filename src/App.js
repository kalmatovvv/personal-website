import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Resume from './components/Resume';

function App() {
  return (
    <><Navbar></Navbar>
    <Main></Main>
    <Projects></Projects>
    <Resume></Resume>
    <Contact></Contact>
    </>
  );
}

export default App;
