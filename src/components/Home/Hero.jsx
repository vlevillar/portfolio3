import React from 'react';
import { info } from "../../data/info";


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
    </section>
  )
}
