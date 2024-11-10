"use client"
import { data } from '@/Data';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaChevronRight } from "react-icons/fa";


function page() {
  let { id } = useParams()
  let aaa = data.find((a) => a.id == id)
  let id1= data.filter((a)=>a.id=="1")
  let id2= data.filter((a)=>a.id=="2")
  let id3= data.filter((a)=>a.id=="3")
  let id4= data.filter((a)=>a.id=="4")
  let id5= data.filter((a)=>a.id=="5")
  let id6= data.filter((a)=>a.id=="6")
  let id7= data.filter((a)=>a.id=="7")
  let id8= data.filter((a)=>a.id=="8")
  let id9= data.filter((a)=>a.id=="9")
  let id10= data.filter((a)=>a.id=="10")
  return (
    <>
      <section>
        <div className='relative'>
          <div>
            <img className='h-[400px] object-cover w-[100%]' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/bg-slider-01.jpg' />
          </div>
          <div className='flex gap-5 absolute left-48 top-0 z-10'>
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
          <div className='place-items-center font-bold text-white absolute left-[600px] top-40'>
            <h2 className='text-[25px] font-bold'> {aaa.category}</h2>
            <nav className='lg:flex gap-4 list-none'>
              <Link href="/">
                <li className='hover:text-[#C73F24]'>Home</li></Link>
              <li className='hover:text-[#C73F24]'>Services</li>
              <li>{aaa.category}</li>
            </nav>
          </div>
        </div>
      </section>
      <section>
        <div className='py-20 container flex'>
        <div className='lg:w-[70%]'>
          <h2 className='text-[35px] font-bold py-4'>We give the best services</h2>
          <p className='text-[20px] py-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
          <p className='text-[20px] py-2'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          <ul className='list-disc ml-7 text-[17px] py-2'>
            <li>Sed do eiusmod tempor incididunt ut</li>
            <li>Labore et dolore magna aliqua</li>
            <li>Ut enim ad minim veniam quis nostrud</li>
          </ul>
          <div>
          <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-[85%]' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/theme-05-475x600.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[85%]' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/theme-01-475x600.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[85%]' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/theme-09-475x600.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[85%]' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/theme-07-475x600.jpg'/>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
        <div>
          <div className='bg-black px-10 py-6 text-white text-[25px] font-semibold'>
              <h2 className='flex items-center'>{aaa.category}<FaChevronRight /></h2>
          </div>
          <div className='bg-[#A8A8A8] px-10 py-6 text-[25px] my-3 font-semibold hover:bg-black hover:text-white'>
          {id6.map((a)=>(
            <Link href={`/details/${a.id}`}>
              <h2 className='flex items-center'>{a.category}<FaChevronRight /></h2></Link>))}
          </div>
          <div className='bg-[#A8A8A8] px-10 py-6 text-[25px] my-3 font-semibold hover:bg-black hover:text-white'>
          {id1.map((a)=>(
            <Link href={`/details/${a.id}`}>
              <h2 className='flex items-center gap-2'>{a.category}<FaChevronRight />
              </h2></Link>))}
          </div>
          <div className='bg-[#A8A8A8] px-10 py-6 text-[25px] my-3 font-semibold hover:bg-black hover:text-white'>
          {id2.map((a)=>(
            <Link href={`/details/${a.id}`}>
              <h2 className='flex items-center'>{a.category}<FaChevronRight /></h2></Link>))}
          </div>
          <div className='bg-[#A8A8A8] px-10 py-6 text-[25px] font-semibold hover:bg-black hover:text-white'>
          {id7.map((a)=>(
            <Link href={`/details/${a.id}`}>
              <h2 className='flex items-center'>{a.category}<FaChevronRight /></h2></Link>))}
          </div>
        </div>
        </div>
      </section>

    </>
  )
}

export default page
