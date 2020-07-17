import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Boxes from "./components/Boxes/Boxes";
import SortButton from "./components/Buttons/SortButton/SortButton";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
    this.sortArr = this.sortArr.bind(this);
  }
  componentDidMount() {
    const arr = [...Array(30)].map(() => Math.floor(Math.random() * 9 + 1));
    this.setState({ arr });
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  sortArr() {
    let arr = this.state.arr;
    for (let i = 0; i < arr.length; i = i + 1) {
      for (let j = 0; j + 1 < arr.length; j = j + 1) {
        if (arr[j] > arr[j + 1]) {
          let t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
          await sleep(2000);
        }
      }
    }
    this.setState({ arr });
  }
  render() {
    return (
      <>
        <Header />
        <Boxes arr={this.state.arr} />
        <SortButton clicked={this.sortArr} />
      </>
    );
  }
}

export default App;
