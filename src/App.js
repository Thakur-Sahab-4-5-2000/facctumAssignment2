import "./App.css";
import "./components/Hybrid";
import Hybrid from "./components/Hybrid";
import Ouput from "./components/Ouput";

function App() {
  return (
    <div className="App">
      <h1>Assignment 2</h1>
      <Hybrid title="Birth" placeholder="Birth Place..." />
      <Hybrid title="Keyword" placeholder="Keywords..." />
      <Hybrid title="Institue" placeholder="Institues..." />

      <Ouput />
    </div>
  );
}

export default App;
