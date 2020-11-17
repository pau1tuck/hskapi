import React from "react";
import { Route, Switch } from "react-router-dom";
import { Flashcards } from "../modules/Flashcards/Flashcards";

export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path="/flashcards" component={Flashcards} />
			</Switch>
		</div>
	);
};
