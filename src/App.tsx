import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Mission from "./components/Mission/Mission";
import Gallery from "./components/Gallery/Gallery";
import NewProduct from "./components/NewProduct/NewProduct";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home/>
        <Mission/>
        <Gallery/>
        <NewProduct/>
        <Certification/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
