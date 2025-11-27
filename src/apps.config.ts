export interface App {
  name: string;
  path: string;
  description: string;
  tags: string[];
}

// Central configuration for all mini apps
// Add your apps here following the naming convention for paths
export const apps: App[] = [
  {
    name: "CSS Only Liquid Button",
    path: "/css-liquid-button",
    description:
      "Liquid/gel effects using clip-path, filter: blur(), and moving pseudo-elements with gooey SVG filter and fluid ripple effects",
    tags: ["css", "animation", "blend-mode"],
  },
];
