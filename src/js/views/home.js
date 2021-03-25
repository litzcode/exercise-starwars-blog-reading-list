import React from "react";
import "../../styles/home.scss";

import { People } from "../component/people.js";
import { Planets } from "../component/planets.js";

export const Home = () => (
	<div>
		<People />

		<Planets />
	</div>
);
