import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fluently.`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "learning app to grind spanish",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDsCQpVPIgl9LBp0eWs-ibAk1ZdKishSPo",
          authDomain: "fluently-d1389.firebaseapp.com",
          projectId: "fluently-d1389",
          storageBucket: "fluently-d1389.appspot.com",
          messagingSenderId: "399565633167",
          appId: "1:399565633167:web:b4e042387e49eeecbee2fa",
        },
      },
    },
  ],
};

export default config;
