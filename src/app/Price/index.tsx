'use client'
import usePrice from "@/Hooks/usePrice";
import styles from "./price.module.css"

const Page: React.FC = () => {
  const priceInfo = usePrice();

  return (
    <main className={styles.price}>
      {priceInfo.Valor ? 
      <>
        <h1>Tabela fipe: {priceInfo.Modelo}</h1>
        <h2 className={styles.value}>{priceInfo.Valor}</h2>
        <h4 className={styles.smText}>Este é o preço de compra do veículo</h4>
      </> : <h1>Carregando...</h1>}
    </main>
  );
}

export default Page;