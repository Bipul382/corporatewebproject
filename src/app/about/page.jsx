"use client"
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from 'next/link';
import { data } from '@/Data';
import { MdOutlineAddBusiness } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';






// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function page() {
    
  return (
     <>
     <section className='overflow-x-hidden'>
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
            <h3 className='text-[30px] font-bold'>About us</h3>
            <nav className='lg:flex gap-4 list-none'>
              <Link href="/">
                <li className='hover:text-[#C73F24]'>Home</li></Link>
              <li className='hover:text-[#C73F24]'>Contact</li>
            </nav>
          </div>
        </div>
     </section>

     <section className='transition-transform translate-x-4 '>
        <div className='container py-10 lg:flex justify-between'>
            <div className='lg:w-[45%] w-[100%] gap-5'>
              <div className='flex items-start gap-5'>
              <div className='bg-[#C73F25] px-4 py-0.5 mt-12'></div>
              <div className='place-items-start justify-center'>
                 <h3 className='text-[40px] font-bold py-5'>We’re a global stakeholder relations and partnership building consultancy.</h3>
                  <h4 className='text-[20px] py-5'>Collaborate Consulting exists to find the place where to being seemingly disparate interests meet. From that point of the connection, we create platforms.</h4>
              </div>
              </div>



              <div className='lg:flex gap-8'>
                <div className='lg:w-[50%] w-[100%]'>
                  <div>
                  <h3 className='text-[25px] font-bold flex items-center gap-2'><span className='text-[#C73F25]'><FaAngleDoubleRight /></span>
                  Strategic Vision</h3>
                  <p className='text-[18px] py-4'>A client once told us that where the others focus on one star one issue we see the whole sky.</p>
                  </div>
                  <div>
                  <h3 className='text-[25px] font-bold flex items-center gap-2'><span className='text-[#C73F25]'><FaAngleDoubleRight /></span>
                  Interpersonal skills</h3>
                  <p className='text-[18px] py-4'>Forging relationships between multi-national corporations, govern ments and global NGOs begins with connections between people.</p>
                  </div>
                </div>
                <div className='lg:w-[50%] w-[100%]'>
                <div>
                  <h3 className='text-[25px] font-bold flex items-center gap-2'><span className='text-[#C73F25]'><FaAngleDoubleRight /></span>
                  Networks that span sectors</h3>
                  <p className='text-[18px] py-4'>Over more than 20 years, we’ve fostered trusted relationships across government, industry and global forums.
                  .</p>
                  </div>
                  <div>
                  <h3 className='text-[25px] font-bold flex items-center gap-2'><span className='text-[#C73F25]'><FaAngleDoubleRight /></span>
                  Flexible delivery model</h3>
                  <p className='text-[18px] py-4'>We adapt our delivery to the way your work, whether as an external provider or by providing senior.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-[45%] my-7 w-[100%]'>
              <div>
                <img src='https://demo.casethemes.net/consultio/wp-content/uploads/2020/09/about1-optimize.png'/>
              </div>
            </div>
        </div>
      </section>


      <section className='py-20'>
        <div className='container lg:flex items-center justify-center'>
        <div className='lg:w-[45%] w-[100%]'>
           <h2 className='text-[20px] flex items-center gap-2'>
            <div className='bg-[#D0641A] px-5 h-[4px] w-[10%]'></div>
            Services</h2>
           <h3 className='text-[35px] font-bold py-5'>We position our clients at the forefront of their field by advanced services.</h3>
          </div>
          <div className='lg:w-[45%] w-[100%] text-[25px]'>
             <h4 className='text-[20px]'>We bring more than 20 years’ senior experience forging collaborations across government, private sector and international forums.</h4>

          </div>
        </div>
        <div className='py-10 lg:flex lg:flex-wrap container gap-10'>
          {data.slice(0, 3).map((a)=>(
           <div className='shadow-2xl container relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000 py-14 lg:w-[25%] w-[100%]'>
           <div className='place-items-center text-center lg:w-[70%] mx-auto'>
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
      </section>

     <section className='bg-black'>
        <div className='container py-10'>
          <div>
            <div className='lg:w-[50%] w-[100%] py-10'>
            <div className='flex items-start gap-5 text-white' >
              <div className='bg-[#C73F25] px-4 py-0.5 mt-12'></div>
              <div className='place-items-start justify-center'>
                 <h3 className='text-[40px] font-bold py-5'>We’re a global stakeholder relations and partnership building consultancy.</h3>
              </div>
              </div>
            </div>
          </div>
        <div className='hidden lg:block'>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-white place-items-center w-[100%] text-center py-10'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/testimonial-07.jpg'/>
            <h3 className='py-5 w-[70%]'>We also bring a strong interest in coaching and capability building with an emphasis on emotion</h3>
            <h2 className='text-[25px] font-semibold'>Kathleen Smith</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-white place-items-center w-[100%] text-center py-10'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/testimonial-08.jpg'/>
            <h3 className='py-5 w-[70%]'>I love that moment when we find the connections between organisations and envisage the initiative or platform</h3>
            <h2 className='text-[25px] font-semibold'>Van Hunter</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-white place-items-center w-[100%] text-center py-10'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/testimonial-09.jpg'/>
            <h3 className='py-5 w-[70%]'>He was great in planting the seed and allowing the group to transition into a collaborative discussion pertaining</h3>
            <h2 className='text-[25px] font-semibold'>Macquarie Telecom</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-white place-items-center w-[100%] text-center py-12'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/testimonial-06.jpg'/>
            <h3 className='py-5 w-[70%]'>We also bring a strong interest in coaching and capability building with an emphasis on emotion</h3>
            <h2 className='text-[25px] font-semibold'>Fred L Smith</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
        <div className='lg:hidden block'>
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-white place-items-center w-[100%] text-center py-10'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/testimonial-07.jpg'/>
            <h3 className='py-5 w-[70%]'>We also bring a strong interest in coaching and capability building with an emphasis on emotion</h3>
            <h2 className='text-[25px] font-semibold'>Kathleen Smith</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-white place-items-center w-[100%] text-center py-10'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/testimonial-08.jpg'/>
            <h3 className='py-5 w-[70%]'>I love that moment when we find the connections between organisations and envisage the initiative or platform</h3>
            <h2 className='text-[25px] font-semibold'>Van Hunter</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-white place-items-center w-[100%] text-center py-10'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/testimonial-09.jpg'/>
            <h3 className='py-5 w-[70%]'>He was great in planting the seed and allowing the group to transition into a collaborative discussion pertaining</h3>
            <h2 className='text-[25px] font-semibold'>Macquarie Telecom</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-white place-items-center w-[100%] text-center py-12'>
            <img className='rounded-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/testimonial-06.jpg'/>
            <h3 className='py-5 w-[70%]'>We also bring a strong interest in coaching and capability building with an emphasis on emotion</h3>
            <h2 className='text-[25px] font-semibold'>Fred L Smith</h2>
            <p>Senior Director</p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>

        </div>
     </section>
        <section>
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
      </section>
     </>
  )
}

export default page
