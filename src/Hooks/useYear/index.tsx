'use client'

import getYear from "../../API/year";
import { useMyContext } from "../../Context/myContext";
import { useEffect, useState } from "react";

interface YearData{
    codigo: string;
    nome: string;
}

interface Year{
    label: string
    id: string
}

const useYear = (): Year[] => {
    const [year, setYear] = useState<Year[]>([]);
    const {form} = useMyContext();

    useEffect(() => {
        const fetchData = async() => {
            let temp: Year[] = []
            try{
                const data: YearData[] = await getYear(form.marca, form.modelo);
                data.map((item, idx) => {
                    temp[idx] = {label: item.nome, id: item.codigo}
                })
                setYear(temp);
            }
            catch(error){
                console.error(error);
            }
        }
        
        if(form.modelo !== "")
            fetchData();
        else
            setYear([])
    },[form.modelo])


    return year;
}

export default useYear;