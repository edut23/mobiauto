'use client'

import getBrand from "@/API/brand";
import { useEffect, useState } from "react";

interface BrandData{
    codigo: string;
    nome: string;
}

interface Brand{
    label: string
    id: number
}

const useBrand = () => {
    const [brand, setBrand] = useState<Brand[]>([])

    useEffect(() => {
        const fetchData = async() => {
            let temp: Brand[] = []
            try{
                const data: BrandData[] = await getBrand();
                data.map((item, idx) => {
                    temp[idx] = {label: item.nome, id: parseInt(item.codigo)}
                })
                setBrand(temp);
            }
            catch(error){
                console.error(error);
            }
        }
    
        fetchData();
    },[])


    return brand;
}

export default useBrand;