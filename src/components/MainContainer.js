import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";
import Topbanner from "./TopBannner";

const MainContainer = () => {
  return (
    <div className="absolute w-[1069px]">
      <Topbanner />
      <FilterPanel />
      <ProductGrid />
    </div>
  );
};

export default MainContainer;