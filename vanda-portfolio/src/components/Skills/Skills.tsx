import React from 'react';

import './slick.css';
import './slick-theme.css';
import Slider from 'react-slick';

import './Skills.css';
import cpp from '../../assets/icons/LanguageIcons/cpp.svg';
import python from '../../assets/icons/LanguageIcons/python.svg';
import javascript from '../../assets/icons/LanguageIcons/javascript.svg';
import typescript from '../../assets/icons/LanguageIcons/typescript.svg';

import  html from '../../assets/icons/FrontEndIcons/html-5.svg'
import  css from '../../assets/icons/FrontEndIcons/css3.svg';
import  redux from '../../assets/icons/FrontEndIcons/redux.svg';
import  react from '../../assets/icons/FrontEndIcons/react.svg';

import  node from '../../assets/icons/BackEndIcons/node.svg';
import  express from '../../assets/icons/BackEndIcons/express-js.svg';
import  graphql from '../../assets/icons/BackEndIcons/graphql.svg';

import  mysql from '../../assets/icons/DatabaseIcons/mysql.svg';
import  mongodb from '../../assets/icons/DatabaseIcons/mongodb.svg';
import  postresql from '../../assets/icons/DatabaseIcons/postgresql.svg';
import  sqlite from '../../assets/icons/DatabaseIcons/sqlite.svg';

import  git from '../../assets/icons/ToolIcons/git.svg';
import  vscode from '../../assets/icons/ToolIcons/vscode.svg';
import  adobeIllustrator from '../../assets/icons/ToolIcons/adobeIllustrator.svg';

//import  PixelCard  from '../PixelCard/PixelCard';

import { lazy, Suspense } from "react";
const PixelCard = lazy(() => import('../PixelCard/PixelCard'));

interface Skill {
  category: string;
  items: { name: string; icon: any }[];
}
const skills: Skill[] = [ { 
    category: 'Languages', 
    items: [ 
      { name: 'Javascript', icon: javascript }, 
      { name: 'Typescript', icon: typescript }, 
        { name: 'C++', icon: cpp }, 
        { name: 'Python', icon: python }, 
       
        ] 
    }, 
    { 
        category: 'Frontend', 
        items: [ 
            { name: 'HTML', icon: html }, 
            { name: 'CSS', icon: css }, 
            { name: 'React', icon: react }, 
            { name: 'Next.js', icon: redux } 
        ] 
    }, 
    { 
        category: 'Backend', items: [ 
            { name: 'Node.js', icon: node }, 
            { name: 'Express', icon: express }, 
            { name: 'GraphQL', icon: graphql } 
        ] 
    }, 
    { 
        category: 'Database', items: [ 
            { name: 'MySQL', icon: mysql }, 
            { name: 'MongoDB', icon: mongodb }, 
            { name: 'PostgreSQL', icon: postresql }, 
            { name: 'SQLite', icon: sqlite }, 
        ] 
    }, 
    { category: 'Tools', items: [ 
        { name: 'Git', icon: git }, 
        { name: 'VS Code', icon: vscode }, 
        // { name: 'Adobe Illustrator', icon: adobeIllustrator },
    ] 
} ];


  
interface SkillsProps {
  toggleExperience: () => void;
  showExperience: boolean;
}
//{toggleExperience, showExperience }

const Skills: React.FC<SkillsProps> = () => {
  const settings = {
    centerMode : true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    swipeToSlide : true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <section id='Skills' className='skills'>
        <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
            <PixelCard variant="default" gap={8} speed={40} colors="#f8fafc,#f1f5f9,#cbd5e1" noFocus={false} className="" >
              <div className="skill-row">
                  <h2>Skills</h2>
                  <Slider {...settings}>
                      {skills.map((skill, index) => (
                      <div key={index} className="skill-slide">
                          <h3>{skill.category}</h3>
                          <ul>
                              {skill.items.map((item, index) => (
                              <li key={index}>
                                  {item.name}
                                  <img src={item.icon} alt={item.name} /> 
                              </li>
                              ))}
                          </ul>
                      </div>
                      ))}
                  </Slider>
              </div>
            </PixelCard>
         </Suspense> 
        </div>
    </section>
  );
};

export default Skills;

/**
 * <div>
                <button  className="experienceButton" onClick={toggleExperience}>
                    {showExperience ? <div><span className='one'>Hide</span><span className='two'>Experience</span></div> : <div><span className='one'>Show</span><span className='two'>Experience</span></div>}
                </button>
            </div>
 */
