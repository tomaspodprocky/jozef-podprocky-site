module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "First tutorial site",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-background-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
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
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-transformer-csv",
      options: {
        delimiter: 'auto'
      }
    },
    "gatsby-transformer-json",
    "react-h5-audio-player"
  ],
};
