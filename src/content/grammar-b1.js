/* Gramática B1 — consolidación. Formato de teoría: ver README (## sección, > ejemplo | traducción, x> error | corrección, :: fórmula, !trap/!tip/!note, tablas con |). */
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(

{
id:'b1-present', level:'B1', title:'Present simple vs present continuous', es:'Presente simple vs presente continuo',
goal:'Distinguir hábitos y verdades generales de acciones en progreso, y saber qué verbos no se usan en continuo.',
theory:`
## 1. Present simple: hábitos, rutinas y verdades
Usamos el **present simple** para cosas que son siempre verdad, rutinas, hábitos y estados permanentes. Con he/she/it añadimos **-s/-es**.
:: Sujeto + verbo (+s/es con he/she/it)
:: Negativa: Sujeto + don't/doesn't + verbo base
:: Pregunta: Do/Does + sujeto + verbo base?
> Water **boils** at 100 degrees. | El agua hierve a 100 grados.
> She **works** in a hospital. | Ella trabaja en un hospital.
> I **don't eat** meat. | No como carne.
> **Does** he **live** near here? | ¿Vive él cerca de aquí?
> The train **leaves** at 7:15 tomorrow. | El tren sale a las 7:15 mañana. (horarios)
### Adverbios de frecuencia
Van **antes del verbo principal** pero **después de** *be* y de los auxiliares.
> I **usually** get up at seven. | Normalmente me levanto a las siete.
> She **is always** late. | Ella siempre llega tarde.
> We **have never** met. | Nunca nos hemos conocido.
x> I go usually to the gym. | I usually go to the gym.
## 2. Present continuous: acciones en progreso y situaciones temporales
:: Sujeto + am/is/are + verbo-ing
> I**'m reading** a great book at the moment. | Estoy leyendo un libro buenísimo en este momento.
> They**'re living** with friends until they find a flat. | Viven con unos amigos (temporalmente) hasta que encuentren piso.
> Prices **are rising** fast. | Los precios están subiendo rápido. (tendencia)
> **Are** you **working** this weekend? | ¿Trabajas este fin de semana?
### Planes futuros ya organizados
> I**'m meeting** Sarah tomorrow at six. | Quedo con Sarah mañana a las seis.
### Quejas con always
*always* + continuo expresa irritación por algo que se repite.
> He**'s always leaving** his socks on the floor! | ¡Siempre deja los calcetines en el suelo!
## 3. Verbos de estado (stative verbs)
Algunos verbos describen **estados**, no acciones, y normalmente **no se usan en continuo**.
| Tipo | Verbos |
|---|---|
| Mente | know, believe, understand, remember, forget, mean, realise, suppose |
| Gustos | like, love, hate, prefer, want, need, wish |
| Posesión | have (= poseer), own, belong, possess |
| Sentidos | see, hear, smell, taste, seem, look (= parecer) |
| Otros | be, cost, contain, depend, matter, weigh |
x> I'm knowing the answer. | I know the answer.
x> This bag is belonging to me. | This bag belongs to me.
### Verbos con doble significado
Algunos son de estado con un significado y de acción con otro.
> I **think** you're right. | Creo que tienes razón. (opinión = estado)
> I**'m thinking** about moving abroad. | Estoy pensando en mudarme al extranjero. (proceso = acción)
> She **has** two brothers. | Tiene dos hermanos. (posesión)
> She**'s having** lunch. | Está comiendo. (acción)
> This soup **tastes** great. | Esta sopa sabe genial.
> The chef **is tasting** the soup. | El chef está probando la sopa.
!trap: En español usamos el presente simple para casi todo: "¿Qué haces?" puede significar "What do you do?" (¿a qué te dedicas?) o "What are you doing?" (¿qué estás haciendo ahora?). Pregúntate siempre: ¿es un hábito o algo que pasa AHORA / temporalmente?
!trap: Nunca uses el presente para "llevo X tiempo": "Vivo aquí desde 2019" = I **have lived** here since 2019 (lo verás en la lección de present perfect).
!tip: Palabras guía: present simple → always, usually, every day, on Mondays. Present continuous → now, at the moment, currently, these days, this week, Look!, Listen!
## Resumen
| Present simple | Present continuous |
|---|---|
| Hábitos: I play tennis on Fridays. | Ahora: I'm playing tennis right now. |
| Permanente: He lives in Madrid. | Temporal: He's living in Madrid this year. |
| Verdades: The sun rises in the east. | Cambios: The climate is getting warmer. |
| Horarios: The film starts at 8. | Planes: We're having dinner with Tom. |
`,
ex:[
{t:'mc', q:'Shh! The baby ___.', o:['sleeps','is sleeping','sleep','are sleeping'], a:1, e:'Acción que ocurre ahora mismo → present continuous.'},
{t:'mc', q:'I ___ what you mean.', o:['am understanding','understands','understand','am understand'], a:2, e:'"Understand" es un verbo de estado: no va en continuo.'},
{t:'mc', q:'My brother ___ for a bank in London.', o:['work','works','is work','working'], a:1, e:'Situación permanente con he → works.'},
{t:'gap', q:'Water ___ (freeze) at 0 °C.', a:['freezes'], e:'Verdad científica → present simple, tercera persona con -s.'},
{t:'gap', q:'We ___ (not / go) out tonight; we\'re too tired.', a:["aren't going","are not going","'re not going"], e:'Plan para esta noche → present continuous negativo.'},
{t:'gap', q:'___ she usually ___ (drive) to work? (escribe las dos palabras separadas por espacio: does drive)', a:['does drive'], e:'Pregunta en present simple: Does + sujeto + verbo base.'},
{t:'fix', q:'I am liking this song very much.', a:['I like this song very much.','I really like this song.'], e:'"Like" es de estado: I like…'},
{t:'fix', q:'She go to the gym every Monday.', a:['She goes to the gym every Monday.'], e:'Tercera persona singular en presente simple: goes.'},
{t:'mc', q:'Why ___ so rude to me today? You\'re not usually like this.', o:['are you being','are you','do you be','you are'], a:0, e:'"Be" puede ir en continuo para comportamiento temporal: You\'re being rude (hoy, no siempre).'},
{t:'ord', w:['I','never','coffee','drink','after','dinner'], a:['I never drink coffee after dinner'], e:'El adverbio de frecuencia va antes del verbo principal.'},
{t:'mc', q:'He ___ always ___ me what to do! It\'s so annoying.', o:['does / tell','is / telling','is / tell','has / told'], a:1, e:'always + continuo = queja por algo repetido.'}
]
},

{
id:'b1-past', level:'B1', title:'Past simple vs past continuous', es:'Pasado simple vs pasado continuo',
goal:'Contar historias combinando acciones terminadas con acciones de fondo, y usar bien when/while.',
theory:`
## 1. Past simple: acciones terminadas
Acciones completas en un momento concreto del pasado (yesterday, last week, in 2010, ago).
:: Regulares: verbo + -ed (worked, studied, stopped)
:: Negativa: didn't + verbo base · Pregunta: Did + sujeto + verbo base?
> I **visited** Rome last summer. | Visité Roma el verano pasado.
> She **didn't call** me yesterday. | No me llamó ayer.
> **Did** you **see** the match? | ¿Viste el partido?
> We **went** to bed late, **watched** a film and **fell** asleep. | Nos acostamos tarde, vimos una peli y nos dormimos. (secuencia)
!note: Los verbos irregulares hay que memorizarlos: go-went, see-saw, take-took, buy-bought, think-thought, catch-caught, teach-taught, bring-brought, find-found, leave-left, feel-felt… Practícalos en la sección de vocabulario.
x> Did you went to the party? | Did you go to the party?
x> I didn't saw him. | I didn't see him.
## 2. Past continuous: acciones en progreso en el pasado
:: Sujeto + was/were + verbo-ing
> At 8 pm I **was having** dinner. | A las 8 estaba cenando.
> It **was raining** and people **were running** for shelter. | Llovía y la gente corría a refugiarse. (ambiente, descripción)
> What **were** you **doing** when I called? | ¿Qué hacías cuando te llamé?
## 3. Combinar los dos: when y while
La acción larga (de fondo) va en **past continuous**; la acción corta que interrumpe, en **past simple**.
> I **was walking** home **when** I **saw** the accident. | Volvía a casa caminando cuando vi el accidente.
> **While** she **was cooking**, the phone **rang**. | Mientras cocinaba, sonó el teléfono.
> **When** the teacher **arrived**, the students **stopped** talking. | Cuando llegó el profesor, los alumnos dejaron de hablar. (una acción tras otra)
> **While** I **was studying**, my sister **was watching** TV. | Mientras yo estudiaba, mi hermana veía la tele. (dos acciones simultáneas)
!tip: **While** suele ir con la acción larga (continuo); **when** suele ir con la acción corta (simple).
## 4. El imperfecto español no siempre es past continuous
El imperfecto español ("hacía", "vivía", "jugaba") se traduce de varias formas:
| Español | Inglés |
|---|---|
| Acción en progreso: "Leía cuando…" | Past continuous: I was reading when… |
| Hábito pasado: "Jugaba al fútbol de niño" | Past simple / used to: I played / used to play football as a child |
| Estado: "Tenía el pelo largo" | Past simple: I had long hair |
!trap: "Cuando era niño, iba a la playa cada verano" → When I **was** a child, I **went** (o **used to go**) to the beach every summer. NO: "I was going to the beach every summer".
!trap: Los verbos de estado tampoco van en past continuous: I **knew** (no "was knowing") the answer.
## Resumen
| Past simple | Past continuous |
|---|---|
| Acción completa: I phoned her. | Acción en progreso: I was phoning her. |
| Secuencia: I got up, showered and left. | Fondo/ambiente: The sun was shining. |
| Interrupción corta: …when the lights went out. | Acción larga interrumpida: We were watching TV… |
`,
ex:[
{t:'mc', q:'I ___ my keys while I was running in the park.', o:['was losing','lost','lose','have lost'], a:1, e:'Acción corta que ocurre durante otra larga → past simple.'},
{t:'mc', q:'What ___ at 10 o\'clock last night?', o:['did you do','were you doing','you were doing','was you doing'], a:1, e:'Acción en progreso en un momento concreto del pasado → past continuous.'},
{t:'gap', q:'She ___ (not / come) to the meeting yesterday.', a:["didn't come","did not come"], e:'Negativa en past simple: didn\'t + verbo base.'},
{t:'gap', q:'When I arrived, they ___ (have) dinner, so I joined them.', a:['were having'], e:'Acción en progreso cuando llegué → were having.'},
{t:'gap', q:'He ___ (break) his leg while he ___ (ski). (separa las respuestas con " / ")', a:['broke / was skiing'], e:'Acción corta (broke) + acción larga de fondo (was skiing).'},
{t:'fix', q:'When I was young, I was playing football every weekend.', a:['When I was young, I played football every weekend.','When I was young, I used to play football every weekend.'], e:'Hábito en el pasado → past simple o used to, no past continuous.'},
{t:'fix', q:'Did you saw the news last night?', a:['Did you see the news last night?'], e:'Después de did, el verbo va en forma base.'},
{t:'mc', q:'I ___ the answer, but I couldn\'t remember it in the exam.', o:['was knowing','knew','was know','know'], a:1, e:'"Know" es verbo de estado → past simple.'},
{t:'mc', q:'The sun ___ and the birds were singing. It was a perfect morning.', o:['shone','was shining','has shone','shines'], a:1, e:'Descripción de fondo/ambiente → past continuous.'},
{t:'ord', w:['while','I','was','the','cooking','phone','rang'], a:['while I was cooking the phone rang','the phone rang while I was cooking'], e:'While + acción larga (continuo), acción corta en simple.'}
]
},

{
id:'b1-presperf', level:'B1', title:'Present perfect vs past simple', es:'Presente perfecto vs pasado simple',
goal:'Usar el present perfect para experiencias, resultados y periodos no terminados, y no confundirlo con el past simple.',
theory:`
## 1. Forma
:: Sujeto + have/has + participio pasado (worked, been, seen, done…)
> I**'ve finished** my homework. | He terminado los deberes.
> She **hasn't seen** the film. | No ha visto la película.
> **Have** you ever **been** to Japan? | ¿Has estado alguna vez en Japón?
## 2. Usos del present perfect
### a) Experiencias en la vida (sin decir cuándo)
> I**'ve been** to Mexico three times. | He estado en México tres veces.
> **Have** you **ever eaten** sushi? | ¿Alguna vez has comido sushi?
> She**'s never driven** a car. | Nunca ha conducido un coche.
### b) Acciones recientes con resultado ahora
> I**'ve lost** my phone. (= ahora no lo tengo) | He perdido el móvil.
> Look! It**'s stopped** raining. | ¡Mira! Ha dejado de llover.
### c) Situaciones que empezaron en el pasado y siguen: for / since
**for** + periodo de tiempo · **since** + punto de inicio
> I**'ve lived** here **for** ten years. | Vivo aquí desde hace diez años.
> She**'s worked** at Google **since** 2020. | Trabaja en Google desde 2020.
> How long **have** you **known** each other? | ¿Cuánto tiempo hace que os conocéis?
!trap: Este es EL error clásico del hispanohablante: "Vivo aquí desde hace 10 años" NO es "I live here for 10 years". Si algo empezó en el pasado y sigue ahora, usa present perfect: **I have lived here for 10 years**.
x> I know him since 2015. | I have known him since 2015.
x> I am here for two hours. | I have been here for two hours.
## 3. Just, already, yet, still
| Palabra | Uso | Posición |
|---|---|---|
| just | hace muy poco | entre have y participio |
| already | antes de lo esperado | entre have y participio |
| yet | en negativas y preguntas: todavía / ya | al final |
| still | negativa: todavía no (con énfasis) | antes de haven't |
> I**'ve just** had lunch. | Acabo de comer.
> They**'ve already** left. | Ya se han ido.
> **Have** you finished **yet**? | ¿Ya has terminado?
> I **haven't** decided **yet**. | Todavía no lo he decidido.
> I **still haven't** received the package. | Todavía no he recibido el paquete.
## 4. Present perfect vs past simple
La clave: ¿el tiempo está **terminado** y **especificado**? → past simple. ¿Está **abierto** o no se menciona? → present perfect.
| Present perfect (tiempo abierto) | Past simple (tiempo terminado) |
|---|---|
| I've seen him today. (el día no ha terminado) | I saw him yesterday. |
| I've been to Paris. (en mi vida) | I went to Paris in 2019. |
| She's lived here for years. (y sigue) | She lived there for years. (ya no) |
| Have you ever met a celebrity? | When did you meet him? |
x> I have seen him yesterday. | I saw him yesterday.
x> When have you arrived? | When did you arrive?
!tip: Las preguntas con **When…?** y las expresiones **ago, yesterday, last…, in 2010** van casi siempre con past simple.
!note: been vs gone: She**'s been** to London (fue y volvió). She**'s gone** to London (fue y está allí ahora).
## Resumen
- Experiencia sin fecha → present perfect.
- Resultado presente de algo reciente → present perfect.
- Empezó en el pasado y continúa (for/since) → present perfect.
- Momento terminado y concreto → past simple.
`,
ex:[
{t:'mc', q:'I ___ in this city since I was a child.', o:['live','lived','have lived','am living'], a:2, e:'Empezó en el pasado y continúa + since → present perfect.'},
{t:'mc', q:'We ___ to Italy last year.', o:['have gone','went','have been','go'], a:1, e:'"Last year" = tiempo terminado → past simple.'},
{t:'gap', q:'___ you ever ___ (try) Indian food? (escribe: have tried)', a:['have tried'], e:'Experiencia en la vida → Have you ever + participio.'},
{t:'gap', q:'She has worked here ___ five years.', a:['for'], e:'For + periodo de tiempo.'},
{t:'gap', q:'He has worked here ___ March.', a:['since'], e:'Since + punto de inicio.'},
{t:'fix', q:'I know my best friend for twenty years.', a:['I have known my best friend for twenty years.',"I've known my best friend for twenty years."], e:'Situación que sigue + for → present perfect.'},
{t:'fix', q:'I have bought this jacket two days ago.', a:['I bought this jacket two days ago.'], e:'"Ago" exige past simple.'},
{t:'mc', q:'"Where\'s Tom?" "He ___ to the supermarket. He\'ll be back soon."', o:['has been','has gone','went','goes'], a:1, e:'Gone = fue y todavía no ha vuelto.'},
{t:'mc', q:'Have you finished your essay ___?', o:['already','just','yet','still'], a:2, e:'Yet en preguntas y negativas, al final.'},
{t:'tr', q:'I started learning English three years ago.', k:'FOR', s:'I ___ three years.', a:['have been learning English for','have learned English for',"'ve been learning English for","have learnt English for"], e:'Algo que empezó hace 3 años y sigue → present perfect (continuo o simple) + for.'},
{t:'ord', w:['I','have','just','an','email','sent','you'], a:['I have just sent you an email'], e:'Just va entre have y el participio.'}
]
},

{
id:'b1-future', level:'B1', title:'Future forms: will, going to, present continuous', es:'Formas de futuro',
goal:'Elegir la forma de futuro adecuada según sea decisión, plan, predicción o horario.',
theory:`
## 1. Will
:: will / won't + verbo base
### Decisiones espontáneas (en el momento)
> It's cold. I**'ll close** the window. | Hace frío. Cierro la ventana.
> "The phone's ringing." "I**'ll get** it!" | "Suena el teléfono." "¡Ya lo cojo yo!"
### Predicciones basadas en opinión
> I think it **will be** a great party. | Creo que será una gran fiesta.
> You**'ll love** this book. | Te va a encantar este libro.
### Promesas, ofertas, peticiones
> I**'ll help** you with that. | Te ayudo con eso.
> I **won't tell** anyone, I promise. | No se lo diré a nadie, lo prometo.
> **Will** you **marry** me? | ¿Te quieres casar conmigo?
## 2. Be going to
:: am/is/are + going to + verbo base
### Intenciones y planes ya decididos
> I**'m going to study** medicine. | Voy a estudiar medicina.
> We**'re going to paint** the kitchen this weekend. | Vamos a pintar la cocina este fin de semana.
### Predicciones con evidencia presente
> Look at those clouds! It**'s going to rain**. | ¡Mira esas nubes! Va a llover.
> Careful! You**'re going to fall**! | ¡Cuidado! ¡Te vas a caer!
## 3. Present continuous para planes organizados
Cuando hay un acuerdo con otra persona, hora, lugar, billete…
> I**'m seeing** the dentist on Friday. | Voy al dentista el viernes. (tengo cita)
> They**'re getting** married in June. | Se casan en junio.
## 4. Present simple para horarios
> The flight **leaves** at 6:40. | El vuelo sale a las 6:40.
> The course **starts** on 3 October. | El curso empieza el 3 de octubre.
## 5. Comparación rápida
| Situación | Forma | Ejemplo |
|---|---|---|
| Decido ahora | will | I'll have the fish, please. |
| Ya lo había decidido | going to | I'm going to buy a car. |
| Cita / acuerdo | present continuous | I'm meeting Ana at 5. |
| Horario oficial | present simple | The museum opens at 9. |
| Predicción por opinión | will | I'm sure you'll pass. |
| Predicción por evidencia | going to | She's going to have a baby. |
!trap: En español decimos "Te ayudo" o "Lo hago yo" en presente. En inglés, para ofrecerte en el momento usa **will**: I'll help you. NO "I help you".
!trap: Tras **when, as soon as, before, after, until** con sentido futuro se usa presente, no will: I'll call you **when I arrive** (no "when I will arrive").
!tip: Con **probably/definitely**: I'll **probably** be late (después de will) / I **probably won't** be late (antes de won't).
`,
ex:[
{t:'mc', q:'"I don\'t have any money." "Don\'t worry, I ___ you some."', o:['lend','am going to lend','\'ll lend','am lending'], a:2, e:'Oferta espontánea → will.'},
{t:'mc', q:'Look at that car! It ___ crash!', o:['will','is going to','crashes','is crashing to'], a:1, e:'Predicción con evidencia visible → going to.'},
{t:'mc', q:'I ___ my grandparents on Sunday. We\'ve already booked the train.', o:['visit','\'ll visit','\'m visiting','visited'], a:2, e:'Plan organizado (tren reservado) → present continuous.'},
{t:'mc', q:'The next bus ___ at 10:15.', o:['leaves','will leave','is going to leave','is leaving to'], a:0, e:'Horario oficial → present simple.'},
{t:'gap', q:'I\'ll text you as soon as I ___ (get) home.', a:['get'], e:'Después de as soon as con sentido futuro → present simple.'},
{t:'gap', q:'She has decided. She ___ (study) law next year. (usa going to)', a:['is going to study',"'s going to study"], e:'Intención ya decidida → be going to.'},
{t:'fix', q:'I will call you when I will arrive.', a:['I will call you when I arrive.',"I'll call you when I arrive."], e:'Tras when con sentido futuro → presente.'},
{t:'fix', q:'"It\'s hot in here." "I open the window."', a:["I'll open the window.",'I will open the window.'], e:'Decisión espontánea → will.'},
{t:'mc', q:'I think Spain ___ the next World Cup.', o:['is winning','will win','wins','win'], a:1, e:'Predicción basada en opinión (I think) → will.'},
{t:'ord', w:['probably','be','I\'ll','late','tonight'], a:["I'll probably be late tonight"], e:'Probably va después de will.'}
]
},

{
id:'b1-articles', level:'B1', title:'Articles: a/an, the, zero article', es:'Artículos: a/an, the y sin artículo',
goal:'Usar correctamente los artículos, uno de los puntos más difíciles para hispanohablantes.',
theory:`
## 1. A / an: algo no específico o mencionado por primera vez
Se usa con sustantivos **contables en singular**. *an* delante de **sonido** vocálico.
> I saw **a** dog in the street. | Vi un perro en la calle.
> She's **an** engineer. | Es ingeniera. (profesiones)
> It's **an** hour away. / It's **a** university. | (sonido: "aua", "iu")
> What **a** beautiful day! | ¡Qué día tan bonito!
!trap: En español no ponemos artículo con profesiones: "Soy médico". En inglés es obligatorio: I'm **a** doctor.
!trap: Tampoco en exclamaciones: "¡Qué sorpresa!" = What **a** surprise!
## 2. The: algo específico o conocido
> I saw a dog. **The** dog was huge. | Vi un perro. El perro era enorme. (segunda mención)
> Can you close **the** door? | ¿Puedes cerrar la puerta? (sabemos cuál)
> **The** sun, **the** moon, **the** internet | Cosas únicas
> She's **the** best student in the class. | Superlativos
> **the** United States, **the** UK, **the** Netherlands | Países con "states", "kingdom", plurales
> **the** Amazon, **the** Pacific, **the** Alps | Ríos, océanos, cordilleras
## 3. Sin artículo (zero article): ideas generales
Esta es la gran diferencia con el español. Para hablar **en general** con plurales o incontables, **no** se usa artículo.
> **Dogs** are loyal animals. | Los perros son animales leales.
> I love **music**. | Me encanta la música.
> **Life** is short. | La vida es corta.
> **Money** doesn't buy **happiness**. | El dinero no compra la felicidad.
x> The life is beautiful. | Life is beautiful.
x> I don't like the coffee. (en general) | I don't like coffee.
Compara: general vs específico:
> I like **coffee**. | Me gusta el café (en general).
> I like **the coffee** they serve here. | Me gusta el café que sirven aquí (específico).
## 4. Otros casos sin artículo
| Caso | Ejemplos |
|---|---|
| Comidas | have breakfast / lunch / dinner |
| Lugares en su función principal | go to school / bed / work / church / prison / hospital |
| Medios de transporte con by | by car, by bus, by plane |
| Idiomas y asignaturas | I speak Spanish. I study maths. |
| Días, meses, años | on Monday, in May, in 2024 |
| Ciudades, la mayoría de países | Madrid, Peru, France |
| Next / last | next week, last year |
> She's **in hospital**. (es paciente) vs She works at **the hospital**. (el edificio) |
> I go **to bed** at 11. | Me acuesto a las 11.
> I'll see you **next Friday**. | Te veo el viernes que viene.
!tip: Pregúntate: ¿estoy hablando de algo en general (sin artículo) o de algo concreto que el oyente puede identificar (the)?
`,
ex:[
{t:'mc', q:'My sister is ___ architect.', o:['a','an','the','—'], a:1, e:'Profesión con a/an; "architect" empieza por sonido vocálico → an.'},
{t:'mc', q:'___ is the most important thing in my life.', o:['The family','A family','Family','Families'], a:2, e:'Concepto general abstracto → sin artículo.'},
{t:'mc', q:'Can you pass me ___ salt, please?', o:['a','—','the','some the'], a:2, e:'Algo concreto que los dos identificamos → the.'},
{t:'gap', q:'I usually have ___ breakfast at 8. (escribe "-" si no hace falta artículo)', a:['-','—','none'], e:'Comidas: sin artículo.'},
{t:'gap', q:'What ___ amazing view!', a:['an'], e:'Exclamación con sustantivo contable singular → What a/an…'},
{t:'fix', q:'The people in my country are very friendly. The life there is relaxed.', a:['People in my country are very friendly. Life there is relaxed.','The people in my country are very friendly. Life there is relaxed.'], e:'"Life" en general no lleva artículo. (Con "the people in my country" ambas formas son posibles porque está especificado.)'},
{t:'fix', q:'She is teacher.', a:['She is a teacher.',"She's a teacher."], e:'Profesiones llevan a/an.'},
{t:'mc', q:'We travelled to Peru by ___ plane.', o:['a','the','—','an'], a:2, e:'"By" + transporte, sin artículo.'},
{t:'mc', q:'He has lived in ___ United States for years.', o:['—','the','a','an'], a:1, e:'"The United States" lleva the.'},
{t:'mc', q:'I don\'t like ___ horror films. They scare me.', o:['the','a','—','an'], a:2, e:'General, plural → sin artículo.'},
{t:'ord', w:['children','learn','languages','quickly','very'], a:['children learn languages very quickly'], e:'Generalización con plurales: sin artículo.'}
]
},

{
id:'b1-quantifiers', level:'B1', title:'Countable, uncountable and quantifiers', es:'Contables, incontables y cuantificadores',
goal:'Saber qué sustantivos son incontables en inglés y usar some/any/much/many/a few/a little/a lot of.',
theory:`
## 1. Contables e incontables
Los **contables** tienen plural (a book, two books). Los **incontables** no tienen plural y no llevan a/an.
!trap: Muchos sustantivos contables en español son **incontables** en inglés. ¡Memorízalos!
| Incontable en inglés | Cómo contarlo |
|---|---|
| advice (consejo) | a piece of advice |
| information | a piece of information |
| news (noticia) | a piece of news |
| furniture (muebles) | a piece of furniture |
| luggage / baggage (equipaje) | a suitcase, a bag |
| homework / work | a task, a job |
| bread | a loaf, a slice of bread |
| research, evidence, knowledge, progress, equipment, accommodation, traffic, weather | — |
x> She gave me some good advices. | She gave me some good advice.
x> I have a lot of homeworks. | I have a lot of homework.
x> The news are bad. | The news is bad.
## 2. Some y any
| | Contable plural | Incontable |
|---|---|---|
| Afirmativa | some apples | some water |
| Negativa | any apples | any water |
| Pregunta | any apples? | any water? |
> There are **some** eggs in the fridge. | Hay algunos huevos en la nevera.
> I don't have **any** money. | No tengo nada de dinero.
> Is there **any** milk left? | ¿Queda leche?
!tip: En ofrecimientos y peticiones usamos **some** en preguntas: Would you like **some** tea? Can I have **some** water?
## 3. Much, many, a lot of
| Contables | Incontables | Ambos |
|---|---|---|
| many | much | a lot of / lots of |
| How many? | How much? | |
> How **many** brothers do you have? | ¿Cuántos hermanos tienes?
> I don't have **much** time. | No tengo mucho tiempo.
> She has **a lot of** friends. | Tiene muchos amigos.
!note: En frases afirmativas, *much* suena muy formal: mejor **a lot of**. "I have a lot of work" (natural) vs "I have much work" (raro).
## 4. A few / a little vs few / little
| | Contables | Incontables |
|---|---|---|
| Algo (positivo) | a few | a little |
| Poco, casi nada (negativo) | few | little |
> I have **a few** friends here, so I'm happy. | Tengo algunos amigos aquí (suficientes).
> He has **few** friends and feels lonely. | Tiene pocos amigos (casi ninguno).
> There's **a little** coffee left. | Queda un poco de café.
> There's **little** hope now. | Hay poca esperanza.
## 5. Too much / too many / enough
> There are **too many** cars in the city. | Hay demasiados coches.
> I drank **too much** coffee. | Bebí demasiado café.
> We don't have **enough** chairs. | No tenemos suficientes sillas. (enough va antes del sustantivo)
> He isn't old **enough** to drive. | No tiene edad suficiente para conducir. (después del adjetivo)
`,
ex:[
{t:'mc', q:'Can you give me some ___ about the course?', o:['informations','information','an information','informations pieces'], a:1, e:'"Information" es incontable.'},
{t:'mc', q:'How ___ people came to the party?', o:['much','many','a lot','few of'], a:1, e:'People es contable plural → How many.'},
{t:'mc', q:'There isn\'t ___ milk in the fridge.', o:['some','many','any','a few'], a:2, e:'Negativa con incontable → any.'},
{t:'mc', q:'I speak ___ Italian, enough to order food.', o:['a little','a few','little','few'], a:0, e:'Incontable + sentido positivo → a little.'},
{t:'gap', q:'We have ___ (demasiados) problems to solve.', a:['too many'], e:'Contable plural → too many.'},
{t:'fix', q:'My teacher gave me a good advice.', a:['My teacher gave me a good piece of advice.','My teacher gave me good advice.','My teacher gave me some good advice.'], e:'Advice es incontable: a piece of advice / some advice.'},
{t:'fix', q:'All the furnitures in the house are new.', a:['All the furniture in the house is new.'], e:'Furniture es incontable → singular, verbo is.'},
{t:'mc', q:'Would you like ___ cake?', o:['any','some','many','a'], a:1, e:'Ofrecimiento → some, incluso en pregunta.'},
{t:'mc', q:'The room isn\'t big ___ for all of us.', o:['enough','too','so','much'], a:0, e:'Adjetivo + enough.'},
{t:'gap', q:'Sadly, ___ people understood his idea, so it failed. (pocos, casi nadie)', a:['few'], e:'Few (sin a) = pocos, sentido negativo.'}
]
},

{
id:'b1-comparatives', level:'B1', title:'Comparatives and superlatives', es:'Comparativos y superlativos',
goal:'Comparar personas y cosas con precisión: -er/more, -est/most, as…as y modificadores.',
theory:`
## 1. Formación
| Adjetivo | Comparativo | Superlativo |
|---|---|---|
| 1 sílaba: cheap | cheaper (than) | the cheapest |
| 1 sílaba vocal+consonante: big | bigger | the biggest |
| Acabado en -y: happy, easy | happier, easier | the happiest |
| 2+ sílabas: expensive | more expensive | the most expensive |
| Irregular: good / bad / far | better / worse / further-farther | the best / the worst / the furthest |
> Madrid is **bigger than** Seville. | Madrid es más grande que Sevilla.
> This exam was **easier than** the last one. | Este examen fue más fácil que el anterior.
> It's **the most beautiful** place I've ever seen. | Es el lugar más bonito que he visto nunca.
> She's **the best** player **in** the team. | Es la mejor jugadora del equipo.
x> She is more tall than me. | She is taller than me.
x> It's the best restaurant of the city. | It's the best restaurant in the city.
!trap: "El mejor DE la ciudad/del equipo" → usamos **in** con lugares y grupos: the best **in** the world, the tallest **in** my family. Usamos **of** con periodos y números: the best day **of** my life, the oldest **of** the three.
## 2. Igualdad: as … as
> She's **as tall as** her brother. | Es tan alta como su hermano.
> This film **isn't as good as** the book. | La peli no es tan buena como el libro.
> I don't earn **as much money as** you. | No gano tanto dinero como tú.
## 3. Modificar comparativos
| Mucho más | Un poco más |
|---|---|
| much, far, a lot + comparativo | a bit, slightly, a little + comparativo |
> London is **much more expensive** than Madrid. | Londres es mucho más caro que Madrid.
> I feel **a bit better** today. | Hoy me siento un poco mejor.
> This is **by far the best** option. | Esta es, con diferencia, la mejor opción.
x> It's very more expensive. | It's much more expensive.
## 4. Estructuras útiles
> It's getting **colder and colder**. | Hace cada vez más frío.
> The exam is getting **more and more difficult**. | El examen es cada vez más difícil.
> **The more** you practise, **the better** you get. | Cuanto más practicas, mejor te vuelves.
> He's **the same age as** me. | Tiene la misma edad que yo.
> Her phone is **similar to / different from** mine. | Su móvil es parecido a / distinto del mío.
!tip: Después de *than* y *as* en inglés informal se usan pronombres objeto: taller than **me**. En registro formal: taller than **I am**.
`,
ex:[
{t:'mc', q:'My new flat is ___ my old one.', o:['more big than','bigger than','biggest than','more bigger than'], a:1, e:'Big (1 sílaba, vocal+consonante) → bigger than.'},
{t:'mc', q:'It was the happiest day ___ my life.', o:['in','of','from','on'], a:1, e:'Periodos de tiempo → of.'},
{t:'mc', q:'Mount Everest is the highest mountain ___ the world.', o:['of','in','on','from'], a:1, e:'Lugares → in.'},
{t:'gap', q:'This test is ___ (difficult) than I expected.', a:['more difficult'], e:'Adjetivo largo → more + adjetivo.'},
{t:'gap', q:'Today I feel ___ (bad) than yesterday.', a:['worse'], e:'Bad → worse → the worst.'},
{t:'fix', q:'He is very more intelligent than his brother.', a:['He is much more intelligent than his brother.','He is far more intelligent than his brother.','He is a lot more intelligent than his brother.'], e:'"Very" no modifica comparativos: much/far/a lot.'},
{t:'fix', q:'My sister is as tall than me.', a:['My sister is as tall as me.','My sister is as tall as I am.'], e:'Igualdad: as … as.'},
{t:'tr', q:'Tom is taller than Peter.', k:'AS', s:'Peter ___ Tom.', a:["isn't as tall as","is not as tall as","is not so tall as"], e:'not as … as = menos que.'},
{t:'mc', q:'___ you study, the more you learn.', o:['More','The more','Most','The most'], a:1, e:'The + comparativo…, the + comparativo.'},
{t:'ord', w:['getting','it\'s','and','colder','colder'], a:["it's getting colder and colder"], e:'Comparativo + and + comparativo = cada vez más.'}
]
},

{
id:'b1-modals', level:'B1', title:'Modals: obligation, prohibition and advice', es:'Modales: obligación, prohibición y consejo',
goal:'Usar must, have to, mustn\'t, don\'t have to, should y ought to sin confundirlos.',
theory:`
## 1. Características de los modales
Los modales (can, could, must, should, will, would, may, might) **no** llevan -s, van seguidos de **verbo base sin to** y forman la negativa/pregunta sin do.
x> She musts go. | She must go.
x> You should to see a doctor. | You should see a doctor.
x> Do you can swim? | Can you swim?
## 2. Must vs have to: obligación
| must | have to |
|---|---|
| Obligación que impone el hablante (personal) | Obligación externa (normas, leyes, horarios) |
| I must call my mum. (yo lo siento necesario) | I have to wear a uniform at work. (norma) |
> I **must** stop smoking. | Tengo que dejar de fumar. (lo decido yo)
> Pilots **have to** have regular medical checks. | Los pilotos tienen que pasar revisiones médicas.
> We **had to** wait two hours. | Tuvimos que esperar dos horas. (pasado: solo had to)
> You**'ll have to** work harder. | Tendrás que trabajar más. (futuro)
!note: *Must* no tiene pasado ni futuro: usamos **had to** y **will have to**.
## 3. Mustn't vs don't have to: ¡muy diferentes!
| mustn't | don't have to |
|---|---|
| Prohibición: no debes | No es necesario: no tienes por qué |
> You **mustn't** smoke in the hospital. | No debes fumar en el hospital. (prohibido)
> You **don't have to** come if you don't want to. | No tienes que venir si no quieres. (opcional)
> Tomorrow is Sunday, so I **don't have to** get up early. | Mañana es domingo, así que no tengo que madrugar.
!trap: "No tienes que…" en español puede significar prohibición o falta de necesidad. En inglés la diferencia es crucial: mustn't = prohibido; don't have to = opcional.
## 4. Should / ought to: consejo y recomendación
> You **should** see a doctor. | Deberías ir al médico.
> You **shouldn't** work so much. | No deberías trabajar tanto.
> **Should** I tell her the truth? | ¿Debería decirle la verdad?
> You **ought to** apologise. | Deberías disculparte. (más formal; significa lo mismo)
> I think you **should** take the job. / I **don't think** you **should** go. | Creo que deberías… / No creo que debas…
!tip: Para un consejo fuerte: **had better** + base: You**'d better** hurry or you'll miss the train. (Mejor que…, si no…)
## 5. Can / can't / be allowed to: permiso
> You **can** park here after 6 pm. | Puedes aparcar aquí después de las 6.
> We **weren't allowed to** use our phones in class. | No nos dejaban usar el móvil en clase.
## Resumen
| Significado | Presente | Pasado |
|---|---|---|
| Obligación | must / have to | had to |
| Prohibición | mustn't / can't | couldn't / wasn't allowed to |
| No necesario | don't have to / needn't | didn't have to |
| Consejo | should / ought to / had better | should have (C1) |
`,
ex:[
{t:'mc', q:'You ___ touch that wire! It\'s dangerous.', o:["don't have to","mustn't","needn't","shouldn't to"], a:1, e:'Prohibición → mustn\'t.'},
{t:'mc', q:'It\'s a free concert, so you ___ pay.', o:["mustn't","don't have to","can't","haven't"], a:1, e:'No es necesario → don\'t have to.'},
{t:'mc', q:'Yesterday I ___ work until 10 pm.', o:['must','had to','have to','musted'], a:1, e:'Must no tiene pasado → had to.'},
{t:'gap', q:'You look tired. You ___ (deberías) go to bed early.', a:['should','ought to'], e:'Consejo → should / ought to.'},
{t:'fix', q:'You should to drink more water.', a:['You should drink more water.'], e:'Should + verbo base sin to.'},
{t:'fix', q:'She cans speak four languages.', a:['She can speak four languages.'], e:'Los modales no llevan -s.'},
{t:'mc', q:'In my school, we ___ wear a uniform. It was the rule.', o:['must','had to','should','ought'], a:1, e:'Obligación externa en el pasado → had to.'},
{t:'mc', q:'You\'d better ___ now or you\'ll be late.', o:['to leave','leaving','leave','left'], a:2, e:'Had better + verbo base.'},
{t:'tr', q:'It isn\'t necessary for you to bring food.', k:'HAVE', s:'You ___ bring food.', a:["don't have to","do not have to"], e:'No necesario → don\'t have to.'},
{t:'tr', q:'Smoking is not permitted in this building.', k:'MUSTN\'T', s:'You ___ in this building.', a:["mustn't smoke","must not smoke"], e:'Prohibición → mustn\'t.'}
]
},

{
id:'b1-conditionals', level:'B1', title:'Zero and first conditionals', es:'Condicional cero y primer condicional',
goal:'Hablar de verdades generales y de situaciones futuras posibles con if, unless, when, as soon as.',
theory:`
## 1. Zero conditional: verdades generales
:: If + presente, presente
> If you heat ice, it melts. | Si calientas el hielo, se derrite.
> If I drink coffee at night, I **can't** sleep. | Si tomo café por la noche, no puedo dormir.
> Plants **die** if they **don't get** water. | Las plantas mueren si no reciben agua.
!note: En el zero conditional, *if* puede sustituirse por *when* sin cambiar el sentido: When you heat ice, it melts.
## 2. First conditional: situaciones futuras reales o probables
:: If + present simple, will / can / may / might / imperativo + verbo base
> If it **rains** tomorrow, we**'ll stay** at home. | Si llueve mañana, nos quedaremos en casa.
> If you **study** hard, you**'ll pass** the exam. | Si estudias mucho, aprobarás.
> If you **see** Ana, **tell** her to call me. | Si ves a Ana, dile que me llame.
> If we **leave** now, we **might catch** the train. | Si salimos ya, puede que cojamos el tren.
> You**'ll get** cold if you **don't wear** a coat. | Pasarás frío si no llevas abrigo.
x> If it will rain, we will stay at home. | If it rains, we will stay at home.
!trap: Igual que en español ("Si llueve…", no "Si lloverá"), después de **if** NO se usa will. Este error es frecuente porque el inglés usa will en la otra parte de la frase.
## 3. Unless = if … not
> **Unless** you hurry, you'll miss the bus. | A menos que te des prisa, perderás el bus.
> = **If** you **don't** hurry, you'll miss the bus.
> I won't go **unless** you come with me. | No iré a menos que vengas conmigo.
x> Unless you don't hurry… | Unless you hurry…
## 4. Otras conjunciones de tiempo futuro
**when, as soon as, before, after, until, as long as** + presente (con sentido futuro).
> I'll call you **as soon as** I **land**. | Te llamaré en cuanto aterrice.
> Wait here **until** I **come** back. | Espera aquí hasta que vuelva.
> **When** I **finish** university, I'll travel. | Cuando termine la universidad, viajaré.
> You can borrow my car **as long as** you **drive** carefully. | Puedes coger mi coche siempre que conduzcas con cuidado.
!trap: "Cuando termine" usa subjuntivo en español; en inglés usamos **presente simple**: when I finish. ¡Nunca "when I will finish"!
## 5. If vs when
> **If** I see him, I'll tell him. | Si lo veo… (no es seguro que lo vea)
> **When** I see him, I'll tell him. | Cuando lo vea… (seguro que lo veré)
## Resumen
| Tipo | Condición | Resultado | Uso |
|---|---|---|---|
| Zero | If + presente | presente | Siempre verdad |
| First | If + presente | will + base | Futuro probable |
`,
ex:[
{t:'mc', q:'If you ___ water to 100 °C, it boils.', o:['will heat','heat','heated','are heating'], a:1, e:'Verdad general → zero conditional: presente + presente.'},
{t:'mc', q:'If she ___ the job, she\'ll move to Berlin.', o:['will get','gets','got','getting'], a:1, e:'Después de if → presente, no will.'},
{t:'mc', q:'___ you study, you won\'t pass.', o:['If','Unless','When','As soon as'], a:1, e:'Unless = if not.'},
{t:'gap', q:'I\'ll phone you when I ___ (arrive) at the hotel.', a:['arrive'], e:'Tras when con sentido futuro → presente.'},
{t:'gap', q:'If you don\'t hurry, you ___ (miss) the train.', a:['will miss',"'ll miss"], e:'Resultado en futuro → will + base.'},
{t:'fix', q:'If I will have time, I will help you.', a:['If I have time, I will help you.',"If I have time, I'll help you."], e:'No se usa will después de if.'},
{t:'fix', q:'Unless you don\'t practise, you won\'t improve.', a:["Unless you practise, you won't improve.","If you don't practise, you won't improve.","Unless you practice, you won't improve."], e:'Unless ya es negativo: no añadas don\'t.'},
{t:'tr', q:'If you don\'t take an umbrella, you\'ll get wet.', k:'UNLESS', s:'You\'ll get wet ___ an umbrella.', a:['unless you take'], e:'Unless + afirmativo = if + negativo.'},
{t:'mc', q:'Don\'t leave ___ I tell you.', o:['until','unless','if','as'], a:0, e:'Until = hasta que.'},
{t:'ord', w:['as','soon','as','I','get','home','I\'ll','call','you'], a:["I'll call you as soon as I get home","as soon as I get home I'll call you"], e:'As soon as + presente, will en la otra cláusula.'}
]
},

{
id:'b1-passive', level:'B1', title:'The passive: present and past simple', es:'La voz pasiva: presente y pasado simple',
goal:'Formar y usar la pasiva cuando lo importante es la acción o el objeto, no quién la realiza.',
theory:`
## 1. ¿Cuándo usamos la pasiva?
Cuando **no sabemos**, **no importa** o es **obvio** quién hace la acción, o cuando queremos poner el foco en el objeto.
> Activa: Someone **stole** my bike. | Alguien robó mi bici.
> Pasiva: My bike **was stolen**. | Me robaron la bici.
## 2. Forma
:: Sujeto + be (en el tiempo correspondiente) + participio pasado
| Tiempo | Activa | Pasiva |
|---|---|---|
| Present simple | They make cars here. | Cars **are made** here. |
| Past simple | They built it in 1890. | It **was built** in 1890. |
| Present perfect | They have sold the house. | The house **has been sold**. |
| Future | They will open a shop. | A shop **will be opened**. |
| Modal | You must sign the form. | The form **must be signed**. |
> English **is spoken** all over the world. | El inglés se habla en todo el mundo.
> Coffee **is grown** in Colombia. | El café se cultiva en Colombia.
> The Mona Lisa **was painted** by Leonardo da Vinci. | La Mona Lisa fue pintada por Leonardo.
> The tickets **weren't sold** online. | Las entradas no se vendieron por internet.
> When **was** the bridge **built**? | ¿Cuándo se construyó el puente?
## 3. By + agente
Solo mencionamos quién hace la acción si es información importante.
> *Hamlet* **was written by** Shakespeare. | Hamlet fue escrito por Shakespeare.
x> My car was repaired by a mechanic. | My car was repaired. (obvio: no hace falta)
## 4. La pasiva y el "se" español
!trap: El "se" impersonal/pasivo del español se traduce muy a menudo con la pasiva: "Se habla inglés" → English **is spoken**. "Se vendieron todas las entradas" → All the tickets **were sold**. "Se construyó en 1900" → It **was built** in 1900.
!trap: No olvides el verbo **be**: "The house built in 1900" ✗ → The house **was** built in 1900.
x> This house built in 1920. | This house was built in 1920.
x> The window was broke. | The window was broken.
!tip: Repasa los participios irregulares: break-broken, write-written, steal-stolen, speak-spoken, choose-chosen, give-given, take-taken, eat-eaten, forget-forgotten, hide-hidden.
## 5. Born
> I **was born** in Lima in 1995. | Nací en Lima en 1995.
x> I born in 1995. | I was born in 1995.
`,
ex:[
{t:'mc', q:'Spanish ___ in more than 20 countries.', o:['speaks','is spoken','is speaking','spoken'], a:1, e:'Pasiva en presente: is + participio.'},
{t:'mc', q:'This church ___ in the 15th century.', o:['built','was built','is built','was build'], a:1, e:'Pasiva en pasado: was + participio (built).'},
{t:'gap', q:'My wallet ___ (steal) yesterday.', a:['was stolen'], e:'Pasado: was + stolen.'},
{t:'gap', q:'These shoes ___ (make) in Italy.', a:['are made'], e:'Presente: are + made.'},
{t:'fix', q:'I born in 1998.', a:['I was born in 1998.'], e:'"Nacer" = be born.'},
{t:'fix', q:'The letter was wrote in French.', a:['The letter was written in French.'], e:'Participio de write: written.'},
{t:'tr', q:'They grow rice in Asia.', k:'GROWN', s:'Rice ___ in Asia.', a:['is grown'], e:'Pasiva en presente.'},
{t:'tr', q:'Somebody cleaned the room this morning.', k:'WAS', s:'The room ___ this morning.', a:['was cleaned'], e:'Pasiva en pasado; no hace falta "by somebody".'},
{t:'mc', q:'When ___ the telephone invented?', o:['did','was','is','has'], a:1, e:'Pregunta pasiva en pasado: When was it invented?'},
{t:'mc', q:'"Se prohíbe fumar" →', o:['It prohibits smoking.','Smoking is not allowed.','Smoking not allows.','Is prohibited smoke.'], a:1, e:'El "se" pasivo español → pasiva inglesa.'}
]
},

{
id:'b1-relatives', level:'B1', title:'Defining relative clauses', es:'Oraciones de relativo especificativas',
goal:'Unir ideas con who, which, that, where, whose y saber cuándo se puede omitir el pronombre.',
theory:`
## 1. Pronombres relativos
| Pronombre | Se refiere a | Ejemplo |
|---|---|---|
| who | personas | the woman **who** lives next door |
| which | cosas, animales | the book **which** I bought |
| that | personas o cosas (informal) | the car **that** was stolen |
| where | lugares | the town **where** I grew up |
| whose | posesión (cuyo) | the man **whose** car was stolen |
| when | momentos | the day **when** we met |
> The man **who** called you is my boss. | El hombre que te llamó es mi jefe.
> I lost the ring **which/that** my grandmother gave me. | Perdí el anillo que me dio mi abuela.
> This is the café **where** we first met. | Este es el café donde nos conocimos.
> She's the girl **whose** brother plays for Real Madrid. | Es la chica cuyo hermano juega en el Real Madrid.
!trap: "Que" en español sirve para todo, pero en inglés hay que elegir: who para personas, which para cosas. **Nunca** "what" como relativo: the film **what** I saw ✗ → the film **that/which** I saw.
x> The person which helped me was very kind. | The person who helped me was very kind.
x> The book what I read was great. | The book that I read was great.
## 2. Omitir el pronombre
Podemos omitir who/which/that cuando es el **objeto** del verbo de la relativa (cuando después viene otro sujeto).
> The film (**that**) **we** saw was boring. | La peli que vimos era aburrida. (we = sujeto → se puede omitir)
> The people (**who**) **I** met were friendly. | La gente que conocí era simpática.
> The man **who lives** next door is a doctor. | (who = sujeto de "lives" → NO se omite)
!tip: Truco: si después del pronombre viene un **sujeto + verbo**, puedes omitirlo. Si viene directamente un **verbo**, no.
## 3. No repitas el pronombre objeto
x> The book that I bought it was expensive. | The book that I bought was expensive.
!trap: En español a veces decimos "el libro que lo compré…" de forma coloquial. En inglés el pronombre relativo ya sustituye al objeto: no añadas *it/him/her*.
## 4. Preposiciones al final
En inglés cotidiano, la preposición suele ir al final de la oración de relativo.
> That's the girl (**who**) I told you **about**. | Esa es la chica de la que te hablé.
> The house (**that**) I grew up **in** has been sold. | La casa en la que crecí se ha vendido.
> This is the job (**that**) I applied **for**. | Este es el trabajo al que me presenté.
`,
ex:[
{t:'mc', q:'The doctor ___ treated me was very professional.', o:['which','who','whose','where'], a:1, e:'Persona → who (o that).'},
{t:'mc', q:'That\'s the restaurant ___ we had our first date.', o:['which','that','where','who'], a:2, e:'Lugar → where.'},
{t:'mc', q:'I have a friend ___ father is a famous actor.', o:['who','whose','which','that his'], a:1, e:'Posesión → whose.'},
{t:'gap', q:'The phone ___ I bought last week has stopped working. (which/that)', a:['which','that'], e:'Cosa → which/that (aquí también se puede omitir).'},
{t:'fix', q:'The movie what we watched was amazing.', a:['The movie that we watched was amazing.','The movie which we watched was amazing.','The movie we watched was amazing.'], e:'"What" no funciona como pronombre relativo.'},
{t:'fix', q:'The man which helped me was very kind.', a:['The man who helped me was very kind.','The man that helped me was very kind.'], e:'Personas → who/that.'},
{t:'fix', q:'This is the bag that I lost it yesterday.', a:['This is the bag that I lost yesterday.','This is the bag I lost yesterday.','This is the bag which I lost yesterday.'], e:'No repitas el objeto (it).'},
{t:'mc', q:'In which sentence can you omit the relative pronoun?', o:['The girl who sings in the band is my cousin.','The car that hit me was red.','The book that you lent me is great.','The man who works here is nice.'], a:2, e:'Solo se omite cuando el pronombre es objeto (that + you lent).'},
{t:'ord', w:['that\'s','the','man','I','told','you','about'], a:["that's the man I told you about"], e:'Pronombre omitido + preposición al final.'},
{t:'gap', q:'I\'ll never forget the day ___ I graduated.', a:['when','that'], e:'Momento → when (o that).'}
]
},

{
id:'b1-verbpatterns', level:'B1', title:'Verb patterns: -ing or to-infinitive · used to', es:'Verbo + -ing o + to · used to',
goal:'Saber qué verbos van seguidos de -ing y cuáles de to + infinitivo, y hablar de hábitos pasados con used to.',
theory:`
## 1. Verbo + -ing (gerundio)
| Verbos comunes + -ing |
|---|
| enjoy, avoid, finish, mind, suggest, consider, keep, practise, miss, imagine, can't stand, don't mind, give up, look forward to |
> I **enjoy cooking** for friends. | Disfruto cocinando para mis amigos.
> She **avoided answering** the question. | Evitó responder la pregunta.
> Would you **mind closing** the door? | ¿Te importaría cerrar la puerta?
> I'm **looking forward to seeing** you. | Tengo muchas ganas de verte.
x> I enjoy to swim. | I enjoy swimming.
x> I look forward to hear from you. | I look forward to hearing from you.
## 2. Verbo + to + infinitivo
| Verbos comunes + to |
|---|
| want, need, decide, hope, plan, promise, agree, refuse, manage, learn, offer, afford, expect, seem, would like |
> I **want to learn** Chinese. | Quiero aprender chino.
> We **decided to stay** at home. | Decidimos quedarnos en casa.
> She **managed to finish** on time. | Consiguió terminar a tiempo.
> I **can't afford to buy** a new car. | No me puedo permitir comprar un coche nuevo.
## 3. Verbo + objeto + to
**want, ask, tell, help, allow, expect, advise, invite, remind** + persona + to
> I **want you to help** me. | Quiero que me ayudes.
> She **asked me to call** her. | Me pidió que la llamara.
x> I want that you help me. | I want you to help me.
!trap: "Quiero que…" se traduce SIEMPRE con **want + persona + to**: I want **you to** come. Nunca "I want that you come".
## 4. Después de preposición → siempre -ing
> I'm **good at drawing**. | Se me da bien dibujar.
> She's **interested in learning** Japanese. | Le interesa aprender japonés.
> **Thanks for helping** me. | Gracias por ayudarme.
> **Before leaving**, check the windows. | Antes de salir, revisa las ventanas.
> How **about going** to the beach? | ¿Qué tal si vamos a la playa?
x> I'm interested in learn English. | I'm interested in learning English.
## 5. Like, love, hate, prefer, start, begin
Admiten ambas formas sin gran cambio de significado.
> I **love dancing** / I **love to dance**. | Me encanta bailar.
> It **started raining** / It **started to rain**. | Empezó a llover.
!note: Pero **would like / would love** + to: I'd like **to** go. NO: I'd like going.
## 6. Used to: hábitos y estados pasados
:: used to + verbo base · didn't use to · Did you use to…?
> I **used to play** the piano. (ya no) | Antes tocaba el piano.
> She **didn't use to like** coffee. | Antes no le gustaba el café.
> **Did** you **use to have** long hair? | ¿Tenías el pelo largo antes?
> There **used to be** a cinema here. | Antes había un cine aquí.
!trap: Para el presente no existe "use to". "Suelo levantarme temprano" = I **usually** get up early. NO: I use to get up early.
x> I use to go to the gym every day. | I usually go to the gym every day.
`,
ex:[
{t:'mc', q:'I really enjoy ___ in the mountains.', o:['to walk','walking','walk','walked'], a:1, e:'Enjoy + -ing.'},
{t:'mc', q:'They decided ___ a new house.', o:['buying','to buy','buy','for buying'], a:1, e:'Decide + to.'},
{t:'mc', q:'My parents want ___ a doctor.', o:['that I become','me becoming','me to become','I become'], a:2, e:'Want + objeto + to.'},
{t:'gap', q:'I\'m looking forward to ___ (meet) your family.', a:['meeting'], e:'"to" es preposición en look forward to → -ing.'},
{t:'gap', q:'She gave up ___ (smoke) last year.', a:['smoking'], e:'Give up + -ing.'},
{t:'fix', q:'I use to drink coffee every morning.', a:['I usually drink coffee every morning.'], e:'Hábito presente → usually. "Used to" solo para el pasado.'},
{t:'fix', q:'He is good at play the guitar.', a:['He is good at playing the guitar.',"He's good at playing the guitar."], e:'Después de preposición → -ing.'},
{t:'fix', q:'I want that you call me tomorrow.', a:['I want you to call me tomorrow.'], e:'Want + persona + to.'},
{t:'tr', q:'When I was a child, I played football every day, but I don\'t now.', k:'USED', s:'When I was a child, I ___ football every day.', a:['used to play'], e:'Hábito pasado que ya no ocurre → used to.'},
{t:'mc', q:'Did you ___ live in London?', o:['used to','use to','using to','used'], a:1, e:'Pregunta: Did you use to (sin -d).'}
]
}

);
