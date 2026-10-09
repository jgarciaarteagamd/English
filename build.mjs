// Empaqueta src/ en un único index.html autocontenido (sin dependencias).
// Uso: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const read = p => readFileSync(new URL(p, import.meta.url), 'utf8');
const content = [
  'src/content/grammar-b1.js',
  'src/content/grammar-b2.js',
  'src/content/grammar-c1.js',
  'src/content/grammar-c2.js',
  'src/content/vocab-1.js',
  'src/content/vocab-2.js',
  'src/content/guide.js'
].map(read).join('\n');
const app = read('src/app.js');
const css = read('src/styles.css');

for (const [name, js] of [['content', content], ['app', app]]) {
  if (/<\/script/i.test(js)) throw new Error(`"</script" encontrado en ${name}: rompería el HTML`);
}

const html = read('src/index.template.html')
  .replace('/*__CSS__*/', () => css)
  .replace('/*__CONTENT__*/', () => content)
  .replace('/*__APP__*/', () => app);

writeFileSync(new URL('index.html', import.meta.url), html);

// Resumen del contenido
globalThis.window = {};
new Function(content)();
const G = window.GRAMMAR, V = window.VOCAB;
const byLevel = l => G.filter(x => x.level === l).length;
console.log(`index.html: ${(html.length / 1024).toFixed(0)} KB`);
console.log(`Lecciones: ${G.length} (B1 ${byLevel('B1')}, B2 ${byLevel('B2')}, C1 ${byLevel('C1')}, C2 ${byLevel('C2')}) · ejercicios: ${G.reduce((a, l) => a + l.ex.length, 0)}`);
console.log(`Vocabulario: ${V.length} mazos · ${V.reduce((a, d) => a + d.words.length, 0)} palabras`);
