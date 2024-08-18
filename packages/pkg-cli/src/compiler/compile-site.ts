import { join } from 'path';
import { getSiteConfig } from './get-site-config.js';

import { SRC_DIR, SIDEBAR_FILE, DOCS_DIR } from '../common/constant.js';
import { execSync } from 'child_process';
import fse from 'fs-extra';
const { writeFileSync, copySync, existsSync, removeSync } = fse;

export async function compileSite(isProd = false) {
  const { nav } = getSiteConfig();
  const sidebar = nav.map((nav: { items: any[]; title: any }) => {
    let items: { text: any; link: string }[] = [];
    if (Array.isArray(nav.items) && nav.items.length > 0) {
      items = nav.items.map((item) => {
        //组件目标路径
        const componentDestPath = join(DOCS_DIR, item.path);
        //如果存在则删除
        if (existsSync(componentDestPath)) {
          removeSync(componentDestPath);
        }
        //组件源码路径
        const componentSrcPath = join(SRC_DIR, item.path);
        //如果存在则复制到固定位置
        if (existsSync(componentSrcPath)) {
          copySync(componentSrcPath, componentDestPath);
        }
        //判断docs下的md文档存不存在，存在则直接返回，不存在则使用组件下的README.md
        if (existsSync(join(DOCS_DIR, `/${item.path}.md`))) {
          return {
            text: item.title,
            link: `/${item.path}.md`,
          };
        }
        return {
          text: item.title,
          link: `/${item.path}/README.md`,
        };
      });
    }
    return { text: nav.title, items };
  });
  const sidebarTemplate = `export const sidebar = ${JSON.stringify(sidebar)}`;
  writeFileSync(SIDEBAR_FILE, sidebarTemplate);

  if (isProd) {
    // 编译文档
    buildDocs();
  } else {
    // 运行文档
    startDevServer();
  }
}

export async function startDevServer() {
  try {
    execSync(`vitepress dev docs`, {
      stdio: 'inherit',
    });

    console.log('');
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function buildDocs() {
  try {
    execSync(`vitepress build docs`, {
      stdio: 'inherit',
    });

    console.log('');
  } catch (err) {
    console.log(err);
    throw err;
  }
}
