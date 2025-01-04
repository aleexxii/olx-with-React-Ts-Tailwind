import { Heart, Share2 } from 'lucide-react';

const ProductView = () => {
  return (
    <div className="w-[1280px] mx-auto p-4">
    <div className="flex flex-col md:flex-row gap-4">
      {/* Image Carousel */}
      <div className="w-full md:w-2/3 bg-black">
        <div className="relative">
          <img 
            src="/api/placeholder/1200/800" 
            alt="Drone" 
            className="w-full h-[500px] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full"/>
            <div className="w-2 h-2 bg-gray-400 rounded-full"/>
            <div className="w-2 h-2 bg-gray-400 rounded-full"/>
          </div>
        </div>
      </div>

      {/* Right Side Details */}
      <div className="w-full md:w-1/3 space-y-4">
        {/* Price and Actions */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">₹ 13,000</h1>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Share2 className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>
          <h2 className="text-xl mt-2">WEDDING HD DRONE CAMERA WITH REMOT CONTROL...UZA</h2>
          <p className="text-gray-600 text-sm mt-2">Mughical, Tirur, Kerala</p>
          <p className="text-gray-500 text-sm">Posted Today</p>
        </div>

        {/* Seller Info */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-4">
            <img 
              src="/api/placeholder/48/48" 
              alt="Profile" 
              className="w-12 h-12 rounded-full"
            />
            <span className="text-lg font-semibold">KRISHNA</span>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-4">
            <img 
              src="/api/placeholder/48/48" 
              alt="Profile" 
              className="w-12 h-12 rounded-full"
            />
            <span className="text-lg font-semibold">Posted In</span>
          </div>
        </div>


      </div>
    </div>
  </div>
);

}

export default ProductView