import { join } from 'path';
import fse from 'fs-extra';
const { existsSync } = fse;
import { pathToFileURL } from 'node:url';
import { dirname } from 'node:path';

function findRootDir(dir: string): string {
  if (existsSync(join(dir, 'pkg.config.mjs'))) {
    return dir;
  }

  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}
export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);
export const ES_DIR = join(ROOT, 'es');
export const LIB_DIR = join(ROOT, 'lib');
export const DOCS_DIR = join(ROOT, 'docs');
export const PKG_CONFIG_FILE = join(ROOT, 'pkg.config.mjs');

export async function getVantConfigAsync() {
  try {
    // https://github.com/nodejs/node/issues/31710
    // absolute file paths don't work on Windows
    // import()导入默认会有缓存，加入时间戳避免缓存
    return (
      await import(
        pathToFileURL(PKG_CONFIG_FILE).href + `?time=${new Date().getTime()}`
      )
    ).default;
  } catch (err) {
    return {};
  }
}

export async function getNavConfig() {
  const vantConfig = await getVantConfigAsync();

  return [...vantConfig.site.nav];
}

export const SIDEBAR_FILE = join(ROOT, 'docs/.vitepress/sidebar.ts');
