//*components
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

//* react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//* styled components
import * as Styled from "./style";

import Project1 from "pages/Projects/project1";
import Project2 from "pages/Projects/project2";
import Project3 from "pages/Projects/project3";
import Project4 from "pages/Projects/project4";
import Project5 from "pages/Projects/project5";
import Project6 from "pages/Projects/project6";


function App() {

  
  
  return (
    <BrowserRouter>
    
     
          <Navbar />
          <Styled.Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/front-end-mentor" element={<Navigate to="/" />} />

              
              <Route path="/projects/01" element={<Project1 />} />
              <Route path="/projects/02" element={<Project2 />} />
              <Route path="/projects/03" element={<Project3 />} />
              <Route path="/projects/04" element={<Project4 />} />
              <Route path="/projects/05" element={<Project5 />} />
              <Route path="/projects/06" element={<Project6 />} /> 
            </Routes>
          </Styled.Container>
          <Footer />
     
    </BrowserRouter>


  );

}

export default App;
