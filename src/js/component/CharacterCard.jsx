import React, {useEffect, useContext, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

const CharacterCard = ({people, moreInfoPeople, favorites}) => {

    const { store, actions } = useContext(Context);
    const [planetName, setplanetName] = useState({})

    const getHomeWorld = async () => {
        const homeworldUrl = people?.properties.homeworld;
        let response = await actions.getOnePlanet(homeworldUrl);
        setplanetName(response);
    };

    useEffect(() =>{
        getHomeWorld()
    },[])


    return (
        <div className="card ms-lg-5 ms-md-4 me-sm-2" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${people?.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{people?.properties.name}</h5>
                <p className="card-text">{`Gender: ${people?.properties.gender}`}</p>
                <p className="card-text">{`Height: ${people?.properties.height} cm`}</p>
                <p className="card-text">{`Homeworld: ${planetName?.properties?.name}`}</p>
                <div className="d-flex justify-content-between w-100">
                    <Link to={`/people/${moreInfoPeople}`}className="btn btn-primary w-50">Learn More!</Link>
                    <a href="#" onClick={favorites} className= {store.favorites.includes(favorites) ? "": "btn btn-danger ml-auto w-25 me-3"}><FontAwesomeIcon icon={faHeart} /></a>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
