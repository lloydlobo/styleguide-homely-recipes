// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Homely Recipes Documentation",
  tagline: "Recipes are cool. Why re-invent the wheel!",
  url: "https://lloydlobo.github.io/",
  baseUrl: "/styleguide-homely-recipes/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lloydlobo", // Usually your GitHub org/user name.
  projectName: "styleguide-homely-recipes", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Homely Recipes Documentation",
        logo: {
          alt: "Homely Recipes Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          { to: "/downloads", label: "Downloads", position: "left" },
          {
            href: "https://github.com/lloydlobo/homely-recipes/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Installing and configuring",
                to: "/docs/category/getting-started",
              },
              {
                label: "Style guide",
                to: "/docs/category/style-guide",
              },
              {
                label: "Components",
                to: "/docs/advanced/web-components",
              },
              {
                label: "Contributing and collaborating",
                to: "/docs/contributing-collaborating",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Octavia Recipes",
                href: "https://octavia.app/",
              },
              {
                label: "Material Design",
                href: "https://material.io/",
              },
              {
                label: "MDN Web Docs",
                href: "https://developer.mozilla.org/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Visit Homely Recipes",
                href: "https://homelyrecipes.netlify.app/",
                // to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/lloydlobo/homely-recipes/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Homely Recipes. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // ...
  themes: ["@saucelabs/theme-github-codeblock"],
  // ...
};

module.exports = config;
