import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="cursive">
            <div>
                <nav>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/post">Blogs</NavLink>
                    <NavLink to="/project">Projects</NavLink>
                    {/* <NavLink to="/contact">Contact</NavLink> */}
                </nav>
            </div>
        </header>
    );
}
 
export default NavBar;