import logo from "../images/logo.svg";
import bottom_logo from "../images/BOTTOM.svg";

const Footer = () => {
  return (
    <div className="absolute w-[1499px] h-[626.94px] left-[-1.6px] bg-[#BCDDFE] font-poppins">
      <div>
        <div>
          <div className="absolute flex items-center">
            <div className="absolute top-[106.18px] left-[152.06px] bg-[#40BFFF] w-[38.97px] h-[35.93px] rounded-[16px] flex items-center justify-center">
              <img
                alt="logo"
                src={logo}
                className="relative w-[19.56px] h-[22.67px]"
              />
            </div>
            <h1 className="absolute w-[83.94px] h-[24.87px] top-[110.78px] left-[199.74px]  font-bold text-[18px] leading-[100%] flex items-center">
              E-Comm
            </h1>
          </div>
          <p className="absolute w-[220.95px] h-[69.09px] top-[156.84px] left-[153.66px] font-normal text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div>
          <h1 className="absolute w-[83.94px] h-[24.87px] top-[110.78px] left-[664.57px] font-bold text-[18px] leading-[100%] flex items-center">
            Follow Us
          </h1>
          <p className="absolute w-[220.95px] h-[69.09px] top-[156.84px] left-[664.57px] font-normal text-[12px]">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
        </div>
        <div>
          <h1 className="absolute w-[83.94px] h-[24.87px] top-[110.78px] left-[1069.77px] font-bold text-[18px] leading-[100%] flex items-center">
            Contact Us
          </h1>
          <p className="absolute w-[148.01px] h-[100.65px] top-[156.84px] left-[1069.77px] font-normal text-[14px]">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>
      </div>
      <div className="absolute flex justify-between w-[1200.09px] h-[134.87px] top-[295.41px] left-[153.66px]">
        <div className="w-[151.9px] h-[129.86px]">
          <h1 className="font-normal text-[18px] leading-[100%]">
            Information
          </h1>
          <p className="mt-[27.62px] w-[151.9px] h-[77.38px] font-normal text-[14px]">
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>
        <div className="w-[151.9px] h-[129.86px]">
          <h1 className="font-normal text-[18px] leading-[100%]">Service</h1>
          <p className="mt-[27.62px] w-[151.9px] h-[77.38px] font-normal text-[14px]">
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>
        <div className="w-[151.9px] h-[129.86px]">
          <h1 className="font-normal text-[18px] leading-[100%]">My Account</h1>
          <p className="mt-[27.62px] w-[151.9px] h-[77.38px] font-normal text-[14px]">
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>
        <div className="w-[151.9px] h-[129.86px]">
          <h1 className="font-normal text-[18px] leading-[100%]">Our Offers</h1>
          <p className="mt-[27.62px] w-[151.9px] h-[77.38px] font-normal text-[14px]">
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>
      </div>
      <div>
        <img className="absolute left-[169.02px] top-[493.05px]" alt="bottom_logo" src={bottom_logo} />
      </div>
    </div>
  );
};

export default Footer;
