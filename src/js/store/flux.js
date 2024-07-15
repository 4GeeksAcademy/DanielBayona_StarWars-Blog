const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			starships: JSON.parse(localStorage.getItem("starships")) || [],
			favorites: []
			
			
		},
		actions: {
			getAllPeople: async () =>{		
				const store = getStore();
				try {
					if(store.people <= 0){
						let response = await fetch(`${store.urlBase}/people?page=1&limit=20`)
						let data = await response.json()

						for(let item of data.results){
							let responseDetail = await fetch(`${item.url}`)
							let dataDetail = await responseDetail.json();
							console.log(dataDetail.result);
							setStore({
								people: [...store.people, dataDetail.result]
							})
						}

						localStorage.setItem("people", JSON.stringify(store.people))
					}
				} catch (error) {
					console.log(error);
				}
			},
			getAllPlanets: async () =>{
				const store = getStore();
				try {
					if(store.planets <= 0){
					let response = await fetch(`${store.urlBase}/planets?page=1&limit=10`)
					let data = await response.json();

					for(let item of data.results){
						let responseDetail = await fetch(`${item.url}`)
						let dataDetail = await responseDetail.json();
						console.log(dataDetail.result);
						setStore({
							planets: [...store.planets, dataDetail.result]
						})
					}
						localStorage.setItem('planets', JSON.stringify(store.planets))
					}
				} catch (error) {
					console.log(error);
				}		
			},
			getOnePlanet: async (urlPlanet) => {
				try {
					let response = await fetch(urlPlanet)
					let data = await response.json();

					if(response.ok){
					return data["result"];
					}
				} catch (error) {
					console.log(error);
				}
      		},
			getAllStarships: async () =>{
				const store = getStore();
				try {
					if(store.starships <= 0){
						let response = await fetch(`${store.urlBase}/starships?page=1&limit=10`)
						let data = await response.json();

						for(let item of data.results){
							let responseDetail = await fetch(`${item.url}`)
							let datadDetail = await responseDetail.json();
							console.log(datadDetail.result);
							setStore({
								starships: [...store.starships, datadDetail.result]
							})
						}
						localStorage.setItem('starships', JSON.stringify(store.starships))
					
					}
				} catch (error) {
					console.log(error);
				}
			},
			addFavorites: (favorite) =>{
				let store = getStore();
				let exists = store.favorites.some((item) => item._id === favorite._id)

				if(exists){
					let newFav = store.favorites.filter((item) => item._id != favorite._id)
					setStore({
						favorite: newFav
					})
				} else{
					setStore({
						favorites: [...store.favorites, favorite]
					})
				}
			},
			deleteFav: (favorite) =>{
				let store = getStore()
				let newFav = store.favorites.filter((item) => item._id != favorite._id)
				setStore({
					favorites: newFav
				})
			}

		}
	};
};

export default getState;
