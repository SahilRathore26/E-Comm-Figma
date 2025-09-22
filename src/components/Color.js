import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../utils/productsSlice";

const Color = () => {
  const dispatch = useDispatch();
  const selectedColor = useSelector((store) => store.products.color);

  const colors = [
    "#40bfff",
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
      <div className="flex absolute w-[292.53px] h-[30.49px] top-[78.56px] left-[29.64px] space-x-[21.9px]">
        {colors.map((color, index) => (
          <div
            className="w-[33.51px] h-[30.49px] flex items-center justify-center rounded-full"
            style={{
              border: selectedColor === color ? `3px solid ${color}` : "none",
            }}
          >
            <button
              key={index}
              className="w-[20.62px] h-[18.76px] rounded-full"
              style={{ background: color }}
              onClick={() => dispatch(setColor(color))}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Color;
