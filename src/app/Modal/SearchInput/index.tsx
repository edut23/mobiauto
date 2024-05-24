import useInput from "@/Hooks/useInput"
import { Autocomplete, MenuItem, TextField, Select, InputLabel, FormControl } from "@mui/material"

interface Model{
    label: string,
    id: string
}

interface Form{
    marca: string
    modelo: string
    ano: string
    event: boolean
}

interface SearchProps {
    type: string,
    options: Model[],
    value: string,
    setValue: React.Dispatch<React.SetStateAction<Form>>,
}


const SearchInput: React.FC<SearchProps> = ({type, options, value, setValue}) => {

    const {inputValue, changeHandler} = useInput({type, value, setValue, options});

    console.log(type, value);

    return(
    <FormControl sx={{minWidth: "80%"}} required disabled={options.length < 1}>
        <InputLabel id="demo-simple-select-standard-label">{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={inputValue}
          onChange={changeHandler}
          label={type}
          MenuProps={{ sx: {maxHeight: 300},
            PaperProps: {maxHeight: 300},
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
        }}
        >
            {options.map((item) => <MenuItem key={item.id} value={item.id}>{item?.label}</MenuItem>)}
        </Select>
        </FormControl>
    )
}

export default SearchInput