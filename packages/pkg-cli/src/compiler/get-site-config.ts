import { getVantConfig } from '../common/index.js';

function getTitle(config: { title: string; description?: string }) {
  let { title } = config;

  if (config.description) {
    title += ` - ${config.description}`;
  }

  return title;
}

function getHTMLMeta(vantConfig: any) {
  const meta = vantConfig.site?.htmlMeta;

  if (meta) {
    return Object.keys(meta)
      .map((key) => `<meta name="${key}" content="${meta[key]}">`)
      .join('\n');
  }

  return '';
}

export function getSiteConfig() {
  const vantConfig = getVantConfig();
  const title = getTitle(vantConfig.site);

  return {
    ...vantConfig.site,
    title,
    description: vantConfig.site.description,
    meta: getHTMLMeta(vantConfig),
  };
}
