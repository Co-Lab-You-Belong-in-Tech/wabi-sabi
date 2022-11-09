import React from 'react';
import { motion } from 'framer-motion';
import moment from 'moment/moment';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AppLayout from '../../components/Layouts/AppLayout';
import Profile from '../../components/Profile';

export default function DiscoverPage() {
  const { discoveries } = useSelector((state) => state.discover);

  if (discoveries.length === 0) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center h-screen pt-40 gap-y-6">
          <h1 className="text-2xl font-bold">No Memories Shared Yet!</h1>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <main className="grid gap-8 px-5 pt-7 pb-28 md:pt-20">
        <div className="relative grid items-center grid-cols-3 justify-items-center">
          <h1 className="col-start-2 text-lg font-bold tracking-wide md:text-4xl">
            DISCOVER
          </h1>
          <span className="md:hidden justify-self-end">
            <Profile />
          </span>
        </div>

        <section className="grid gap-12">
          {discoveries.map((memory) => (
            <div
              key={memory.id}
              className="bg-white drop-shadow-4xl w-full max-w-[625px] m-auto rounded-2xl"
            >
              <Link href={`/discover/${memory.id}`}>
                <div>
                  <header className="px-6 py-5 md:px-16">
                    <motion.p
                      layout
                      layoutId={`memory-name-${memory.id}`}
                      className="font-bold"
                    >
                      {memory.name}
                    </motion.p>
                    <p>
                      {moment(memory.created_at)
                        .format('MMM D')
                        .split(',')
                        .join('')
                        .toUpperCase()}
                    </p>
                  </header>
                  <motion.img
                    src={memory.image_url}
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
                      {memory.prompt}
                    </motion.h3>
                    <motion.p layout layoutId={`memory-story-${memory.id}`}>
                      {memory.story}
                    </motion.p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </AppLayout>
  );
}
