import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../data/Data'

const Header = () => {
  return (
    <>
        <header className='relative z-20 flex bg-red-800 py-1 px-1 md:py-2 '>
            <div className='flex border w-full justify-between'>
              <div>
                  <h4 className=' text-xl text-white font-bold ml-5'>Japan Cultures</h4>
              </div>
              <div className='mr-4 md:mr-12'>
                <ul className='flex text-white space-x-10 text-lg'>
                  {nav.map((list, index) => (
                    <li className='hidden md:block' key={index}>
                      <Link to={list.path}>{list.text}</Link>
                    </li>
                  ))}
                </ul>
                <div>
                <img className='w-6 md:hidden' src="/img/icons8-list-64.png" alt="" />
              </div>
              </div>
            </div>
        </header>
    </>
  )
}

export default Header