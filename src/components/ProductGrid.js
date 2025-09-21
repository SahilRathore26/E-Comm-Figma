import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { filteredProducts, currentPage, productsPerPage } = useSelector((store) => store.products);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="absolute w-[1069px] left-[404.4px] top-[444px] grid grid-cols-3 gap-[45px]">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
