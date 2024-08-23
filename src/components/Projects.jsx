import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
function Projects() {
  const [videos, setVideos] = useState([]);
  const [fetchData, setFetchData] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  async function getAllProjects() {
    try {
      const res = await fetch("./project.json");
      const data = await res.json();
      setVideos(await data);
      setFetchData(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    function () {
      getAllProjects();
    },
    [fetchData]
  );

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
    <div id="projects" className="container hidden">
      <div className="cover-container p-3 mx-auto d-flex flex-column">
        <h2 className="mb-4">Project Works</h2>
        <hr />
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="10000"
        >
          <div className="carousel-inner">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentPage ? "active" : ""
                }`}
              >
                <video
                  src={video.src}
                  className="d-block w-100"
                  autoPlay
                  muted
                  loop
                  // style={{ height: "50vh", maxHeight: "500px" }} // Responsive height
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{video.alt}</h5>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-slide="prev"
            onClick={handlePrev}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-slide="next"
            onClick={handleNext}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="mt-4 w-100">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`description ${index === currentPage ? "" : "d-none"}`}
            >
              <h3 className="text-center">
                <a href={video.link}>{video.title}</a>{" "}
              </h3>
              <p className="d-flex fs-5" style={{ textAlign: "justify" }}>
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
