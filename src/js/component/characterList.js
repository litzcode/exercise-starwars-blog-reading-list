import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "./characterCard.js";
import { PropTypes } from "prop-types";

export const CharacterList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid card-deck overflow-auto p-3">
			<h3 className="text-danger">Characters</h3>
			<div className="d-flex flex-row flex-nowrap">
				{store.people.map((character, index) => {
					return <CharacterCard key={index} character={character} index={index} />;
				})}
			</div>
		</div>
	);
};
