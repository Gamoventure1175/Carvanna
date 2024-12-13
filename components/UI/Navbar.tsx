'use client'

import { useRouter } from "next/navigation";
import ThemeToggleButton from "./ThemeToggleButton";

export default function NavBar() {
    const router = useRouter();
    
    return(
        <nav className="flex justify-between p-4 items-center text-text-default pb-0 sm:p-6 md:p-8 sm:pb-0 md:pb-0">
            <h1 className="font-playWrite font-normal sm:text-5xl text-4xl lg:text-6xl md:text-5xl m-0 hover:text-accent-default cursor-pointer transition-all ease-in-out delay-75" onClick={() => router.push('/')}>Cars Mania</h1>
            <ThemeToggleButton />
        </nav>
    )
}