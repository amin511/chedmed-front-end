
import RightBar from "../components/right-bar-filter/index"
import ChatBot from "../components/chatBot/index"
import Leftsidebar from "../components/left-bar-filter";
import Middle from "../components/middle/index"
const Home = () => {

  return (
    <div className="h-[100vh] dark:bg-[#232323]  hero flex gap-2 w-full">
      <section className=" w-[70px] dark:bg-[#232323] ">
        <Leftsidebar />
      </section>
      <section className="   flex-1">
        <Middle />
      </section>
      <section className="h-[100vh] dark:bg-[#232323] relative  bg-[#F2F2F7] p-2">
        <RightBar />
        <ChatBot />
      </section>
    </div>
  );
};

export default Home;
