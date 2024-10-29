import { GraphQLClient, gql } from 'graphql-request';

async function insertData(data, config) {
  const client = new GraphQLClient(config.endpoint, {
    headers: config.headers,
  });

  for (let row of data) {
    const mutation = gql`
      mutation($input: YourInputType!) {
        createYourEntity(input: $input) {
          id
        }
      }
    `;
    await client.request(mutation, { input: row });
  }
  console.log('Data inserted via GraphQL successfully');
}

export default { insertData };
