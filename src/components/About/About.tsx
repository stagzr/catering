import Head from "next/head";
import Image from "next/image";
import styles from "./about.module.scss";
import json from "../../../assignment/data.json";
import { HiArrowRight } from "react-icons/hi";

type DataProps = { data: any };

export default function About(props: DataProps): JSX.Element {
  const { data } = props;
  return (
    <section className={styles.container}>
      <img className={styles.image} src={data.content.image} />
      <div className={styles.text}>
        <h1>{data.store.name}</h1>
        <h2>{data.content.heading}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.content.intro }} />
      </div>
    </section>
  );
}
