import Header from "@/components/header";
import Hero from "./hero";
import News from "./News";
import NewsLetter from "./NewsLetter";
import Paerners from "./Paerners";
import Two from "./Two";
import Why from "./Why";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Two />
      <Why />
      <Paerners />
      <News />
      <NewsLetter />
    </div>
  );
};

export default Home;
