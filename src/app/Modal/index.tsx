"use client";
import { Button } from "@mui/material";
import styles from "./index.module.css";
import SearchInput from "./SearchInput";
import useModal from "@/Hooks/useModal";
import { useMyContext } from "@/Context/myContext";

const Modal: React.FC = () => {
    const {brand, model, year} = useModal();
    const {form, setForm, setShowPrice} = useMyContext();

    return(
        <div className={styles.modal}>
            <SearchInput type="marca" options={brand} value={form.marca} setValue={setForm}/>
            <SearchInput type="modelo" options={model} value={form.modelo} setValue={setForm}/>
            <SearchInput type="ano" options={year} value={form.ano} setValue={setForm}/>
            <Button onClick={() => setShowPrice(true)} className={styles.buttonConfirm} variant="contained" disabled={Object.values(form).includes("")}>Consultar preço</Button>
        </div>
    )
}

export default Modal;