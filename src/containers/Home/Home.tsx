import React from "react";
import style from "./Home.module.scss";
import classnames from "classnames/bind";
import { Section1 } from "../../components";

const cx = classnames.bind(style);

function Home() {
  return (
    <div id="home" className={cx("Home")}>
      <Section1 />
    </div>
  );
}

export default Home;
