"use client";
import { Button, FormControl } from "@mui/material";
import styles from "./index.module.css";
import SearchInput from "./SearchInput";
import useModal from "@/Hooks/useModal";
import { useMyContext } from "@/Context/myContext";
import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ModalProps{
    router: AppRouterInstance
}


const Modal: React.FC<ModalProps> = ({router}) => {
    const {brand, model, year} = useModal();
    const {form, setForm} = useMyContext();

    return(
        <div className={styles.modal}>
            <SearchInput type="marca" options={brand} value={form.marca} setValue={setForm}/>
            <SearchInput type="modelo" options={model} value={form.modelo} setValue={setForm}/>
            <SearchInput type="ano" options={year} value={form.ano} setValue={setForm}/>
            <Button onClick={() => router.push('/price')} className={styles.buttonConfirm} variant="contained" disabled={Object.values(form).includes("")}>Consultar preço</Button>
        </div>
    )
}

export default Modal;