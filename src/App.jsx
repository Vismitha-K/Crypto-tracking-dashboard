import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { store } from "./redux/store";
import Home from "./pages/home/Home";
import Coin from "./pages/coin/Coin";

// Import pages from navPages folder
import Cryptocurrencies from "./navPages/Cryptocurrencies";
import Learn from "./navPages/Learn";
import Developer from "./navPages/Developer";
import About from "./navPages/About";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
