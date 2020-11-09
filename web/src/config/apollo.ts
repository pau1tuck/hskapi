import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookie from "js-cookie";
import { cache } from "./cache";
import { typeDefs } from "./typeDefs";

const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphql/",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    typeDefs,
    cache,
});