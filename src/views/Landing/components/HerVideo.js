import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroVideo = () => {
  const [videoFile, setVideoFile] = useState("");
  const [imageFile, setImage] = useState("");
  useEffect(() => {
    axios
      .get("https://api.pexels.com/videos/videos/3078336", {
        headers: {
          AuthorizatioFn:
            "563492ad6f91700001000001c9bbfdd7f7c747c68d76d810e3f67e3c",
        },
      })
      .then((res) => {
        setVideoFile(res.data.video_files[1].link);
        setImage(res.data.image);
        console.log(res.data);
      });
  }, []);
  return (
    /*<video autoPlay="autoplay" loop="loop" muted className="">
      <source
        src="https://player.vimeo.com/external/366226018.hd.mp4?s=9111dde04b44c9adae177adf5c7a93aec8753603&profile_id=172&oauth2_token_id=57447761"
        type="video/mp4"
      />
      Your browser d7oes not support the video tag.
  </video>*/
    <React.Fragment>
      <div className="content">
      </div>
    </React.Fragment>
  );
};

export default HeroVideo;
