import HomePageTopAd from "../components/advertise/HomePageTopAd";
import ProductCard from "../components/home/ProductCard";
import Layout from "../components/Layout";


const Home = () => {
  
  const products = [
    {
      id: 1,
      title: "Phone",
      price: "200",
      imageUrl: "/images/phone.jpg",
      details: "fadadfad",
    },
    {
      id: 2,
      title: "Laptop",
      price: "1000",
      imageUrl: "/images/laptop.jpg",
      details: "fadadfad",
    },
  ];
  return (
    <div>
      <Layout>
        <HomePageTopAd />
        <div className="px-[100px] py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                image={product.imageUrl}
                price={product.price}
                title={product.title}
                details={product.details}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
