import HomePageTopAd from "../components/advertise/HomePageTopAd";
import ProductCard from "../components/home/ProductCard";
import Layout from "../components/Layout";
import { useProducts } from "../hooks/useProducts";


const Home = () => {
  
  const { products } = useProducts()

  return (
    <div>
      <Layout>
        <HomePageTopAd />
        <div className="px-[100px] py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
