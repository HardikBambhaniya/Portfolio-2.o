import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import LandingPage from "./page/LandingPage";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Education from "./sections/Education";


function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element = {<>
        <LandingPage />
        </>} />
        <Route path="/about" element = {<Aboutme/>} />
        <Route path="/projects" element = {<Projects/>} />
        <Route path="/services" element = {<Services/>} />
      </Routes>
    </>
  );
}

export default App;