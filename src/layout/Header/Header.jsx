
import { Link, useLocation } from "react-router-dom"
import "./header.css"
import { ProfileIcon } from "../../pages/MainPage/components/CustomIcons"
const Header = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className="main-header-container">
            <header className="header-nav">

                <div className="left-header">

                    <div className="left-nav-container">
                        <nav>
                            <Link className="home-link"> <img src="/deliveryLogo.png" alt="" /></Link>
                            <Link className={location.pathname === "/profile" && "active"} to="/profile" ><ProfileIcon isOpen={location.pathname === "/profile"} />Профиль</Link>
                            <Link className="history-link" to="/history" ><img src="/history.svg" alt="" />История</Link>
                        </nav>
                    </div>
                </div>

                <div className="exit-link-container">
                    <nav>
                        <Link to="/auth" className="exit-link"><img src="/exit.svg" alt="" />Войти</Link>
                    </nav>
                </div>
            </header >
        </div>
    )
}

export default Header