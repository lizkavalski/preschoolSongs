module.exports = {
  siteMetadata: {
      title: `PreschoolSongs`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};