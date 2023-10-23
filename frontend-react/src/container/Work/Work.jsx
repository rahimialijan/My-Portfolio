import React from "react";
import  { useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {AppWrap} from '../../wrapper'
import {motion} from 'framer-motion'
import {urlFor, client} from '../../client'
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [work, setWork] = useState([]);
  const [filterWork, setFilterWork] = useState([])
useEffect(()=>{
  const query = '*[_type=="works"]';
    client.fetch(query)
    .then((data)=>{
      setWork(data)
      setFilterWork(data)
    })
},[])

  const handleWorkFilter = (item)=>{

  }
  return (
  <>
    <h2 className="head-text">
        My Creative <span>Portfolio</span>
        <br /> Section
    </h2>

    <div className="app__work-filter">
      {['Full Stack App', 'Web App', 'Mobile App', 'React Js', 'All'].map((item, index)=>(
        <div
        key={index}
        onClick={()=> handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter===item ? 'item-active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>

    <motion.div
    animate= {animateCard}
    transition={{duration: 0.5, delayChildren: 0.5}}
    className="app__work-portfolio"
    >

      {filterWork.map((work,index)=>(
        <div className="app__work-item app__flex" key={index}>
          <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
          </div>
        </div>
      ))}
    </motion.div>
  </>
  );
};

export default Work;
