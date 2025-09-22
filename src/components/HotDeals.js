import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../utils/productsSlice";

const HotDeals = () => {
  const dispatch = useDispatch();
  const [openCategory, setOpenCategory] = useState(null);
  const { allProducts } = useSelector((store) => store.products);

  const categories = [
    "Nike",
    "Adidas",
    "Vans",
    "All Stars",
    "Campus",
    "Redtape",
    "Puma",
  ];

  const handleClick = (cat) => {
    const newCategory = openCategory === cat ? null : cat;
    setOpenCategory(newCategory);
    dispatch(setCategory(newCategory));
  };

  const getCategoryCount = (cat) => {
    return allProducts.filter((p) => p.category === cat).length;
  };
  return (
    <div className="absolute w-[349.23px] h-[548.57px] left-[27.17px] bg-[#F6F7F8] rounded-[3px]">
      <div className="absolute w-[111.24px] h-[39.92px] top-[28.1px] left-[25.87px] flex items-center">
        <h1 className="font-poppins font-medium text-[20px] leading-[20px] tracking-normal">
          Hot Deals
        </h1>
      </div>

      <div
        className="absolute w-[304.11px] h-[405.14px] top-[104.99px] left-[25.87px]
      flex flex-col space-y-[29.57px]"
      >
        {categories.map((cat) => (
          <div
            key={cat}
            className="h-[32.53px] bottom-[29.57px] flex justify-between items-center"
            onClick={() => handleClick(cat)}
          >
            <h2
              className={`font-poppins font-normal text-[18px] leading-[18px] tracking-normal cursor-pointer ${
                openCategory === cat ? "text-blue-500" : "text-black"
              }`}
            >
              {cat}
            </h2>
            <span className="font-poppins font-normal text-[18px] leading-[100%] tracking-[0px] text-gray-400 mr-2">
              {getCategoryCount(cat)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
