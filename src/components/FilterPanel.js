import img1 from "../images/switch.svg";
import img2 from "../images/switch (1).svg";
import { useSelector } from "react-redux";

const FilterPanel = () => {
  const products = useSelector((store) => store.products.filteredProducts);

  return (
    <div className="absolute flex items-center w-[1069.52px] h-[62.57px] top-[363.43px] left-[403.88px] bg-[#F6F7F8] font-poppins font-normal text-[16px] leading-[100%] tracking-[0] rounded-[3px]">
      <div className="absolute top-[21.58px] left-[24.73px] ">
        {products.length} Items
      </div>
      <div className="absolute flex items-center align-middle w-[213.72px] h-[41px] top-[11.87px] left-[141.55px] ">
        <label>Sort By</label>
        <select className="absolute w-[142.6px] h-[41px] left-[71.13px] text-center border-2 border-[#f1f3f4] bg-[#f6f7f8] rounded-sm">
          <option>Popularity</option>
          <option>PriceLowToHigh</option>
          <option>PriceHighToLow</option>
          <option>Rating</option>
        </select>
      </div>
      <div className="absolute flex items-center align-middle w-[213.72px] h-[41px] top-[11.87px] left-[418.62px] ">
        <label>Show</label>
        <select className="absolute w-[142.6px] h-[41px] left-[71.13px] text-center border-2 border-[#f1f3f4] bg-[#f6f7f8] rounded-sm">
          <option>12</option>
          <option>10</option>
          <option>6</option>
          <option>4</option>
        </select>
      </div>
      <div className="flex absolute left-[947.82px]">
        <img alt="switch_1" src={img1}/>
        <img alt="switch_2" src={img2}/>
      </div>
    </div>
  );
};

export default FilterPanel;
