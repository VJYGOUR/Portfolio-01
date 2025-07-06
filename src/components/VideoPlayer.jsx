import Title from "./Title";

const VideoPlayer = ({
  src,
  type = "video/mp4",
  width = "100%",
  height = "auto",
  controls = true,
}) => {
  return (
    <div className="w-full  mx-auto my-16 lg:w-[90%]">
      <Title content={`Learn all about me in 60 seconds`} />
      <video
        width={width}
        height={height}
        controls={controls}
        className="rounded-lg shadow-lg"
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
