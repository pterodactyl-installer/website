// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const prismDarkTheme = require("prism-react-renderer/themes/nightOwl");
const prismLightTheme = require("prism-react-renderer/themes/nightOwlLight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pterodactyl Installer",
  tagline:
    "Unofficial scripts for installing Pterodactyl Panel & Wings. Works with the latest version of Pterodactyl!",
  url: "https://pterodactyl-installer.se",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pterodactyl-installer",
  projectName: "pterodactyl-installer",

  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/pterodactyl-installer/website/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Pterodactyl Installer",
        logo: {
          alt: "Pterodactyl Installer logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/vilhelmprytz/pterodactyl-installer",
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
                label: "Discord",
                href: "https://pterodactyl-installer.se/discord",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/vilhelmprytz/pterodactyl-installer",
              },
            ],
          },
        ],
        copyright: `Copyright © 2018 - ${new Date().getFullYear()} pterodactyl-installer. Built with Docusaurus. Maintained by Vilhelm Prytz.`,
      },
      prism: {
        theme: prismLightTheme,
        darkTheme: prismDarkTheme,
      },
    }),
};

module.exports = config;
