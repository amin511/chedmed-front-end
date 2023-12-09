import logo1 from "../../assets/images/moon.svg";
import logo2 from "../../assets/images/handSHake.svg";

import logo4 from "../../assets/images/logout.svg"

const index = () => {
  return (
    <nav className="flex pr-20 dark:bg-[#232323]  border-b-2 mb-1 ml-10 items-center p-[10px] justify-between ">
      <div className="flex items-center ">
        <img src={logo2} />
        <h1 className="pl-[10px] font-bold text-2xl dark:text-white ">CHED MED</h1>
      </div>
      <div className="flex items-center">
        <h1 className="pr-[10px] font-bold dark:text-white">Darko Staar</h1>
        {/* <img src={logo3} className="pl-[10px] pr-[5px]" /> */}
        <img src={logo4} className="pl-[10px] pr-[5px] bg-white rounded-full w-10 h-10" />
      </div>
    </nav>
  );
};

export default index;
