import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

//import img400x200 from "../../img/img400x200.png";

export const FavoritesList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h3 className="text-danger">Favorites List</h3>
			<div className="bg-light">
				{store.favorites.map((item, index) => {
					let peopleId = store.people
						.map(function(o) {
							return o.name;
						})
						.indexOf(item);

					let planetId = store.planets
						.map(function(o) {
							return o.name;
						})
						.indexOf(item);

					return (
						<Link to={peopleId !== -1 ? "/people/" + peopleId : "/planet/" + planetId} key={index}>
							<button className="btn btn-outline-success m-2">{item}</button>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
