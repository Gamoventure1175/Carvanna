import NavBar from "@/components/UI/Navbar";
import { ReactNode } from "react";

export default function MainLayout({children}: {children: ReactNode}) {

    return(
        <header>
            <NavBar />
            {children}
        </header>
    )

}