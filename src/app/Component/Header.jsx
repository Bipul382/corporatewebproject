"use client"
import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";


function Header() {
  let [isVisible, setIsVisible]= useState(false)
  return (
    <>
    <section>
        <div className='flex container py-5 items-center relative'>
          <Link href="/">
          <div>
            <img className='lg:w-[40%] w-[60%]' src='http://demo.casethemes.net/consultio/wp-content/themes/csuti/assets/images/logo-dark.png'/>
          </div></Link>
          <div className='lg:hidden text-[30px]' onClick={()=> setIsVisible(!isVisible)}>
          {isVisible ? '' : ''}
          <IoMdMenu />
          {isVisible && (
      <div className='w-[80%] absolute left-0 top-2 z-30 bg-white'>
        <div className='container w-[100%]'>
        <div>
          <img className='w-[80%]' src='http://demo.casethemes.net/consultio/wp-content/themes/csuti/assets/images/logo-dark.png'/>
        </div>
        <div className='w-[100%] justify-center py-3'>
        <input className='px-3 py-1 border-2 w-[80%] container' placeholder='Search'></input>
        </div>
        <nav>
          <ul className='text-[23px] font-bold'>
            <li className='border-b-2'>Demos</li>
            <li className='border-b-2'>Pages</li>
            <li className='border-b-2'>Services</li>
            <li className='border-b-2'>Portfolio</li>
            <li className='border-b-2'>Blog</li>
            <li className='border-b-2'>Element</li>
          </ul>
        </nav>
        <div className='py-3'>
            <div className='flex items-center gap-3 border-b-2 py-4'>
                <h2 className='text-[#C53925] text-[30px]'><FaPhoneAlt />
                </h2>
                <div>
                    <h3 className='font-semibold text-[17px]'>
                    Call Us: (210)-123-451</h3>
                    <h3>(Sat - Thursday)
                    </h3>
                </div>
            </div>
            <div className='flex items-center gap-3 py-4 border-b-2'>
            <h2 className='text-[#C53925] text-[40px]'><IoIosMail />

                </h2>
                <div>
                    <h3 className='font-semibold text-[17px]'>
                    Mail us for help:</h3>
                    <h3>info@consultio.com
                    </h3>
                </div>
            </div>
            <div className='flex items-center gap-3 py-4 border-b-2'>
            <h2 className='text-[#C53925] text-[30px]'><FaLocationDot />

                </h2>
                <div>
                    <h3 className='font-semibold text-[17px]'>
                    380 St Kilda Road, </h3>
                    <h3>Melbourne, Australia
                    </h3>
                </div>
            </div>
          </div>
          <div className='py-3'>
          <button className='text-white bg-gradient-to-l from-[#D0641A] to to-[#C73F24] px-7 py-2 text-[20px] font-bold flex items-center gap-3'>
          Subscribe Now <span><FaArrowRightLong />
          </span>
        </button>
        </div>
        </div>
      </div>
    )}
          </div>
          <div className='lg:flex gap-3 hidden'>
            <div className='flex items-center gap-3'>
                <h2 className='text-[#C53925] text-[30px]'><FaPhoneAlt />
                </h2>
                <div>
                    <h3 className='font-semibold text-[17px]'>
                    Call Us: (210)-123-451</h3>
                    <h3>(Sat - Thursday)
                    </h3>
                </div>
            </div>
            <div className='flex items-center gap-3 px-3 border-l-[1px] border-r-[1px] border-black border-opacity-20'>
            <h2 className='text-[#C53925] text-[45px]'><IoIosMail />

                </h2>
                <div>
                    <h3 className='font-semibold text-[17px]'>
                    Mail us for help:</h3>
                    <h3>info@consultio.com
                    </h3>
                </div>
            </div>
            <div className='flex items-center gap-3'>
            <h2 className='text-[#C53925] text-[35px]'><FaLocationDot />

                </h2>
                <div>
                    <h3 className='font-semibold text-[17px]'>
                    380 St Kilda Road, </h3>
                    <h3>Melbourne, Australia
                    </h3>
                </div>
            </div>
          </div>
          
        </div>
    </section>
    </>
  )
}

export default Header
