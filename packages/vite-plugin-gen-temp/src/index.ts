import fse from 'fs-extra';
import chokidar from 'chokidar';
import { join } from 'path';
const { existsSync } = fse;

// vite-plugin
export function genTemp() {
  return {
    name: 'vite-plugin-gen-temp',
    config: () => {
      genTempDocs();
    },
  };
}

function genTempDocs() {
  const globSource = `${join(process.cwd(), 'src')}/**`;
  const docsDir = join(process.cwd(), 'docs');

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
