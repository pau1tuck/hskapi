import React from "react";
import { Route, Switch } from "react-router-dom";
import { Flashcards } from "../modules/Flashcards";
import "../styles/reset.css";

export const Routes = () => {
    return <div>Hello, Shite Eater.
        <Switch>
            <Route path="/flashcards/:id" component={Flashcards} />
        </Switch>
    </div>
}