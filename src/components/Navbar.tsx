import { Pi } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="/"
               className="flex items-center font-bold text-3xl md:text-4xl">
                <Pi className="mr-2"/>
                MARIN
                <span className="text-accent">WEIS</span>
            </a>

            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost">Home</a>
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost">About</a>
                </li>
                <li>
                    <a href="#Education" className="btn btn-sm btn-ghost">Education</a>
                </li>
                <li>
                    <a href="#Projects" className="btn btn-sm btn-ghost">Projects</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;