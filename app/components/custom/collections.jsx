export default function Collections({getData}) {
  const data = getData.collections.nodes;
  return (
    <div className="w-full h-[550px] lg:bg-center lg:mb-28">
      <h1 className="text-center">Collections</h1>
      <div className="flex items-center justify-center h-full gap-x-5">
        {data.map((collection) =>
          collection.title === 'Featured Products' ? (
            <a
              className="group lg:w-1/6 lg:h-full  overflow-hidden flex items-center justify-center rounded-lg bg-black"
              href="/collections/"
              alt = "All Collections"
            >
                <div
                className="z-10 absolute bg-gray-100 lg:w-[150px] lg:h-[150px] flex items-center justify-center bg-opacity-90 rounded-lg"
                >
                <h1> All 
                    Collections</h1>
                </div>

              <img
                
                className="z-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000 ease-in-out overflow-hidden group-hover:opacity-40"
              />
            </a>
          ) : (
            <a
              className="group lg:w-1/6 lg:h-full  overflow-hidden flex items-center justify-center rounded-lg bg-black"
              href={`/collections/${collection.handle}`}
              alt = {collection.title}
            >
                <div
                className="z-10 absolute bg-gray-100 lg:w-[150px] lg:h-[150px] flex items-center justify-center bg-opacity-90 rounded-lg"
                >
                <h1>{collection.title}</h1>
                </div>

              <img
                src={collection.image.url}
                className="z-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000 ease-in-out overflow-hidden group-hover:opacity-40"
              />
            </a>
          ),
        )}
      </div>
    </div>
  );
}
