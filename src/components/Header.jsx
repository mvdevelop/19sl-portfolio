
import React from 'react';

import Navbar from './Navbar';

export default function Header() {
  return (
    <>
        <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-linear-to-b from-zinc-900 to-zinc-900/0'>
            <div className='max-w-screen-2xl w-full mx-auto px-6 flex justify-around items-center md:px-12 md:grid-cols-[1fr,3fr,1fr]'>
                <h1>
                    <a href="/" className='logo'>
                        <img src="/images/logo.svg" width={40} height={40} alt="MvDevelop" />
                    </a>
                </h1>

                <div className='relative md:justify-self-center'>
                    <button className='grid place-items-center menu-btn md:hidden' onClick={null}>
                        <span className="material-symbols-rounded">
                            menu
                        </span>
                    </button>

                    <Navbar navOpen={} />
                </div>

                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
                
            </div>
        </header>
    </>
  )
}
