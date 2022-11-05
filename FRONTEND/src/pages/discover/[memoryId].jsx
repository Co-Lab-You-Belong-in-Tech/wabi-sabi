import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import moment from 'moment/moment';
import { BsArrowLeft } from 'react-icons/bs';
import data from '../../components/data/data';
import AppLayout from '../../components/Layouts/AppLayout';

function Memory({ name, date, image, title, prompt, story, id }) {
  const { back } = useRouter();
  return (
    <AppLayout renderNav={false}>
      <section className="bg-[#F7F7F9] md:pt-20">
        <div className="bg-white w-full max-w-[621px] mx-auto h-full min-h-screen">
          <header className="flex items-center justify-between gap-5 pb-2 p-7">
            <button type="button" onClick={back}>
              <BsArrowLeft className="m-2" />
            </button>
            <span>{moment(date).format('ddd ll').toUpperCase()}</span>
            <motion.p className="font-bold" layout="position" layoutId={`memory-name-${id}`}>
              {name}
            </motion.p>
          </header>
          <figure className="grid gap-6">
            <motion.img
              layout
              layoutId={`memory-image-${id}`}
              src={image.src}
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

export function getStaticProps({ params }) {
  const { memoryId } = params;

  const memoryData = data.find((_memory) => _memory.id.toString() === memoryId);

  return {
    props: { ...memoryData },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      ...data.map((_memory) => ({
        params: { memoryId: _memory.id.toString() },
      })),
    ],
    fallback: false,
  };
}
