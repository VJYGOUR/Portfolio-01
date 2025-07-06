import Title from "./Title";
import client from "../assets/client.png";
import quote from "../assets/Quote.png";

function Testimonial() {
  return (
    <div className="my-24">
      <Title content="Client Testimonial" />

      <div className="flex w-[90%] mx-auto justify-between gap-6">
        {/* Left: Client Image */}
        <div className="w-1/2">
          <img
            src={client}
            alt="profile"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right: Quote and Text */}
        <div className="w-1/2 flex flex-col justify-start gap-4">
          {/* Quote and Paragraph aligned */}
          <div className="flex flex-col items-start gap-3">
            <img src={quote} alt="quote" className=" mt-1" />
            <p className="text-2xl leading-relaxed text-gray-800">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
            </p>
          </div>

          {/* Author Info */}
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Jared Warner <br />
            <span className="text-sm font-normal text-gray-500">
              CEO Of Zeo
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
