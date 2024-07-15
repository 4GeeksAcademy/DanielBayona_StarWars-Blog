import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

const StarshipsCard = ({starships, moreStarshipsInfo, favorites}) =>{
   
    const { store, actions } = useContext(Context);

return(
    <div className="card ms-lg-5 ms-md-4 me-sm-2" style={{width: "18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${starships?.uid}.jpg`} className="card-img-top img-fluid" alt="..." />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{starships?.properties.name}</h5>
            <p className="card-text">{`Crew Number: ${starships?.properties.crew}`}</p>
            <p className="card-text">{`Passangers: ${starships?.properties.passengers}`}</p>
            <p className="card-text">{`Length: ${starships?.properties.length}`}</p>
            <div className="d-flex justify-content-between w-100">
                <Link to={`/starships/${moreStarshipsInfo}`}className="btn btn-primary w-50">Learn More!</Link>
                <a href="#" onClick={favorites} className= {store.favorites.includes(favorites) ? "": "btn btn-danger ml-auto w-25 me-3"}><FontAwesomeIcon icon={faHeart} /></a>
            </div>
        </div>
    </div>
)
}


export default StarshipsCard;