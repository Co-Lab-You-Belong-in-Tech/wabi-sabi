import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import data from '../../components/data/data';
import AppLayout from '../../components/Layouts/AppLayout';

export default function DiscoverPage() {
  return (
    <AppLayout>
      <main className="grid gap-8 px-5 pt-7 pb-28 md:pt-14">
        <h2 className="px-5 py-2 text-base font-bold tracking-wide text-center md:text-4xl">
          DISCOVER
        </h2>
        <section className="grid gap-12">
          {data.map((memory) => (
            <div
              key={memory.id}
              className="bg-white drop-shadow-4xl w-full max-w-[625px] m-auto rounded-2xl"
            >
              <Link href={`/discover/${memory.id}`}>
                <header className="px-6 py-5 md:px-16">
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
              </Link>
            </div>
          ))}
        </section>
      </main>
    </AppLayout>
  );
}
