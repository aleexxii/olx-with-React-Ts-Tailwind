import Layout from "../Layout";

const ShimmerUI = () => {
  return (
    <Layout>
    <div className="w-[1280px] mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Shimmer for Image Carousel */}
        <div className="w-full md:w-2/3 bg-black">
          <div className="bg-gray-300 w-full h-[500px] animate-pulse" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>

        {/* Shimmer for Right Side Details */}
        <div className="w-full md:w-1/3 space-y-4">
          {/* Shimmer for Price and Actions */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-start">
              <div className="bg-gray-300 h-8 w-20 animate-pulse rounded-md" />
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
                <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
              </div>
            </div>
            <div className="bg-gray-300 h-6 w-40 mt-2 animate-pulse rounded-md" />
            <div className="flex justify-between items-center">
              <div className="bg-gray-300 h-4 w-40 animate-pulse rounded-md mt-2" />
              <div className="bg-gray-300 h-4 w-20 animate-pulse rounded-md" />
            </div>
          </div>

          {/* Shimmer for Seller Info */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse" />
              <div className="bg-gray-300 h-6 w-24 animate-pulse rounded-md" />
            </div>
          </div>

          {/* Shimmer for Posted In */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="bg-gray-300 h-6 w-40 animate-pulse rounded-md" />
            </div>
            <div>
              <div className="bg-gray-300 h-6 w-80 animate-pulse rounded-md mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ShimmerUI;
