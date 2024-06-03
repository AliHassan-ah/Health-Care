import React from "react";
import "./Home.scss";
import components from "../../Components";
const { Greetings } = components;
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <Greetings />
      </div>
    </div>
  );
};

export default Home;
