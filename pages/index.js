/* eslint-disable */

import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faDisplay, faCode, faServer } from '@fortawesome/free-solid-svg-icons'
import Script from 'next/script'
import React from 'react'
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
        <meta property="og:description" content="Let us help you create dynamic and responsive web apps" />
        <meta name="theme-color" content="#ffa07a"/>
          {/* <link rel="shortcut icon" href="/vista-favicon.ico"></link> */}
      </Head>
      <Navbar navLinks={navLinks} />
      <div className='w-4/5 m-auto pt-5'>
        <div className='w-full h-auto m-auto flex flex-wrap rounded-md my-1 py-1 sm:my-4 sm:py-4 md:my-20 md:py-6   px-4 md:grid md:grid-cols-2 md:gap-20 justify-center'>
          <div>
            <div className='md:col-span-1 my-auto'>
              <h1 className='md:text-left leading-tight font-bold text-xl lg:text-5xl md:text-4xl sm:text-3xl text-center mt-5 md:mt-0'>
                Dynamic Websites<br></br>Crafted by Hand <br></br>Designed with Expertise</h1>
            </div>
            <div className='mt-10 hover:translate-x-2 transition delay-50 duration-200'>
              <a href='/projects' className=' text-xl invisible md:visible'>
                View Projects
                <FontAwesomeIcon icon={faArrowRightLong} className='inline-block ml-3' size='' />
              </a>
            </div>
          </div>

          <div className='col-span-1'>
            <img src="/desk-img.png"></img>
          </div>
          <a href='/projects' className=' text-xl visible md:invisible mt-10 hover:translate-x-2 transition delay-50 duration-200'>
            View Projects
            <FontAwesomeIcon icon={faArrowRightLong} className='inline-block ml-3' />
          </a>
        </div>

      </div>
      <section id="services" className='w-4/5 mx-auto mt-52 md:mt-0'>
        <h1 className="md:text-left leading-snug font-bold lg:text-5xl md:text-3xl text-2xl text-center mt-12 js-show-on-scroll" >What do we do?</h1>
        <div className='flex flex-wrap my-10 md:my-20 md:justify-center justify-center'>
          <div className='border-2 border-black rounded-2xl w-min md:w-3/12 h-60 md:h-80 js-show-on-scroll p-5 flex flex-col justify-between shadow-white shadow-xl min-w-[300px] items-start my-5 mx-2'>
            <FontAwesomeIcon icon={faCode} className='text-2xl md:text-4xl' />
            <h1 className='text-xl md:text-2xl text-black'>API</h1>
            <h1 className='text-xl md:text-2xl text-black'>We develop functional and practical API's using a variety of methods</h1>
          </div>
          <div className='border-2 border-black rounded-2xl w-min md:w-3/12 h-60 md:h-80 js-show-on-scroll p-5 flex flex-col justify-between shadow-white shadow-xl min-w-[300px] items-start my-5 mx-2'>
            <FontAwesomeIcon icon={faDisplay} className='text-2xl md:text-4xl' />
            <h1 className='text-xl md:text-2xl text-black'>Websites</h1>
            <h1 className='text-xl md:text-2xl text-black'>We create stunning functional websites with a focus on user experience</h1>
          </div>
          <div className='border-2 border-black rounded-2xl w-3/12 h-60 md:h-80 js-show-on-scroll p-5 flex flex-col justify-between shadow-white shadow-xl min-w-[300px] items-start my-5 mx-2'>
            <FontAwesomeIcon icon={faServer} className='text-2xl md:text-4xl' />
            <h1 className='text-xl md:text-2xl text-black'>Fullstack</h1>
            <h1 className='text-xl md:text-2xl text-black'>We craft fully functioning systems for specific needs</h1>
          </div>
        </div>
      </section>
      <section id='aboutUs' className='w-4/5 m-auto'>
        <h1 className='md:text-left leading-snug font-bold text-2xl lg:text-5xl md:text-3xl sm:text-xl text-center mt-12 js-show-on-scroll'>About Us</h1>
        <div className='h-fit border-2 border-black rounded-2xl my-16 shadow-white shadow-xl js-show-on-scroll p-5'>
          <text className='text-xl text-black'>We are a web development firm with the ability to create nimble, responsive sites to suite our customer's needs. We treat each individual client as business partners.</text>
          <br></br>
          <br></br>
          <text className='text-xl text-black'>Our developers have programming experience in languages such as C++, C#, Python, Javascript, Html, Css and more.</text>
        </div>
      </section>
      <section id="technologies" className=' w-4/5 mx-auto mt-20 '>
        <h1 className="md:text-left leading-snug font-bold text-2xl lg:text-5xl md:text-3xl text-center mt-6   md:mt-12 mb-5 md:mb-10 js-show-on-scroll" >Technolgoies we use</h1>
        <div className='lg:grid lg:grid-cols-3 lg:gap-10 flex flex-column flex-wrap js-show-on-scroll'>
          <div className='lg:col-span-1 m-auto'>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72 my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/react-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl  ml-5'>React</h1>
            </div>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/node-js-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>Node Js</h1>
            </div>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/python-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>Python</h1>
            </div>
          </div>
          <div className='lg:col-span-1 m-auto'>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/js-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>Javascript</h1>
            </div>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center'>
              <img src='/figma-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>Figma</h1>
            </div>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/cloud-solid.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>Gcloud</h1>
            </div>
          </div>
          <div className='lg:col-span-1 m-auto'>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/aws-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>AWS</h1>
            </div>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/vuejs-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>Vue</h1>
            </div>
            <div className='border-2 border-black rounded-2xl h-16 w-80 md:h-28 md:w-72   my-10 p-5 flex flex-row items-center justify-center shadow-white shadow-lg'>
              <img src='/cloudflare-brands.svg' alt='mySvgImage' width="32px md:48px" height="32px md:48px" />
              <h1 className='text-2xl md:text-3xl ml-5'>Cloud Flare</h1>
            </div>
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
