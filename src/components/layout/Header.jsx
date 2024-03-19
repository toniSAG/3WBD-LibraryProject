import {Link} from "react-router-dom";
import SearchBar from "@partials/SearchBar/SearchBar.jsx";
function Header(){
    return(
        <div>
        <header>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
                <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className={"nav-item"}><Link className="nav-link" to={"/HomePage"}>Acceuil</Link></li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to={"/SearchPage"}>Recherche</Link></li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to={"/WikiPage"}>Données Wikipédia</Link></li>
                </ul>

                    <ul className="navbar-nav">
               <li className="nav-item"> <SearchBar/> </li>
                    </ul>
                </div>
            </nav>

        </header>
        </div>
    )
}
export default Header