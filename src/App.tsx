import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { EntryPoint } from "./EntryPoint";

class App extends Component {
  private entryPoint!: EntryPoint;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <article>

        </article>
        <footer>

        </footer>
      </div>
    );
  }

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://threejs.org/build/three.min.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      console.log("Creating entry point");
      const entryPoint = new EntryPoint(window);
      entryPoint.startAnimation();
      console.log("Entry point created");

      // Set up next iteration of the loop
      // this.loop(Date.now);
    }
  }

  componentWillUnmount() {
    console.log("componentDidUnmount");
    if (this.entryPoint !== undefined) {
      this.entryPoint.stopAnimation();
    }
  }
}

export default App;
