import { motion } from "framer-motion";
import namaste from "../assets/namaste.png";
import boxWater from "../assets/box-water.png";
import brochure from "../assets/brochure.png";
import write from "../assets/writ-pen.png";
import code from "../assets/code.png";
import book from "../assets/book.png";
import Title from "./Title";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Portfolio() {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title content="Portfolio" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4">
          <AnimatedImage
            src={namaste}
            alt="Namaste"
            link="https://your-project-link.com/namaste"
            label="Namaste Project"
          />
          <AnimatedImage
            src={boxWater}
            alt="Box Water"
            link="https://your-project-link.com/box-water"
            label="Box Water Project"
          />
        </div>

        <div className="flex flex-col gap-4">
          <AnimatedImage
            src={brochure}
            alt="Brochure"
            link="https://your-project-link.com/brochure"
            label="Brochure Design"
            height="h-96"
          />
          <AnimatedImage
            src={write}
            alt="Write"
            link="https://your-project-link.com/write"
            label="Creative Writing"
            height="h-48"
          />
        </div>

        <div className="flex flex-col gap-4">
          <AnimatedImage
            src={code}
            alt="Code"
            link="https://your-project-link.com/code"
            label="Code Project"
            height="h-48"
          />
          <AnimatedImage
            src={book}
            alt="Book"
            link="https://your-project-link.com/book"
            label="Book Design"
            height="h-96"
          />
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedImage({ src, alt, link, label, height = "h-72" }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={imageVariants}
      className="relative group overflow-hidden rounded-lg"
    >
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover transform group-hover:scale-105 transition duration-300 ease-in-out`}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <p className="text-white text-lg font-semibold">{label}</p>
      </div>
    </motion.a>
  );
}

export default Portfolio;
