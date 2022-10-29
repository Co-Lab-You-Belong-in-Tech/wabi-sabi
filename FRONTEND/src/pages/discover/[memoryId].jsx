import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import data from '../../components/data/data';
import { BsArrowLeft } from 'react-icons/bs';
import AppLayout from '../../components/Layouts/AppLayout';
import DesktopHeader from '../../components/desktopHeader';
import DesktopNavbar from '../../components/DesktopNavbar';
import Profile from '../../components/Profile';

function memory({ name, date, image, title, caption, story, id }) {
  const { back } = useRouter();
  return (
    <AppLayout>
      <section className="bg-[#F7F7F9]">
        <div className="bg-white w-full max-w-[621px] mx-auto h-full min-h-screen">
          <header className="flex p-7 pb-2 gap-5 justify-between items-center">
            <div onClick={back}>
              <BsArrowLeft className="m-2" />
            </div>
            <span>{date}</span>
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
              src={image.src}
              alt={caption}
              className="w-full aspect-[5/3] object-cover object-center rounded-[15px_15px_0px_0px"
            />
            <figcaption className="w-full text-center text-4xl font-bold mb-5">
              {caption}
            </figcaption>
          </figure>
          <section className="max-w-[492px] w-full mx-auto px-7 grid gap-5">
            <motion.h3
              layout
              layoutId={`memory-title-${id}`}
              className="rounded-2xl shadow-3xl bg-white py-2 text-center"
            >
              {title}
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

export default memory;

export function getStaticProps({ query, params }) {
  const { memoryId } = params;

  const memoryData = data.find((_memory) => _memory.id == memoryId);

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
