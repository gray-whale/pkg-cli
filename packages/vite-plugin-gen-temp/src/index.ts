import fse from 'fs-extra';
import chokidar from 'chokidar';
import { join } from 'path';
import {
  DOCS_DIR,
  getNavConfig,
  PKG_CONFIG_FILE,
  SIDEBAR_FILE,
} from './constant';
const { existsSync, writeFileSync } = fse;

// vite-plugin
export function genTemp() {
  return {
    name: 'vite-plugin-gen-temp',
    config: () => {
      if (process.env.NODE_ENV === 'development') {
        genComponents();
        // 监听单个文件
        chokidar
          .watch(PKG_CONFIG_FILE, {
            persistent: true,
          })
          .on('change', () => genConfig());
      }
    },
  };
}

function genComponents() {
  const globSource = `${join(process.cwd(), 'src')}/**`;
  const docsDir = join(process.cwd(), 'docs/components');

  const copyFile = (file: string) => {
    const destPath = join(docsDir, file.replace(new RegExp(`^src`), ''));
    fse.copySync(join(process.cwd(), file), destPath);
  };

  chokidar
    .watch(globSource, {
      cwd: process.cwd(),
      ignored: [],
      ignoreInitial: true,
      persistent: true,
    })
    .on('change', copyFile)
    .on('add', copyFile)
    .on('unlink', (file) => {
      const destPath = join(docsDir, file.replace(new RegExp(`^src`), ''));
      // 如果文件存在则删除
      if (existsSync(destPath)) {
        fse.removeSync(destPath);
      }
    });
}

async function genConfig() {
  const nav = await getNavConfig();
  console.log('编译config', JSON.stringify(nav));
  const sidebar = nav.map((nav: { items: any[]; title: any }) => {
    let items: { text: any; link: string }[] = [];
    if (Array.isArray(nav.items) && nav.items.length > 0) {
      items = nav.items.map((item) => {
        //判断docs下的md文档存不存在，存在则直接返回，不存在则使用组件下的README.md
        if (existsSync(join(DOCS_DIR, `/components/${item.path}.md`))) {
          return {
            text: item.title,
            link: `/components/${item.path}.md`,
          };
        }
        return {
          text: item.title,
          link: `/components/${item.path}/README.md`,
        };
      });
    }
    return { text: nav.title, items };
  });
  const sidebarTemplate = `export const sidebar = ${JSON.stringify(sidebar)}`;
  writeFileSync(SIDEBAR_FILE, sidebarTemplate);
}
