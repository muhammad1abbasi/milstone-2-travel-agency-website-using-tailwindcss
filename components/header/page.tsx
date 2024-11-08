import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='h-[88px] md:w-full bg-slate-400 '>
        <div className='text-black flex justify-end p-8 '>
          <ul className='flex space-x-20 font-bold '>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
