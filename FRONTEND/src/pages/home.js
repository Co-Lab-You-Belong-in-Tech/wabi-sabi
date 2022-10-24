import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import moment from 'moment/moment';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';

// Import Swiper styles
import 'swiper/css';
// import { useSelector } from 'react-redux';
import AppLayout from '../components/Layouts/AppLayout';

const questions = [
  {
    question: 'What’s one thing you are grateful for today?',
    id: 1,
  },
  {
    question: 'What is the highlight of your day?',
    id: 2,
  },
  {
    question: 'What makes you smile today?',
    id: 3,
  },
];

const currentDate = moment().format('ll').split(',').join('');

function LandingPage() {
  const router = useRouter();

  // const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const isLoggedIn = true;
  useEffect(() => {
    if (isLoggedIn === false) {
      router.push('/account/login');
    }
  }, [isLoggedIn, router]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    // 👇️ toggle
    setActiveIndex(id);
  };

  // change the swiper slide centered property when the domwidth changes
  const [domWidth, setDomWidth] = useState(0);
  const pageRef = useRef(null);
  const handleResize = () => {
    setDomWidth(pageRef.current.offsetWidth);
  };
  
  useLayoutEffect(() => {
    handleResize();
  }, []);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppLayout>
      <main className="flex flex-col items-center justify-center w-full h-screen overflow-hidden text-4xl text-center text-white bg-white font-roboto gap-y-16" ref={pageRef}>
        <div className="hidden p-2 px-6 text-2xl text-black bg-white shadow-3xl md:block w-fit rounded-2xl">
          <p className="tracking-[0.02em] leading-5">
            Choose a question to start creating a memory.
          </p>
        </div>
        <div className="mx-16 md:max-w-max">
          <Swiper
            className="mySwiper h-[355px] !overflow-visible"
            slidesPerView="auto"
            spaceBetween={36}
            centeredSlides={domWidth < 900}
          >
            {questions.map((item) => (
              <SwiperSlide
                className="items-center !w-60 rounded-[20px] shadow-3xl h-[355px]"
                key={item.id}
              >
                <Slide
                  question={item.question}
                  handleClick={handleClick}
                  activeIndex={activeIndex}
                  index={item.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </AppLayout>
  );
}

export default LandingPage;

function Slide({
  question, handleClick, activeIndex, index,
}) {
  return (
    <button
      onClick={() => handleClick(index)}
      className={`h-full rounded-[20px] transition-opacity duration-300 ease-out relative p-5 w-60  ${activeIndex === index ? 'bg-home-card opacity-60' : 'bg-home-card'
        }`}
    >
      <strong className="tracking-wide inline-block w-[181px]">
        {question}
      </strong>
      <div className="absolute flex items-center bottom-5 gap-x-4">
        <div className=" bg-white w-[84px] h-1" />
        <div className="text-base tracking-wide uppercase">
          {currentDate}
        </div>
      </div>
    </button>
  );
}
