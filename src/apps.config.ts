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
  {
    name: "Gradient Text That Warps to Cursor",
    path: "/css-gradient-text-warp",
    description:
      "3D-looking text that bends depending on pointer location using perspective transforms and dynamic gradient positioning",
    tags: ["css", "javascript", "3d", "gradient"],
  },
  {
    name: "CSS Only 3D Rotating Cube",
    path: "/css-3d-rotating-cube",
    description:
      "Perspective-perfect 3D cube with six uniquely styled faces that continuously rotates. Hover to pause and inspect each face in detail",
    tags: ["css", "3d", "animation", "perspective"],
  },
  {
    name: "Peel Off Corner Effect",
    path: "/css-peel-off-corner",
    description:
      "Realistic paper-lifting corner effect perfect for tooltips and news cards using conic-gradient, clip-path animations, and dynamic shadows",
    tags: ["css", "animation", "3d", "clip-path"],
  },
];
