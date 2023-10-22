import React from "react";
import {motion} from "framer-motion"
import "./About.scss";

const about = [
  {title: 'Full Stack Developement', descpition: 'I am a good full stack developer.', imgUrl: ''},
  {title: 'Front-End', descpition: 'I am a good frontend developer.', imgUrl: ''},
  {title: 'Back-End', descpition: 'I am a good backend developer.', imgUrl: ''},
  {title: 'UI/UX', descpition: 'I am a good UI/UX Designer.', imgUrl: ''},
  
]

const About = () => {
 return <>
  <h2 className="head-text">
      I Know that
      <span>Good Design</span><br/>
      means
      <span>Good Business</span>
  </h2>
  <div className="app__profile">
    {about.map((about, index)=>(
      <motion.div
      whileInView={{opacity:1}}
      whileHover={{scale: 1.1}}
      transition={{duration:0.5, type: 'tween'}}
      className="app__profile-item"
      key={about.title+index}
      >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p2 className="p-text" style={{marginTop: 10}}>{about.descpition}</p2>
      </motion.div>
    ))}
  </div>
  </>
};

export default About;
