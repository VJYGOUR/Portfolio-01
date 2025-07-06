import namaste from "../assets/namaste.png";
import boxWater from "../assets/box-water.png";
import brochure from "../assets/brochure.png";
import write from "../assets/writ-pen.png";
import code from "../assets/code.png";
import book from "../assets/book.png";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="my-12">
      <Title content="Portfolio" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 - two equal height images */}
        <div className="flex flex-col gap-4">
          <img
            src={namaste}
            alt="Namaste"
            className="w-full h-72 object-cover rounded"
          />
          <img
            src={boxWater}
            alt="Box Water"
            className="w-full h-72 object-cover rounded"
          />
        </div>

        {/* Column 2 - tall + short image */}
        <div className="flex flex-col gap-4">
          <img
            src={brochure}
            alt="Brochure"
            className="w-full h-96 object-cover rounded"
          />
          <img
            src={write}
            alt="Write"
            className="w-full h-48 object-cover rounded"
          />
        </div>

        {/* Column 3 - short + tall image */}
        <div className="flex flex-col gap-4">
          <img
            src={code}
            alt="Code"
            className="w-full h-48 object-cover rounded"
          />
          <img
            src={book}
            alt="Book"
            className="w-full h-96 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
