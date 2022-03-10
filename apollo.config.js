module.exports = {
  client: {
    includes: ["./graphql/**/*.ts"],
    service: {
      name: "pokeapi-graphql",
      url: "https://beta.pokeapi.co/graphql/v1beta",
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
  },
};
