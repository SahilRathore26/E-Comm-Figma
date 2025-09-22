const Color = () => {
  const colors = [
    "#006cff",
    "#fc3e39",
    "#171717",
    "#fff600",
    "#ff00b4",
    "#efdfdf",
  ];

  return (
    <div className="absolute w-[347.94px] h-[144.22px] top-[796.04px] left-[22.02px] bg-[#F6F7F8] rounded-[3px]">
      <div className="absolute h-[31.66px] top-[22.27px] left-[25.77px] flex items-center">
        <h1 className="font-poppins font-medium text-[20px] leading-[100%] tracking-[0]">
          COLOR
        </h1>
      </div>
      <div className="absolute w-[292.53px] h-[30.49px] top-[78.56px] left-[29.64px] space-x-[21.9px]">
        {colors.map((color, index) => (
          <button
            key={index}
            className="w-[25.77px] h-[23.45px] rounded-full border-2"
            style={{ background: color }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Color;
