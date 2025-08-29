import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756442185~exp=1756445785~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=0430b893b9ae0abe47448bd64d3ca88549973a5f21eb8e0b37d98f29eca0a6c4&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;
