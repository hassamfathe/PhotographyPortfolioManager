import AuthProvider from "@/components/Context/AuthContext";
import AdminHeader from "@/components/Header/AdminHeader";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { ReactNode } from "react";






export default function AdminLayout({children}:{children:ReactNode}){


    return (
        <AuthProvider>
            <ProtectedRoute>
                <AdminHeader/>
                 {children}
            </ProtectedRoute>
        </AuthProvider>
      

    )
};

