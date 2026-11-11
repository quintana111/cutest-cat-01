import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT = process.env.MAKEFUN_OUTPUT_DIR || '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(OUTPUT, 'entry.png'));
