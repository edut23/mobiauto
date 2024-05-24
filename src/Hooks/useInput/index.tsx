'use client'

import { SelectChangeEvent } from "@mui/material"
import { useCallback, useEffect, useState } from "react"

interface Form{
    marca: string
    modelo: string
    ano: string
    event: boolean
}

interface Model{
    label: string,
    id: string
}

interface InputProps{
    type: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<Form>>;
    options: Model[]
}

const useInput = ({type, value, setValue, options}: InputProps) => {
    const [inputValue, setInputValue] = useState(options.find(item => item.id === value)?.label)

    const changeHandler = useCallback((e: SelectChangeEvent) => {
        setValue(prevState => ({...prevState, [type]: e.target.value}))
    }, [type, setValue])

    useEffect(() => {
        if(value === "")
            setInputValue("")
    }, [value])

    return {inputValue, changeHandler};
}

export default useInput;