import { WeatherApp } from "./WeatherApp";
import { Navbar } from "./Navbar";
import { Body } from "./Body";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen overflow-x-hidden overflow-y-auto overflow-hidden no-scroll">
        <WeatherApp />
        <Body />
        <Navbar />
      </div>
    </>
  );
}

export default App;
