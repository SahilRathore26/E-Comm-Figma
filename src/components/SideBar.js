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
    </div>
  );
};

export default SideBar;