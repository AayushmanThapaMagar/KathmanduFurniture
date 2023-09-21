export default function AboutUs() {
  const about = [
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
  ];

  return (
    <div
      className='flex border-2 border-black w-screen lg:h-[720px] gap-x-10 my-10 px-20'
    >
      <div
        className="w-1/2 border-black border-2 ml-10 h-full"
      >

      </div>
      <div
        className="flex w-1/2 border-black border-2 h-full overflow-clip"
      >
        <div
          className="w-1/2 h-full"
        >
          <img
            className="h-full w-full object-cover object-left p-16 -pl-16"
            src="/images/photo4.jpg"
          />
        </div>
        <div
          className="w-1/2 h-full border-pink-600 border-2"
        >
          <img
            className="h-full w-full object-cover object-right p-16"
            src="/images/photo3.jpg"
          />
        </div>
      </div>
    </div>
  );
}
