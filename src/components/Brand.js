import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../utils/productsSlice";

const Brand = () => {
  const dispatch = useDispatch();
  const [openCategory, setOpenCategory] = useState(null);
  const { allProducts } = useSelector((store) => store.products);

  const categories = ["Nike", "Adidas", "Vans", "All Stars"];

  const handleClick = (cat) => {
    const newCategory = openCategory === cat ? null : cat;
    setOpenCategory(newCategory);
    dispatch(setCategory(newCategory));
  };

  const getCategoryCount = (cat) => {
    return allProducts.filter((p) => p.category === cat).length;
  };
  return (
    <div className="absolute w-[347.94px] h-[303.15px] top-[976.69px] left-[22.02px] bg-[#F6F7F8] rounded-[3px]">
      <div className="absolute h-[33.41px] top-[23.51px] left-[25.77px] flex items-center">
        <h1 className="font-poppins font-medium text-[20px] leading-[100%] tracking-[0]">
          BRAND
        </h1>
      </div>

      <div
        className="absolute w-[302.97px] h-[183.12px] top-[87.85px] left-[25.77px]
      flex flex-col space-y-[24.74px]"
      >
        {categories.map((cat) => (
          <div
            key={cat}
            className="h-[27.22px] flex justify-between items-center"
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

export default Brand;
