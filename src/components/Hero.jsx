import image from "../assets/me.png";
import linkedin from "../assets/Group.png";
import twitter from "../assets/twitter 1.png";
import dribble from "../assets/dribbble 1.png";
import behance from "../assets/behance 1.png";
import facebook from "../assets/facebook 1.png";

function Hero() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-20 gap-10">
        {/* Text */}
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 w-full md:w-1/2">
          <span className="text-[#333333] font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
            Hello
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#111]">
            I'm{" "}
            <span className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-black">
              Vijay Sharma
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl xl:text-5xl text-gray-700">
            A web developer, freelancer, content creator and creative director
          </p>
          <p className="text-base sm:text-lg md:text-xl xl:text-3xl text-gray-600">
            Of course, there’s so much more to me than just a few fancy titles.
            Scroll down and get to know me.
          </p>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={image}
            alt="profile"
            className="w-72 sm:w-80 md:w-96 xl:max-w-[500px] xl:max-h-[600px] object-cover object-top rounded-lg"
          />
        </div>
      </div>

      {/* Social + Scroll Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-6 sm:gap-0 py-6">
        {/* Social Icons with Links */}
        <div className="flex gap-5">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-6 h-6 hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://behance.net/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={behance}
              alt="Behance"
              className="w-6 h-6 hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="Twitter"
              className="w-6 h-6 hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://dribbble.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={dribble}
              alt="Dribbble"
              className="w-6 h-6 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Optional scroll down indicator or button can be added here */}
      </div>
    </>
  );
}

export default Hero;
