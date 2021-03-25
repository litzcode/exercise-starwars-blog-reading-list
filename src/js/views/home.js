import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

import { CharacterList } from "../component/characterList.js";
import { PlanetList } from "../component/planetList.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<CharacterList />
			<PlanetList />
		</div>
	);
};
