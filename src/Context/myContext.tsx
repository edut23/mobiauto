'use client';
import React, { createContext, useState, ReactNode, useContext, useEffect, useMemo } from 'react';

interface Form{
  marca: number
  modelo: number
  ano: number
}

interface MyContextType {
    form: Form;
    setForm: React.Dispatch<React.SetStateAction<Form>>;
  }
  
  const defaultState: MyContextType = {
    form: {marca: 0, modelo: 0, ano: 0},
    setForm: () => {},
  };

export const MyContext = createContext<MyContextType>(defaultState);

interface MyProviderProps {
    children: ReactNode;
  }

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [form, setForm] = useState<Form>({marca: 0, modelo: 0, ano: 0})

  const memoBrand = useMemo(() => ({form, setForm}),[form])

  /*useEffect(() => {
    if(form.modelo !== 0)
      setForm(prevState => ({...prevState, modelo: 0}))
  }, [form.marca])*/


  return (
    <MyContext.Provider value={memoBrand}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext)