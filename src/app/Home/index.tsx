'use client'
import Modal from "../Modal";
import { GetServerSideProps } from "next";
import { useContext } from "react";
import { MyContext } from "@/Context/myContext";
import { useRouter } from "next/navigation";


const Home: React.FC = async() => {
    
    const router = useRouter();

    return (
        <>
            <h1>Tabela Fipe</h1>
            <h2>Consulte o valor de um veículo de forma gratuita</h2>
            <Modal router={router}/>
        </>
    );
}

export default Home;