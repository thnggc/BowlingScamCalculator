import type { NextConfig } from "next";
import { BASE_PATH_NAME } from "./app.config";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${BASE_PATH_NAME}`,
};

export default nextConfig;
