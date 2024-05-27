'use client';
import React, { createContext, useState, ReactNode, useContext, useEffect, useMemo } from 'react';

interface Form{
  marca: string
  modelo: string
  ano: string
  event: boolean
}

interface MyContextType {
    form: Form;
    setForm: React.Dispatch<React.SetStateAction<Form>>,
    showPrice: boolean,
    setShowPrice: React.Dispatch<React.SetStateAction<boolean>>,
  }
  
  const defaultState: MyContextType = {
    form: {marca: "", modelo: "", ano: "", event: false},
    setForm: () => {},
    showPrice: false,
    setShowPrice: () => {}
  };

export const MyContext = createContext<MyContextType>(defaultState);

interface MyProviderProps {
    children: ReactNode;
  }

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [form, setForm] = useState<Form>({marca: "", modelo: "", ano: "", event: false})
  const [showPrice, setShowPrice] = useState<boolean>(false);

  useEffect(() => {
    if(form.modelo !== "")
      setForm(prevState => ({...prevState, modelo: "", ano: ""}))
  }, [form.marca])

  useEffect(() => {
    if(form.ano !== "")
      setForm(prevState => ({...prevState, ano: ""}))
  }, [form.modelo])


  const memoBrand = useMemo(() => ({form, setForm, showPrice, setShowPrice}),[form, showPrice])


  return (
    <MyContext.Provider value={memoBrand}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext)