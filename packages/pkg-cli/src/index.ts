import { logger } from 'rslog';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { version: rsbuildVersion } = require('@rsbuild/core/package.json');
const { version: cliVersion } = require('../package.json');

export { cliVersion };

logger.greet(`  PKG CLI v${cliVersion} / Rsbuild v${rsbuildVersion}\n`);

process.env.VANT_CLI_VERSION = cliVersion;
