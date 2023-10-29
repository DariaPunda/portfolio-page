import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from './components/Footer/Footer';
import Portfolio from "./components/Projects/Portfolio";


function App() {
  return <Fragment>
       <Header />
    <main>
     <About />
    <Portfolio />
    </main>   
    <Footer/>
  </Fragment>
}

export default App;
