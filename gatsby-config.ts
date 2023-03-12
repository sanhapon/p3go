import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `p3go ประกันรถ`,
    siteUrl: `http://www.p3go.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mdx-frontmatter",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'http://www.p3go.com/sitemap.xml',
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '.',
        excludes: [
          `/404/`,
          `/privacy`,
          `/term-condition/`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-excerpts",
      options: {
          "sources": {
              "default": {
                  "truncate": {
                      "length": 3,
                      "byWords": true,
                      "ellipsis": "…"
                  },
              }
          },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/files/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/static/data`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        name: `data`,
        typeName: `Json`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-images',
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/**/*.html': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
          '/**/*.json': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
          '/**/*.js': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/**/*.css': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/images/**/*.jpg': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/fonts/**/*.ttf': [
            'cache-control: public, max-age=31536000, immutable',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-QC161MCRM2",
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ]
};

export default config;
