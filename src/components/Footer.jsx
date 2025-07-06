import Title from "./Title";

function Footer() {
  return (
    <div className="p-6  text-center">
      <Title content="Hire Me For Your Next Amazing Project" />

      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row gap-8 text-left">
        {/* Content Section - now on the left */}
        <div className="w-full md:w-1/2 flex flex-col justify-between text-gray-700 pt-8">
          {/* Top Paragraph */}
          <p className="mb-8 text-2xl">
            Let’s make something new, different, and more meaningful — or make
            things more visual or conceptual. Just say hello!
          </p>

          {/* Contact Info at Bottom */}
          <div className="space-y-1 mt-auto">
            <p>📞 +123 569 789</p>
            <p>✉️ youremail@gmail.com</p>
            <p>📍 28 Green Tower, Street name, New York City, USA</p>
          </div>
        </div>

        {/* Form Section - now on the right */}
        <form className="w-full md:w-1/2 bg-[#333333] text-white p-6 space-y-8">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm">
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm">
              Your email Address
            </label>
            <input
              id="email"
              type="email"
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1"
            />
          </div>

          {/* Budget Field */}
          <div className="flex flex-col">
            <label htmlFor="budget" className="mb-2 text-sm">
              Your budget (Optional)
            </label>
            <input
              id="budget"
              type="text"
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1"
            />
          </div>

          {/* Project Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-2 text-sm">
              Your project description
            </label>
            <textarea
              id="description"
              rows="1"
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-200 transition"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
