'use client'
import useBrand from "../useBrand";
import useModel from "../useModel";
import useYear from "../useYear";

interface Options{
    label: string;
    id: string;
}

const useModal = () => {
    const brand: Options[] = useBrand();
    const model: Options[] = useModel();
    const year: Options[] = useYear();


    return {brand, model, year};
}

export default useModal;