/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  autoLastmod: true,
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000,
  changefreq: "weekly",
  transform: async (config, path) => {
    let priority = 0.7;//default
    let changefreq = "weekly";

    if (path ===  "/") {
      priority = 1.0;
      changefreq = "daily";
    }
    if (path === "/about") {
      priority = 0.8;
      changefreq = "weekly";
    }
    //todo add more pages
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next", "/api"],
      },
    ],
  }
}