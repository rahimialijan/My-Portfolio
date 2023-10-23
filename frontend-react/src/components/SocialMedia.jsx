import React from 'react'

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'; 
import { FaFacebook } from 'react-icons/fa';




const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><BsTwitter/></div>
        <div><BsInstagram/></div>
        <div><FaFacebook/></div>
        <div><FaGithub/></div>
    </div>
  )
}

export default SocialMedia