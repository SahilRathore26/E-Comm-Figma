import logo from "../images/logo.svg";
import cart from "../images/Cart.svg";

const Header = () => {
  return (
    <div className="relative w-full h-[71px]">
      <div className="absolute top-[13.27px] left-[27.4px] w-[182px] h-[44px] flex items-center">
        <div className="absolute top-[0px] left-[0px] bg-[#40BFFF] w-[51px] h-[44px] rounded-[16px] flex items-center justify-center">
          <img
            alt="logo"
            src={logo}
            className="relative w-[19.56px] h-[22.67px]"
          />
        </div>
        <h1 className="absolute top-[4px] left-[58px] w-[124px] h-[33px] font-poppins font-bold text-[24px]">
          E-Comm
        </h1>
      </div>
      <div className="absolute flex justify-between w-[804px] h-[40px] top-[17.27px] left-[407.4px] font-poppins text-[20px] items-center leading-[100%]">
        <h1>HOME</h1>
        <h1>BAG</h1>
        <h1>SNEAKERS</h1>
        <h1>BELT</h1>
        <div className="flex items-center">
          <h1>CONTACT</h1>
          <span className="inline-block w-[50px]"></span>
        </div>
      </div>

      <div className="absolute w-[22.45px] h-[18.7px] top-[29.61px] left-[1301.4px]">
        <img alt="cart" src={cart} />
      </div>

      <div className="absolute flex w-[123.86px] h-[35.15px] top-[26.27px] left-[1346.4px] text-center">
        <p className="w-[58.97px] h-[35.15px] font-poppins text-[20px] font-normal leading-[100%] text-[#262626]">
          Items
        </p>
        <p className="w-[57.86px] h-[35.15px] opacity-50 font-poppins leading-[100%] text-[20px]">
          $0.00
        </p>
      </div>
      <div className="absolute w-[1499.39px] h-[4.53px] top-[66.75px] left-[0.4px] bg-[#FAFAFB]"></div>
    </div>
  );
};

export default Header;
