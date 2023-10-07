import ActiveLink from "@/app/components/Navber/ActiveLink";
import Link from "next/link";

const AsideNav = () => {
    const navlinks = [
        {
            path: "/dashboard",
            title: 'Dashboard'
        },
        {
            path: "/dashboard/addProduct",
            title: 'Add Product'
        },
        {
            path: "/dashboard/manageProduct",
            title: 'Manage Product'
        },
        {
            path: "/",
            title: 'Home'
        },
    ]
    return (
        <nav>
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <ul>
                {
                    navlinks.map(({ path, title }) =>
                        <li className="text-xl mx-2" key={title}>
                            <ActiveLink href={path}>{title}</ActiveLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default AsideNav;