import React from 'react';
import { info } from "../../data/info";
import Image from 'next/image';


export default function Hero({ currentLanguage }) {
  return (
    <section>
      <p className="dark:text-light mt-[117px] mb-4">{currentLanguage === "ESP" ? "Hola, soy" : "Hey, I’m"}</p>
      <h1>{info.ESP.name}</h1>
      <p className="dark:text-light text-lg mb-16 pt-4">
        {currentLanguage === "ESP" ?
          info.ESP.about
          :
          info.ENG.about}
      </p>
      <div className='w-full flex relative justify-center flex-wrap gap-1'>
      {info.techStack.map((tech) => (
        <div key={tech.name} className='flex flex-col items-center p-2 '>
          <Image src={tech.img} alt={tech.name} width={25} height={25} style={{minHeight: "25px", maxHeight:"25px"}}/>
          <h4 className='dark:text-light'>{tech.name}</h4>
        </div>
      ))}
      </div>
    </section>
  )
}
