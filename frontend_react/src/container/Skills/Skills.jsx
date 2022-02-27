import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import "./Skills.scss";
import { AppWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";
import MotionWrap from "../../wrapper/MotionWrap";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => setExperiences(data));

    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills & <span>Experience</span>{" "}
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill + index}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiences?.map((experience) => {
            return (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((exp, index) => {
                    return (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={exp.name}
                          key={exp + index}
                        >
                          <h4 className="bold-text">{exp.name}</h4>
                          <p className="p-text">{exp.company}</p>
                        </motion.div>
                        <ReactTooltip
                          id={exp.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {exp.desc}
                        </ReactTooltip>
                      </>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), "skills", "app__whitebg");
