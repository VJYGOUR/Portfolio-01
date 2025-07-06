import image from "../assets/me.png";
import linkedin from "../assets/Group.png";
import twitter from "../assets/twitter 1.png";
import dribble from "../assets/dribbble 1.png";
import behance from "../assets/behance 1.png";
import facebook from "../assets/facebook 1.png";
import vector from "../assets/Vector.png";

function Hero() {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-8 xl:w-[60%]">
          <span className="text-[#333333] font-[500]  xl:text-5xl">Hello</span>
          <h1 className="xl:text-7xl">
            I'm <span className="xl:text-8xl"> Vijay Sharma</span>
          </h1>
          <p className="xl:text-5xl">
            A web developer, freelancer , content creator and creative director
          </p>
          <p className="xl:text-3xl">
            Of course, there’s so much more to me than just a few fancy titles.
            Scroll down and get to know me,
          </p>
        </div>
        <div className="xl:w-[50%] flex justify-end">
          <img
            src={image}
            alt="profile"
            className="w-full max-w-[500px] max-h-[600px] object-cover object-top rounded-lg"
          />
        </div>
      </div>
      <div className="flex py-6">
        <div className="flex gap-6 w-[50%]">
          <img src={facebook} alt="Facebook" className="w-6 h-6" />
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          <img src={behance} alt="Behance" className="w-6 h-6" />
          <img src={twitter} alt="Twitter" className="w-6 h-6" />
          <img src={dribble} alt="Dribbble" className="w-6 h-6" />
        </div>
        <div className="w-[50%] flex flex-col   gap-2">
          <span>scroll</span>
          <img src={vector} alt="Vector Graphic" className="w-4 h-4" />
        </div>
      </div>
    </>
  );
}

export default Hero;
