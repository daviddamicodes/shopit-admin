import React, { useEffect, useMemo, useState } from "react";
import Chart from "../../components.js/Chart/Chart";
import FeaturedInfo from "../../components.js/FeaturedInfo/FeaturedInfo";
import "./Home.scss";
import { userData } from "../../data";
import WidgetSm from "../../components.js/WidgetSm/WidgetSm";
import WidgetLg from "../../components.js/WidgetLg/WidgetLg";
import { userRequest } from "../../requestMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

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
