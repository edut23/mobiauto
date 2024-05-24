'use client'

import { useCallback, useEffect, useState } from "react";
import useBrand from "../useBrand";
import { useMyContext } from "@/Context/myContext";
import useModel from "../useModel";
import useYear from "../useYear";
import usePrice from "../usePrice";

interface Options{
    label: string;
    id: string;
}

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

interface Form{
    marca: string
    modelo: string
    ano: string
    event: boolean
}

const useModal = () => {
    const brand: Options[] = useBrand();
    const model: Options[] = useModel();
    const year: Options[] = useYear();


    return {brand, model, year};
}

export default useModal;