const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Andrew's React Training</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "slate", 
                    borderRadius: "8px"
                }}>New Article</a>
            </div>
        </nav>
     );
}
 
export default Navbar;