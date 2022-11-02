import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import data from '../components/data/memories';
import AppLayout from '../components/Layouts/AppLayout';
import Profile from '../components/Profile';

const length = 20;

export default function Memories() {
  const [showFavorites, setShowFavorites] = useState(false);
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
            <span className="mr-4 font-bold">{showFavorites ? 'FAVORITES' : 'MEMORIES'}</span>{' '}
            {length}
          </p>
          <Profile />
        </div>

        <div className="w-full max-w-6xl min-h-screen mx-auto">
          <div className="justify-between hidden w-1/2 py-5 pr-10 ml-auto md:flex">
            <p>
              <span className="mr-4 font-bold">{showFavorites ? 'FAVORITES' : 'MEMORIES'}</span>{' '}
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

          <section className='flex flex-col gap-y-10'>
            {data.map((object) => (
              <div key={object.month}>
                <h2 className="mb-5 text-2xl font-bold ">{object.month}</h2>
                <ImageGallery image_array={object.memories} />
              </div>
            ))}
          </section>
        </div>
      </main>
    </AppLayout>
  );
}

function ImageGallery({ image_array }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
      {image_array.map((image) => (
        <ImageCard
          key={image.id}
          image_url={image.image_url}
          favorite={image.favorite}
          id={image.id}
        />
      ))}
    </div>
  );
}

function ImageCard({ image_url, favorite, id }) {
  return (
    <Link href={`memory/${id}`}>
      <div className="relative h-24 md:h-40">
        <Image
          src={image_url}
          objectFit="fill"
          layout="fill"
          alt="test"
          className="w-full rounded-md"
        />
        <div className="absolute top-0 left-0 z-10 p-2">
          {favorite && <BsHeartFill className="text-xl text-red-600" />}
        </div>
      </div>
    </Link>
  );
}
