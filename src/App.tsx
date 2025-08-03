import NavBar from "./components/navBar/NavBar";
import SoulFighter from "./components/SoulFighter";

function App() {
  return (
    <div>
      <NavBar />
      <div className='hero-new__background-image'>
        <SoulFighter />
      </div>
    </div>
  );
}

export default App;
