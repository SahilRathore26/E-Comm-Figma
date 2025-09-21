import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="absolute w-[1499.39px] h-[45px] left-[0.4px] bg-[#FAFAFB]">
      <div className="absolute flex items-center gap-3 top-[17.27px] left-[85.4px]">
        <div className="bg-[#40BFFF] w-[51px] h-[44px] rounded-[16px] flex items-center justify-center">
          <img
            alt="logo"
            src={logo}
            className="w-[19.56px] h-[22.67px]"
          />
        </div>
        <h1 className="w-[124px] h-[33px] font-poppins font-bold text-[24px] leading-[24px]">
          E-Comm
        </h1>
      </div>
      <div className="absolute flex justify-between w-[804px] h-[40px] top-[17.27px] left-[407.4px] font-poppins text-[16px] font-medium">
        <div>Home</div>
        <div>Bag</div>
        <div>Sneaker</div>
        <div>Belt</div>
        <div>Contact</div>
      </div>
      <div className="absolute flex items-center gap-2 top-[17.27px] right-[85.4px]">
        <img
          src="/icons/cart.svg"
          alt="Cart"
          className="w-6 h-6"
        />
        <div className="font-poppins text-[16px]">Cart</div>
      </div>
    </div>
  );
};

export default Header;
