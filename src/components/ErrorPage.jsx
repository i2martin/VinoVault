import styles from "./ErrorPage.module.css";
export default function ErrorPage() {
  return (
    <div id={styles.errorPage}>
      <h1>😥 Oops!</h1>
      <p>It seems like you have wandered into the land of lost pages.</p>
      <p>
        Our highly-trained hamsters are diligently searching for the elusive
        content you seek.
      </p>
    </div>
  );
}
