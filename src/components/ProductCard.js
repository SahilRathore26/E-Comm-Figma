import image from "../images/product_img_1.png";

const ProductCard = ({ product }) => {
  return (
    <div className="relative w-[328px] h-[389px] border border-[#f6f7f8] shadow-sm bg-white rounded-[3px]">
      <img
        src={image}
        alt={product.name}
        className="w-full h-[270.83px] object-cover rounded-[5px]"
      />

      {product.isHot && (
        <div className="absolute top-0 left-0 w-[69.74px] h-[34.7px] bg-[#ff4858] flex items-center justify-center rounded-[3px]">
          <h1 className="text-white font-proxima font-normal text-[18px] leading-[100%] tracking-[0%]">
            Hot
          </h1>
        </div>
      )}

      <div className="flex flex-col items-center mt-[15.51px]">
        <h2 className="w-[239.01px] h-[28.39px] text-center font-poppins font-bold text-[18px] leading-[27px] tracking-[0.5px] text-[#223263]">
          {product.name}
        </h2>
        <p className="text-sm text-yellow-500 mt-[3px]">
          ⭐ {product.ratingValue} ({product.ratingCount})
        </p>
        <div className="flex items-center justify-center mt-2 space-x-4">
          <p className="font-poppins font-bold text-[18px] leading-[180%] tracking-[0.5px] text-[#40BFFF]">
            ₹{product.discountPrice}
          </p>
          <div className="flex items-center space-x-1">
            <p className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0.5px] line-through text-[#9098B1]">
              ₹{product.price}
            </p>
            <p className="font-poppins font-bold text-[14px] leading-[150%] tracking-[0.5px] text-[#fb7181]">
              {product.discountPercent}% Off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
