import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo";
import { Loading } from "./components/Loading";

const App = ({ children }: any) => {
    return (
        <ApolloProvider client={client}>
            <Suspense fallback={<Loading />}>
                <HashRouter>
                    <div></div>
                </HashRouter>
            </Suspense>
        </ApolloProvider>
    );
};

export default App;