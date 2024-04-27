import logo1 from "../../assets/images/moon.svg";
import logo2 from "../../assets/logo.svg";

import logo4 from "../../assets/images/logout.svg"
import pdf from "../../assets/pdf.jpg"
const index = () => {
  return (
    <nav className="flex h-[120px] dark:bg-[#232323]  border-b-2 mb-1 ml-10 items-center justify-center justify-between gap-10 ">
      <img className="w-[200px] " src={logo2} />

      <h1 className="pl-[10px] font-bold font-Montserrat text-2xl dark:text-white ">Ulysse scraper</h1>

      <div className="flex items-center">
        <h1 className="pr-[10px] text-xl font-Montserrat font-bold dark:text-white">Darmouni Amine</h1>
        <img className="w-20 h-20 object-cover rounded-full" src={pdf} />
        {/* <img src={logo3} className="pl-[10px] pr-[5px]" /> */}
        <img src={logo4} className="pl-[10px] pr-[5px] bg-white rounded-full w-10 h-10" />
      </div>
    </nav>
  );
};

export default index;
