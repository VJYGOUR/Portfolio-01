import Title from "./Title";

function What_I_DO() {
  return (
    <div className="my-20">
      <Title content="What I Do" />

      <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full px-4 xl:w-[80%] xl:mx-auto">
        {[
          {
            title: "UI & UX Design",
            desc: "User interface design, user experience design, user research.",
            bg: "#333333",
            text: "text-white",
          },
          {
            title: "Graphic Design",
            desc: "Logos, posters, branding, and creative direction.",
            bg: "#D6D6D6",
            text: "text-black",
          },
          {
            title: "Web Development",
            desc: "Responsive websites, web apps, and interactive experiences.",
            bg: "#D6D6D6",
            text: "text-black",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`px-6 py-10 flex flex-col justify-between rounded-lg shadow-md transition-transform duration-300 hover:scale-105`}
            style={{
              backgroundColor: item.bg,
              height: "300px",
            }}
          >
            <div className={`${item.text}`}>
              <p className="text-2xl font-bold leading-snug mb-3">
                {item.title}
              </p>
              <p className="text-base">{item.desc}</p>
            </div>
            <button
              className={`mt-4 w-fit px-4 py-2 text-sm font-medium rounded-md border ${
                item.text === "text-white"
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              } transition-all duration-300`}
            >
              Read more
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default What_I_DO;
