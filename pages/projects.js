/* eslint-disable */

import Navbar from './components/navbar'
import Footer from './components/footer'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

    const navLinks = [
        {
            link: '/',
            title: 'Home'
        },
    ]

    return (

        <div>
            <Head>
                <title>Projects</title>
                <meta property="og:title" content="Projects" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://vistatech.org/projects" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:description" content="View our gallery of projects we have worked on and others that are currently under development" />
                <meta name="theme-color" content="#ffa07a" />
                <link rel="shortcut icon" href="/vista-favicon.ico"></link>
            </Head>
            <Navbar navLinks={navLinks} />
            <section className='min h-fit text-gray-100'>
                <div className='w-4/5 m-auto pt-5 shadow-red-200 shadow-xl'>
                    <div className='bg-white h-fit w-full rounded-lg p-5 text-black'>
                        <h1 className='text-2xl mt-3 mb-5'>Music Shop</h1>
                        <div className='flex flex-col'>
                            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start mb-2">
                                <img src="/music-store-1.png" className='rounded-lg w-3/4 md:w-1/2 md:h-2/6'></img>
                                <div className='flex flex-col items-center flex-wrap h-full justify-end w-3/4 mt-10 mb-4 md:mt-0 md:mb-0'>
                                    <div className=" md:w-3/4">
                                        <text className=''>Although untitled by the client, this site is essentially a shop for the client to sell their music. Along with creating the front-end, we included the e-commerce and special functionality to make this site possible.<br></br></text>
                                        <text className=''><br></br>The e-commerce portion of the shop features a wide array of custom functions to give the shop a music player feel while listening to samples of music before purchasing.</text>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-row md:flex-nowrap flex-wrap justify-center md:justify-start first-letter items-end">
                                <img src="/music-store-2.png" className='rounded-lg w-3/4 md:w-1/2 md:h-2/6'></img>
                                <div className='w-full md:w-2/6 mx-auto mt-4 md:mt-0'>
                                    <div className='bg-purple-400 h-fit mt-5 p-5 rounded-xl text-white shadow-md shadow-red-200 flex justify-around'>
                                        <h1 className='text-base'>Like what you see?</h1>
                                        <a href="/contact" className='text-green-200'>Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}