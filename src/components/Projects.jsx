import React from "react";
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
  return (
    <div id="projects" className="container">
      <div className="card my-1">
        <div className="cover-container d-flex p-3 mx-auto flex-column">
          <h2>Project Work</h2>
          <hr />
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {videos.map((video, index) => (
                <li
                  key={video.id}
                  data-target="#carouselExampleIndicators"
                  data-slide-to={index}
                  className={index === 0 ? "active" : ""}
                />
              ))}
            </ol>
            <div className="carousel-inner">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`carousel-item ${index === 0 ? "active" : ""} `}
                >
                  <video
                    className="d-block w-100 rounded-5"
                    controls
                    controlsList
                  >
                    <source src={video.src} type="video/mp4" />
                    {video.alt}
                  </video>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
