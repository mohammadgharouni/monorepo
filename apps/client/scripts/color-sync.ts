import { Config } from "tailwindcss";

import chalk from "chalk";
import glob from "fast-glob";
import fs from "fs/promises";
import { createRequire } from "module";
import path from "path";
import prettier from "prettier";
import { RecursiveKeyValuePair } from "tailwindcss/types/config";
import { searchForWorkspaceRoot } from "vite";

const require = createRequire(import.meta.url);

type DeepRequired<T> = {
  [K in keyof T]-?: NonNullable<DeepRequired<T[K]>>;
};

const cwd = searchForWorkspaceRoot(process.cwd());

const BASE_TW_PATTERN = "packages/configs/tailwindcss/index.ts";

function normalize(colors: RecursiveKeyValuePair): RecursiveKeyValuePair {
  const result: RecursiveKeyValuePair = {};

  for (const key in colors) {
    if (key in colors) {
      const newKey = key.replace(/-/g, "_");
      result[newKey] = colors[key];
    }
  }

  return result;
}

async function readTWConfigColors(path: string, extend = false) {
  const configs: DeepRequired<Config> = require(path).default;

  if (extend) return configs?.theme?.extend?.colors;

  return configs?.theme?.colors;
}

function template(colors: RecursiveKeyValuePair<string, string>) {
  const s1 = `// this file is auto-generated`;
  const s2 = `const colors = ${JSON.stringify(colors)} as const`;
  const s3 = `type ColorScheme = typeof colors`;
  const s4 = `export { colors }`;
  const s5 = `export type { ColorScheme }`;

  const tokens = [s1, s2, s3, s4, s5];

  return tokens.join("\n\n");
}

async function syncColors() {
  const [baseTailwindPath] = await glob(BASE_TW_PATTERN, {
    absolute: true,
    cwd,
  });

  const baseColors = await readTWConfigColors(baseTailwindPath);

  const normalizedBaseColors = normalize(baseColors ?? {});

  const prettierOptions = await prettier.resolveConfig(cwd);

  const content = await prettier.format(template(normalizedBaseColors), {
    ...(prettierOptions ?? {}),
    parser: "babel-ts",
  });

  const dest = path.resolve(cwd, "packages/logic/src/theme/index.ts");

  fs.writeFile(dest, content);
}

syncColors()
  .then(() =>
    console.info(
      `\n${chalk.greenBright("[SUCCESS]")} The tailwind colors are synced\n`
    )
  )
  .catch(console.error);
