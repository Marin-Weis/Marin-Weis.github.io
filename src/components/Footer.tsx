import { Pi } from "lucide-react";

import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.webp";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal p-10 bg-base-300" id="Contact">
            <aside>
                <Pi className="mr-2"/>
                <p className="font-bold">
                    MARIN
                    <span className="text-accent">WEIS</span>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/Marin-Weis" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="w-6 h-6"/>
                </a>
                <a href="https://www.linkedin.com/in/marin-weis-22143a353/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="w-6 h-6"/>
                </a>
                </div>
            </nav>
            </footer>
    );
}

export default Footer;