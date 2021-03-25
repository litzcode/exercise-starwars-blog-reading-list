import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dropdown pr-5">
			<a
				className="btn btn-primary dropdown-toggle"
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
			</a>

			<div className="dropdown-menu">
				{store.favorites.map((item, index) => {
					return (
						<a className="dropdown-item" key={index}>
							{item}{" "}
							<span onClick={() => actions.removeFavorite(index)}>
								<i className="fas fa-trash-alt float-right" />
							</span>
						</a>
					);
				})}
			</div>
		</div>
	);
};
