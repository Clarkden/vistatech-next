/* eslint-disable */
import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { useRouter } from 'next/router'

export default function contact() {
    const navLinks = [{
        title: 'Home',
        link: '/'
    }]

    function submit() { }

    const router = useRouter()
    const {status} = router.query.status

    return (
        <div className='h-fit'>
            <Head>
                <title>Contact</title>
                <meta property="og:title" content="Contact" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://vistatech.org/contact" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:description" content="Have an idea for a project? Contact us and we can begin to work on it" />
                <meta name="theme-color" content="#ffa07a" />
                <link rel="shortcut icon" href="/vista-favicon.ico"></link>
            </Head>
            <Navbar navLinks={navLinks} />
            <section className='w-3/4 md:w-2/4 lg:w-2/6 m-auto rounded-2xl h-fit my-16 shadow-lg shadow-white p-10 bg-slate-50'>
                <div>
                    <div className='flex flex-row items-baseline justify-between mb-7 text-black rounded-lg'>
                        <h1 className='text-2xl'>Contact</h1>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                        {status ?
          {
            'success': <div className='w-5/6 h-16 border-2 border-green-400 bg-green-400/25 rounded-lg flex justify-center items-center mx-auto relative'><div className='absolute top-1 left-2 hover:cursor-pointer text-green-400' onClick={() => router.push('/contact')}><FontAwesomeIcon icon={faClose} size="lg" className='text-red' /></div><h1 className='text-slate-600 dark:text-slate-200 font-bold text-sm md:text-lg text-center' >Check out completed <span className='underline text-slate-400'><Link href="/dashboard">Access dashboard</Link></span></h1></div>,
            'cancel': <div className='w-5/6 h-16 border-2 border-red-400 bg-red-400/25 rounded-lg flex justify-center items-center mx-auto relative'><div className='absolute top-1 left-2 hover:cursor-pointer text-red-400' onClick={() => router.push('/contact')}><FontAwesomeIcon icon={faClose} size="lg" className='text-red' /></div><h1 className='text-slate-600 dark:text-slate-200 font-bold text-sm md:text-lg text-center'>Check out canceled</h1></div>,

          }[status]
          : null}
                    <form action="./api/contact" method="post">
                        <input type='text' name="fullname" id="fullname" placeholder="Full Name" className='w-full bg-transparent border-black border-b-2 text-black focus:border-lightsalmon transition-colors duration-200 outline-none placeholder:text-neutral-500 my-3' required></input>
                        <input type='email' name="email" id="email" placeholder="Email" className='w-full bg-transparent border-black border-b-2 text-black focus:border-lightsalmon transition-colors duration-200 outline-none placeholder:text-neutral-500 my-3' required></input>
                        <input type='text' name="phonenumber" id="phonenumber" placeholder="Phone Number" className='w-full bg-transparent border-black border-b-2 text-black focus:border-lightsalmon transition-colors duration-200 outline-none placeholder:text-neutral-500 my-3' required></input>
                        <select name="pricerange" id="pricerange" className='w-full bg-transparent border-black border-b-2 focus:border-lightsalmon transition-colors duration-200 outline-non my-3 invalid:text-neutral-500' required>'
                            <option value="" selected disabled>Select your budget</option>
                            <option value="$100-200">$100-200</option>
                            <option value="$200-500">$200-500</option>
                            <option value="$500-2000">$500-2000</option>
                            <option value="$2000+">2000+</option>
                        </select>
                        <textarea name="description" id="description" className='w-full bg-transparent border-black border-b-2 text-black focus:border-lightsalmon transition-colors duration-200 outline-none placeholder:text-neutral-500 my-3 resize-none ' placeholder='Describe your project in detail...' required></textarea>
                        <button className='w-full bg-neutral-900 rounded-lg mt-10 p-2 border-2 text-white' action="Submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}
