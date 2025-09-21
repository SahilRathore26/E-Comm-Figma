import Header from "./Header";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <Header />
      </div>
      <div className="flex relative top-[95.27px]">
        <SideBar />
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
