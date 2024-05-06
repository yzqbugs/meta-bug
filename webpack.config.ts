import path from "node:path";
import { UserScriptMetaDataPlugin } from "userscript-metadata-webpack-plugin";
import type { Configuration } from "webpack";
const optimization=process.env.optimize=='y'
console.log(optimization)
const conf: Configuration = {
  mode: "production",
  entry: {
    simple: "./src/index.js",
  },
  output: {
    
    path: path.resolve("dist"),
    filename: optimization?"violent.user.js":"noviolent.user.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  optimization: {
    minimize: optimization,
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata: {
        name: "violent",
        match: "*://**/*",
      },
    }),
  ],
};

export default conf;
