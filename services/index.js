import { graphql } from "graphql";
import { Request , gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;

export const getPost = async ()=>{
    const query = gql`
        query Assets {
  postsConnection {
    edges {
      node {
        author {
          bio
          id
          name
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}

    `;

    const data = await Request(graphqlAPI, query);
    return data.postsConnection.edges;
}