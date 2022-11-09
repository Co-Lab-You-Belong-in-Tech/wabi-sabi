import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import moment from 'moment/moment';
import { BsArrowLeft } from 'react-icons/bs';
// import data from '../../components/data/data';
import { useSelector } from 'react-redux';
import AppLayout from '../../components/Layouts/AppLayout';

function Memory() {
  const {
    query: { memoryId },
    back,
  } = useRouter();
  const { discoveries } = useSelector((state) => state.discover);
  const { memory, name } = discoveries.find(
    (data) => data.memory.id === memoryId
  );
  const { created_at, image_url, title, prompt, story, id } = memory;

  // const name = useSelector((state) => state.account.name);

  return (
    <AppLayout renderNav={false}>
      <section className="bg-[#F7F7F9] md:pt-20">
        <div className="bg-white w-full max-w-[621px] mx-auto h-full min-h-screen">
          <header className="flex items-center justify-between gap-5 pb-2 p-7">
            <button type="button" onClick={back}>
              <BsArrowLeft className="m-2" />
            </button>
            <span>{moment(created_at).format('ddd ll').toUpperCase()}</span>
            <motion.p
              className="font-bold"
              layout="position"
              layoutId={`memory-name-${id}`}
            >
              {name}
            </motion.p>
          </header>
          <figure className="grid gap-6">
            <motion.img
              layout
              layoutId={`memory-image-${id}`}
              src={image_url}
              alt={title}
              className="w-full aspect-[5/3] object-cover object-center rounded-[15px_15px_0px_0px"
            />
            <figcaption className="w-full mb-5 text-4xl font-bold text-center">
              {title}
            </figcaption>
          </figure>
          <section className="max-w-[492px] w-full mx-auto px-7 grid gap-5">
            <motion.h3
              layout
              layoutId={`memory-title-${id}`}
              className="py-2 font-semibold text-center bg-white rounded-2xl shadow-3xl"
            >
              {prompt}
            </motion.h3>
            <motion.p layout layoutId={`memory-story-${id}`}>
              {story}
            </motion.p>
          </section>
        </div>
      </section>
    </AppLayout>
  );
}
// memory.getInitialProps = ({ query }) => {};

export default Memory;
