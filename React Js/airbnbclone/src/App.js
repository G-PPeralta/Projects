import { GlobalStyle } from "./styles/global";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import data from "./data.js";

function App() {
  const cards = data.map((e) => (
    <Card
      key={e.id}
      img={e.coverImg}
      rating={e.stats.rating}
      reviewCount={e.stats.reviewCount}
      location={e.location}
      title={e.title}
      price={e.price}
      openSpots={e.openSpots}
    />
  ));
  return (
    <div>
      <Navbar />
      <Hero />
      <section>{cards}</section>
      <GlobalStyle />
    </div>
  );
}

export default App;
