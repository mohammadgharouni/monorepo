import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default () => {
  console.log(11, path.resolve(__dirname, "apps/client/src/*"));
  console.log("jjhi");
  return defineConfig({
    plugins: [tsconfigPaths(), react()],

    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
        },
      },
    },
  });
};
