"use client"
import { data } from '@/Data';
import Link from 'next/link';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineAddBusiness } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
              <li className='hover:text-[#C73F24]'>Services</li>
            </nav>
          </div>
        </div>
    </section>

    <section className='py-20'>
        <div className='container lg:flex items-center justify-center'>
          <div className='lg:w-[45%] w-[100%]'>
           <h2 className='text-[20px] flex items-center'>
            <div className='bg-[#D0641A] px-5 h-[2px] w-[10%]'></div>
            Services</h2>
           <h3 className='text-[35px] font-bold py-5'>We position our clients at the forefront of their field by advancing an agenda.</h3>
          </div>
          <div className='lg:w-[45%] text-[25px] w-[100%]'>
             <h4>Easily apply to multiple jobs with one click! Quick Apply shows you recommended jobs based off your most recent search and allows you to apply to 25+ jobs in a matter of seconds!</h4>
          </div>
        </div>
    </section>

    <section>
       <div className='py-10 lg:flex lg:flex-wrap container gap-10'>
          {data.map((a)=>(
            <div className='shadow-2xl container relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000 py-14 lg:w-[25%]'>
            <div className='place-items-center text-center lg:w-[70%] w-[100%] mx-auto'>
            <h2 className='text-[100px] text-[#D0641A]'><MdOutlineAddBusiness /></h2>
            <Link href={`/details/${a.id}`}>
            <h2 className='text-[25px] font-bold py-3'>{a.category}</h2></Link>
            <h2 className='text-[18px]'>{a.details}</h2>
            </div>
            <div className='absolute -right-10 -bottom-24'>
            <h2 className='text-[250px] text-[#D0641A] opacity-35'><MdOutlineAddBusiness /></h2>
            </div>
          </div>
          ))}
       </div>
       <div className='container py-20'>
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
