import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import About from "./components/About";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden relative">
      <Navigation />
      <Hero />
      <Marquee />
      <div style={{ marginTop: "-80px", position: "relative", zIndex: 10 }}>
        <Services />
      </div>
      <Portfolio />
      <Stats />
      <About />
      <CtaBanner />
      <Footer />
    </main>
  );
}
