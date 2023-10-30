import Head from 'next/head'
import { info } from '../data/info'
import "../styles/style.css";
import React, { useRef, useState } from 'react'
import NavBar from '../components/general/NavBar'
import emailjs from 'emailjs-com';
import Image from 'next/image';
import Footer from '../components/general/Footer';

export default function Projects() {
  const title = "Contact - Valentino Villar"
  const description = info.ENG.about
  const [currentLanguage, setCurrentLanguage] = useState('ENG');
  const ref = useRef();
  const [success, setSuccess] = useState(null);
 console.log(success);

  const updateLanguage = (language) => {
    document.documentElement.setAttribute('data-language', language);
    const browserLang = document.querySelector('[name="language"]');
    browserLang.content = language;
  };

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'ENG' ? 'ESP' : 'ENG';
    setCurrentLanguage(newLanguage);
    localStorage.setItem('selectedLang', newLanguage);
    updateLanguage(newLanguage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fy1s02p",
        "template_llaqp2k",
        ref.current,
        "5VZb0qlhlf5v2aYLT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  function languageSwitch(spanish, english) {
    return currentLanguage === "ESP" ? spanish : english;
  }

  return (
    <>
      <Head>
        <meta name="theme-color" content="#111111" />
        <meta name="language" content="ENG" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={`/`} />
        {title && <title>{`${title}`}</title>}
        {title && <meta name="title" content={`${title}`} />}
        {description && <meta name="description" content={description} />}
        {title && <meta property="og:type" content="website" />}
        {title && <meta property="og:title" content={`${title}`} />}
        {description && <meta property="og:description" content={description} />}
        {title && <meta property="twitter:card" content="summary_large_image" />}
        {
          title && (
            <meta
              property="twitter:url"
            />
          )
        }
        {title && <meta property="twitter:title" content={`${title} - ${info.name}`} />}
        {description && <meta property="twitter:description" content={description} />}
        <link
          rel="preload"
          href="/assets/fonts/Inter/Inter-Light.ttf"
          as="font"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/assets/fonts/Outfit/Outfit-SemiBold.ttf"
          as="font"
          crossOrigin="true"
        />
      </Head>
      <NavBar currentLanguage={currentLanguage} handleLanguageChange={handleLanguageChange} />
      <main className='container'>
        <div className='w-full text-center mb-2'>
        <h1 className='leading-[120px] text-center'>{languageSwitch('Contacto', 'Contact')}</h1>
        </div>
        <section id='contact' className='mb-6'>
          <div className='flex justify-center gap-[30px]'>
            <div className='flex items-center justify-end'>
              <form className='w-[400px] flex-col gap-[25px]' ref={ref} onSubmit={handleSubmit}>
                <input className='p-[20px] rounded-md bg-light text-dark dark:bg-dark dark:text-light border-[0.5px] border-dark dark:border-light mb-2 w-full' placeholder={languageSwitch('Nombre', 'Name')} name="name" />
                <input className='p-[20px] rounded-md bg-light text-dark dark:bg-dark dark:text-light border-[0.5px] border-dark dark:border-light mb-2 w-full' placeholder="Email" name="email" />
                <textarea
                  className='p-[20px] max-h-32 mb-2 rounded-md bg-light text-dark dark:bg-dark dark:text-light border-[0.5px] border-dark dark:border-light w-full'
                  placeholder={languageSwitch('Escribe tu mensaje', 'Write your message')}
                  name="message"
                  rows={10}
                />
                <button  className={`submit-button p-[10px] mb-2 cursor-pointer rounded-md bg-light text-dark dark:bg-dark dark:text-light border-[0.5px] border-dark dark:border-light w-full hover:bg-gray dark:hover:bg-dark-gray transition-colors duration-200 ease-in ${success ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit" disabled={success}>{languageSwitch('Enviar', 'Send')}</button>
                {success ?
                <p className='dark:text-light'>{languageSwitch('Tu mensaje se envió correctamente, me contactaré lo antes posible 😄', 'Your message has been sent. I will get back to you soon 😄')}</p>
                : null}
              </form>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </>
  )
}
