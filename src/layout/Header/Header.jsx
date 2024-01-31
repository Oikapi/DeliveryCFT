
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <div className="main-header-container">
            <header className="header-nav">

                <div className="left-header">

                    <div className="left-nav-container">
                        <nav>
                            <Link className="home-link"> <img src="/deliveryLogo.png" alt="" /></Link>
                            <Link className="profile-link"><img src="/profile.svg" alt="" />Профиль</Link>
                            <Link className="history-link"><img src="/history.svg" alt="" />История</Link>
                        </nav>
                    </div>
                </div>

                <div className="exit-link-container">
                    <nav>
                        <Link className="exit-link"><img src="/exit.svg" alt="" />Выйти</Link>
                    </nav>
                </div>
            </header >
        </div>
    )
}

export default Header