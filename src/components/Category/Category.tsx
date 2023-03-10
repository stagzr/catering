import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.scss";
import json from "../../../assignment/data.json";
import { HiArrowRight } from "react-icons/hi";

type DataProps = { data: any };

export default function Category(props: DataProps) {
  const { data } = props;
  return (
    <div key={data.name} className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={data.image} />
      </div>
      <div className={styles.header}>
        <div className={styles.arrow}>
          <HiArrowRight />
        </div>
        <h3>{data.name}</h3>
      </div>
    </div>
  );
}
