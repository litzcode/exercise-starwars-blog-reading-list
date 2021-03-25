import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "./planetCard.js";
import { PropTypes } from "prop-types";

export const PlanetList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid card-deck overflow-auto p-3 my-3">
			<h3 className="text-danger">Planets</h3>
			<div className="d-flex flex-row flex-nowrap">
				{store.planets.map((planet, index) => {
					return <PlanetCard key={index} planet={planet} index={index} />;
				})}
			</div>
		</div>
	);
};
