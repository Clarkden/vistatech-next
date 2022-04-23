/* eslint-disable */

import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faX} from '@fortawesome/free-solid-svg-icons'
import Script from 'next/script'
import Head from 'next/head'
import $ from 'jquery'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import jquery from 'jquery'
config.autoAddCss = false

export default function navbar({navLinks}) {

  const[ShowModalNav, setShowModalNav] = useState(false)


  return (

    <nav className='bg-neutral-900 h-auto items-center sm:h-auto flex justify-center mt-4 mb-1 sm:mt5 sm:mb-2 md:mt-6 md:mb-3 lg:mt-6 lg:mb-4 w-11/12 md:w-4/5  m-auto rounded-2xl shadow-lg shadow-zinc-800 '>
      <Head>
      <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossOrigin="anonymous"></script>
        <script src="js/modal-fade.js" type="text/javascript"></script>
      </Head>
      <div className='flex w-4/5 h-16 justify-between items-center'>
        <div className=''>
          <a href='/'><img src='/logo.png' className='h-10 sm:h-12' /></a>
        </div>
        <div className='justify-end w-4/5 hidden sm:hidden md:hidden lg:flex'>
          <ul className='text-gray-400'>
            {navLinks?.map((navLinks) => (
              <li key={navLinks.key} className='inline-block mx-5 hover:text-white p-1 transition'><a href={navLinks.link}>{navLinks.title}</a></li>
            ))}
            {/*<li className='inline-block mx-5 hover:text-white p-1 transition'><a href='#aboutUs'>About</a></li>
            <li className='inline-block mx-5 hover:text-white p-1 transition'><a href='#services'>Services</a></li>
            <li className='inline-block mx-5 hover:text-white p-1 transition'><a href='/projects'>Projects</a></li>
            <li className='inline-block mx-5 hover:text-white p-1 transition'><a href='#'>Contact</a></li>*/}
            {/*<li className='inline-block mx-5 py-5 px-4 transition min-h-full text-black bg-lightsalmon hover:bg-neutral-200'><a href='#'>Contact</a></li>*/}
          </ul>
        </div>
        <div className=' w-4/5 flex sm:flex md:flex lg:hidden justify-end'>
          {/* onClick={() => modalShow()} */}
          <FontAwesomeIcon id="hamurger" icon={faBars} className='text-gray-200 text-base md:text-2xl h-4 sm:h-6 cursor-pointer' onClick={() => showModal()}/>
        </div>
      </div>
      <div id="modal" className='fixed w-full h-screen top-0 left-0 backdrop-blur-sm hidden fading-in' onClick={() => setShowModalNav(!ShowModalNav)} >
        <div className='bg-neutral-900 h-auto w-4/5 rounded-2xl mx-auto mt-36'>
          {/* onClick={() => hideModal()} */}
        <FontAwesomeIcon id="modal-x" icon={faX} className="text-red-500 mt-4 ml-4 cursor-pointer" onClick={() => hideModal()}/>
        <ul className='text-gray-400 pb-5 text-center'>
        {navLinks?.map((navLinks) => (
            <li key={navLinks.key} className='mx-5 hover:text-white p-1 transition text-xl my-2' onClick={() => hideModal()}><a href={navLinks.link} onClick={() => setShowModalNav(!ShowModalNav)}>{navLinks.title}</a></li>
            ))}
          </ul>
        </div> 
      </div>
      {/* <script>
        var 
        {
          var $ = 
          $("#hamburger").click(function() {
          alert('in')
          // $( "#modal" ).fadeIn( "slow", function() {
          //   // Animation complete.
          //   alert('In')
          // });
        })}
      </script> */}
    </nav>
  )
  
}

