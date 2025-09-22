import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../utils/productsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, productsPerPage, filteredProducts } = useSelector(
    (store) => store.products
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="absolute w-[1070px] h-[68.94px] top-[1316px] left-[403.4px] bg-[#f7f7f9] flex justify-center items-center rounded-[3px]">
      <div className="flex">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`w-[69.41px] h-[68.56px]
              font-poppins font-medium text-[20px] leading-[100%] tracking-[0]
              ${
                currentPage === page
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-[#f7f7f9] text-black hover:bg-gray-200"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
