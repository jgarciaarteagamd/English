# Ruta al C2

Plataforma personal para llevar el inglés de **B1 a C2**, pensada para hispanohablantes. Es una única página web (`index.html`): se abre en cualquier navegador, se puede publicar en GitHub Pages y también como artefacto de Claude.

## Qué incluye

| Sección | Qué hace |
|---|---|
| **Inicio** | Dashboard: XP del día, racha, plan de hoy, siguiente paso recomendado, ruta B1→C2, constancia (mapa de calor), XP de 14 días, dominio por nivel y puntos débiles. |
| **Gramática** | 46 lecciones (B1 12 · B2 13 · C1 12 · C2 9) con teoría completa en español, muchos ejemplos en inglés con audio, fórmulas, tablas, errores típicos y la sección *Trampa para hispanohablantes*. 466 ejercicios de 5 tipos: opción múltiple, huecos, corrección de errores, transformación con palabra clave (estilo Cambridge) y ordenar palabras. |
| **Repaso** | Repetición espaciada de lecciones (1, 3, 7, 14, 30, 60, 120 días según tu nota), repaso mixto intercalado y exámenes de nivel (se aprueban con un 75 %). |
| **Mis errores** | Cuaderno de errores: cada fallo se guarda con tu respuesta, la correcta y la explicación; vuelve a preguntártelo hasta que lo aciertes dos veces. |
| **Clases en audio** | Cada lección puede tener tres audios generados con ElevenLabs: clase de teoría, refuerzo con frases nativas y vocabulario. Un profesor latino explica en español y un nativo británico dice los ejemplos, con pausas para pensar y repetir y cortinillas musicales entre temas. Se generan una sola vez, se guardan en el navegador y se descargan en MP3. |
| **Vocabulario** | 23 mazos y 518 palabras/expresiones por nivel (falsos amigos, phrasal verbs, colocaciones, idioms, vocabulario académico, registro formal…), tarjetas con repetición espaciada tipo SM-2, quiz y tus propias palabras. |
| **Tutor IA** | Con Claude: corrector de redacciones (los errores pasan al cuaderno), chat de dudas y lecciones a medida sobre cualquier tema. También genera práctica extra por lección y explica errores. Solo funciona dentro de Claude. |
| **Plan C2** | Niveles MCER, horas estimadas, método basado en evidencia, rutina semanal, plan por fases, exámenes oficiales y recursos. |

## Clases en audio (ElevenLabs)

1. Crea una clave en [elevenlabs.io → Developers → API Keys](https://elevenlabs.io/app/developers/api-keys) con los permisos *Text to Speech*, *Voices* (lectura y escritura), *Voice Generation* y *User* (lectura).
2. En **Ajustes → Clases en audio**, pega la clave y elige el modelo: *Flash v2.5* (½ crédito por carácter, ideal para el plan gratuito) o *Multilingual v2* (1 crédito por carácter, más natural).
3. Elige las voces. Si el plan gratuito no deja usar desde la app las voces de la biblioteca, **diseña la voz del profesor** desde Ajustes: queda como voz tuya y funciona en todos los planes.
4. En cada lección, pulsa **Probar una muestra** (la introducción y el primer bloque) o **Generar audio**. Al terminar puedes escucharlo, descargarlo en MP3 o compartirlo.

Cómo cuida tus créditos:

- Cada fragmento de voz se guarda en cuanto llega. Si se acaban los créditos o se corta la conexión, **Continuar** solo genera lo que falta.
- La muestra no se pierde: sus fragmentos se reutilizan al generar el audio completo.
- Los silencios y la música los crea la propia app, así que no gastan créditos.

La clave se guarda solo en el navegador (`localStorage`). No entra en la copia de seguridad ni se sube a ningún sitio. Los audios se guardan en IndexedDB de ese navegador, así que conviene descargarlos.

Las pausas (cortas, normales o largas) y la música se ajustan en Ajustes. Para unir los fragmentos en un solo MP3 se usa [lamejs](https://github.com/zhuker/lamejs) (LGPL), en `vendor/lame.min.js`; la voz no se recodifica.

## Publicar en GitHub Pages

1. El repositorio tiene que ser **público** (GitHub Pages gratis no publica repositorios privados) o tener GitHub Pro.
2. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, elige la rama y la carpeta `/ (root)` y guarda.
3. En un par de minutos estará en `https://<usuario>.github.io/<repositorio>/`.

El repositorio no contiene nada privado: la clave de ElevenLabs y el progreso viven solo en tu navegador. El Tutor IA solo funciona dentro de Claude. Para llevar el progreso de un sitio a otro, usa *Ajustes → Copiar mi progreso / Restaurar*.

## Dónde se guarda el progreso

- Siempre en el navegador (`localStorage`).
- Dentro de Claude, además, en tu cuenta (almacén privado por persona del artefacto), así que se sincroniza entre dispositivos.
- En *Ajustes* puedes copiar y restaurar una copia de seguridad.

## Estructura

```
src/
  content/grammar-b1.js … grammar-c2.js   lecciones (teoría + ejercicios)
  content/vocab-1.js, vocab-2.js          mazos de vocabulario
  content/guide.js                        Plan C2
  content/audio-b1.js                     guiones de audio, frases nativas y vocabulario por lección
  app.js                                  aplicación (estado, repaso espaciado, vistas)
  styles.css                              estilos (tema claro y oscuro)
  index.template.html                     plantilla
build.mjs                                 genera index.html
index.html                                resultado empaquetado
vendor/lame.min.js                        codificador MP3 (se carga solo al generar audios)
```

Para regenerar `index.html` después de editar algo en `src/`:

```
node build.mjs
```

## Formato de la teoría

Cada lección es un objeto en `src/content/grammar-*.js`. El campo `theory` usa un marcado ligero, una línea por elemento:

| Línea | Resultado |
|---|---|
| `## Título` / `### Subtítulo` | Secciones (aparecen en el índice) |
| `:: Sujeto + have + participio` | Caja de fórmula |
| `> I **have lived** here. \| He vivido aquí.` | Ejemplo con audio; `**…**` se marca con rotulador |
| `x> I live here since 2019. \| I have lived here since 2019.` | Error típico → corrección |
| `!trap:` / `!tip:` / `!note:` | Trampa para hispanohablantes / consejo / nota |
| `\| a \| b \|` + `\|---\|---\|` | Tabla |
| `- texto` | Lista |

Tipos de ejercicio (`ex`): `mc` (`o` opciones, `a` índice), `gap` (`a` respuestas válidas), `fix` (`a` frases corregidas), `tr` (`k` palabra clave, `s` frase con `___`, `a` respuestas), `ord` (`w` palabras, `a` frases válidas). Todos llevan `e`, la explicación en español. La corrección acepta contracciones, ortografía británica/americana y mayúsculas indistintamente.

## Formato de los guiones de audio

Cada lección con audio es una entrada `window.AUDIO['id-de-la-lección']` en `src/content/audio-*.js`:

- `theory`: guion de la clase de teoría, escrito a mano (formato abajo).
- `drills`: ejemplos de refuerzo `[español, inglés, nota?]`. En el audio se hacen como pregunta: frase en español, pausa para pensar, respuesta del nativo y pausa para repetir.
- `chunks`: frases nativas `[inglés, español, ejemplo, traducción del ejemplo, nota?]`.
- `vocab`: vocabulario `[inglés, español, ejemplo, traducción del ejemplo, nota?]`. También se estudia con tarjetas desde la pestaña *Vocabulario* de la lección.
- `topic`: tema del vocabulario, que el profesor menciona en la introducción.

Los audios de refuerzo y de vocabulario se construyen solos a partir de `drills`, `chunks` y `vocab`. El guion de teoría usa una línea por elemento:

| Línea | En el audio |
|---|---|
| `~ intro` / `~ outro` / `~ section` / `~ sub` | Música de entrada, de cierre, cortinilla o cortinilla corta |
| `## Título` / `### Subtítulo` | Cortinilla y el profesor lee el título |
| `T: texto` | Profesor (español latino) |
| `N: text` | Nativo británico, una vez |
| `E: text` | Nativo y pausa para repetir |
| `R: text` | Nativo despacio, luego normal, y pausa para repetir |
| `Q: pregunta \| answer` | El profesor pregunta, pausa para pensar, el nativo responde y pausa para repetir |
| `P: 3` | Silencio de 3 segundos |
