import React from "react";
import style from "./Section4.module.scss";
import classnames from "classnames/bind";
import cat from "./../../assets/images/cat.png";

const cx = classnames.bind(style);

export default function Section4() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <h2>
          Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta
          sadipscing te.
        </h2>
        <div className={cx("content")}>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
        </div>
        <div className={cx("email-wrapper")}>
          <input type="email" placeholder="Placeholder" />
          <button className={cx("active")}>Primary action</button>
        </div>
        <small>
          By clicking “Primary action” you accepting ipsum dolor sit amet, sit
          ea brute mediocritatem, eu sed aliquam scripserit dissentiunt.
        </small>
      </div>
      <div className={cx("right")}>
        <img src={cat} alt="cat" />
      </div>
    </div>
  );
}
