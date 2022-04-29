/* eslint-disable */

import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faDisplay, faCode, faServer, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Script from 'next/script'
import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
//import dynamic from 'next/dynamic'


export default function Home() {

  // const DynamicComponentWithNoSSR = dynamic(
  //   () => import('package'),
  //   { ssr: false }
  // )

  const navLinks = [
    {
      link: '#aboutUs',
      title: 'About',
      key: 1
    },
    {
      link: '#services',
      title: 'Services',
      key: 2
    },
    {
      link: '/projects',
      title: 'Projects',
      key: 3
    },
    {
      link: '/contact',
      title: 'Contact',
      key: 4
    }
  ]

  return (
    <div className='min h-auto text-black'>
      <Head>
        <title>Vista Tech</title>
        <meta property="og:title" content="Vista Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://vistatech.org" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:description" content="Creating and designing dynamic and responsive web apps built just right tailored to your specific needs" />
        <meta name="theme-color" content="#ffa07a" />
        <link rel="shortcut icon" href="/vista-favicon.ico"></link>
      </Head>
      <Navbar navLinks={navLinks} />
      <div className='w-4/5 m-auto pt-5'>
        <div className='w-full h-fit m-auto flex flex-column flex-wrap-reverse  justify-center rounded-xl bg-white/50 text-white shadow-lg items-center p-10  lg:mt-16 lg:mb-28 drop-shadow-xl mt-20 md:mt-10'>
          <div className='w-full md:w-2/3 flex flex-col items-center md:block'>
            <h1 className='hidden md:block md:text-left leading-tight font-bold text-xl lg:text-5xl md:text-4xl sm:text-3xl text-center text-black'>
              Dynamic Websites<br></br>Crafted By Hand<span className='invisble md:visible'><br></br></span>Designed With<br></br>Expertise</h1>
              <h1 className='block md:hidden w-4/5 mx-auto md:text-left leading-tight font-bold text-xl lg:text-5xl md:text-4xl sm:text-3xl text-center text-black'>
              Dynamic Websites Crafted By Hand Designed With Expertise</h1>
            <div className='mt-10 hover:shadow-white hover:shadow-lg hover:cursor-pointer transition delay-50 duration-20 bg-lightsalmon p-2 w-1/2 rounded-lg flex'>
              <a href='/projects' className=' text-base md:text-xl text-black/75 mx-auto'>
                View Projects
                <FontAwesomeIcon icon={faArrowRightLong} className='inline-block ml-3' size='lg' fixedWidth />
              </a>
            </div>
          </div>
          <div className='w-4/5 mb-10 md:w-1/3 md:mb-0'>
            <img src="/desk-img.png" className=" md:w-80"></img>
          </div>


          {/* <a href='/projects' className=' text-xl visible md:invisible hover:translate-x-2 transition delay-50 duration-200'>
            View Projects
            <FontAwesomeIcon icon={faArrowRightLong} className='inline-block ml-3' />
          </a> */}
        </div>

      </div>
      {/* mt-52  */}
      <div className='w-full flex flex-col items-center animate-bounce mt-40 md:mt-30 lg:mt-36'>
        <FontAwesomeIcon icon={faArrowUp} size="xl" className='text-white' />
        <h1 className='text-white text-xl'>Scroll</h1>
      </div>

      <section id="services" className='w-4/5 mx-auto mt-32 mb-48'>
        <h1 className="md:text-left leading-snug font-bold lg:text-5xl md:text-3xl text-2xl text-center mt-12 js-show-on-scroll text-black drop-shadow-2x" >What do we do?</h1>
        <div className='flex flex-wrap my-10 md:my-20 justify-center lg:justify-between'>
          <div className='hover:shadow-white hover:shadow-2xl transition-all rounded-2xl w-4/5  md:w-3/12 h-60 md:h-80 js-show-on-scroll p-5 flex flex-col justify-between drop-shadow-2xl min-w-[300px] items-start my-5 mx-2 hover:bg-white/75  bg-white/50 text-black '>
            <FontAwesomeIcon icon={faCode} className='text-2xl md:text-4xl' />
            <h1 className='text-xl md:text-2xl'>API</h1>
            <h1 className='text-xl md:text-2xl'>We develop functional and practical API's using a variety of methods</h1>
          </div>
          <div className='hover:shadow-white hover:shadow-2xl transition-all rounded-2xl w-4/5  md:w-3/12 h-60 md:h-80 js-show-on-scroll p-5 flex flex-col justify-between drop-shadow-2xl shadow-xl min-w-[300px] items-start my-5 mx-2 hover:bg-white/75 bg-white/50 text-black '>
            <FontAwesomeIcon icon={faDisplay} className='text-2xl md:text-4xl' />
            <h1 className='text-xl md:text-2xl'>Websites</h1>
            <h1 className='text-xl md:text-2xl'>We create stunning functional websites with a focus on user experience</h1>
          </div>
          <div className='hover:shadow-white hover:shadow-2xl transition-all rounded-2xl w-4/5  md:w-3/12 h-60 md:h-80 js-show-on-scroll p-5 flex flex-col justify-between drop-shadow-2xl shadow-xl min-w-[300px] items-start my-5 mx-2 hover:bg-white/75 bg-white/50 text-black'>
            <FontAwesomeIcon icon={faServer} className='text-2xl md:text-4xl' />
            <h1 className='text-xl md:text-2xl'>Fullstack</h1>
            <h1 className='text-xl md:text-2xl'>We craft fully functioning systems for specific needs</h1>
          </div>
        </div>
      </section>
      <section id='aboutUs' className='w-4/5 mx-auto mt-32 mb-64'>
        <h1 className='md:text-left leading-snug font-bold text-2xl lg:text-5xl md:text-3xl sm:text-xl text-center mt-12 js-show-on-scroll '>About Us</h1>
        <div className='h-fit rounded-2xl my-16 shadow-white/50 border-2 border-white shadow-xl js-show-on-scroll p-5'>
          <text className='text-xl text-black'>We are a web development firm with the ability to create nimble, responsive sites to suite our customer's needs. We treat each individual client as business partners.</text>
          <br></br>
          <br></br>
          <text className='text-xl text-black'>Our developers have programming experience in languages such as C++, C#, Python, Javascript, Html, Css and more.</text>
        </div>
      </section>
      <section id="technologies" className=' w-4/5 mx-auto mt-32 mb-48 '>
        <h1 className="md:text-left leading-snug font-bold text-2xl lg:text-5xl md:text-3xl text-center mt-6   md:mt-12 mb-20 md:mb-10 js-show-on-scroll" >Technolgoies we use</h1>
        <div className='gap-10 flex flex-column flex-wrap justify-center js-show-on-scroll'>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72    md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/react-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl  ml-5'>React</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72    md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/node-js-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>Node Js</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72   md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/python-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>Python</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72    md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/js-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>Javascript</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72    md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/figma-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>Figma</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72   md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/cloud-solid.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>Gcloud</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72    md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/aws-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>AWS</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72  md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/vuejs-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>Vue</h1>
          </div>
          <div className='border-2 border-white rounded-2xl w-4/5 md:h-28 md:w-72    md:my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
            <img src='/cloudflare-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
            <h1 className='text-2xl md:text-3xl ml-5'>Cloud Flare</h1>
          </div>

        </div>
      </section>

      <Script
        id="fadein-on-scroll"
        src="js/fadein.js"
      />
      <Footer />
    </div>
  )
}
