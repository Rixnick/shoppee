import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';
import cookie from 'cookie'
//Link Uri
//const uri = process.env.BACKEND_URI
const uri = 'http://54.255.10.30/graphql'
//Create Http Linl
const httpLink = createHttpLink({uri, fetch});

let cookies
//Set Authorization Link
const authLink = setContext((_, {headers}) => {
  //Get token from cookies
  

  //Server Side 
  if(headers) {
    cookies = cookie.parse(header.cookie || '')
  }

  //Client side
  if(typeof window !== 'undefined'){
    cookies = cookie.parse(document.cookie || '')
  }

  const token = cookies && cookies.jwtToken || ''
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})


export default withApollo(({ initialState }) => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
},
//  {
//     render: ({ Page, props }) => {
//       return (
//         <ApolloProvider client={props.apollo}>
//           <Page {...props} />
//         </ApolloProvider>
//       );
//     }
//   }
);