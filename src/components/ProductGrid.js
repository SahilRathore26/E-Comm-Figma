import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { filteredProducts } = useSelector((store) => store.products);

  return (
    <div className="absolute w-[1069px] left-[404.4px] top-[444px] grid grid-cols-3 gap-[45px]">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
