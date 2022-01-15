import React from "react";
import Chart from "../../components.js/Chart/Chart";
import FeaturedInfo from "../../components.js/FeaturedInfo/FeaturedInfo";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};

export default Home;
