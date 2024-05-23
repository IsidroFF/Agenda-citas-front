import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const getClient = () => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql'
        }),
    });
};
