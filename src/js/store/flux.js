const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || []
			
		},
		actions: {
			getAllPeople: async () =>{
				const store = getStore();
				try {
					if(store.people <= 0){
						let response = await fetch(`${store.urlBase}/people`)
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
				let response = await fetch(`${store.urlBase}/planets`)
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
		}
		}
	};
};

export default getState;
