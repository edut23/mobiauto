'use client'
import Modal from "../Modal";
import { useMyContext } from "@/Context/myContext";
import Price from "../Price";


const Home: React.FC = () => {
    const {showPrice} = useMyContext();

    return (
        showPrice ?
        <Price/> :
        <>
            <h1>Tabela Fipe</h1>
            <h2>Consulte o valor de um veículo de forma gratuita</h2>
            <Modal/>
        </>
    );
}

export default Home;