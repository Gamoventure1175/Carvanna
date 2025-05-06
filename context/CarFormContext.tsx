'use client'

import { ReactNode, createContext, useContext, useState } from "react";

type CarFormContextType = {
  isCarFormOpen: boolean;
  setIsCarFormOpen: (value: boolean) => void;
};

const CarFormContext = createContext<CarFormContextType | undefined>(undefined);

export function CarContextProvider({children}: {children: ReactNode}) {
    const [isCarFormOpen, setIsCarFormOpen] = useState(false)
    
  return (
    <CarFormContext.Provider value={{ isCarFormOpen, setIsCarFormOpen }}>
      {children}
    </CarFormContext.Provider>
  );
}

export const useCarForm = () => {
    const context = useContext(CarFormContext)
    if (!context){
        throw new Error("useCarForm must be used within a CarFormProvider")
    }

    return context
}