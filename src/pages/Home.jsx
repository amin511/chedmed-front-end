
import RightBar from "../components/right-bar-filter/index"
import ChatBot from "../components/chatBot/index"
const Home = () => {

  return (
    <div className="h-[100vh]  hero flex gap-2 w-full">
      <section className=" w-[10%] "></section>
      <section className="  flex-1">

      </section>
      <section className="h-[100vh] relative  bg-[#F2F2F7] p-2">
        <RightBar />
        <ChatBot />
      </section>
    </div>
  );
};

export default Home;
