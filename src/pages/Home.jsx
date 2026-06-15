import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default Home;