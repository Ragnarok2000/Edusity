import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programe from "./Components/Programes/Programe";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
     
  const [playState,setPlaystate] = useState(false);

     
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What we Offer" />
        <Programe />
        <About setPlaystate={setPlaystate} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus/>
        <Title subTitle="Testimonials" title="What Student Says" />
       <Testimonials/> 
       <Title subTitle="Contact Us" title="Get In Touch" />
       <Contact/>
       <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlaystate} />
    </div>
  );
};

export default App;
