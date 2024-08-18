import fse from 'fs-extra';
import { compileSite } from '../compiler/compile-site.js';
import { SITE_DIST_DIR } from '../common/constant.js';

export async function buildSite() {
  await fse.emptyDir(SITE_DIST_DIR);
  await compileSite(true);
}
