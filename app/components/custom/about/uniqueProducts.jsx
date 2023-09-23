export default function PremiumQuality({ backgroundPosition }) {
  const { title, subtitle, text, image } = {
    title: 'One of a kind',
    subtitle: 'Unique designs that you will not find anywhere else',
    text: 'Each piece is hand carved by our skilled craftsmen, making each piece truly unique.',
    image: '/images/photo4.jpg',
  };

  return (
    <div className='flex flex-col lg:flex-row w-full h-[450px] justify-center items-center lg:px-20 lg:my-10 overflow-clip -mt-7 lg:mt-0'>
      <div className='hidden lg:block lg:w-1/2 lg:h-full w-full h-1/2 lg:px-0 px-2'>
        <div
          className='h-full justify-center bg-no-repeat lg:bg-center bg-cover scale-y-125 lg:scale-y-100'
          style={{ backgroundImage: `url(${image})`, backgroundPosition }}
        />
      </div>
      <div className='lg:w-1/2 lg:h-full w-full h-1/2 flex flex-col justify-center items-center gap-y-2'>
        <div className='lg:text-5xl text-2xl font-semibold'>{title}</div>
        <div className='lg:flex flex-wrap font-light lg:text-2xl text-center break-words lg:px-0 px-5 hidden'>{subtitle}</div>
        <div className='flex flex-wrap font-extralight lg:text-base text-sm break-words text-center lg:px-0 px-5'>{text}</div>
      </div>
      <div className='lg:hidden lg:w-1/2 lg:h-full w-full h-1/2 lg:px-0 px-2 -mt-5'>
        <div
          className='h-full justify-center bg-no-repeat bg-center bg-cover scale-y-125'
          style={{ backgroundImage: `url(${image})`, backgroundPosition }}
        />
      </div>
    </div>
  );
}
