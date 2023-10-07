"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, href }) => {
    const router = usePathname();
    
    const style = {
        color: router === href ? 'rgb(91 33 182)' : '',
    }
    return (
        <div>
            <Link href={href} style={style}>
                {children}
            </Link>
        </div>
    );
};

export default ActiveLink;