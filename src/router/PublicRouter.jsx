import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Main } from "views";
import Appbar from "components/appbar/Navbar";
import TestReducer from "contexts/TestContext";

export const PublicRouter = () => {
	return (
		<TestReducer>
			<BrowserRouter>
				<Appbar />
				<Switch>
					<Route path="/main" component={Main} />
				</Switch>
				<Redirect from="/" to="/main" />
			</BrowserRouter>
		</TestReducer>
	);
};
