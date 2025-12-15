import { Send } from "lucide-react";
import img from "../assets/profil/pp.jpg";

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Hello, <br />
                    I'm <span className="text-accent">Marin Weis</span>, <br />
                </h1>
                <p className="my-3 text-md text-center md:text-left">
                    I'm a computer science student <br />
                    passionate about web development and design.<br />
                    Welcome to my portfolio!
                </p>
                <a href="mailto:marin.weis@gmail.com" className="btn btn-accent md:w-fit">
                    <Send className="w-5 h-5" /> Contact Me
                </a>
            </div>
            <div className="md:ml-60">
                <img
                    src={img}
                    alt="Marin Weis"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent"
                    style = {{
                        borderRadius : "50% 70% 50% 70% / 60% 50% 70% 50%"
                    }}
                />
            </div>
        </div>
    );
}

export default Home;