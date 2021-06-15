import React from "react";
import style from "./Service.module.scss";
import classnames from "classnames/bind";
import { Section2 } from "../../components";

const cx = classnames.bind(style);

function Service() {
  return (
    <div id="service" className={cx("Service")}>
      <Section2 />
    </div>
  );
}

export default Service;
