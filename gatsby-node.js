// exports.createSchemaCustomization = ({ actions }) => {
//     const { createTypes } = actions
//     const typeDefs = `
//       type Mdx implements Node {
//         frontmatter: MdxFrontmatter
//       }
//       type MdxFrontmatter {
//         title: String
//         date: Date
//         slug: String
//       }
//     `
//     createTypes(typeDefs)
//   }