// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Civitai | Developer Portal",
  tagline: "Documentation for Civitai APIs for use in your applications",
  url: "https://developer.civitai.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "civitai", // Usually your GitHub org/user name.
  projectName: "civitai-developer", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Civitai",
        logo: {
          alt: "Civitai",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            label: "API",
            position: "left",
            to: "/docs/api/intro",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/civitai",
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
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/civitai",
              },
              {
                label: "Discord",
                href: "https://civitai.com/discord",
              },
              {
                label: "X",
                href: "https://civitai.com/twitter",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/civitai",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Civitai, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "orchestration",
        docsPluginId: "classic",
        config: {
          orchestration: {
            specPath: "examples/orchestration.json",
            outputDir: "docs/api/orchestration",
            // downloadUrl:
            //   "https://image-generation.civitai.com/swagger/consumer-v1/swagger.json",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "some-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/civitai/civitai-javascript/master/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/api/sdk", // the base directory to output to.
        documents: ["README.md"], // the file names to download
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
