import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";
import Topbanner from "./TopBannner";

const MainContainer = () => {
  return (
    <div className="absolute w-[1069px]">
      <Topbanner />
      <FilterPanel />
      <ProductGrid />
      <Pagination />
    </div>
  );
};

export default MainContainer;