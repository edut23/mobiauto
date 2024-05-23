import useInput from "@/Hooks/useInput"
import { Autocomplete, TextField } from "@mui/material"

interface Model{
    label: string,
    id: number
}

interface Form{
    marca: number
    modelo: number
    ano: number
}

interface SearchProps {
    type: string,
    options: Model[],
    value: Model,
    setValue: React.Dispatch<React.SetStateAction<Form>>,
}


const SearchInput: React.FC<SearchProps> = ({type, options, value, setValue}) => {

    const changeHandler = useInput({type, setValue, options});

    console.log(value, type)

    return(
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            value={value}
            onChange={(e: any, newValue: Model | null) => changeHandler(newValue)}
            sx={{ width: "calc(100% - 2em)" }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            disabled={options.length < 1}
        />
    )
}

export default SearchInput