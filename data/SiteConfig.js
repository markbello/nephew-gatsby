const config = {
  siteTitle: "Mark Bello", // Site title.
  siteTitleShort: "Nephew Apps - Mark Bello", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Mark Bello, Full-Stack Engineer", // Alternative site title for SEO.
  siteLogo: "/logos/mark_bello_favicon.svg", // Logo used for SEO and manifest.
  siteUrl: "https://www.nephewapps.com", // Domain of your website without pathPrefix.
  pathPrefix: "/nephew-gatsby", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Portfolio and Blog for Mark Bello, Web Designer turned Front-End Developer turned Full-Stack Engineer.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Mark Bello", // Username to display in the author segment.
  userEmail: "mark.bello.person@icloud.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "New York, NY, USA", // User location to display in the author segment.
  userAvatar: "/assets/mark_bello.jpg", // User avatar to display in the author segment.
  userDescriptionParagraph1:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people. 👈This was actually boilerplate from the original Gatsby starter, but I'm keeping it anyway.", // User description to display in the author segment.
  userDescriptionParagraph2:
    "As you can tell from the picture, I also like ice cream. As a professional software engineer though, I like Javascript the best. I started as a web designer working with Wordpress, HTML, and CSS. Then I went deep on React/Redux as a Front-End Engineer at American Express. Now I'm moving into full-stack territory, handling everything from API architecture to QA to front-end.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/markbello",
      iconClassName: "fa fa-github"
    },
    {
      label: "Email",
      url: "mailto:mark.bello.person@icloud.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Mark Bello" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
