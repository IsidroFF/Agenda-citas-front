import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "http://localhost:4000/"
        }),
    });
})