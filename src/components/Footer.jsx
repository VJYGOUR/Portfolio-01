import Title from "./Title";

function Footer() {
  return (
    <div className="w-screen my-10 -ml-[calc((100vw-100%)/2)] bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
        <Title content="Hire Me For Your Next Amazing Project" />

        <div className="w-full flex flex-col lg:flex-row gap-10 mt-10">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 text-gray-700">
            <p className="mb-8 text-xl lg:text-2xl">
              Let’s make something new, different, and more meaningful — or make
              things more visual or conceptual. Just say hello!
            </p>

            <div className="space-y-1">
              <p>📞 +123 569 789</p>
              <p>✉️ youremail@gmail.com</p>
              <p>📍 28 Green Tower, Street name, New York City, USA</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/yourFormID" // <-- Replace with your real Formspree URL
            method="POST"
            className="w-full lg:w-1/2 bg-[#333333] text-white p-6 sm:p-8 space-y-6"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm">
                Your email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="budget" className="mb-2 text-sm">
                Your budget (Optional)
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="mb-2 text-sm">
                Your project description
              </label>
              <textarea
                id="description"
                name="message"
                rows="2"
                required
                className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-white py-1 resize-none"
              ></textarea>
            </div>

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
    </div>
  );
}

export default Footer;
