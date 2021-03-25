import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dropdown">
			<button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenu2"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
				<button className="dropdown-item" type="button">
					Action
				</button>
				<button className="dropdown-item" type="button">
					Another action
				</button>
				<button className="dropdown-item" type="button">
					Something else here
				</button>
			</div>
		</div>
	);
};
