import "./App.css";
import PortNav from "./components/PortNav";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import TechnoLogies from "./components/TechnoLogies";

function App() {
  return (
    <div className="bg-darkblack">
      <PortNav />
      <TechStack />
      <TechnoLogies/>
      <Projects/>
    </div>
  );
}

export default App;
