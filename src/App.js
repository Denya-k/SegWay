import React from "react";
import Features from "./components/Features";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import Owner from "./components/Owner";
import PackingList from "./components/PackingList";
import Rectangle from "./components/Rectangle";
import Skooters from "./components/Skooters";

function App() {
  return (
    <div className="App">
      <Header />
      <Owner />
      <Skooters />
      <Rectangle />

      <PackingList />

      <Gradient />
      <Features />
    </div>
  );
}

export default App;
