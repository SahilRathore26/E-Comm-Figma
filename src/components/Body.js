import Header from "./Header";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="relative w-100%">
      <div className="absolute">
        <Header />
      </div>
      <div className="flex relative top-[95.27px]">
        <SideBar />
        <MainContainer />
      </div>
      <div className="relative top-[1504.27px]">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
