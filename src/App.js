import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />

      <Header />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
