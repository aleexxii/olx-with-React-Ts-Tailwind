import { Link } from "react-router-dom";
import HomePageTopAd from "../components/advertise/HomePageTopAd";
import ProductCard from "../components/home/ProductCard";
import Layout from "../components/Layout";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/productTypes";

const Home = () => {
  const { products } = useProducts();

  return (
    <div>
      <Layout>
        <HomePageTopAd />
        <div className="px-[100px] py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {products?.map((product: Product) => (
              <Link to={`/product-view/${product.id}`} key={product.id}>
                <ProductCard
                  key={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  description={product.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
