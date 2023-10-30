import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-badge"
    >
      <div className="badge-cmp app__flex">
        <span>👋</span>
        <div style={{ marginLeft: 20 }}>
          <p className="p-text">Hello, I am</p>
          <h1 className="head-text">Alijan</h1>
        </div>
      </div>
      <div className="tag-cmp app__flex">
        <p className="p-text p-web">Web Developer & Freelancer</p>
        <p className="p-text p-desc">I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        className="overlay_circle"
        alt="profile_circle"
      />
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.ruby, images.react].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
