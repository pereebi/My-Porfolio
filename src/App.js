import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function App() {
  const [page , setPage] = useState("home")


  const handlePageChange = (name) => {
      setPage(name)
  }
  return (
    <div className="App [font-family:'Raleway',sans-serif] bg-[#e5e5e53b]">
      <NavBar page={page} handlePageChange={handlePageChange}/>
      {page === "home" && <Homepage handlePageChange={handlePageChange}/>}
      {page === "resume" && <Resume />}
      {page === "contact" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
