
function Nav() {
    return (
        <nav>
            <div className="nav-hero-container">
                <h3 className="nav-hero-title">M&G Clean Pros</h3>
                <p className="nav-hero-descrip">The Cleaning Experts</p>
            </div>
            <div className="menu-container">
                <p className="menu-btn">X</p>
                <ul className="nav-items">
                    <a className="nav-item">Home</a>
                    <a className="nav-item">About</a>
                    <a className="nav-item">Services</a>
                    <a className="nav-item">Reviews</a>
                </ul>
            </div>
        </nav>
    )
}

export default Nav