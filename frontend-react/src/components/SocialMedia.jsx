import React from 'react';

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div><BsTwitter /></div>
    <div><BsInstagram /></div>
    <div><FaFacebook /></div>
    <div><FaGithub /></div>
  </div>
);

export default SocialMedia;
