import linkedin from "../assets/Group.png";
import twitter from "../assets/twitter 1.png";
import dribble from "../assets/dribbble 1.png";
import behance from "../assets/behance 1.png";
import facebook from "../assets/facebook 1.png";

function GetInTouch() {
  return (
    <div className="w-screen max-w-none -ml-[calc((100vw-100%)/2)]">
      <div className="bg-[#3A3A3A] text-white flex flex-col justify-center items-center py-16 gap-12">
        <p className="text-2xl">Get In touch</p>
        <h1 className="text-3xl">Just Say Hello</h1>
        <button className="bg-white text-black text-lg px-8 py-3 shadow-md hover:bg-gray-100 transition">
          Contact
        </button>

        <div className="flex gap-12">
          <img
            src={facebook}
            alt="Facebook"
            className="w-6 h-6 filter invert"
          />
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-6 h-6 filter invert"
          />
          <img src={behance} alt="Behance" className="w-6 h-6 filter invert" />
          <img src={twitter} alt="Twitter" className="w-6 h-6 filter invert" />
          <img src={dribble} alt="Dribbble" className="w-6 h-6 filter invert" />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
