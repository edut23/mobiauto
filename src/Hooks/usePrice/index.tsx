'use client'

import getPrice from "@/API/value";
import { useMyContext } from "@/Context/myContext";
import { useEffect, useState } from "react";

interface PriceData{
    TipoVeiculo: number
    Valor: string
    Marca: string
    Modelo: string
    AnoModelo: number
    Combustivel: string
    CodigoFipe: string
    MesReferencia: string
    SiglaCombustivel: string
}

const usePrice = (): PriceData => {
    const [price, setPrice] = useState<PriceData>({
        TipoVeiculo: 0,
        Valor: "",
        Marca: "",
        Modelo: "",
        AnoModelo: 0,
        Combustivel: "",
        CodigoFipe: "",
        MesReferencia: "",
        SiglaCombustivel: "",
    });
    const {form, setForm} = useMyContext();

    useEffect(() => {
        const fetchData = async() => {
            try{
                const data: PriceData = await getPrice(form.marca, form.modelo, form.ano);
                setPrice(data);
            }
            catch(error){
                console.error(error);
            }
        }
        
        //if(form.event){
            fetchData();
            //setForm({marca: "", modelo: "", ano: "", event: false})
        //}
    },[])


    return price;
}

export default usePrice;