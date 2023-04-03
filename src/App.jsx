import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceList from "./components/PriceList/PriceList";
import Dashboard from "./Dashboard/Dashboard";
import PhoneBar from "./components/PhoneBar/PhoneBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-5xl text-purple-600">Hello from tailwinds</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
