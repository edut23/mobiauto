import getModel from "@/API/model";
import Modal from "../Modal";
import { GetServerSideProps } from "next";
import { useContext } from "react";
import { MyContext } from "@/Context/myContext";


const Home: React.FC = async() => {

    return (
        <>
            <h1>Tabela Fipe</h1>
            <h2>Consulte o valor de um veículo de forma gratuita</h2>
            <Modal/>
        </>
    );
}

export default Home;