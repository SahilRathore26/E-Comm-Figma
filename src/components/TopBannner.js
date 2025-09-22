import { useSelector } from "react-redux";
import shoe from "../images/TopBanner Shoe.png";

const Topbanner = () => {
  const bgColor = useSelector((store) => store.products.color);

  return (
    <div
      className="absolute flex w-[1069px] h-[350px] left-[404.4px]"
      style={{ backgroundColor: bgColor }}
    >
      <div className=" absolute flex flex-col w-[390.46px] h-[137.46px] top-[141.05px] left-[60.93px] text-[#FFFFFF]">
        <h1 className="font-poppins font-medium text-[30px] leading-[30px] tracking-normal">
          Adidas Men Running Sneakers
        </h1>
        <p className="font-poppins font-normal text-[14px] leading-[14px] tracking-normal mt-2">
          Performance and design. Taken right to the edge.
        </p>
        <p className="absolute bottom-0 w-[81.94px] h-[13.6px] font-poppins font-semibold text-[12px] leading-[12px] tracking-normal underline cursor-pointer">
          Shop Now
        </p>
      </div>
      <div>
        <img
          alt="shoes-picture"
          src={shoe}
          className="absolute w-[442.76px] h-[221.56px] top-[104.55px] left-[602.8px] scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default Topbanner;
