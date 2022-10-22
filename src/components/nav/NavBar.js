import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    return <>
        {
            kandyUserObject.staff
                ? <>
                    <ul className="navbar">
                        <li className="navbar__item navbar__stores">
                            <Link className="navbar__link" to="/stores">Stores</Link>
                        </li>
                        <li className="navbar__item navbar__products">
                            <Link className="navbar__link" to="/products">Products</Link>
                        </li>
                        <li className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("kandy_user")
                                navigate("/", {replace: true})
                            }}>Logout</Link>
                        </li>
                    </ul>
                </>
                : <>
                    <ul className="navbar">
                        <li className="navbar__item navbar__stores">
                            <Link className="navbar__link" to="/stores">Stores</Link>
                        </li>
                        <li className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("kandy_user")
                                navigate("/", {replace: true})
                            }}>Logout</Link>
                        </li>
                    </ul>
                </>

        }
    </>
}

