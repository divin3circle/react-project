import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

function Greetings({ name }) {
  /*   const [name] = props; */
  return (
    <div id="greet">
      <h1>Hello,</h1>
      <p>I'm {name}</p>
    </div>
  );
}

function Add() {
  return (
    <section className="add">
      <h4>What can I do for you?</h4>
      <button
        onClick={() => {
          console.log("You reloded the page");
        }}
      >
        Reload the page
      </button>
      <button
        onClick={() => {
          alert("Some qoute");
        }}
      >
        Display a qoute
      </button>
    </section>
  );
}

function App() {
  return (
    <>
      <Greetings name="Sylus Abel" />
      <Add />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
