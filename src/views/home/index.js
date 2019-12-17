import React, { Component } from "react";
import Header from "../../components/header";
import About from "../../components/about";
import Carousel from "../../components/carousel";
import WorkCategories from "../../components/workCategories";
import Navbar from "../../components/navbar";
import Portfolio from "../../components/portfolio";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Navbar />

        <Header />

        <About />

        <Carousel />

        <WorkCategories />

        <Portfolio />
      </div>
    );
  }
}

export default Home;
