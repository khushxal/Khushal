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
        <h2>Project Works</h2>
        <hr />
        <div
          id="carouselExampleControls"
          className="carousel slide rounded-2"
          data-bs-ride="carousel"
          data-bs-interval="1000000000000000000"
        >
          <div className="carousel-inner rounded-5">
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
            className="carousel-control-prev rounded-5"
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
            className="carousel-control-next rounded-5"
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
                <a href={video.link}>
                  {video.title}
                  <img
                    src="https://img.icons8.com/?size=100&id=7867&format=png&color=000000"
                    height={30}
                    className="ms-1 pb-2"
                  />
                </a>{" "}
              </h3>
              <p className="fs-5 p-3" style={{ textAlign: "justify" }}>
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
