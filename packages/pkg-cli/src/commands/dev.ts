import { compileSite } from '../compiler/compile-site.js';

export async function dev() {
  await compileSite();
}
