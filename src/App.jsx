import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="w-dvw overflow-x-hidden">
      <Navbar />
    </main>
  );
};

export default App;
