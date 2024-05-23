"use client";
import { Button } from "@mui/material";
import styles from "./index.module.css";
import SearchInput from "./SearchInput";
import useModal from "@/Hooks/useModal";
import { useMyContext } from "@/Context/myContext";


const Modal: React.FC = () => {
    const {brand, model} = useModal();
    const {form, setForm} = useMyContext();

    return(
        <div className={styles.modal}>
            <SearchInput type="marca" options={brand} value={brand[form.marca]} setValue={setForm}/>
            <SearchInput type="modelo" options={model} value={model[form.modelo]} setValue={setForm}/>
            <Button className={styles.buttonConfirm} variant="contained" disabled>Consultar preço</Button>
        </div>
    )
}

export default Modal;