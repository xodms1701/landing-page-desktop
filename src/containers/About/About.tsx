import React from "react";
import style from "./About.module.scss";
import classnames from "classnames/bind";
import { Section3 } from "../../components";

const cx = classnames.bind(style);

function About() {
  return (
    <div id="about" className={cx("About")}>
      <Section3 />
    </div>
  );
}

export default About;
