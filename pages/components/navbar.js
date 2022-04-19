import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faX} from '@fortawesome/free-solid-svg-icons'

function navbar({navLinks}) {

  const[ShowModalNav, setShowModalNav] = useState(false)

  return (
    <nav className='bg-neutral-900 h-12 items-center sm:h-auto flex justify-center mt-4 mb-1 sm:mt5 sm:mb-2 md:mt-6 md:mb-3 lg:mt-6 lg:mb-4 w-4/5 m-auto rounded-2xl shadow-lg shadow-zinc-800 '>
      <div className='flex w-4/5 h-16 justify-between items-center'>
        <div className=''>
          <a href='/'><img src='/logo.png' className='h-10 sm:h-12' /></a>
        </div>
        <div className='justify-end w-4/5 hidden sm:hidden md:hidden lg:flex'>
          <ul className='text-gray-400'>
            {navLinks.map(navLinks => (
              <li className='inline-block mx-5 hover:text-white p-1 transition'><a href={navLinks.link}>{navLinks.title}</a></li>
            ))}
            {/*<li className='inline-block mx-5 hover:text-white p-1 transition'><a href='#aboutUs'>About</a></li>
            <li className='inline-block mx-5 hover:text-white p-1 transition'><a href='#services'>Services</a></li>
            <li className='inline-block mx-5 hover:text-white p-1 transition'><a href='/projects'>Projects</a></li>
            <li className='inline-block mx-5 hover:text-white p-1 transition'><a href='#'>Contact</a></li>*/}
            {/*<li className='inline-block mx-5 py-5 px-4 transition min-h-full text-black bg-lightsalmon hover:bg-neutral-200'><a href='#'>Contact</a></li>*/}
          </ul>
        </div>
        <div className=' w-4/5 flex sm:flex md:flex lg:hidden justify-end'>
          <FontAwesomeIcon icon={faBars} className='text-gray-200 text-2xl h-4 sm:h-6 cursor-pointer' onClick={() => setShowModalNav(!ShowModalNav)}/>
        </div>
      </div>
      {ShowModalNav ? 
      <div className='fixed w-full h-screen top-0 left-0 backdrop-blur-sm'>
        <div className='bg-neutral-900 h-auto w-4/5 rounded-2xl mx-auto mt-36'>
        <FontAwesomeIcon icon={faX} className="text-red-500 mt-4 ml-4 cursor-pointer" onClick={() => setShowModalNav(!ShowModalNav)}/>
        <ul className='text-gray-400 pb-5 text-center'>
        {navLinks.map(navLinks => (
            <li className='mx-5 hover:text-white p-1 transition text-xl my-2'><a href={navLinks.link} onClick={() => setShowModalNav(!ShowModalNav)}>{navLinks.title}</a></li>
            ))}
            {/*<li className='mx-5 hover:text-white p-1 transition text-xl my-2'><a href='#'>Services</a></li>
            <li className='mx-5 hover:text-white p-1 transition text-xl my-2'><a href='#'>About</a></li>
            <li className='mx-5 hover:text-white p-1 transition text-xl my-2'><a href='#'>Projects</a></li>
            <li className='mx-5 hover:text-white p-1 transition text-xl my-2'><a href='/contact'>Contact</a></li>//*}
            {/*<li className='inline-block mx-5 py-5 px-4 transition min-h-full text-black bg-lightsalmon hover:bg-neutral-200'><a href='#'>Contact</a></li>*/}
          </ul>
        </div> 
      </div>
        
        : null}
    </nav>
  )
}

export default navbar
