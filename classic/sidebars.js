// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["installation", "configuration", "file-hierarchy"],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        title: "Homely Recipes Guides",
        description:
          "Let's learn about the most important Homely Recipes concepts!",
        keywords: ["guides"],
        image: "/img/docusaurus.png",
      },
      items: [
        "guides/deployment",
        "guides/cms",
        {
          type: "category",
          label: "Collections",
          link: {
            type: "doc",
            id: "guides/collections/introduction",
          },
          items: ["guides/collections/create-recipe"],
        },
        {
          type: "category",
          label: "Style Guide",
          link: {
            type: "doc",
            id: "guides/style/introduction",
          },
          items: ["guides/style/typography", "guides/style/theme"],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced Guides",
      link: { type: "doc", id: "advanced/index" },
      items: ["advanced/architecture", "advanced/web-components"],
    },
    "contributing-collaborating",
  ],
};

module.exports = sidebars;
