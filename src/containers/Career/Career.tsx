import React from "react";
import style from "./Career.module.scss";
import classnames from "classnames/bind";
import { Section4 } from "../../components";

const cx = classnames.bind(style);

function Career() {
  return (
    <div id="career" className={cx("Career")}>
      <Section4 />
    </div>
  );
}

export default Career;
