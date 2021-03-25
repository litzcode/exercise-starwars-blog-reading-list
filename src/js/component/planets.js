import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

import img400x200 from "../../img/img400x200.png";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h3 className="text-danger">Planets</h3>
			<div className="card-deck">
				{store.planets.map((item, index) => {
					return (
						<div className="card w-50" key={index} style={{ backgroundColor: "lightblue" }}>
							<img src={img400x200} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p>Population: {item.population}</p>
								<p>Terrain: {item.terrains}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
