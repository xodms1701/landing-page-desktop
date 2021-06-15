import React from "react";
import style from "./Footer.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

export default function Footer() {
  return <div className={cx("footer")}>
    <div className={cx("wrapper")}>
      footer
    </div>
  </div>;
}
