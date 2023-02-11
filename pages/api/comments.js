/*
Any file inside the pages/api directory is mapped to /api/* and will be treated as an API endpoint instead of a page.
*/


import { GraphQLClient ,gql } from "graphql-request";
const graphQLAPI =process.env.NEXT_PUBLIC_GRAPHQL_API;
const graphcmsToken = process.env.NEXT_PUBLIC_STRAPI_JWT

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient((graphQLAPI),{
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const query = gql`
      mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) {
        id
      }
    }`;

    // const result = await graphQLClient.request(query, req.body);
    // return res.status(200).send(result);

    try{
      const result = await graphQLClient.request(query, req.body);
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
     
}