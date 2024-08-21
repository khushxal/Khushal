import React, { useEffect, useState } from "react";
import "../css/Skills.css";
function Skills() {
  const [skills, setSkills] = useState([]);

  const [fetchData, setFetchData] = useState(true);

  async function getSkills() {
    try {
      const res = await fetch("./skills.json");
      const data = await res.json();
      setSkills(data);
      setFetchData(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    function () {
      getSkills();
    },
    [fetchData]
  );

  return (
    <div id="skills" className="container">
      <div className="cover-container d-flex p-3 mx-auto my-auto flex-column">
        <h2>Skills</h2>
        <hr />
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col">
              <div className="glass h-100 p-4">
                <img
                  id="skill-card-img"
                  src={skill.icon}
                  className="card-img-top"
                  alt={skill.skill}
                />
                <hr />
                <div className="card-body">
                  <h5 className="card-title">{skill.skill}</h5>
                  <p className="card-text">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
