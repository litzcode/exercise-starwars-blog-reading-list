const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			loading: true
		},
		actions: {
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(resp => {
						console.log("GET people request: ", resp.ok);
						resp.status >= 200 && resp.status < 300
							? console.log("GET people successful, status: ", resp.status)
							: console.error("GET people failed, status: ", resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ people: data.results });
						console.log("People array: ", data.results);
					})
					.catch(error => console.error("GET people error: ", error));
			},

			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(resp => {
						console.log("GET planets request: ", resp.ok);
						resp.status >= 200 && resp.status < 300
							? console.log("GET planets successful, status: ", resp.status)
							: console.error("GET planets failed, status: ", resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ planets: data.results });
						console.log("Planets array: ", data.results);
					})
					.catch(error => console.error("GET planets error: ", error));
			},

			addFavorite: people => {
				const store = getStore();
				setStore({ favorites: store.favorites.concat(people.name) });
				console.log("Added favorites: ", store.favorites);
			},

			removeFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
				console.log("Removed favorites:", store.favorites);
			},

			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
