module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "First tutorial site",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-background-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `news`,
        path: `${__dirname}/news`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `music`,
        path: `${__dirname}/mp3`,
      }
    },
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet"
  ],
};
