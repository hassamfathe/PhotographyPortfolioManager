"use client";
import {useContext, createContext, useState, useEffect, ReactNode} from 'react';
import { AuthContextTypes } from '../Types/AuthContext.types';
import axios from 'axios';


const AuthContext = createContext<AuthContextTypes | undefined>(undefined);


const AuthProvider = ({children}:{children:ReactNode}) => {

    const [isAuthenticated, setIsAuthenticated]= useState<null|boolean>(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/apiRoutes/protectedRoutes/protected-route-RouteName`, {withCredentials:true});

                if (!response.data.workFlag) {
                    setIsAuthenticated(false);
                } else {
                    setIsAuthenticated(true);

                }
            } catch (error) {
                console.error("Error While Checking Authentication", error);
                setIsAuthenticated(false);
            }
        }
        checkAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth can be used only with in Auth Provider");
    }
    return context;
}


export default AuthProvider;