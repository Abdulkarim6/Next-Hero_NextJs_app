import Link from "next/link";
import ActiveLink from "./ActiveLink";

const navLinks = [
    {
        path: '/',
        title: "Home"
    },
    {
        path: '/about',
        title: "About"
    },
    {
        path: '/profile',
        title: "Profile"
    },
    {
        path: '/blogs',
        title: "Blogs"
    },
    {
        path: '/dashboard',
        title: "Dashboard"
    }
];

const Navber = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h1 className="text-3xl font-bold">Next Hero</h1>
            <ul className="flex">
                {
                    navLinks.map(({ path, title }) =>
                        <li className="text-2xl mx-2 font-medium" key={title}>
                            <ActiveLink href={path}>{title}</ActiveLink>
                        </li>)
                }
            </ul>
        </nav>
    );
};

export default Navber;