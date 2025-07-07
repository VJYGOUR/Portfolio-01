import linkedin from "../assets/Group.png";
import twitter from "../assets/twitter 1.png";
import dribble from "../assets/dribbble 1.png";
import behance from "../assets/behance 1.png";
import facebook from "../assets/facebook 1.png";

function GetInTouch() {
  return (
    <div className="w-screen max-w-none my-20 -ml-[calc((100vw-100%)/2)]">
      <div className="bg-[#3A3A3A] text-white flex flex-col justify-center items-center py-14 px-4 sm:px-6 md:px-12 gap-8 sm:gap-10 md:gap-12">
        {/* Section Title */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 tracking-wide uppercase">
          Get In Touch
        </p>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          Just Say Hello
        </h1>

        {/* CTA Button */}
        <button className="bg-white text-black text-sm sm:text-base md:text-lg px-6 py-2 sm:px-8 sm:py-3 rounded-md shadow-md hover:bg-gray-200 transition-all duration-300">
          Contact
        </button>

        {/* Social Icons */}
        <div className="flex gap-6 sm:gap-8 md:gap-10 flex-wrap justify-center">
          {[facebook, linkedin, behance, twitter, dribble].map((icon, i) => (
            <img
              key={i}
              src={icon}
              alt="Social"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 filter invert hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
