'use client'

import getBrand from "@/API/brand";
import { useEffect, useRef, useState } from "react";

interface BrandData{
    codigo: string;
    nome: string;
}

interface Brand{
    label: string
    id: string
}

const useBrand = (): Brand[] => {
    const [brand, setBrand] = useState<Brand[]>([])
    const isMounted = useRef(false);

    useEffect(() => {
        if(!isMounted.current){
            const fetchData = async() => {
                let temp: Brand[] = []
                try{
                    const data: BrandData[] = await getBrand();
                    data.map((item, idx) => {
                        temp[idx] = {label: item.nome, id: item.codigo}
                    })
                    console.log(data)
                    setBrand(temp);
                }
                catch(error){
                    console.error(error);
                }
            }
            
            console.log("use")

            fetchData();
            isMounted.current = true;
        }
    },[])


    return brand;
}

export default useBrand;