import React from 'react'
import { FaLocationPin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';


function Footer() {
  return (
    <>
    <section className='bg-black'>
      <div className='container lg:flex py-10 text-white lg:justify-between place-items-center'>
      <div className='lg:w-[30%] py-5 '>
         <img className='w-[60%]' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/10/logo-footer.png'/>
         <div className='py-10'>
          <h2 className='flex font-bold items-center gap-4'> <span className='text-[25px]'><FaLocationPin />
          </span>30 Commercial Road <br/>
          Fratton, Australia</h2>
          <h2 className='flex font-bold items-center gap-4 py-5'> <span className='text-[25px]'><IoCall />
          </span>1-888-452-1505</h2>
          <h2 className='text-[#D0641A] font-medium'>Open hours</h2>
          <h2 className='font-medium'>Mon – Sat: 8 am – 5 pm,<br/>
          Sunday: CLOSED</h2>
         </div>
      </div>
      <div className='py-5 lg:w-[30%]'>
        <h3 className='text-[20px] py-5 font-bold'>Links</h3>
        <div className='flex gap-5 py-5'>
        <nav>
          <Link href="/">
          <li>Home</li></Link>
          <Link href={`/services/`}>
          <li className='py-3'>Services
            </li></Link>
            <Link href={`/about/`}>
            <li className='pb-3'>About us</li>
            </Link>
            <li>Testimonials</li><li className='pt-3'>News</li>
        </nav>
        <nav>
        <li>Teams</li><li className='py-3'>FAQ</li><li className='pb-3'>Gallery</li>
        <Link href={`/contact/`}>
        <li>Contact</li></Link><li className='pt-3'>Portfolio</li>
        </nav>
        </div>
      </div>
      <div className='lg:w-[30%] py-5 text-white'>
         <h3 className='py-5 text-[20px] font-bold'>Newsletter</h3>
         <h4>Send us a newsletter to get update</h4>
         <div className=' my-5 items-center relative'>
         <input className='bg-[#A8A8A8] px-10 py-3 placeholder:text-white placeholder:text-left' placeholder='Your mail address'></input>
         <button className='bg-[#D0641A] px-3 py-3 items-center absolute right-18 bottom-0'>
          <span className='text-white text-[25px]'><CiPen />
          </span>
         </button>
         </div>
         <div className='flex gap-5'>
           <img src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/10/app-store.png'/>
           <img src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/10/google-play.png'/>
         </div>
         <div className='flex gap-4 py-4 text-[25px]'>
         <FaFacebookF />
         <FaTwitter />
         <FaLinkedin />
         <FaPinterest />
         </div>
      </div>
      </div>
    </section>
      </>
  )
}

export default Footer
