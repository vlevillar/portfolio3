import Head from 'next/head'
import { info } from '../../data/info'
import "../../styles/style.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react'
import NavBar from '../../components/general/NavBar'
import Footer from '../../components/general/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    const [currentLanguage, setCurrentLanguage] = useState('ENG');
    const title = "Projects - Valentino Villar"
    const projects = info.projects
    const description = info[currentLanguage]?.about
    const router = useRouter()
    const { id } = router.query;
    const project = projects.find((project) => project[currentLanguage]?.id === parseInt(id));

    const updateLanguage = (language) => {
        document.documentElement.setAttribute('data-language', language);
        const browserLang = document.querySelector('[name="language"]');
        browserLang.content = language;
    };

    if (!project) {
        return <div>Project not found</div>; // Puedes personalizar este mensaje de error
    }

    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === 'ENG' ? 'ESP' : 'ENG';
        setCurrentLanguage(newLanguage);
        localStorage.setItem('selectedLang', newLanguage);
        updateLanguage(newLanguage);
    };

    function languageSwitch(spanish, english) {
        return currentLanguage === "ESP" ? spanish : english;
    }


    const carrouselFormatted = project[currentLanguage]?.carrousel
    const tags = project[currentLanguage]?.tags

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
                <div className='flex items-center justify-center'>
                    <h1 className='leading-[120px]'>{project[currentLanguage].title}</h1>
                    <Link
                        href={project[currentLanguage].liveUrl}
                        class="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
                        aria-label="Social Media"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-link-2"
                        >
                            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </Link>
                </div>
                <div className="flex p-4 justify-center pb-6">
                        {tags.map((tag, index) => (
                            <div key={index} className="mr-2 p-2 border-solid border-2 border-[#bababa] rounded-md text-xs text-[#bababa]" style={{ display: 'inline-block' }}>{tag}</div>
                        ))}
                    </div>
                <section>
                    <div className='max-w-1/2'>
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 1
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 1
                                }
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            {carrouselFormatted.map((image, index) => (
                                <Image key={index} src={image} width={1500} height={500} alt='carrousel' />
                            ))}
                        </Carousel>
                    </div>
                </section>
                <section className='pb-4 dark:text-light'>
                    <div className='pt-8 flex justify-center align-middle'>
                        <h2 className='dark:text-light text-6xl'><strong>{languageSwitch('Acerca de', 'About')} {' '} {project[currentLanguage].title}</strong></h2>
                    </div>

                    <div className='flex pt-4'>
                        <div className='flex flex-col justify-center align-middle text-left'>
                            <p className='dark:text-gray text-l'>{project[currentLanguage].description}</p>
                            <h3 class="text-xl font-semibold text-center py-4">{languageSwitch('Tecnologias usadas', 'Technologies used')}</h3>
                            <p className='dark:text-gray text-l'>{project[currentLanguage].techUsed}</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

