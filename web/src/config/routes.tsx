import React from "react";
import { Route, Switch } from "react-router-dom";
import { Flashcard } from "../modules/Flashcards/Flashcard";

export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path="/flashcards" component={Flashcard} />
			</Switch>
		</div>
	);
};
