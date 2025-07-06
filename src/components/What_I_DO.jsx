import Title from "./Title";

function What_I_DO() {
  return (
    <div className="w-[90%] mx-auto my-30 ">
      <Title content={`What I Do`} />
      <main className="flex gap-8 xl:flex xl:justify-between">
        <div className="px-6 py-10 gap-4 flex flex-col bg-[#333333] text-white w-[380px] h-[300px]">
          <p className="text-3xl">
            UI & UX <br /> Design
          </p>
          <p>User interface design, user experience design, user research.</p>
          <div className="">
            <button>Read more</button>
          </div>
        </div>
        <div className="px-6 py-10 gap-4 flex flex-col bg-[#D6D6D6] w-[380px] h-[300px]">
          <p className="text-3xl">
            Graphic <br /> Design
          </p>
          <p>User interface design, user experience design, user research.</p>
          <div className="">
            <button>Read more</button>
          </div>
        </div>
        <div className="px-6 py-10 gap-4 flex flex-col bg-[#D6D6D6] w-[380px] h-[300px]">
          <p className="text-3xl">
            Web <br /> Development
          </p>
          <p>User interface design, user experience design, user research.</p>
          <div className="">
            <button>Read more</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default What_I_DO;
