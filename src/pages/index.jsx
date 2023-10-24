import Layout from "../layouts/Layout";
import Head from "next/head";
import { info } from "../data/info";
import { useState } from "react";

export default function Home() {
  const title = "Portfolio"
  const description = info.ENG.about
  const [currentLanguage, setCurrentLanguage] = useState('ENG');

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
        {title && <title>{`${title} - ${info.name}`}</title>}
        {title && <meta name="title" content={`${title} - ${info.ENG.name}`} />}
        {description && <meta name="description" content={description} />}
        {title && <meta property="og:type" content="website" />}
        {title && <meta property="og:title" content={`${title} - ${info.ENG.name}`} />}
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
      <Layout currentLanguage={currentLanguage} handleLanguageChange={handleLanguageChange}>
      </Layout>
    </>
  );
}
