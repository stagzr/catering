import styles from "./mainCategory.module.scss";
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
