import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import DesktopHeader from '../components/DesktopHeader';

const data = [
  {
    month: '2022 October',
    memories: [
      {
        id: '48b345b4-0fa9-4c60-b7b5-38b738bd41ed',
        prompt: 'Voluptatum sint sed similique.',
        title: 'Eos ullam laborum est.',
        story: 'Sunt veritatis voluptatem. Perspiciatis aut minus. Doloribus veritatis enim.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: true,
        created_at: '2022-10-24T00:00:00.000Z',
      },
      {
        id: '3cddee98-5964-4d09-b738-2a9c4143b014',
        prompt: 'Quas est iusto accusamus.',
        title: 'Nemo id velit consequatur.',
        story: 'Reiciendis rerum numquam. Nulla ad debitis. Dolor ipsa laboriosam.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: false,
        created_at: '2022-10-19T00:00:00.000Z',
      },
      {
        id: '53535fab-7956-4d07-9f73-debd4eb3687b',
        prompt: 'Modi quidem laudantium rerum.',
        title: 'Ab corporis ut ut.',
        story: 'In libero labore. Voluptatum ea vel. Qui rerum aperiam.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: true,
        created_at: '2022-10-19T00:00:00.000Z',
      },
      {
        id: 'efe4c01b-548e-4f18-9fe1-ac7ea548be82',
        prompt: 'Voluptatem eaque fugit aut.',
        title: 'Est numquam magnam nemo.',
        story: 'Veniam et optio. Quia enim sit. Aut vel dicta.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: false,
        created_at: '2022-10-14T00:00:00.000Z',
      },
      {
        id: 'fac21a18-c603-4021-b3ac-88f15db53178',
        prompt: 'Iusto exercitationem quia nobis.',
        title: 'Voluptas vel sint dolorum.',
        story: 'Praesentium nemo ut. Temporibus nam sapiente. Enim praesentium velit.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: true,
        created_at: '2022-10-09T00:00:00.000Z',
      },
      {
        id: 'eec7c1cc-1725-428a-b68a-5abbe848a9bc',
        prompt: 'Iure similique sit exercitationem.',
        title: 'Commodi explicabo sed exercitationem.',
        story: 'Alias omnis qui. Exercitationem voluptatibus ut. Suscipit sint quidem.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: true,
        created_at: '2022-10-08T00:00:00.000Z',
      },
      {
        id: '45c3041f-babc-4763-b904-e6243ba59741',
        prompt: 'Totam quia fugiat eos.',
        title: 'Quis quo voluptas reiciendis.',
        story: 'Deserunt necessitatibus nihil. Maiores architecto fugit. Illo nisi dolorum.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: false,
        created_at: '2022-10-05T00:00:00.000Z',
      },
      {
        id: '48c43349-fb46-4f3b-ba53-06988335b541',
        prompt: 'Suscipit animi sunt quas.',
        title: 'Aliquam deserunt est mollitia.',
        story: 'Est fuga perspiciatis. Quidem voluptatem quia. Amet totam earum.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: false,
        created_at: '2022-10-01T00:00:00.000Z',
      },
    ],
  },
  {
    month: '2022 September',
    memories: [
      {
        id: '2fdf6b97-9a9c-4374-91b9-7f5e8c058e60',
        prompt: 'Quae rerum aut quisquam.',
        title: 'Minima et ut quod.',
        story: 'Aut vitae et. Quidem dolorum neque. Qui dicta quam.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: true,
        created_at: '2022-09-18T00:00:00.000Z',
      },
      {
        id: '37f6e7b9-5f1a-4405-8934-efd5b2fb814c',
        prompt: 'Atque ea dolores explicabo.',
        title: 'Autem sint consequatur excepturi.',
        story: 'Non vel eum. Ut minus aliquid. Quia et est.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: false,
        created_at: '2022-09-15T00:00:00.000Z',
      },
      {
        id: '9f9b6b34-c7b9-468c-bd68-3ee2b2ff9ee9',
        prompt: 'Suscipit expedita eos ipsa.',
        title: 'Et debitis eius ipsa.',
        story: 'Sint vel explicabo. Quod tempore molestiae. Odit consequatur et.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: false,
        created_at: '2022-09-15T00:00:00.000Z',
      },
      {
        id: '98e0d3c9-5d26-40c2-803c-a8507c9c726d',
        prompt: 'Dolores et odio blanditiis.',
        title: 'Eos voluptatem error veniam.',
        story: 'Id non quae. Nisi quisquam molestias. Impedit est laudantium.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: true,
        created_at: '2022-09-13T00:00:00.000Z',
      },
      {
        id: 'ba03e0b4-bc80-4ee4-abce-1219f5e6066c',
        prompt: 'Provident recusandae eum iure.',
        title: 'Minima beatae adipisci nobis.',
        story: 'Odio est animi. Ullam soluta beatae. Suscipit et corrupti.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: true,
        created_at: '2022-09-05T00:00:00.000Z',
      },
    ],
  },
  {
    month: '2022 August',
    memories: [
      {
        id: 'dbc0fac6-f66b-45e9-827c-0380b020c273',
        prompt: 'Officiis fugit blanditiis accusamus.',
        title: 'Optio voluptatem molestiae est.',
        story: 'Itaque architecto magnam. Aut provident inventore. Accusantium veritatis id.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: false,
        created_at: '2022-08-15T00:00:00.000Z',
      },
      {
        id: '8896bcd3-95eb-42ff-841e-9f95f420fb18',
        prompt: 'Ducimus officiis ut occaecati.',
        title: 'Dicta debitis labore nihil.',
        story: 'Alias nisi explicabo. Vitae reprehenderit perspiciatis. Quas tempora quia.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: true,
        created_at: '2022-08-13T00:00:00.000Z',
      },
      {
        id: '6988f997-bf59-467b-b433-1525dc4943aa',
        prompt: 'Voluptatibus qui saepe minima.',
        title: 'Temporibus quibusdam necessitatibus omnis.',
        story: 'Quasi sit ut. Magni doloremque quibusdam. Doloremque quia totam.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: true,
        created_at: '2022-08-11T00:00:00.000Z',
      },
      {
        id: '3e46b5c8-215b-4363-9529-7340b91a7815',
        prompt: 'Eum omnis hic aperiam.',
        title: 'Quas accusamus et accusantium.',
        story: 'Provident perferendis quae. Animi ut alias. Sit nulla ut.',
        image_url: '/assets/test-image.png',
        public: true,
        favorite: true,
        created_at: '2022-08-09T00:00:00.000Z',
      },
      {
        id: '45b8e245-5f57-466b-b535-292f06d5b4e5',
        prompt: 'Aut corrupti culpa sapiente.',
        title: 'Placeat voluptatem deserunt culpa.',
        story: 'Consequatur animi autem. Voluptatem reiciendis dolores. Nobis ad nemo.',
        image_url: '/assets/test-image.png',
        public: false,
        favorite: true,
        created_at: '2022-08-06T00:00:00.000Z',
      },
    ],
  },
];

const length = 20;

export default function Memories() {
  const [showFavorites, setShowFavorites] = useState(false);
  return (
    <>
      <DesktopHeader />
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
    </>
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
