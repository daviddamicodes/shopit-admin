import React from "react";
import Chart from "../../components.js/Chart/Chart";
import FeaturedInfo from "../../components.js/FeaturedInfo/FeaturedInfo";
import "./Home.scss";
import { userData } from "../../data";
import WidgetSm from "../../components.js/WidgetSm/WidgetSm";
import WidgetLg from "../../components.js/WidgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
