import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./style.module.scss";
import json from "../../../assignment/data.json";

export default function Category({ data }) {
  return (
    <div key={data.name} className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={data.image} />
      </div>
      <div className={styles.header}>
        <div className={styles.arrow}>&#8594;</div>
        <h3>{data.name}</h3>
      </div>
    </div>
  );
}
