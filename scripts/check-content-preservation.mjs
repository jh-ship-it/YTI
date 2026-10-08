import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const baseline = JSON.parse(
  await readFile(new URL('../tests/fixtures/content-baseline.json', import.meta.url), 'utf8'),
);
const failures = [];
const contact = await readFile(new URL('../src/pages/Contact.tsx', import.meta.url), 'utf8');
const contactCopy = JSON.parse(
  await readFile(new URL('../tests/fixtures/contact-copy.json', import.meta.url), 'utf8'),
);

for (const phrase of contactCopy) {
  if (!contact.includes(phrase)) failures.push(`src/pages/Contact.tsx is missing: ${phrase}`);
}

for (const [path, expectedHash] of Object.entries(baseline)) {
  try {
    const contents = await readFile(new URL(`../${path}`, import.meta.url));
    const actualHash = createHash('sha256').update(contents).digest('hex');
    if (actualHash !== expectedHash) failures.push(path);
  } catch {
    failures.push(`${path} (missing)`);
  }
}

if (failures.length) {
  console.error('Content-preservation check failed; review these frozen source files:');
  for (const path of failures) console.error(` - ${path}`);
  process.exitCode = 1;
} else {
  console.log(`Content-preservation check passed for ${Object.keys(baseline).length} frozen source files and ${contactCopy.length} contact copy checks.`);
}
