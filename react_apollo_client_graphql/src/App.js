import logo from './logo.svg';
import './App.css';
import ExchangeRates from "./Components/ExChangeRates";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Apollo Client GraphQl</h2>
      </header>
      <div>
        <ExchangeRates />
      </div>
    </div>
  );
}

export default App;
