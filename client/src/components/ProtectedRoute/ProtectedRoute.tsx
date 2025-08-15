"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "../Context/AuthContext"
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";



const ProtectedRoute = ({children}:{children:ReactNode}) => {

    const {isAuthenticated} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(isAuthenticated === false) {
            setTimeout(() => {
                router.push('/Login');
            }, 100)
        }
    }, [isAuthenticated]);

    if(isAuthenticated == null) {
        return <Loading/>;
    }

    return (
        <>
        {children}
        </>
    )

};


export default ProtectedRoute;


