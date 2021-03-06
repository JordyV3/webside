const fs = require("fs/promises");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

(async () => {
  const feed = new RSS({
    title: "JORDY VEGA - Desarrollador Web",
    description:
      "Web y blog sobre desarrollo web",
    site_url: "https://jordyvega.com.gt/",
    feed_url: "https://jordyvega.com.gt/rss.xml",
    webMaster: "Jordy Vega",
    copyright: `2022-${new Date().getFullYear()} Jordy Vega`,
    language: "es",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "posts"));

  await Promise.all(
    posts.map(async (file) => {
      const content = await fs.readFile(
        path.join(__dirname, "..", "data", "posts", file)
      );
      const frontmatter = matter(content);
      const item = {
        title: frontmatter.data.title,
        url: `https://jordyvega.com.gt/${file.replace(/\.mdx?/, "")}`,
        date: frontmatter.data.date,
      };
      if (frontmatter.data?.summary) {
        item.description = frontmatter.data.summary;
      }
      if (frontmatter.data?.tags) {
        item.categories = frontmatter.data.tags;
      }

      feed.item(item);
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
  console.log(`🚀 RSS Genearated for ${posts.length} posts`);
})();
