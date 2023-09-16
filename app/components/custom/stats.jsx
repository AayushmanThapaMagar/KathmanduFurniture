import {BiHappy} from 'react-icons/bi';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {BsGlobeAmericas, BsTruck} from 'react-icons/bs';
import {LuTruck} from 'react-icons/lu';

export default function Stats() {
  const stats = [
    {
      title: 'Wordwide Shipping',
      icon: <BsGlobeAmericas className="lg:w-10 lg:h-10 w-6 h-6" />,
    },

    {
      title: '100+ Satisfied Customers',
      icon: <BiHappy className="lg:w-10 lg:h-10 w-6 h-6" />,
    },

    {
      title: '250+ Deliveries',
      icon: <LuTruck className="lg:w-10 lg:h-10 w-6 h-6" />,
    },

    {
      title: '24/7 Customer Support',
      icon: <RiCustomerService2Fill className="lg:w-10 lg:h-10 w-6 h-6" />,
    },
  ];

  return (
    <div className="flex justify-center">
      {/* <div className="flex flex-row w-full lg:mx-10 h-28 bg-[#2596be] relative rounded-lg items-center lg:px-20 text-gray-100"> */}
      <div className='flex flex-row w-full lg:mx-10 h-28 bg-[#0D0606] relative rounded-lg items-center lg:px-20 text-[#f8f8f6]' >
        {stats.map((stat) => (
          <div className="group flex flex-col lg:w-20 lg:h-20 w-10 h-20 text-center flex-grow gap-y-2 border-2 border-[#0D0606]">
            <div className="flex-shrink-0 place-self-center group-hover:scale-110 transition duration-500 ease-in-out">
              {stat.icon}
            </div>
            <div className="lg:text-xl lg:font-bold text-xs font-normal">
              {stat.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
