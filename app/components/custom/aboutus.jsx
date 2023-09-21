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
    className='flex border-2 border-black w-screen lg:h-[550px] gap-x-10'
    >
      <div
      className="w-1/2 border-black border-2 ml-10 h-full"
      >
        
      </div>
      <div
      className="w-1/2 border-black border-2 h-full"
      >
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
