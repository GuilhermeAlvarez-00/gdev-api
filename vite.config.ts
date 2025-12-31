/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  test: {
    environment: "node"
  },
  plugins: [tsconfigPaths({
    projects: ["./tsconfig.json"]
  })]
})
