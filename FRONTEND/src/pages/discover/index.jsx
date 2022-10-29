import React from 'react';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import data from '../../components/data/data';
import AppLayout from '../../components/Layouts/AppLayout';
import DesktopHeader from '../../components/desktopHeader';
import DesktopNavbar from '../../components/DesktopNavbar';
import Profile from '../../components/Profile';

function discoverPage() {
  const { push } = useRouter();
  return (
    <AppLayout>
      <section className="pt-7 pb-28 md:pt-14 grid gap-8 px-5">
        <h2 className="md:text-4xl text-base font-bold text-center tracking-wide px-5 py-2">
          DISCOVER
        </h2>
        <ul className="grid gap-12">
          {data.map((memory) => (
            <article
              onClick={() => push(`/discover/${memory.id}`)}
              key={memory.id}
              className="bg-white drop-shadow-4xl w-full max-w-[625px] m-auto rounded-2xl"
            >
              <header className="px-6 md:px-16 py-5">
                <motion.p
                  layout
                  layoutId={`memory-name-${memory.id}`}
                  className="font-bold"
                >
                  {memory.name}
                </motion.p>
                <p>{memory.date}</p>
              </header>
              <motion.img
                src={memory.image.src}
                layout
                layoutId={`memory-image-${memory.id}`}
                className="w-full aspect-[5/3] object-cover object-center rounded-[15px_15px_0px_0px]"
              />
              <div className="px-5 md:px-9 py-5 grid gap-1.5">
                <motion.h3
                  layout
                  layoutId={`memory-title-${memory.id}`}
                  className="font-medium"
                >
                  {memory.title}
                </motion.h3>
                <motion.p layout layoutId={`memory-story-${memory.id}`}>
                  {memory.story}
                </motion.p>
              </div>
            </article>
          ))}
        </ul>
      </section>
    </AppLayout>
  );
}

export default discoverPage;
