"use client"
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoMdSettings } from "react-icons/io";
import { data } from '@/Data';
import { MdOutlineAddBusiness } from "react-icons/md";
import { GoProjectTemplate } from "react-icons/go";
import { FaChessKnight } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { SiRoamresearch } from "react-icons/si";
import Link from 'next/link';
import { FaAngleDoubleRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";



function page() {
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
   <section className='overflow-x-hidden'>
      <section className='bg-[#F5F3F3]'>
        <Swiper
          spaceBetween={30}
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
            <div className='relative'>
              <img className='w-full h-[700px] object-cover animate-scale' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/bg-slider-01.jpg' />
              <div className='absolute lg:left-[460px] top-48 text-center place-items-center'>
                <img className='' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/slider-logo-01.png' />
                <h2 className='text-white font-bold text-[50px]'>Prosper in this volatile<br/> market funding</h2>
                <h4 className='text-white text-[25px] py-5 font-semibold'>Without consulting, plan stays as plan.</h4>
                <button className='text-white bg-gradient-to-l from-[#D0641A] to to-[#C73F24] px-7 py-4 text-[20px] font-bold flex items-center gap-3 animate-bounce'><span><IoMdSettings />

                </span>
                  View Services
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative'>
              <img className='w-full h-[700px] object-cover animate-scale' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/bg-slider-02.jpg' />
              <div className='absolute left-28 top-48 place-items-start'>
                <img className='' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/slider-logo-01.png' />
                <h2 className='text-white font-bold text-[50px]'>Prosper in this volatile<br/> market funding</h2>
                <h4 className='text-white text-[25px] py-5 font-semibold'>Without consulting, plan stays as plan.</h4>
                <button className='text-white bg-gradient-to-l from-[#D0641A] to to-[#C73F24] px-7 py-4 text-[20px] font-bold flex items-center gap-3 animate-bounce'><span><IoMdSettings />

                </span>
                  View Services
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative'>
              <img className='w-full h-[700px] object-cover animate-scale' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/bg-slider-03.jpg' />
              <div className='absolute right-28 top-48 place-items-end text-right'>
                <img className='' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/slider-logo-01.png' />
                <h2 className='text-white font-bold text-[50px]'>Prosper in this volatile<br/> market funding</h2>
                <h4 className='text-white text-[25px] py-5 font-semibold'>Without consulting, plan stays as plan.</h4>
                <button className='text-white bg-gradient-to-l from-[#D0641A] to to-[#C73F24] px-7 py-4 text-[20px] font-bold flex items-center gap-3 animate-bounce'><span><IoMdSettings />

                </span>
                  View Services
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='lg:flex gap-5 absolute left-48 top-[103px] z-10 hidden'>
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
      <div className='container my-3 lg:flex hidden'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='my-5'>
          <div>
          <div className=''>
            {id1.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
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
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-5'>
          <div className=''>
            {id2.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><GoProjectTemplate />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><GoProjectTemplate />
                </h2>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-5'><div className=''>
            {id3.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><FaChessKnight />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><FaChessKnight />
                </h2>
                </div>
              </div>
            ))}
          </div></SwiperSlide>
        <SwiperSlide className='my-5'>
        <div className=''>
            {id4.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><FaRegChartBar />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><FaRegChartBar />
                </h2>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-5'><div className=''>
            {id5.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><FaEye />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><FaEye />
                </h2>
                </div>
              </div>
            ))}
          </div></SwiperSlide>
        <SwiperSlide className='my-5'><div className=''>
            {id6.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><SiRoamresearch />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><SiRoamresearch />
                </h2>
                </div>
              </div>
            ))}
          </div></SwiperSlide>
        
      </Swiper>
      </div>
      <div className='container my-3 lg:hidden flex '>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='my-5'>
          <div>
          <div className=''>
            {id1.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
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
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-5'>
          <div className=''>
            {id2.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><GoProjectTemplate />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><GoProjectTemplate />
                </h2>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-5'><div className=''>
            {id3.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><FaChessKnight />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><FaChessKnight />
                </h2>
                </div>
              </div>
            ))}
          </div></SwiperSlide>
        <SwiperSlide className='my-5'>
        <div className=''>
            {id4.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><FaRegChartBar />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><FaRegChartBar />
                </h2>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-5'><div className=''>
            {id5.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><FaEye />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><FaEye />
                </h2>
                </div>
              </div>
            ))}
          </div></SwiperSlide>
        <SwiperSlide className='my-5'><div className=''>
            {id6.map((a)=>(
              <div className='shadow-2xl container py-14 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[100px] text-[#D0641A]'><SiRoamresearch />
                </h2>
                <h2 className='text-[25px] font-bold py-3'>{a.category}</h2>
                <h2 className='text-[18px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><SiRoamresearch />
                </h2>
                </div>
              </div>
            ))}
          </div></SwiperSlide>
        
      </Swiper>
      </div>
      <div className='container justify-center place-items-center py-10 font-semibold text-[18px]'>
        <h4>You can also find our <Link href={`/services/`} ><span className='text-[#C73F25] underline'>Consultant Service</span></Link> to contact for the consulting</h4>
      </div>
      </section>  
      <section className='transition-transform translate-x-4'>
        <div className='container py-10 lg:flex justify-between'>
            <div className='lg:w-[45%] gap-5'>
              <div className='flex items-start gap-5'>
              <div className='bg-[#C73F25] px-4 py-0.5 mt-12'></div>
              <div className='place-items-start justify-center'>
                 <h3 className='text-[40px] font-bold py-5'>We’re a global stakeholder relations and partnership building consultancy.</h3>
                  <h4 className='text-[20px] py-5'>Collaborate Consulting exists to find the place where to being seemingly disparate interests meet. From that point of the connection, we create platforms.</h4>
              </div>
              </div>



              <div className='lg:flex gap-8'>
                <div className='w-[50%]'>
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
                <div className='w-[50%]'>
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
            <div className='lg:w-[45%] my-7'>
              <div>
                <img src='https://demo.casethemes.net/consultio/wp-content/uploads/2020/09/about1-optimize.png'/>
              </div>
            </div>
        </div>
      </section>
      <section>
        <div className='bg-black relative'>
          <img className='opacity-15 lg:h-[800px] w-[100%] h-[800px] object-cover' src='https://demo.casethemes.net/consultio/wp-content/uploads/2019/11/theme-09.jpg'/>
        <div className='lg:flex py-4 absolute lg:left-36 left-0 top-1 text-white'>
          <div className='lg:flex lg:w-[50%] gap-4'>
             <div className='bg-[#C73F25] px-5 my-6 py-0.5 h-[1px]'></div>
            <p className='text-[35px] font-bold text-white'>We position our clients at the forefront of their field by advancing an agenda.</p>
          </div>
          <div className='w-[40%]'>
            <h4 className='text-[20px] font-bold py-3'>We bring more than 20 years’ senior experience forging collaborations across government, private sector and international forums.</h4>
          </div>
        </div>

        <div className='lg:flex absolute left-20 bottom-10 gap-10 right-20 hidden'>
        <div>
          <div className='bg-white'>
            {id7.map((a)=>(
              <div className='shadow-2xl container py-8 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[60%] mx-auto'>
                <h2 className='text-[80px] text-[#D0641A]'><MdOutlineAddBusiness /></h2>
                <Link href={`/details/${a.id}`}>
                <h2 className='text-[20px] font-bold py-3'>{a.category}</h2></Link>
                <h2 className='text-[15px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><MdOutlineAddBusiness /></h2>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div>
          <div className='bg-white'>
            {id8.map((a)=>(
              <div className='shadow-2xl container py-8 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[60%] mx-auto'>
                <h2 className='text-[80px] text-[#D0641A]'><MdOutlineAddBusiness /></h2>
                <Link href={`/details/${a.id}`}>
                <h2 className='text-[20px] font-bold py-3'>{a.category}</h2></Link>
                <h2 className='text-[15px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><MdOutlineAddBusiness /></h2>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div>
          <div className='bg-white'>
            {id9.map((a)=>(
              <div className='shadow-2xl container py-8 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[70%] mx-auto'>
                <h2 className='text-[80px] text-[#D0641A]'><MdOutlineAddBusiness /></h2>
                <Link href={`/details/${a.id}`}>
                <h2 className='text-[20px] font-bold py-3'>{a.category}</h2></Link>
                <h2 className='text-[15px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><MdOutlineAddBusiness /></h2>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div>
          <div className='bg-white'>
            {id10.map((a)=>(
              <div className='shadow-2xl container py-8 relative overflow-hidden hover:bg-black hover:text-white hover:scale-110 ease-out duration-1000'>
                <div className='place-items-center text-center lg:w-[60%] mx-auto'>
                <h2 className='text-[80px] text-[#D0641A]'><MdOutlineAddBusiness /></h2>
                <Link href={`/details/${a.id}`}>
                <h2 className='text-[20px] font-bold py-3'>{a.category}</h2></Link>
                <h2 className='text-[15px]'>{a.details}</h2>
                </div>
                <div className='absolute -right-10 -bottom-24'>
                <h2 className='text-[250px] text-[#D0641A] opacity-35'><MdOutlineAddBusiness /></h2>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
        </div>

      </section>
    <section>
      <div className='container lg:flex py-20 '>
       <div className='lg:w-[50%]'>
        <div className='flex gap-4'>
        <div className='bg-[#C73F25] px-5 my-6 py-0.5 h-[1px]'></div>
        <p className='text-[35px] font-bold'>We draw on our global network to assemble with the skills of task at hand.</p>
        </div>
          <p className='py-5 text-[20px]'>We have spent 25 years working for one of Australia’s most recognised and successful retailers purpose and inspired culture, where people work cohesively towards shared goals.</p>
          <div >
          <div className='lg:flex gap-20'>
            <div className='lg:w-[50%] place-items-center'>
  {/* Circular Progress */}
  <div className="relative size-40 lg:w-[50%]">
    <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-gray-200" strokeWidth={2} />
      {/* Progress Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-[#C73F25]" strokeWidth={2} strokeDasharray={100} strokeDashoffset={50} strokeLinecap="round" />
    </svg>
    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <span className="text-center text-2xl font-bold">50%</span>
    </div>
   
  </div>
  <div className='place-items-center text-center'>
       <h3 className='text-[22px] font-bold'>Active to work</h3>
       <p>We do not believe in contracts therefore we do not have one. We are fully invested.</p>
    </div>
  </div>
  {/* End Circular Progress */}
  {/* Circular Progress */}
  <div className='lg:w-[50%] place-items-center'>
  <div className="relative size-40 ">
  
    <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-gray-200" strokeWidth={2} />
      {/* Progress Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-[#C73F25]" strokeWidth={2} strokeDasharray={100} strokeDashoffset={25} strokeLinecap="round" />
    </svg>
    {/* Percentage Text */}
    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <span className="text-center text-2xl font-bold">35%</span>
    </div>
    
  </div>
  <div className='place-items-center text-center'>
       <h3 className='text-[22px] font-bold'>Completed work</h3>
       <p>You will be fully satisfied, you are under no obligation to continue with the services I provide.</p>
    </div>
  {/* End Circular Progress */}
</div>
</div>
          </div>
       </div>
       <div className='lg:w-[50%] py-10'>
        <img className='w-full' src='https://demo.casethemes.net/consultio/wp-content/uploads/2020/09/about-02-optimize.png'/>
       </div>
      </div>
    </section>
    <section className='place-items-center'>
      <div className='container lg:flex gap-5 py-20'>
        <div className='lg:w-[50%]'>
          <h2 className='text-[35px] font-bold'>You can learn more from our asked questions</h2>
          
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>

        </div>
        <div className='bg-[#EDEFF1] container mx-auto px-10 py-5 lg:w-[50%]'>
          <h2 className='text-[35px] font-bold'>Get a free quote here</h2>
         <h3 className='text-[20px] py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>
         <input className='lg:px-44 px-10 py-5 text-left' placeholder='Your Name'></input>
         <input className='lg:px-44 px-10 py-5 text-left my-5' placeholder='Your Mail'></input>
         <input className='lg:px-44 px-10 py-5 text-left mb-5' placeholder='Phone'></input>
         <input className='lg:px-44 px-10 py-5 text-left ' placeholder='Subject'></input>
         <button className='bg-gradient-to-l from-[#D0641A] to to-[#C73F24] lg:px-52 px-16 py-4 my-10 text-white flex font-bold items-center'>
          <span className='text-white'><TiTick />
          </span> Consult Today</button>
        </div>
      </div>
    </section>
    </section>
    </>
  )
}

export default page
