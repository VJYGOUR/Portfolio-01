import projectImage from "../assets/Project.png";

function Project() {
  return (
    <div
      className="bg-cover bg-center h-40 w-[90%] mx-auto my-16 flex justify-between items-center"
      style={{ backgroundImage: `url(${projectImage})` }}
    >
      <div className="flex flex-col">
        <span className="text-3xl ">750+</span>
        <span>Completed Projects</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl">15+</span>
        <span>Completed Projects</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl">250+</span>
        <span>Completed Projects</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl">700+</span>
        <span>Completed Projects</span>
      </div>
    </div>
  );
}

export default Project;
