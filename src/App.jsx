import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoPlayer from "./components/VideoPlayer";
import myVideo from "./assets/videoPlayer.mp4";
import WhatIDo from "./components/What_I_DO";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import GetInTouch from "./components/GetInTouch";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-20 text-gray-900">
      {/* Main Layout Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <VideoPlayer src={myVideo} />
        <WhatIDo />
        <Portfolio />
        <Testimonial />
        <GetInTouch />
        <Project />
      </div>

      {/* Footer Full Width */}
      <Footer />
    </div>
  );
}

export default App;
