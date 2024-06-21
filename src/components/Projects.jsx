import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
function Projects() {
  const videos = [
    {
      id: 1,
      src: "video1.mp4",
      alt: "First video",
    },
    {
      id: 2,
      src: "video2.mp4",
      alt: "Second video",
    },
    {
      id: 3,
      src: "video3.mp4",
      alt: "Third video",
    },
  ];

  // const [videos, setVideos] = useState([]);
  // const [videosSet, isVideosSet] = useState(false``);
  const [currentPage, setCurrentPage] = useState(0);

  // useEffect(async function () {
  //   const res = await fetch("/videos.json");
  // }, []);

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? videos.length - 1 : prevPage - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === videos.length - 1 ? 0 : prevPage + 1
    );
  };

  return (
    <div id="projects" className="container">
      <div className="card p-3">
        <h2>Project Works</h2>
        <hr />
        <div className="cover-container mx-auto my-auto d-flex flex-column ">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="10000"
          >
            <div className="carousel-inner">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`carousel-item ${
                    index === currentPage ? "active" : ""
                  }`}
                >
                  <ReactPlayer
                    url={video.src}
                    className="d-block w-100"
                    controls
                    width="100%"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{video.alt}</h5>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrev}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={handleNext}
            >
              <span className="">Next</span>
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
