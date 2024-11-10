"use client"
import Link from 'next/link';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

function page() {
  return (
    <>
    <section>
    <div className='relative'>
          <div>
            <img className='h-[400px] object-cover w-[100%]' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/bg-slider-01.jpg' />
          </div>
          <div className='lg:flex gap-5 absolute left-48 top-0 z-10 hidden'>
            <div className='bg-black text-white text-[20px] font-bold'>
              <nav className='flex list-none gap-6 py-5 px-14 items-center'>
                <li className='relative'>Demos
                  <span className='absolute bg-[#C1282A] text-white text-[8px] -right-5 -top-2 px-2 py-1'>News</span>
                </li>
                <li>Pages +</li>
                <li>Services +</li>
                <li>Portfolio +</li>
                <li>Blog +</li>
                <li>Element +</li>
                <li><FaSearch />
                </li>
                <li><FaBasketShopping />
                </li>
              </nav>
            </div>
            <button className='text-white bg-gradient-to-l from-[#D0641A] to to-[#C73F24] px-7 py-2 text-[20px] font-bold flex items-center gap-3'>
              Subscribe Now <span><FaArrowRightLong />
              </span>
            </button>
          </div>
          <div className='place-items-center font-bold text-white absolute lg:left-[600px] top-40 left-3'>
            <nav className='lg:flex gap-4 list-none'>
              <Link href="/">
                <li className='hover:text-[#C73F24]'>Home</li></Link>
              <li className='hover:text-[#C73F24]'>Contact</li>
            </nav>
          </div>
        </div>
    </section>


    <section className='py-20'>
   <div className='lg:flex container justify-between'>
    <div className='flex lg:w-[30%] items-start gap-3'>
       <span className='text-[45px] text-[#D0641A] py-2'><MdLocationOn />
       </span>
       <div>
       <h3 className='text-[30px] font-bold'>Head office address:</h3>
       <h4>3556 Hartford Way Vlg, Mount Pleasant, SC, 29466, Australia.</h4></div>
    </div>
    <div className='flex lg:w-[30%] items-start gap-3'>
       <span className='text-[45px] text-[#D0641A] py-2'><FaPhoneAlt />

       </span>
       <div>
       <h3 className='text-[30px] font-bold'>Call for help</h3>
       <h4>(734) 697-2907 <br/>
       (843) 971-1906</h4></div>
    </div>
    <div className='flex lg:w-[30%] items-start gap-3'>
       <span className='text-[45px] text-[#D0641A] py-2'><IoMdMail />
       </span>
       <div>
       <h3 className='text-[30px] font-bold'>Mail for information</h3>
       <h4>noreply@envato.com <br/>
       noreply@consultio.com</h4></div>
    </div>
   </div>
   <div className='lg:flex py-20 items-center justify-center'>
      <div className='lg:w-[40%] w-[100%]'>
       <img className='w-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/contact-about1.png'/>
      </div>
     
      <div className=' container mx-auto px-10 py-5 lg:w-[40%] w-[100%]'>
          <h2 className='text-[35px] font-bold lg:w-[70%] w-[100%]'>Make a free consultation with our expert team to solve your problems.</h2>
         <h3 className='text-[15px] py-5'>For any inquiries relating to my Retail and Leadership Programs*</h3>
         <input className='lg:px-44 px-10 py-5 text-left border-2' placeholder='Your Name *'></input>
         <input className='lg:px-44 px-10 py-5 text-left my-5 border-2' placeholder='Your Mail *'></input>
         <input className='lg:px-44 px-10 py-5 text-left mb-5 border-2' placeholder='Phone *'></input>
         <input className='lg:px-44 px-10 py-5 text-left border-2' placeholder='Subject'></input>
         <button className='bg-gradient-to-l from-[#D0641A] to to-[#C73F24] lg:px-56 px-16 py-2 my-10 text-white flex font-bold items-center'>
          <span className='text-white'><TiTick />
          </span> Consult Today</button>
        </div>
   </div>
   
   <div className='container'>
   <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-100' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/client-04.png'/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/client-05.png'/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-100' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/client-01.png'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/client-02.png'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/client-03.png'/>
        </SwiperSlide>
      </Swiper>
   </div>
    </section>
    </>
  )
}

export default page
