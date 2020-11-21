import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo";
import { Loading } from "./components/Loading";
import { Routes } from "./config/routes";
import "./sass/style.scss";

const App = ({ children }: any) => {
	return (
		<ApolloProvider client={client}>
			<Suspense fallback={<Loading />}>
				<HashRouter>
					<Routes />
				</HashRouter>
			</Suspense>
		</ApolloProvider>
	);
};

export default App;
