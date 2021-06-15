import React from "react";
import style from "./Section3.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

export default function Section3() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("area")}>
        <h1>Lorem ipsum dolor sit amet eam quas malorum accusam</h1>
        <div className={cx("content")}>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te.
        </div>
        <div className={cx("box")}>
          <div className={cx("email-wrapper")}>
            <input type="email" placeholder="Placeholder" />
            <button className={cx("active")}>Primary action</button>
          </div>
          <small>
            By clicking “Primary action” you accepting ipsum dolor sit amet, sit
            ea brute mediocritatem, eu sed aliquam scripserit dissentiunt.
          </small>
        </div>
      </div>
    </div>
  );
}
