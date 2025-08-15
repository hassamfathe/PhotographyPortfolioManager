import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";



export default function ClientLayout({children}:{children:ReactNode}) {


    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}