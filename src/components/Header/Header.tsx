import React from "react";
import style from "./Header.module.scss";
import classnames from "classnames/bind";
import { useTranslation } from "react-i18next";
import { Languages, languages } from "./../../assets/locale/i18n";

const cx = classnames.bind(style);

export type HeaderProps = {
  menu: { name: string; src: string }[];
  locale: boolean;
};

export default function Header({ menu, locale }: HeaderProps) {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={cx("header")}>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>LOGO</div>
        <div className={cx("nav")}>
          <ul>
            {menu.map((val) => {
              return (
                <li>
                  <a href={val.src}>{t(val.name)}</a>
                </li>
              );
            })}
          </ul>
          {locale ? (
            <div className={cx("locale-wrapper")}>
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={cx(i18n.language === lang ? "active" : "")}
                  onClick={() => handleChangeLanguage(lang)}
                >
                  {t(`language_${lang}`)}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
