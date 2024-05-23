'use client'

import { useCallback, useEffect, useState } from "react";
import useBrand from "../useBrand";
import { useMyContext } from "@/Context/myContext";
import useModel from "../useModel";

interface Options{
    label: string;
    id: number;
}

const useModal = () => {
    const brand: Options[] = useBrand();
    const model: Options[] = useModel();
    const [year, setYear] = useState<Options[]>([])


    return {brand, model, year, setYear};
}

export default useModal;