import { Pet } from "./Pet.jsx";
import { Search } from "./Search.jsx";
// import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!!"),
  //   React.createElement(Pet, { name: "Rex", animal: "Dog", breed: "German" }),
  //   React.createElement(Pet, { name: "SO", animal: "Cat", breed: "Seiami" }),
  //   React.createElement(Pet, {
  //     name: "Zahn",
  //     animal: "Bird",
  //     breed: "Coktail",
  //   }),
  // ]);
  return (
    <div>
      <h1>Adopt Me!!</h1>
      <Pet name="Rex" animal="Dog" breed="German"/>
      <Pet name="SO" animal="Cat" breed="Seiami"/>
      <Pet name="Zahn" animal="Bird" breed="Coktail"/>
      <Search />
    </div>
  );
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
