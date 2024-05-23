'use client'

import { useEffect } from "react"

interface Form{
    marca: number
    modelo: number
    ano: number
}

interface Model{
    label: string,
    id: number
}

interface InputProps{
    type: string,
    setValue: React.Dispatch<React.SetStateAction<Form>>;
    options: Model[]
}

const useInput = ({type, setValue, options}: InputProps) => {
    const changeHandler = (e: Model | null) =>{
        setValue(prevState => ({...prevState, [type]: e?.id}))
    }

    return changeHandler;
}

export default useInput;