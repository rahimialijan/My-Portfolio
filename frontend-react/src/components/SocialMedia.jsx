import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/AlijanRahimi10">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/alijanrahimi24/">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/alijanrahimi24">
        <FaFacebook />
      </a>
    </div>
    <div>
      <a href="https://github.com/rahimialijan">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/alijan-rahimi-18389ab3/">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
