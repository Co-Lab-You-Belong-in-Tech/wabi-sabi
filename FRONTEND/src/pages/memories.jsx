import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import AppLayout from '../components/Layouts/AppLayout';
import Profile from '../components/Profile';

export default function Memories() {
  const { memories } = useSelector((state) => state.memory);

  const flat_data = memories.map((item) => item.memories).flat();
  const [showFavorites, setShowFavorites] = useState(false);
  const { length } = flat_data.filter((item) => {
    if (showFavorites) {
      return item.favorite;
    }
      return item;
  });

  if (memories.length === 0) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center h-screen pt-40 gap-y-6">
          <h1 className="text-2xl font-bold">No memories found!</h1>
          <Link href="/memory/new">
            <p className="px-4 py-2 text-xl font-medium text-white rounded-md cursor-pointer bg-primary">Let's create some</p>
          </Link>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <main className="grid gap-8 px-3 bg-white pt-7 md:pt-20 pb-28">
        <div className="relative flex items-center justify-between px-2 md:hidden">
          <button type="button" onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? (
              <BsHeartFill className="text-2xl text-red-600 sm:text-3xl" />
            ) : (
              <BsHeart className="text-2xl sm:text-3xl" />
            )}
          </button>
          <p>
            <span className="mr-4 font-bold">{showFavorites ? 'FAVORITES' : 'MEMORIES'}</span>
            {' '}
            {length}
          </p>
          <Profile />
        </div>

        <div className="w-full max-w-6xl min-h-screen mx-auto">
          <div className="justify-between hidden w-1/2 py-5 pr-10 ml-auto md:flex">
            <p>
              <span className="mr-4 font-bold">{showFavorites ? 'FAVORITES' : 'MEMORIES'}</span>
              {' '}
              {length}
            </p>
            <button type="button" onClick={() => setShowFavorites(!showFavorites)}>
              {showFavorites ? (
                <BsHeartFill className="text-2xl text-red-600 sm:text-3xl" />
              ) : (
                <BsHeart className="text-2xl sm:text-3xl" />
              )}
            </button>
          </div>

          <section className="flex flex-col gap-y-10">
            {memories.map((object) => (
              <div key={object.month}>
                <h2 className="mb-5 text-2xl font-bold ">{object.month}</h2>
                <ImageGallery image_array={object.memories} show_favorites={showFavorites} />
              </div>
            ))}
          </section>
        </div>
      </main>
    </AppLayout>
  );
}

function ImageGallery({ image_array, show_favorites }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
      {image_array.map((image) => {
        if (show_favorites) {
          if (image.favorite) {
            return <ImageCard key={image.id} {...image} />;
          }
        } else {
          return <ImageCard key={image.id} {...image} />;
        }
      })}
    </div>
  );
}

function ImageCard({ image_url, favorite, id }) {
  return (
    <Link href={`memory/${id}`}>
      <div className="relative h-24 md:h-40">
        <Image
          src={image_url || '/assets/test-image.png'}
          objectFit="cover"
          layout="fill"
          alt="test"
          className="w-full rounded-md"
          priority
        />
        <div className="absolute top-0 left-0 z-10 p-2">
          {favorite && <BsHeartFill className="text-2xl text-red-600 md:text-4xl" />}
        </div>
      </div>
    </Link>
  );
}
