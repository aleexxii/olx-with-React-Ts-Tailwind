import { Heart, Share2 } from "lucide-react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import Layout from "../components/Layout";
import ShimmerUI from "../components/productView/ShimmerUI";

const ProductView = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id!);

  if (loading) {
    return <ShimmerUI />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  if (!product) {
    return <h1>Prodict not found...</h1>;
  }
  return (
    <Layout>
      <div className="w-[1280px] mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/*  Carousel */}
          <div className="w-full md:w-2/3 bg-black">
            <div>
              <img
                src={product.image}
                alt={product.image}
                className="w-full h-[500px] object-contain"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/3 space-y-4">
            {/* Price */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold">₹ {product.price}</h1>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Share2 className="w-6 h-6" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <h2 className="text-xl mt-2">{product.title}</h2>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm mt-2">
                  Mughical, Tirur, Kerala
                </span>
                <span className="text-gray-500 text-sm">Today</span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://statics.olx.in/external/base/img/avatar_2.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-lg font-semibold">KRISHNA</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold">Posted In</span>
              </div>
              <div>
                <h1>Mughical, Tirur, Kerala</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductView;
