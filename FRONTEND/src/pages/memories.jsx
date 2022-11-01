import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import data from '../components/data/memories';
import AppLayout from '../components/Layouts/AppLayout'

const length = 20;

export default function Memories() {
  const [showFavorites, setShowFavorites] = useState(false);
  return (
    <AppLayout>
      {/* the mobile header would stay here */}
      <main className="pt-20 bg-[#F7F7F9]">
        <div className="max-w-6xl min-h-screen px-3 pb-4 mx-auto bg-white">
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

          <section>
            {data.map((object) => (
              <div key={object.month}>
                <h2 className="mt-10 mb-5 text-2xl font-bold">{object.month}</h2>
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
