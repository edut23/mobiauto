'use client'

import getModel from "@/API/model";
import { useMyContext } from "@/Context/myContext";
import { useEffect, useState } from "react";

interface ModelData{
    codigo: string;
    nome: string;
}

interface Model{
    label: string
    id: number
}

const useModel = () => {
    const [model, setModel] = useState<Model[]>([]);
    const {form} = useMyContext();

    useEffect(() => {
        const fetchData = async() => {
            let temp: Model[] = []
            try{
                const data: ModelData[] = await getModel(form.marca.toString());
                console.log(data)
                data.map((item, idx) => {
                    temp[idx] = {label: item.nome, id: parseInt(item.codigo)}
                })
                setModel(temp);
            }
            catch(error){
                console.error(error);
            }
        }
        
        if(form.marca > 0)
            fetchData();
    },[form.marca])


    return model;
}

export default useModel;