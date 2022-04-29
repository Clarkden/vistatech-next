import React from 'react'

export default function footer() {
    return (
        <div className='bg-neutral-900 h-auto py-5 px-10 md:px-20 w-4/5 m-auto rounded-2xl shadow-lg shadow-white/50 py-auto mt-36 mb-10 js-show-on-scroll'>
            <ul className='text-gray-400 flex justify-between text-base sm:text-sm items-center'>
                <div className='flex flex-row flex-wrap'>
                    <li className='inline-block hover:text-white mr-10 transition'><a href="/contact">Contact</a></li><br></br>
                    <li className='inline-block hover:text-white  mr-10 transition'><a href="/projects">Projects</a></li><br></br>
                    <li className='inline-block hover:text-white mr-10 transition'><a target="_blank" href="https://discord.gg/Ud5TMhCYS8">Discord</a></li><br></br>
                    <li className='inline-block hover:text-white  mr-10 transition'><a href="/manage">Management</a></li><br></br>
                </div>
                <div className=''>
                    <h1 className='inline-block'>Copyright 2022</h1>
                </div>
            </ul>
        </div>
    )
}
