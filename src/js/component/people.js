import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

import img400x200 from "../../img/img400x200.png";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h3 className="text-danger">Characters</h3>
			<div className="card-deck">
				{store.people.map((item, index) => {
					return (
						<div className="card w-50" key={index} style={{ backgroundColor: "lightblue" }}>
							<img src={img400x200} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p>Gender: {item.gender}</p>
								<p>Hair Color: {item.hair_color}</p>
								<p>Eye Color: {item.eye_color}</p>
								<div>
									<Link to={"/people/" + index}>
										<button className="btn btn-primary">Learn more!</button>
									</Link>
									<span>
										<i className="far fa-heart" />
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
