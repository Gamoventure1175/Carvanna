'use client'

import { ReactNode, createContext, useContext, useState } from "react"

type ServiceLogFormType = {
    isServiceLogFormOpen: boolean
    setIsServiceLogFormOpen: (value: boolean) => void
}

const ServiceLogFormContext = createContext<ServiceLogFormType | undefined>(undefined)

export function ServiceLogFormContextProvider({children}: {children: ReactNode}) {
    const [isServiceLogFormOpen, setIsServiceLogFormOpen] = useState(false)

    return(
        <ServiceLogFormContext.Provider value={{isServiceLogFormOpen, setIsServiceLogFormOpen}}>
            {children}
        </ServiceLogFormContext.Provider>
    )
}

export const useServiceLogForm = () => {
    const context = useContext(ServiceLogFormContext)
    if (!context) {
        throw new Error("useServiceLogForm must be used within a ServiceLogFormProvider")
    }
    return context
}