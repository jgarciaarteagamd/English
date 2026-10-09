# Ruta al C2

Plataforma personal para llevar el inglés de **B1 a C2**, pensada para hispanohablantes. Es una única página web (`index.html`) sin dependencias: se abre en cualquier navegador y también se publica como artefacto de Claude.

## Qué incluye

| Sección | Qué hace |
|---|---|
| **Inicio** | Dashboard: XP del día, racha, plan de hoy, siguiente paso recomendado, ruta B1→C2, constancia (mapa de calor), XP de 14 días, dominio por nivel y puntos débiles. |
| **Gramática** | 46 lecciones (B1 12 · B2 13 · C1 12 · C2 9) con teoría completa en español, muchos ejemplos en inglés con audio, fórmulas, tablas, errores típicos y la sección *Trampa para hispanohablantes*. 466 ejercicios de 5 tipos: opción múltiple, huecos, corrección de errores, transformación con palabra clave (estilo Cambridge) y ordenar palabras. |
| **Repaso** | Repetición espaciada de lecciones (1, 3, 7, 14, 30, 60, 120 días según tu nota), repaso mixto intercalado y exámenes de nivel (se aprueban con un 75 %). |
| **Mis errores** | Cuaderno de errores: cada fallo se guarda con tu respuesta, la correcta y la explicación; vuelve a preguntártelo hasta que lo aciertes dos veces. |
| **Vocabulario** | 23 mazos y 518 palabras/expresiones por nivel (falsos amigos, phrasal verbs, colocaciones, idioms, vocabulario académico, registro formal…), tarjetas con repetición espaciada tipo SM-2, quiz y tus propias palabras. |
| **Tutor IA** | Con Claude: corrector de redacciones (los errores pasan al cuaderno), chat de dudas y lecciones a medida sobre cualquier tema. También genera práctica extra por lección y explica errores. Solo funciona dentro de Claude. |
| **Plan C2** | Niveles MCER, horas estimadas, método basado en evidencia, rutina semanal, plan por fases, exámenes oficiales y recursos. |

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
  app.js                                  aplicación (estado, repaso espaciado, vistas)
  styles.css                              estilos (tema claro y oscuro)
  index.template.html                     plantilla
build.mjs                                 genera index.html
index.html                                resultado empaquetado
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
