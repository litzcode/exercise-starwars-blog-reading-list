import React from "react";
import "../../styles/home.scss";

import { CharacterList } from "../component/characterList.js";
import { PlanetList } from "../component/planetList.js";

export const Home = () => (
	<div className="container">
		<CharacterList />
		<PlanetList />
	</div>
);
