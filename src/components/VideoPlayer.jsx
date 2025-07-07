import Title from "./Title";

const VideoPlayer = ({ src, type = "video/mp4", controls = true }) => {
  return (
    <section className="w-full px-4 md:px-8 my-20 flex flex-col items-center">
      <Title content="Learn all about me in 60 seconds" />

      <div className="w-full max-w-4xl aspect-video mt-10 rounded-xl overflow-hidden shadow-xl border border-gray-200">
        <video
          controls={controls}
          autoPlay={false}
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
