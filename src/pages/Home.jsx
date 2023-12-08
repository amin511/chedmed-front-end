import "./home.css";

const Home = () => {
  return (
    <div className=" h-[100vh] bg-green-400 hero flex gap-2 w-full">
      <section className=" w-[10%] h-[100vh] bg-red-500"></section>
      <section className=" h-[100vh] bg-red-500 flex-1"></section>
      <section className=" w-[25%] h-[100vh] bg-red-500"></section>
    </div>
  );
};

export default Home;
