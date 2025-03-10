import './App.css';
import About from './components/About';
import Main from './components/Main';
import Navbar from './components/Navbar';
import ParticlesComponent from "./components/particles";
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import CopyRights from './components/CopyRights';


function App() {
  return (
    <div className='m-0 p-0 box-border mb-0 scroll-smooth pb-0'>
    <ParticlesComponent id='particles'/>
     <Navbar/>
     <Main/>
     <About/>
     <Projects/>
    <ContactMe/>
    <CopyRights/>
    </div>
  );
}

export default App;
