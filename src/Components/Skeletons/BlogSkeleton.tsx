function BlogSkeleton() {
  return (
    <>
      <div className="flex  w-full">
        <div className="w-full">
          <div
            className="flex gap-3  p-2 
       "
          >
            <div className="w-7 h-7 bg-gray-300 rounded-full dark:bg-gray-500/80 "></div>

            <div className="flex flex-col justify-center">
              <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-400 w-40 mb-2.5"></div>
            </div>
          </div>
          {/* // blog Author and date--end */}

          {/* content of blog -- starts */}
          <div className="flex flex-col gap-3 w-full items-start px-4">
            <div className="w-[90%] h-5 bg-gray-200 rounded-full dark:bg-gray-500"></div>

            <div
              className="flex w-full flex-col
         "
            >
              <div className="h-2.5 w-[90%] bg-gray-300 rounded-full dark:bg-gray-400  mb-2.5"></div>
              <div className="h-2.5 w-[60%] bg-gray-300 rounded-full dark:bg-gray-400  mb-2.5"></div>
              <div className="h-2.5 w-[80%] bg-gray-300 rounded-full dark:bg-gray-400  mb-2.5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSkeleton;
