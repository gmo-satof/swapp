module.exports = {
  client: {
    name: 'client',
    includes: ['./src/**/*.{ts,tsx,graphql}'],
    tagName: 'gql',
    addTypename: true,
    service: {
      // remote endpoint
      name: 'sever',
      url: 'http://localhost:8080',
    },
  },
};
