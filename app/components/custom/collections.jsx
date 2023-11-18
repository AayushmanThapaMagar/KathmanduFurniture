export default function Collections({getData}) {
  const data = getData.collections.nodes;
  return (
    <div className="w-full h-fit lg:bg-center lg:mb-28">
      <h1 className="text-center">Collections</h1>
      <div className="text-center mb-5">View the Collections</div>
      <div className="flex flex-wrap flex-row items-center justify-center">
        {data.map((collection) =>
          collection.title === 'Special offers' ? (
            <a
              className="group lg:w-1/6 lg:h-full overflow-hidden flex items-center justify-center rounded-lg bg-black lg:my-3 scale-95 m-1 lg:hover:w-1/4 transition-all ease-in-out duration-300 delay-700"
              href="/collections/"
              alt="All Collections"
            >
              <div className="z-10 absolute bg-gray-100 lg:w-[150px] lg:h-[150px] flex items-center justify-center bg-opacity-85 rounded-lg text-center h-32 w-32">
                <h1> View All</h1>
              </div>

              <img
                src="/images/allcollections.jpg"
                alt="All Collections"
                className="z-0 w-40 h-40 lg:w-full lg:h-[700px] object-cover group-hover:scale-110 transition duration-1000 ease-in-out overflow-hidden group-hover:opacity-80 opacity-50"
              />
            </a>
          ) : (
            <a
              className="group lg:w-1/6 lg:h-full  overflow-clip flex items-center justify-center rounded-lg bg-black lg:my-3 scale-95 m-1 lg:hover:w-1/4 transition-all ease-in-out duration-300 delay-700"
              href={`/collections/${collection.handle}`}
              alt={collection.title}
            >
              <div className="z-10 absolute bg-gray-100 lg:w-[150px] lg:h-[150px] flex items-center justify-center bg-opacity-85 rounded-lg text-center h-32 w-32">
                <h1>{collection.title}</h1>
              </div>

              <img
                src={collection.image.url}
                className="z-0 w-40 h-40 lg:w-full lg:h-[700px] object-cover group-hover:scale-110 transition duration-1000 ease-in-out overflow-hidden group-hover:opacity-80 opacity-50"
              />
            </a>
          ),
        )}
      </div>
    </div>
  );
}
