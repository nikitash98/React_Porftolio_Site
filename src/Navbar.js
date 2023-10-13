import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return <div className = "navbar_container">
            <Link to="/">
                    <img id = "home_button" className = "navbar_item" src = "Icons/logo.svg"/>
            </Link>
            <Link to="/about">
            <div id = "info_button" className = "navbar_item">
                info
            </div>
            </Link>

        <div className = "navbar">
        </div>
    </div>

}

export default Navbar