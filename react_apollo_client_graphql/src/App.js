import "./App.css";
import { Routes, Route } from "react-router-dom";
import Characters from "./Components/Characters";
import Character from "./Components/Character";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Apollo Client GraphQl</h2>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />}>
          <Route path=":id" element={<Character />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
