import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./style.module.scss";
import json from "../../../assignment/data.json";
import Category from "../Category/Category";

export default function MainCategory({ data }) {
  return (
    <>
      <div className={styles.container}>
        <h2>{data.name}</h2>
        <div className={styles.categories}>
          {data.categories.map((category) => {
            return <Category data={category} />;
          })}
        </div>
      </div>
    </>
  );
}
