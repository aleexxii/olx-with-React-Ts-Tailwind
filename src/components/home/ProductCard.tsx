
interface ProductCardProps {
    image : string;
    price : string;
    title : string;
    details ?: string
}

const ProductCard : React.FC<ProductCardProps> = ({image, price, title, details}) => {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <div className="h-40 bg-violet-400 flex items-center justify-center">
        <img
          src={image}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 mt-2 flex flex-col justify-between">
        <p className="text-lg font-semibold mt-1">₹ {price}</p>
        <p className="text-sm ">{details}</p>
        <h2 className="text-gray-700">{title}</h2>
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>📍 Location</span>
          <span>📅 Date</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard