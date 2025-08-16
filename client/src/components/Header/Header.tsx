"use client";
import Link from "next/link";
import './Header.css';
import Image from "next/image";
import Logo from '../../../public/photographer-studio-professional-logo-picture-design-template-0c9fdba20a1a41b13ecf919c33397127_screen.jpg';
import { usePathname } from "next/navigation";


const Header = () => {
    const pathname = usePathname();
    return (
        <header itemProp="header" itemScope itemType="https://schema.org/CreativeWork">
            <Image src={Logo} alt="Photographer Portfolio Manager" className="P-logo"/>
            <h1 className="header h1">Photographer Portfolio Manager</h1>

            <ul className="nav-links">
                
                <li>
                    <Link href="/" className={pathname === '/' ? 'active-link' : ''}>Home</Link>
                </li>
                <li>
                    <Link href="/Portfolio" className={pathname === '/Portfolio' ? 'active-link' : ''}>Portfolio</Link>
                </li>
                <li>
                    <Link href="/Gallery" className={pathname === '/Gallery' ? 'active-link' : ''}>Gallery</Link>
                </li>

                </ul>

        </header>
    )
};


export default Header;

