import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__stores">
                <Link className="navbar__link" to="/stores">Stores</Link>
            </li>
            <li className="navbar__item navbar__findCandy">
                <Link className="navbar__link" to="/findCandy">Find Candy</Link>
            </li>
            <li className="navbar__item navbar__orders">
                <Link className="navbar__link" to="/orders">My Orders</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}