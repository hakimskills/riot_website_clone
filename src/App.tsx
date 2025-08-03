import NavBar from "./components/navBar/NavBar";
import SoulFighter from "./components/SoulFighter";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div>
      <NavBar />
      <div className='hero-new__background-image'>
        <SoulFighter />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
