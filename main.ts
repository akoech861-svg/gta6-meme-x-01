import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');

// Fail loudly rather than writing a half-formed entry: the gate reads POST.json from /output and
// scores an entry with none as invalid, which is worth no place at all.
try {
  const post = JSON.parse(readFileSync(postPath, 'utf8'));
  if (typeof post?.url !== 'string' || !post.url) {
    throw new Error('POST.json has no url');
  }
} catch (err) {
  console.error(`POST.json is unreadable at ${postPath}: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
