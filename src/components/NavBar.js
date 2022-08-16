import autoprefixer from "autoprefixer";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex ml-32">
                    <NavLink to="/" exact
                    className="inline-flex items-center py-3 px-3 mr-4 text-blue-100 hover:text-blue-400 text-base font-bold tracking-widest serif"
                    activeClassName="text-white bg-blue-700"
                    >
                        Home
                    </NavLink>
                    <NavLink to="/post"
                    className="inline-flex items-center py-3 px-3 mr-4 text-blue-100 hover:text-blue-400 text-base font-bold tracking-widest serif"
                    activeClassName="text-white bg-blue-700"
                    >
                        Blogs
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 mr-4 text-blue-100 hover:text-blue-400 text-base font-bold tracking-widest serif"
                    activeClassName="text-white bg-blue-700"
                    >
                        About
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-3 px-3 mr-4 text-blue-100 hover:text-blue-400 text-base font-bold tracking-widest serif"
                    activeClassName="text-white bg-blue-700"
                    >
                        Projects
                    </NavLink>
                    {/* <NavLink to="/contact">Contact</NavLink> */}
                </nav>
                <div className="py-3 px-3 my-2 mr-32">
                <SocialIcon url="https://twitter.com/ArafinMridul" target="_blank" className="mr-4" fgColor="white" style={{ height: 35, width: 35 }}/>
                <SocialIcon url="https://www.facebook.com/muddymridul/" target="_blank" className="mr-4" fgColor="white" style={{ height: 35, width: 35 }}/>
                <SocialIcon url="https://github.com/arafinmridul" target="_blank" className="mr-4" fgColor="white" style={{ height: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    );
}
 
export default NavBar;