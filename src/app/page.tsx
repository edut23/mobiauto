import styles from "./page.module.css";
import Home from "./Home";

const Page: React.FC = () => {
  
  return (
    <main className={styles.main}>
      <Home/>
    </main>
  );
}

export default Page;


