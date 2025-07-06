import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoPlayer from "./components/VideoPlayer"; // ✅ The component
import myVideo from "./assets/videoPlayer.mp4"; // ✅ The video file
import What_I_DO from "./components/What_I_DO";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import GetInTouch from "./components/GetInTouch";
import Project from "./components/Project";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="px-12 lg:px-36">
      <Header />
      <Hero />
      <VideoPlayer src={myVideo} />
      <What_I_DO />
      <Portfolio />
      <Testimonial />
      <GetInTouch />
      <Project />
      <Footer />
    </div>
  );
}
export default App;
