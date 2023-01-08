
export interface Frontmatter {
    title: string,
    date: string,
    slug: string,
    category: string,
}
export interface BlogData {
    id: string,
    frontmatter: Frontmatter,
    excerpt: string,
    body: string
}
