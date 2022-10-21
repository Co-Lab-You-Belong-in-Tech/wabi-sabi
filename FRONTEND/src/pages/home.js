/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-duplicates
import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useRouter } from 'next/router';

// Import Swiper styles
import 'swiper/css';
import { useSelector } from 'react-redux';
import AppLayout from '../components/Layouts/AppLayout';
import AuthLayout from '../components/Layouts/AuthLayout';

const Questions = [
  'What’s one thing you are grateful for today?',
  'What is the highlight of your day?',
  'What makes you smile today?',
];

const today = new Date();
const options = {
  month: 'short',
};
const month = today.toLocaleString('en-GB', options).toUpperCase();

const day = today.getDate();

const year = today.getFullYear();

const currentDate = `${month} ${day} ${year}`;

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  700: {
    slidesPerView: 3,
  },
  1000: {
    enabled: false,
  },
};

const LandingPage = () => {
  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

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

  return (
    <AuthLayout>
      <AppLayout>
        {/* <Header /> */}

        <main className="bg-white w-full h-[823px] overflow-hidden text-center text-[25px] text-white font-roboto">
          <div className="shadow-3xl hidden md:block text-2xl p-2 pl-6 pr-6 bg-white w-fit rounded-[15px] text-black m-auto mt-[102px] mb-0">
            <p className="tracking-[0.02em] leading-5 mx-3">
              Choose a question to start creating a memory.
            </p>
          </div>
          <Swiper
            className="mySwiper absolute mr-5 top-[100px] h-[355px] m-auto !pr-[40vw] items-center !overflow-visible"
            slidesPerView="auto"
            spaceBetween={36}
            centeredSlides
            breakpoints={breakpoints}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {Questions.map((question, index) => (
              <SwiperSlide
                className="absolute top-[0px] items-center left-[0px] !w-[242px] rounded-[20px] shadow-3xl  h-[355px]"
                key={index}
              >
                <Slide
                  question={question}
                  handleClick={handleClick}
                  activeIndex={activeIndex}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </AppLayout>
    </AuthLayout>
  );
};

export default LandingPage;

function Slide({ question, handleClick, activeIndex, index }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => handleClick(index)}
      className={`w-full h-full rounded-[20px] transition-opacity duration-300 ease-out ${
        activeIndex === index ? 'bg-home-card opacity-60' : 'bg-home-card'
      }`}
    >
      <strong className="absolute top-[112px] left-[33px] tracking-[0.02em] inline-block w-[181px] h-[116px]">
        {question}
      </strong>{' '}
      <div className="absolute top-[303.5px] left-[19.5px] border-t-[3px_solid_#dbdadb] bg-green-100 box-border w-[84px] h-[3px]" />
      <div className="absolute top-[300px] left-[111px] text-[12px] tracking-[0.02em] inline-block w-[73px] h-[12px]">
        {currentDate}
      </div>
    </div>
  );
}
