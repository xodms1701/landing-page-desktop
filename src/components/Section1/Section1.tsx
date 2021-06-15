import React from "react";
import style from "./Section1.module.scss";
import classnames from "classnames/bind";
import cat from "./../../assets/images/cat.png";

const cx = classnames.bind(style);

export default function Section1() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <img src={cat} alt="cat" />
      </div>
      <div className={cx("right")}>
        <h2>
          Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta
          sadipscing te.
        </h2>
        <div className={cx("content")}>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
        </div>
        <div className={cx("button-wrapper")}>
          <button className={cx("active")}>Primary action</button>
          <button>Secondary action</button>
        </div>
      </div>
    </div>
  );
}
