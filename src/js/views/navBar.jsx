import React, {useContext} from "react";
import "../../styles/component/navBar.css"
import { Context } from "../store/appContext.jsx";
import starWarsLogo from "../../img/star-wars-logo-994.png";


const NavBar = () =>{
    const {store,actions} =  useContext(Context);

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid pt-2">
                <a className="navbar-brand" href="#"><img className="img-fluid custom-img" src={starWarsLogo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favorites {store.favorites.length}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-center">
                                    {
                                        store.favorites.map((item) => {
                                            return (
                                                <li className="d-flex px-2">
                                                    <a className="dropdown-item" href="#">{item.properties.name}</a>
										            <span onClick={() => actions.deleteFav(item)}><i class="far fa-trash-alt"></i></span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;