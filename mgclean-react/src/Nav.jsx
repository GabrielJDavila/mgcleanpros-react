import { useState } from "react"

function Nav() {
    const [showMenu, setShowMenu] = useState(false)

    function handleClick() {
        setShowMenu(prevMenu => !prevMenu)
    }

    const menuStyles = {
        marginRight: showMenu ? "6rem" : "1rem"
    }

    return (
        <nav>
            <div className="nav-hero-container">
                <h3 className="nav-hero-title">M&G Clean Pros</h3>
                <p className="nav-hero-descrip">The Cleaning Experts</p>
            </div>
            <div className="menu-container">
                {showMenu ?
                <span className="material-symbols-outlined" onClick={handleClick} style={menuStyles}>close</span> :
                <span className="material-symbols-outlined" onClick={handleClick} style={menuStyles}>open</span>
                }
                {
                showMenu &&
                <ul className="nav-items">
                    <a className="nav-item">Home</a>
                    <a className="nav-item">About</a>
                    <a className="nav-item">Services</a>
                    <a className="nav-item">Reviews</a>
                </ul>
                }
            </div>
        </nav>
    )
}

export default Nav