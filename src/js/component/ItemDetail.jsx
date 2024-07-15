import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import AnimatedBackground from "./backGround.jsx";
import Spinner from "./Spinner.jsx";
import { Link } from "react-router-dom";

const ItemDetail = () => {
  const { nature, id } = useParams();
  const { store, actions } = useContext(Context);
  const [details, setDetails] = useState(null);
  const [planetName, setPlanetName] = useState({});

  const getHomeWorld = async (homeworldUrl) => {
    try {
      let response = await actions.getOnePlanet(homeworldUrl);
      setPlanetName(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryofDetails = async () => {
    let data;
    if (nature === 'people') {
      data = store.people.find(person => person._id === id);
      if (data) {
        await getHomeWorld(data.properties.homeworld);
      }
    } else if (nature === 'starships') {
      data = store.starships.find(starship => starship._id === id);
    } else if (nature === 'planets') {
      data = store.planets.find(planet => planet._id === id);
    } else {
      data = null;
    }

    setDetails(data);
  };

  useEffect(() => {
    getCategoryofDetails();
  }, [nature, id, store]);

   if (!details) return  (<><AnimatedBackground/> <Spinner color="yellow" size={100} /></>);

  return (
    <>
    <AnimatedBackground/>
      {
        nature === "people" ?
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="card mb-3 bg-transparent text-white border border-0" style={{ maxWidth: "1200px" }}>
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12 d-flex align-items-center">
                            <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${details?.uid}.jpg`}
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card-body">
                                <h5 className="card-title fs-1">{details?.properties.name}</h5>
                                <p className="card-text fs-md-3 fs-sm-5">{`Date of birth: ${details?.properties.birth_year}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Eye color: ${details?.properties.eye_color}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Gender: ${details?.properties.gender}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Hair Color: ${details?.properties.hair_color}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Home World: ${planetName?.properties?.name}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Height: ${details?.properties.height}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Mass: ${details?.properties.mass}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Skin color: ${details?.properties.skin_color}`}</p>
                            </div>
                            <div className="card-footer text-white">
                                <p className="card-text">About the character: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis iste non quae iusto, excepturi perspiciatis expedita aliquid, reiciendis, nihil pariatur doloremque error. Repellendus, delectus dolorem quas ullam voluptatibus pariatur.</p>
                                <Link to="/" className="text-white fs-5"> Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:
          nature === "starships" ?
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="card mb-3 bg-transparent text-white border border-0" style={{ maxWidth: "1200px" }}>
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12 d-flex align-items-center">
                            <img
                            src={`https://starwars-visualguide.com/assets/img/starships/${details?.uid}.jpg`}
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card-body">
                                <h5 className="card-title fs-1">{details?.properties.name}</h5>
                                <p className="card-text fs-md-3 fs-sm-5">{`Cargo capacity: ${details?.properties.cargo_capacity}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Consumables: ${details?.properties.consumables}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Cost in credits: ${details?.properties.cost_in_credits}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Crew: ${details?.properties.crew}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Hyperdrive rating: ${details?.properties?.hyperdrive_rating}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Manufacturer: ${details?.properties.manufacturer}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Mass: ${details?.properties.mass}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Model: ${details?.properties.model}`}</p>
                            </div>
                            <div className="card-footer text-white">
                                <p className="card-text">About the Starship: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis iste non quae iusto, excepturi perspiciatis expedita aliquid, reiciendis, nihil pariatur doloremque error. Repellendus, delectus dolorem quas ullam voluptatibus pariatur.</p>
                                <Link to="/" className="text-white fs-5"> Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
            nature === "planets" ?
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="card mb-3 bg-transparent text-white border border-0" style={{ maxWidth: "1200px" }}>
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12 d-flex align-items-center">
                            <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${details?.uid}.jpg`}
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card-body">
                                <h5 className="card-title fs-1">{details?.properties.name}</h5>
                                <p className="card-text fs-md-3 fs-sm-5">{`Climate: ${details?.properties.climate}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Diameter: ${details?.properties.diameter}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Gravity: ${details?.properties.gravity}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Orbital period: ${details?.properties.orbital_period}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Population: ${details?.properties?.population}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Rotation_period: ${details?.properties.rotation_period}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Surface water: ${details?.properties.surface_water}`}</p>
                                <p className="card-text fs-md-3 fs-sm-5">{`Terrain: ${details?.properties.terrain}`}</p>
                            </div>
                            <div className="card-footer text-white">
                                <p className="card-text">About the planet: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis iste non quae iusto, excepturi perspiciatis expedita aliquid, reiciendis, nihil pariatur doloremque error. Repellendus, delectus dolorem quas ullam voluptatibus pariatur.</p>
                                <Link to="/" className="text-white fs-5"> Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null
      }
    </>
  );
};

export default ItemDetail;
