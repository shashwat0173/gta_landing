import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-3xl text-white bg-black">
          Welcome to the world of GTA 6 and GSAP
        </h1>
      </div>
    </main>
  );
};

export default App;
