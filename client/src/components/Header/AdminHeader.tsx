"use client";

import Link from "next/link";
import './AdminHeader.css';
import Image from "next/image";
import BRVLogo from '../../../public/BlackRockVisuals/Logo/505453166_18024214475701445_5886199459647204464_n.jpg';
import { usePathname } from "next/navigation";


const AdminHeader = () => {
    const pathname = usePathname();
    return (
        <header itemProp="header" itemScope itemType="https://schema.org/CreativeWork">
            <Image src={BRVLogo} alt="Black Rock Visuals" className="BRV-logo"/>
            <h1>Black Rock Visuals Admin</h1>

                <ul className="nav-links">
                    <li>
                        <Link href='/' className={pathname === '/' ? "active-link" : ""}>Home</Link>
                        
                    </li>
                    <li>
                        <Link href='/Admin' className={pathname === '/Admin' ? "active-link" : ""}>Admin Page</Link>
                    </li>
                    <li>
                        <Link href='/ManagePortfolio' className={pathname === '/ManagePorfolio' ? "active-link" : ""}>Manage Portfolio</Link>
                    </li>
                    <li>
                        <Link href='/ManageGallery' className={pathname === '/ManageGallery' ? "active-link" : ""}>Manage Gallery</Link>
                    </li>
                </ul>

        </header>
    )
};


export default AdminHeader;

