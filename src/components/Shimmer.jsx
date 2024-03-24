
const shimmer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-6 border border-gray-200 rounded-lg shadow-md animate-pulse">
        {/* Card Profile */}
        <div className="flex items-center mb-6">
          {/* Profile Image */}
          <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
          {/* Profile Details */}
          <div>
            <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
            <div className="h-2 bg-gray-300 rounded w-32"></div>
          </div>
        </div>

        {/* Shimmer lines */}
        <div className="h-px bg-gray-300 mb-4"></div>
        <div className="h-px bg-gray-300 mb-6"></div>

        {/* Card Content */}
        <div>
          {/* Content Title */}
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 w-32"></div>
          {/* Content Description */}
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          {/* Additional Content Details */}
          <div className="flex">
            {/* Left Detail */}
            <div className="flex-1 mr-2">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 w-20"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            </div>
            {/* Right Detail */}
            <div className="flex-1 ml-2">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 w-20"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            </div>
          </div>
        </div>

        {/* Shimmer lines */}
        <div className="h-px bg-gray-300 mt-6 mb-4"></div>
        <div className="h-px bg-gray-300 mb-6"></div>

        {/* Button */}
        <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
          {/* Button Text */}
          <span className="h-6 w-20 bg-gray-300 rounded-full"></span>
        </button>
      </div>
    </div>
  );
}

export default shimmer