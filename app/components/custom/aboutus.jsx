import React from 'react';

export default function AboutUs() {
  const about = [
    {
      title: 'Who we are',
      text: 'A Family owned business, we have been providing quality furnitures since 2014.',
      image: '/images/photo2.jpg',
      align: 'left'
    },
    {
      title: 'One of a kind',
      text: 'Every design is crafted as a single, unique piece, ensuring it is unlike any other.',
      image: '/images/photo3.jpg',
      align: 'right'
    },
    {
      title: 'Premium Quality',
      text: 'Crafted using the finest, market-leading materials for enduring beauty and strength.',
      image: '/images/photo4.jpg',
      align: 'left'
    },
    // {
    //   title: 'Get in touch',
    //   text: 'Lorem ipsum dolor sit amet c',
    //   image: '/images/photo.jpg',
    //   align: 'right'
    // }
  ];

  return (
    <div className="flex flex-col px-10 overflow-clip lg:overflow-none">
      {about.map((item, index) => (

        item.align === 'left' ? (
          // image on right
          <div key={index} className="group flex w-full lg:pl-[300px] lg:-translate-y-2 border-2 border-black">
            <div
              className='px-5 mt-10 w-[400px] h-[200px] flex flex-col items-center text-center justify-center 
              lg:translate-x-72 bg-gray-50 shadow-md group lg:group-hover:translate-x-64 lg:group-hover:shadow-xl transition-all ease-in-out duration-500'
            >
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
            <div
              className='-z-10 w-1/2 lg:group-hover:scale-105 overflow-clip items translate-x-56 transition-all ease-in-out duration-700'
            >
              <img
                className='rounded-none lg:h-[400px]'
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ) : (
          // image on right
          <div key={index} className="group flex w-full lg:translate-y-5 lg:-mt-10 border-pink-500 border-2">
            <div
              className='w-1/2 lg:group-hover:scale-105 lg:overflow-clip items translate-x-56 transition-all ease-in-out duration-700'
            >
              <img
                className='rounded-none lg:h-[400px]'
                src={item.image}
                alt={item.title}
              />
            </div>
            <div
              className='lg:px-5 lg:mt-10 lg:w-[400px] lg:h-[200px] flex flex-col items-center text-center justify-center 
              lg:-translate-x-56 bg-[#ebc384] shadow-md group lg:group-hover:-translate-x-52 group-hover:shadow-xl transition-all ease-in-out duration-500'
            >
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        )
      ))}
    </div>
  );
}
