const Prices = () => {
  return (
    <div className="absolute w-[347.94px] h-[190.55px] top-[572.08px] left-[21.4px] bg-[#F6F7F8] p-6 rounded-[3px]">
      <h1 className="font-poppins font-medium text-[20px] leading-[100%] mb-4">
        PRICES
      </h1>

      <div className="absolute flex flex-col w-[304.13px] h-[66.16px] top-[87.33px] left-[25.78px] space-y-[26.47px]">
        <div className="flex font-poppins font-normal text-[18px] leading-[100%] tracking-[0]">
        <p className="">Range:</p>
        <p className="absolute left-[138.53px] f">₹400 - ₹2000</p>
        </div>
        <div className="absolute w-[296.39px] h-[5.29px] top-[26.47px] bg-gray-200">
          <div className="absolute h-[5.29px] left-[33.5px] right-0 bg-[#2e90e5]"></div>

          <div className="absolute left-[33.5px] top-1/2 -translate-y-1/2 w-[15.46px] h-[15.88px] bg-[#2e90e5] border-2 border-white rounded-full cursor-pointer"></div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[15.46px] h-[15.88px] bg-[#2e90e5] border-2 border-white rounded-full cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
