export interface App {
  name: string;
  path: string;
  description: string;
  tags: string[];
}

// Central configuration for all mini apps
// Add your apps here following the naming convention for paths
export const apps: App[] = [
  // Example:
  // {
  //   name: "Liquid Button",
  //   path: "/css-liquid-button",
  //   description: "A button with a mesmerizing liquid hover effect using CSS",
  //   tags: ["css", "animation"]
  // },
];
