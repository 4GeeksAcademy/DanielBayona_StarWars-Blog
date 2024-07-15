import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";


const PlanetCard = ({planets, moreInfoPlanets, favorites})=>{
    const {store, actions} = useContext(Context);
    return(
        <div className="card ms-lg-5 ms-md-4 me-sm-2" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planets?.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{planets?.properties.name}</h5>
                <p className="card-text">{`Climate: ${planets?.properties.climate}`}</p>
                <p className="card-text">{`Terrain: ${planets?.properties.terrain}`}</p>
                <p className="card-text">{`Surface Water: ${planets?.properties.surface_water}`}</p>
                <div className="d-flex justify-content-between w-100">
                    <Link to={`/planets/${moreInfoPlanets}`} className="btn btn-primary w-50">Learn More!</Link>
                    <a href="#" onClick={favorites} className= {store.favorites.includes(favorites) ? "": "btn btn-danger ml-auto w-25 me-3"}><FontAwesomeIcon icon={faHeart} /></a>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard