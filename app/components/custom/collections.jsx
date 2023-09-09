export default function Collections({getData}) {
  const data = getData.collections.nodes;
  return (
    <div className="w-full h-fit lg:bg-center lg:mb-28 border-2 border-gray-200">
      <h1 className="text-center">Collections</h1>
      <div className="flex flex-wrap flex-row items-center justify-center">
        {data.map((collection) =>
          collection.title === 'Featured Products' ? (
            <a
              className="group lg:w-1/6 lg:h-full  overflow-hidden flex items-center justify-center rounded-lg bg-black lg:my-3 scale-95"
              href="/collections/"
              alt = "All Collections"
            >
                <div
                className="z-10 absolute bg-gray-100 lg:w-[150px] lg:h-[150px] flex items-center justify-center bg-opacity-90 rounded-lg text-center h-32 w-32"
                >
                <h1> All 
                    Collections</h1>
                </div>

              <img
                src = "/images/allcollections.jpg"
                alt = "All Collections"
                className="z-0 w-48 h-48 lg:w-full lg:h-[700px] object-cover group-hover:scale-110 transition duration-1000 ease-in-out overflow-hidden group-hover:opacity-30 opacity-50 lg:opacity-75"
              />
            </a>
          ) : (
            <a
              className="group lg:w-1/6 lg:h-full  overflow-hidden flex items-center justify-center rounded-lg bg-black lg:my-3 scale-95"
              href={`/collections/${collection.handle}`}
              alt = {collection.title}
            >
                <div
                className="z-10 absolute bg-gray-100 lg:w-[150px] lg:h-[150px] flex items-center justify-center bg-opacity-90 rounded-lg text-center h-32 w-32"
                >
                <h1>{collection.title}</h1>
                </div>

              <img
                src={collection.image.url}
                className="z-0 w-48 h-48 lg:w-full lg:h-[700px] object-cover group-hover:scale-110 transition duration-1000 ease-in-out overflow-hidden group-hover:opacity-30 opacity-50 lg:opacity-75"
              />
            </a>
          ),
        )}
      </div>
    </div>
  );
}
