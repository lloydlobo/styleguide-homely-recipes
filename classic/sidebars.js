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
        description:
          "Let's learn about the most important Homely Recipes concepts!",
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
            type: "generated-index",
            title: "Brand Style Guide",
            description:
              "Guide to customize brand design, theme, website, and other assets.",
            keywords: ["style"],
            image: "/img/docusaurus.png",
          },
          items: [
            "guides/style/introduction",
            "guides/style/typography",
            "guides/style/theme",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced Guides",
      link: {
        type: "doc",
        id: "advanced/index",
      },
      items: [
        "advanced/architecture",
        "advanced/web-components",
        {
          type: "category",
          label: "Semantic Elements",
          link: {
            type: "generated-index",
            title: "Semantic Elements",
            description:
              "With semantic elements, we question, `What is its purpose?` rather than `What does it look like?`",
            keywords: ["semantic", "element", "semantics"],
            image: "/img/docusaurus.png",
          },
          items: [
            "advanced/semantics/introduction",
            "advanced/semantics/languages",
            "advanced/semantics/html-elements",
          ],
        },
        {
          type: "category",
          label: "Accessibility",
          link: {
            type: "generated-index",
            title: "Accessibility Overview",
            description:
              "Learn about accessibility features adopted in Homely Recipes.",
            keywords: ["accessibility", "a11y"],
            image: "/img/docusaurus.png",
          },
          items: ["advanced/a11y/introduction", "advanced/a11y/guidelines"],
        },
      ],
    },
    "contributing-collaborating",
  ],
};

module.exports = sidebars;
