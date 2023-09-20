// export default function AboutUs() {
//   const text = ""
//   return <div
//   className="flex justify-center"
//   >
//     <div
//     className='flex flex-row w-full lg:mx-16 lg:h-[500px] h-[250px]relative items-center overflow-clip'
//     >
//       <video
//         className="w-full h-full object-cover blur-[7px] scale-105"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/video/hero.mp4" type="video/mp4" />
//       </video>
//       {/* <div
//       className="w-2/3 bg-pink-200 h-full lg:-translate-x-96 -translate-x-11 -skew-x-12"
//       >

//       </div>    */}
//     </div>
//   </div>;
// }


export default function AboutUs() {
  //   const { title, subtitle, buttonText } = hero;
  const title = 'Tradition. Style. Comfort.';
  const subtitle =
    'Introduce culture and tradition to you home with premium hand carved furniture from Nepal.';
  const buttonText = 'Shop Now';

  return (
    <div
      className="flex items-center justify-center lg:h-[720px] h-[500px] w-full bg-black bg-opacity-70 overflow-clip">
      <div className="lg:pt-5 container flex flex-col absolute text-white justify-center items-center bg-blend-color-dodge gap-y-5">
        <div
          className="lg:text-5xl text-2xl font-semibold"
        >{title}
        </div>
        <div
          className="flex flex-wrap lg:text-2xl text-center break-words lg:px-0 px-10 font-poppins"
        >
          {subtitle}
        </div>
        <button
          className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)]  
          px-[35px] py-[9px] text-xl rounded-md backdrop-blur-md transition mt-5"
          onClick={() => window.location.href="/collections/"}
        >
          {buttonText}
        </button>
      </div>
      <video
        className="-z-10 w-full h-full object-cover blur-[7px] scale-105"
        autoPlay
        loop
        muted
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
