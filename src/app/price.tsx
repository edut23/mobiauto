import styles from "./page.module.css";
import Home from "./Home";
import usePrice from "@/Hooks/usePrice";

const Page: React.FC = async() => {
  const priceInfo = usePrice();

  return (
    <main className={styles.main}>
      <h1>Preço</h1>
      <h2>{priceInfo.Valor}</h2>
    </main>
  );
}

export default Page;