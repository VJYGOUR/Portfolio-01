import projectImage from "../assets/Project.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Project() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { value: 750, suffix: "+", label: "Completed Projects" },
    { value: 15, suffix: "+", label: "Ongoing Projects" },
    { value: 250, suffix: "+", label: "Happy Clients" },
    { value: 700, suffix: "+", label: "Design Deliveries" },
  ];

  return (
    <div
      ref={ref}
      className="relative w-[90%] mx-auto my-20 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${projectImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center py-16 px-4">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-4xl font-bold">
              {inView ? (
                <CountUp end={item.value} duration={2} suffix={item.suffix} />
              ) : (
                `0${item.suffix}`
              )}
            </span>
            <span className="mt-1 text-sm md:text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
