import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./header.module.scss";
import Category from "../Category/Category";

import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import classNames from "classnames/bind";

export default function Header({ data }) {
  const [open, setOpen] = useState<boolean>();

  const cx = classNames.bind(styles);

  const storeInfoClasses = cx({
    extraInfo: true,
    closed: open === undefined || !open,
    open: open,
  });

  return (
    <>
      <div className={styles.navContainer}>
        <nav>Gå till ica.se</nav>
      </div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.shopInfo}>
            <h1>Ica Kvantum</h1>
            <span>Visa butiksinfo</span>
            <button
              onClick={() =>
                open === undefined ? setOpen(true) : setOpen(!open)
              }
            >
              <BsChevronDown />
            </button>
            <div className={storeInfoClasses}>
              <h3>Öppettider</h3>
              <h4>Butiken</h4>
              <div className={styles.openHours}>
                {data.store.openHours.map((time) => {
                  return (
                    <div key={time.day}>
                      <span>{time.day}</span>
                      <span>
                        {time.open}-{time.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <LoginButton>Logga in</LoginButton>
            <CartButton>0 kr</CartButton>
          </div>
        </div>
      </header>
    </>
  );
}

const LoginButton = ({ children }) => {
  return <button className={styles.loginButton}>{children}</button>;
};

const CartButton = ({ children }) => {
  return <button className={styles.cartButton}>{children}</button>;
};