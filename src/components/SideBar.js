import Brand from "./Brand";
import Color from "./Color";
import HotDeals from "./HotDeals";
import Prices from "./Prices";

const SideBar = () => {
  return (
    <div className="absolute w-[355px]">
      <HotDeals />
      <Prices />
      <Color />
      <Brand />
      <div className="absolute w-[347.84px] h-[69.29px] top-[1316.71px] left-[27.17px] bg-[#f6f7f8]">
        <p className="font-poppins font-medium text-[20px] leading-[100%] tracking-[0]">More</p>
      </div>
    </div>
  );
};

export default SideBar;