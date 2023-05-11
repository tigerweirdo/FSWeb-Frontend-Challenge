import React, { useState, useEffect } from 'react';
import { projects as projectsData } from "../../Data/data";
import { BsArrowRight } from "react-icons/bs";

export const Projects = ({ language ,  theme}) => {
  const [projects, setProjects] = useState(projectsData);
  const darkColors = ["#2D3235", "#495351"]
  const lightColors = ["#DDEEFE", "#D9F6F1"];
  
 

  const render = projects.map((i, index) => (
    <div
  className={`project max-sm:px4 sm:px-4 lg:pl-10 rounded-xl max-sm:mt-8 sm:mt-8`}
  style={{
    backgroundColor: theme === 'dark' ? darkColors[index % darkColors.length] : lightColors[index % lightColors.length]
  }}
  key={index}
>

  

      <div className="font-bold text-3xl mt-12 lg:text-start sm:text-center max-sm:text-center ">
        <span className="dark:text-white">{i.title}</span>
      </div>
      <div className="mt-5 mb-8 max-sm:text-center sm:text-center lg:text-start lg:mt-4  w-3/4 font-normal max-sm:m-auto lg:m-0 sm:m-auto sm:mb-6 max-sm:mb-6 sm:mt-6 max-sm:mt-6 ">
      <span className="dark:text-white">{i.about}</span>
      </div>
      <div className="flex sm:justify-center lg:justify-start max-sm:w-3/4 lg:w-3/4 max-sm:flex-wrap max-sm:m-auto lg:m-0 lg:flex-wrap lg:mt-5    ">
        {i.software.map((i) => (
          <div className="border px-5 py-2 w-20  max-sm:mr-3 sm:mr-3 max-sm:mt-1 rounded-full lg:mr-5   mb-2 bg-white font-bold">
            {i}
          </div>
        ))}
      </div>
      <div className="mt-6 mb-20 flex justify-between font-semibold  text-xl">
        <a href="" className="hover:underline">
        <span className="dark:text-white">{i.github}</span>
        </a>
        <a
          href="#"
          
          className="mr-11 flex justify-center items-center hover:underline gap-2"
        >
          <span className="dark:text-white">{i.app}</span>
          <BsArrowRight className="text-white" />
        </a>
      </div>
      <div>
        <img className="max-sm:w-full m-auto" src={i.url}></img>
      </div>
    </div>
  ));

  return (
    <div className="w-full bg-white  min-h-max  pt-2 pb-2 dark:bg-custom-darkwhite">
    <div className={`mb-60 lg:w-9/12 m-auto max-sm:w-9/12 sm:w-9/12`}>
      <div className="pt-20 text-center text-4xl font-medium pb-3 ">
       <span className="dark:text-white">{language ? "Projects" : "Projeler"} </span>
      </div>
      <div className="w-9/12 m-auto ">
        <div className="lg:flex  max-sm:text-center lg:text-start lg:gap-12">{render}</div>
        <div></div>
      </div>
    </div>
    </div>
  );
}

