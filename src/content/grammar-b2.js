/* Gramática B2 — upper-intermediate */
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(

{
id:'b2-ppcont', level:'B2', title:'Present perfect continuous vs simple', es:'Presente perfecto continuo vs simple',
goal:'Elegir entre "I have done" e "I have been doing" según importe el resultado o la actividad y su duración.',
theory:`
## 1. Forma
:: Sujeto + have/has + been + verbo-ing
> I**'ve been waiting** for you for an hour! | ¡Llevo una hora esperándote!
> How long **have** you **been learning** English? | ¿Cuánto tiempo llevas aprendiendo inglés?
> She **hasn't been sleeping** well lately. | Últimamente no duerme bien.
## 2. Usos del present perfect continuous
### a) Actividad que empezó en el pasado y continúa (énfasis en la duración)
> It**'s been raining** all day. | Lleva lloviendo todo el día.
> We**'ve been living** here since 2018. | Vivimos aquí desde 2018.
### b) Actividad reciente con resultados visibles ahora
> I'm tired because I**'ve been running**. | Estoy cansado porque he estado corriendo.
> Your eyes are red. **Have** you **been crying**? | Tienes los ojos rojos. ¿Has estado llorando?
> Someone**'s been using** my computer! | ¡Alguien ha estado usando mi ordenador!
!trap: La traducción natural de **"llevar + gerundio"** es el present perfect continuous: "Llevo dos años estudiando inglés" = I**'ve been studying** English for two years.
## 3. Simple vs continuous
| Present perfect simple | Present perfect continuous |
|---|---|
| Resultado / acción completa | Actividad / proceso (puede no estar terminada) |
| How many / how much | How long |
| I've written three emails. | I've been writing emails all morning. |
| I've painted the kitchen. (terminada) | I've been painting the kitchen. (quizá no he terminado; tengo pintura en las manos) |
| She's read 200 pages. | She's been reading for two hours. |
> I**'ve read** your report. It's excellent. | He leído tu informe. (terminado)
> I**'ve been reading** your report. I'm halfway through. | He estado leyendo tu informe. Voy por la mitad.
x> I've been writing five emails this morning. | I've written five emails this morning.
!tip: Si hay un **número** o **cantidad** (three emails, 200 pages, twice), usa el **simple**. Si preguntas **How long**, suele ir mejor el **continuo**.
## 4. Verbos de estado: solo simple
> I**'ve known** her for years. | La conozco desde hace años.
x> I've been knowing her for years. | I've known her for years.
> I**'ve had** this car since 2015. | Tengo este coche desde 2015. (have = poseer)
!note: Con live, work, teach, study ambas formas son posibles con poca diferencia: I've lived / I've been living here for ten years. El continuo sugiere algo más temporal.
`,
ex:[
{t:'mc', q:'I\'m exhausted. I ___ all day.', o:['have worked','have been working','work','am working'], a:1, e:'Actividad prolongada con resultado visible (cansancio) → continuo.'},
{t:'mc', q:'She ___ three novels so far.', o:['has been writing','has written','writes','wrote'], a:1, e:'Cantidad (three novels) → present perfect simple.'},
{t:'mc', q:'How long ___ for the bus?', o:['have you waited','have you been waiting','are you waiting','do you wait'], a:1, e:'How long + actividad en curso → continuo.'},
{t:'gap', q:'I ___ (know) Marta since we were at school.', a:['have known',"'ve known"], e:'"Know" es de estado → solo simple.'},
{t:'gap', q:'Your hands are dirty. What ___ you ___ (do)? (escribe: have been doing)', a:['have been doing'], e:'Actividad reciente con efecto visible.'},
{t:'fix', q:'I study English for five years.', a:['I have been studying English for five years.',"I've been studying English for five years.",'I have studied English for five years.'], e:'"Llevo X años estudiando" → present perfect continuo (o simple).'},
{t:'fix', q:'I\'ve been drinking four cups of coffee today.', a:["I've drunk four cups of coffee today.",'I have drunk four cups of coffee today.','I have had four cups of coffee today.'], e:'Cantidad concreta → simple.'},
{t:'tr', q:'It started raining three hours ago and it\'s still raining.', k:'BEEN', s:'It ___ three hours.', a:['has been raining for',"'s been raining for"], e:'Duración de una actividad que continúa.'},
{t:'mc', q:'Sorry I\'m late. ___ long?', o:['Have you waited','Have you been waiting','Did you wait','Are you waiting'], a:1, e:'Pregunta sobre duración de algo reciente → continuo.'},
{t:'ord', w:['I\'ve','been','looking','for','you','everywhere'], a:["I've been looking for you everywhere"], e:'Actividad prolongada reciente.'}
]
},

{
id:'b2-narrative', level:'B2', title:'Narrative tenses: past perfect simple and continuous', es:'Tiempos narrativos: pasado perfecto',
goal:'Contar historias con claridad usando past perfect para lo que ocurrió antes de otro momento pasado.',
theory:`
## 1. Past perfect simple
:: Sujeto + had + participio
Sirve para hablar de una acción **anterior** a otro momento del pasado ("el pasado del pasado").
> When I arrived at the station, the train **had** already **left**. | Cuando llegué a la estación, el tren ya se había ido.
> She was nervous because she **had never flown** before. | Estaba nerviosa porque nunca había volado.
> I didn't recognise him at first because he **had grown** a beard. | No lo reconocí porque se había dejado barba.
Compara:
> When I arrived, the film **started**. | Cuando llegué, empezó la peli. (primero llegué, luego empezó)
> When I arrived, the film **had started**. | Cuando llegué, la peli había empezado. (empezó antes de que llegara)
## 2. Past perfect continuous
:: Sujeto + had + been + verbo-ing
Actividad prolongada que duró hasta un momento del pasado (o justo antes).
> I**'d been waiting** for an hour when she finally called. | Llevaba una hora esperando cuando por fin llamó.
> The ground was wet because it **had been raining**. | El suelo estaba mojado porque había estado lloviendo.
> They **had been dating** for five years before they got married. | Llevaban cinco años saliendo antes de casarse.
!trap: "Llevaba X tiempo haciendo algo" → had been + -ing: "Llevaba dos años viviendo en Londres cuando la conocí" = I **had been living** in London for two years when I met her.
## 3. Los cuatro tiempos narrativos juntos
| Tiempo | Función en la historia |
|---|---|
| Past simple | Los hechos principales, en orden |
| Past continuous | El fondo, la escena, lo que estaba pasando |
| Past perfect simple | Lo que había pasado antes |
| Past perfect continuous | Lo que llevaba tiempo pasando antes |
> It **was snowing** and the streets **were** empty. Anna **had been walking** for hours and **had lost** her way. Suddenly, she **saw** a light. | Nevaba y las calles estaban vacías. Anna llevaba horas caminando y se había perdido. De repente, vio una luz.
## 4. Expresiones de tiempo frecuentes
**by the time, already, just, never… before, after, as soon as, when, until**
> **By the time** we got there, everyone **had gone** home. | Para cuando llegamos, todos se habían ido.
> **As soon as** she **had finished**, she left. | En cuanto terminó, se fue.
> It was **the first time** I **had seen** snow. | Era la primera vez que veía nieve.
!tip: No abuses del past perfect: si el orden ya está claro (con *before* o *after*), el past simple suele bastar: After I **finished** dinner, I **went** out.
x> When I got home, I realised I lost my keys. | When I got home, I realised I had lost my keys.
`,
ex:[
{t:'mc', q:'When we got to the cinema, the film ___.', o:['already started','had already started','has already started','was already starting'], a:1, e:'Ocurrió antes de que llegáramos → past perfect.'},
{t:'mc', q:'Her eyes were red. She ___.', o:['had been crying','has cried','was cried','had cry'], a:0, e:'Actividad prolongada anterior con efecto visible → past perfect continuous.'},
{t:'gap', q:'By the time I arrived, everyone ___ (leave).', a:['had left'], e:'By the time + past perfect.'},
{t:'gap', q:'I ___ (wait) for two hours when the doctor finally saw me.', a:['had been waiting',"'d been waiting"], e:'"Llevaba dos horas esperando" → had been + -ing.'},
{t:'gap', q:'It was the first time I ___ (ever / eat) octopus.', a:['had ever eaten'], e:'It was the first time + past perfect.'},
{t:'fix', q:'I didn\'t know who he was because I never met him before.', a:["I didn't know who he was because I had never met him before.","I didn't know who he was because I'd never met him before."], e:'Anterior a otro pasado → past perfect.'},
{t:'fix', q:'She was tired because she was working all day.', a:['She was tired because she had been working all day.',"She was tired because she'd been working all day."], e:'Causa prolongada anterior → past perfect continuous.'},
{t:'tr', q:'I had never seen such a beautiful beach before.', k:'FIRST', s:'It was the ___ seen such a beautiful beach.', a:['first time I had','first time i\'d'], e:'It was the first time + past perfect.'},
{t:'mc', q:'They ___ for ten years when they finally decided to get married.', o:['were going out','had been going out','have been going out','went out'], a:1, e:'Duración hasta un momento pasado → past perfect continuous.'},
{t:'ord', w:['by','the','time','we','arrived','the','party','had','finished'], a:['by the time we arrived the party had finished','the party had finished by the time we arrived'], e:'By the time + past simple, past perfect en la principal.'}
]
},

{
id:'b2-futureadv', level:'B2', title:'Future continuous and future perfect', es:'Futuro continuo y futuro perfecto',
goal:'Hablar de acciones en curso en un momento futuro y de acciones que estarán terminadas para entonces.',
theory:`
## 1. Future continuous
:: will be + verbo-ing
### Acción en progreso en un momento del futuro
> This time tomorrow, I**'ll be lying** on a beach. | Mañana a esta hora estaré tumbado en una playa.
> Don't call at 8; we**'ll be having** dinner. | No llames a las 8; estaremos cenando.
### Acciones previstas que ocurrirán en el curso normal de las cosas
> I**'ll be seeing** John at work tomorrow, so I can give him the message. | Veré a John en el trabajo mañana (de todas formas).
### Preguntas educadas sobre planes
> **Will** you **be using** the car this evening? | ¿Vas a usar el coche esta tarde? (más cortés que "Are you going to use…")
## 2. Future perfect simple
:: will have + participio
Algo que estará **terminado antes de** un momento futuro. Suele ir con **by** (para) o **by the time**.
> By 2030, I**'ll have finished** my degree. | Para 2030 habré terminado la carrera.
> The film **will have started** by the time we get there. | La peli habrá empezado para cuando lleguemos.
> I **won't have finished** the report by Friday. | No habré terminado el informe para el viernes.
## 3. Future perfect continuous
:: will have been + verbo-ing
Duración de una actividad hasta un momento futuro.
> In June, I**'ll have been working** here for ten years. | En junio hará diez años que trabajo aquí.
> By the time she retires, she **will have been teaching** for 40 years. | Cuando se jubile, llevará 40 años enseñando.
## 4. By vs until
| by | until / till |
|---|---|
| como muy tarde, antes de | hasta (la acción continúa hasta ese momento) |
| I'll have finished **by** 5. | I'll be working **until** 5. |
!trap: "Para el lunes" = **by** Monday, no "for Monday" cuando hablamos de plazos: Send it **by** Monday. (Aunque "the homework for Monday" sí es correcto para indicar destino.)
## 5. Resumen visual
| Forma | Ejemplo | Idea |
|---|---|---|
| will + base | I'll call you. | Decisión, predicción |
| will be + -ing | I'll be working at 10. | En progreso en el futuro |
| will have + participio | I'll have finished by 10. | Terminado antes de |
| will have been + -ing | I'll have been working for 8 hours by 10. | Duración hasta |
`,
ex:[
{t:'mc', q:'At 10 tomorrow morning I ___ an exam, so I can\'t meet you.', o:['will take','will be taking','will have taken','take'], a:1, e:'En progreso en un momento futuro → future continuous.'},
{t:'mc', q:'By next July, they ___ the new bridge.', o:['will build','will be building','will have built','are building'], a:2, e:'Terminado antes de un momento futuro (by) → future perfect.'},
{t:'gap', q:'Next month I ___ (live) here for exactly five years. (future perfect continuous)', a:['will have been living',"'ll have been living"], e:'Duración hasta un momento futuro.'},
{t:'gap', q:'Please send me the documents ___ Friday at the latest.', a:['by'], e:'Plazo límite → by.'},
{t:'gap', q:'I\'ll be at the office ___ 6 pm, then I\'ll go home.', a:['until','till'], e:'Duración hasta un momento → until.'},
{t:'fix', q:'Don\'t phone me at 9 because I will watch the match.', a:["Don't phone me at 9 because I will be watching the match.","Don't phone me at 9 because I'll be watching the match."], e:'Acción en progreso a las 9 → future continuous.'},
{t:'fix', q:'By the end of the year I will finish the book.', a:['By the end of the year I will have finished the book.',"By the end of the year I'll have finished the book."], e:'"By" + momento futuro → future perfect.'},
{t:'mc', q:'___ the printer this afternoon? I need to print something.', o:['Will you use','Will you be using','Will you have used','Are you use'], a:1, e:'Pregunta cortés sobre planes → future continuous.'},
{t:'tr', q:'I\'ll finish this essay before you get back.', k:'HAVE', s:'I ___ this essay by the time you get back.', a:['will have finished',"'ll have finished"], e:'Future perfect + by the time.'},
{t:'mc', q:'When you arrive, I ___ dinner, so we can eat straight away.', o:['will cook','will have cooked','will be cooked','am cooking'], a:1, e:'Estará terminado cuando llegues.'}
]
},

{
id:'b2-conditionals', level:'B2', title:'Second and third conditionals', es:'Segundo y tercer condicional',
goal:'Hablar de situaciones hipotéticas en el presente y de situaciones imaginarias en el pasado.',
theory:`
## 1. Second conditional: hipótesis presente o futura
:: If + past simple, would / could / might + verbo base
Situaciones **imaginarias, improbables o contrarias a la realidad** ahora.
> If I **had** more time, I **would learn** to play the guitar. | Si tuviera más tiempo, aprendería a tocar la guitarra.
> If I **won** the lottery, I**'d travel** around the world. | Si me tocara la lotería, viajaría por el mundo.
> What **would** you **do** if you **lost** your job? | ¿Qué harías si perdieras tu trabajo?
> If she **spoke** English, she **could** apply for the job. | Si hablara inglés, podría solicitar el trabajo.
### If I were you
Con *be*, se prefiere **were** para todas las personas (sobre todo en inglés formal y en consejos).
> If I **were** you, I**'d accept** the offer. | Yo que tú, aceptaría la oferta.
> If he **were** taller, he'd be a model. | Si fuera más alto, sería modelo.
!trap: El español usa el **subjuntivo** ("si tuviera") y el inglés usa el **past simple** ("if I had"). Nunca "if I would have": If I **would have** money ✗ → If I **had** money.
x> If I would know the answer, I would tell you. | If I knew the answer, I would tell you.
## 2. First vs second
> If I **get** the job, I'll buy a car. | (es posible: he hecho la entrevista)
> If I **got** the job, I'd buy a car. | (lo veo improbable, o solo imagino)
## 3. Third conditional: el pasado imaginario
:: If + past perfect, would have / could have / might have + participio
Situaciones del pasado que **no** ocurrieron, y sus consecuencias imaginarias. Sirve para lamentos, críticas y especulación.
> If I **had studied** harder, I **would have passed** the exam. | Si hubiera estudiado más, habría aprobado.
> If we **hadn't missed** the train, we **wouldn't have been** late. | Si no hubiéramos perdido el tren, no habríamos llegado tarde.
> She **might have won** if she **had trained** more. | Quizá habría ganado si hubiera entrenado más.
> What **would** you **have done** if I **hadn't helped** you? | ¿Qué habrías hecho si no te hubiera ayudado?
!trap: "Si lo hubiera sabido" = If I **had known** (NO "if I would have known"). El 'would have' va solo en la parte del resultado.
x> If I would have known, I would have come. | If I had known, I would have come.
!note: Ojo con la contracción **'d**: en la parte del if = **had**; en la parte del resultado = **would**: If I**'d** known (had), I**'d** have come (would).
## 4. Tabla resumen
| Tipo | If… | Resultado | Ejemplo |
|---|---|---|---|
| 0 | presente | presente | If you heat ice, it melts. |
| 1 | presente | will | If it rains, I'll stay in. |
| 2 | pasado | would + base | If I were rich, I'd buy it. |
| 3 | past perfect | would have + part. | If I'd known, I'd have helped. |
`,
ex:[
{t:'mc', q:'If I ___ you, I\'d talk to her.', o:['am','was being','were','would be'], a:2, e:'If I were you = yo que tú.'},
{t:'mc', q:'If I had more money, I ___ a bigger flat.', o:['will rent','would rent','rented','would have rented'], a:1, e:'Segundo condicional: would + base.'},
{t:'mc', q:'If they had left earlier, they ___ the plane.', o:["wouldn't miss","won't miss","wouldn't have missed","hadn't missed"], a:2, e:'Tercer condicional: would have + participio.'},
{t:'gap', q:'If I ___ (know) his number, I would call him.', a:['knew'], e:'Segundo condicional: if + past simple.'},
{t:'gap', q:'If you ___ (tell) me earlier, I would have helped you.', a:['had told',"'d told"], e:'Tercer condicional: if + past perfect.'},
{t:'fix', q:'If I would have more free time, I would read more.', a:['If I had more free time, I would read more.',"If I had more free time, I'd read more."], e:'Nunca "would" en la parte del if (segundo condicional).'},
{t:'fix', q:'If she would have seen the sign, she would have stopped.', a:['If she had seen the sign, she would have stopped.',"If she'd seen the sign, she would have stopped.","If she had seen the sign, she'd have stopped."], e:'If + past perfect.'},
{t:'tr', q:'I didn\'t go to the party because I was ill.', k:'IF', s:'I would have gone to the party ___ ill.', a:["if i hadn't been","if i had not been"], e:'Pasado imaginario → tercer condicional.'},
{t:'tr', q:'I don\'t have a car, so I can\'t drive you to the airport.', k:'COULD', s:'If I had a car, I ___ you to the airport.', a:['could drive'], e:'Segundo condicional con could.'},
{t:'mc', q:'What ___ if you found a wallet in the street?', o:['will you do','would you do','would you have done','do you do'], a:1, e:'Situación hipotética → would + base.'}
]
},

{
id:'b2-wish', level:'B2', title:'Wishes and regrets: wish, if only', es:'Deseos y lamentos: wish, if only',
goal:'Expresar deseos sobre el presente, lamentos sobre el pasado y quejas sobre el comportamiento de otros.',
theory:`
## 1. Wish + past simple: deseos sobre el presente
:: wish / if only + past simple (were con be)
Queremos que una situación **presente** sea diferente.
> I **wish** I **had** more free time. | Ojalá tuviera más tiempo libre.
> I **wish** I **lived** closer to the sea. | Ojalá viviera más cerca del mar.
> I **wish** I **were** taller. | Ojalá fuera más alto.
> **If only** I **knew** the answer! | ¡Si tan solo supiera la respuesta!
> I **wish** I **could** speak Chinese. | Ojalá pudiera hablar chino.
## 2. Wish + past perfect: lamentos sobre el pasado
:: wish / if only + had + participio
> I **wish** I **had studied** harder at school. | Ojalá hubiera estudiado más en el colegio.
> I **wish** I **hadn't said** that. | Ojalá no hubiera dicho eso. (me arrepiento)
> **If only** we **had left** earlier! | ¡Si hubiéramos salido antes!
## 3. Wish + would: quejas y deseos de cambio en otros
:: wish + persona/cosa + would + verbo base
Expresa **irritación** por algo que otra persona hace (o no hace) y que queremos que cambie.
> I **wish** you **would stop** interrupting me. | Ojalá dejaras de interrumpirme.
> I **wish** it **would stop** raining. | Ojalá dejara de llover.
> I **wish** my neighbours **wouldn't make** so much noise. | Ojalá los vecinos no hicieran tanto ruido.
!note: No usamos *wish + would* para nosotros mismos: I wish I **would** be rich ✗ → I wish I **were** rich.
x> I wish I would have a car. | I wish I had a car.
## 4. Wish vs hope
| hope | wish |
|---|---|
| Algo posible y real | Algo imposible o improbable |
| + presente o will | + pasado (irreal) |
| I **hope** you **pass** the exam. | I **wish** I **had** more talent. |
> I **hope** it **doesn't rain** tomorrow. | Espero que no llueva mañana.
> I **wish** it **wasn't** raining now. | Ojalá no estuviera lloviendo ahora.
!trap: "Ojalá" se traduce a veces con **hope** (posible) y a veces con **wish** (imposible): "Ojalá apruebes" = I hope you pass. "Ojalá estuvieras aquí" = I wish you were here.
!trap: Para desear algo a alguien, no se usa *wish that…*: "Te deseo suerte" = I wish you **luck** (wish + persona + sustantivo). "Te deseo que lo pases bien" = I **hope** you have a great time.
## 5. Resumen
| Deseo sobre… | Estructura | Ejemplo |
|---|---|---|
| Presente | wish + past simple | I wish I had a dog. |
| Pasado (lamento) | wish + past perfect | I wish I had bought it. |
| Comportamiento ajeno | wish + would | I wish he would listen. |
| Habilidad | wish + could | I wish I could fly. |
`,
ex:[
{t:'mc', q:'I wish I ___ a car. Taking the bus every day is exhausting.', o:['have','had','would have','will have'], a:1, e:'Deseo sobre el presente → past simple.'},
{t:'mc', q:'I wish I ___ that email. Now my boss is angry.', o:["didn't send","hadn't sent","wouldn't send","don't send"], a:1, e:'Lamento sobre el pasado → past perfect.'},
{t:'mc', q:'I wish you ___ leaving your dirty plates everywhere!', o:['stopped','would stop','had stopped','will stop'], a:1, e:'Queja sobre el comportamiento de otro → would.'},
{t:'mc', q:'I ___ you have a great time in Paris!', o:['wish','hope','would','want'], a:1, e:'Algo posible en el futuro → hope.'},
{t:'gap', q:'If only I ___ (be) braver! I\'d tell her how I feel.', a:['were','was'], e:'If only + past simple (were es más formal).'},
{t:'gap', q:'I wish I ___ (can) play the piano.', a:['could'], e:'Wish + could para habilidades.'},
{t:'fix', q:'I wish I would be rich.', a:['I wish I were rich.','I wish I was rich.'], e:'No se usa would con uno mismo: wish + past.'},
{t:'fix', q:'I wish you pass your driving test tomorrow.', a:['I hope you pass your driving test tomorrow.'], e:'Algo posible → hope.'},
{t:'tr', q:'I regret not going to university.', k:'WISH', s:'I ___ to university.', a:['wish i had gone',"wish i'd gone"], e:'Lamento sobre el pasado → wish + past perfect.'},
{t:'tr', q:'It\'s a pity I don\'t speak French.', k:'ONLY', s:'If ___ French.', a:['only i spoke','only i could speak'], e:'If only + past simple.'}
]
},

{
id:'b2-reported', level:'B2', title:'Reported speech and reporting verbs', es:'Estilo indirecto y verbos introductorios',
goal:'Transmitir lo que otros dijeron, preguntaron u ordenaron, con los cambios de tiempo y orden correctos.',
theory:`
## 1. El "salto atrás" de tiempos (backshift)
Cuando el verbo introductorio está en pasado (*said, told*), los tiempos normalmente retroceden un paso.
| Estilo directo | Estilo indirecto |
|---|---|
| present simple: "I **like** it." | past simple: She said she **liked** it. |
| present continuous: "I'm **working**." | past continuous: He said he **was working**. |
| past simple: "I **saw** him." | past perfect: She said she **had seen** him. |
| present perfect: "I've **finished**." | past perfect: He said he **had finished**. |
| will: "I'**ll** call." | would: She said she **would** call. |
| can: "I **can** swim." | could: He said he **could** swim. |
| must: "I **must** go." | had to: She said she **had to** go. |
!note: Si lo que se dijo **sigue siendo verdad**, el salto es opcional: He said he **lives / lived** in Rome. También si el verbo introductorio está en presente: She **says** she **is** tired.
## 2. Cambios de pronombres, tiempo y lugar
| Directo | Indirecto |
|---|---|
| now | then, at that moment |
| today / tonight | that day / that night |
| yesterday | the day before, the previous day |
| tomorrow | the next day, the following day |
| last week | the week before |
| here / this | there / that |
## 3. Say vs tell
> She **said** (that) she was tired. | (say + sin persona)
> She **told me** (that) she was tired. | (tell + persona)
> He **said to me** that… | (say to + persona, menos común)
x> She said me that she was tired. | She told me that she was tired.
## 4. Preguntas indirectas
¡**Sin** inversión y **sin** do/does/did! Orden normal: sujeto + verbo.
> "Where **do you live**?" → He asked me where **I lived**. | Me preguntó dónde vivía.
> "**Are you** hungry?" → She asked **if/whether I was** hungry. | Me preguntó si tenía hambre.
> "What time **did** the train **leave**?" → I asked what time **the train had left**. |
x> He asked me where did I live. | He asked me where I lived.
!trap: Las preguntas indirectas mantienen el orden de frase afirmativa. Esto también vale para preguntas educadas: Can you tell me where **the station is**? (no "where is the station").
## 5. Órdenes y peticiones
:: tell / ask + persona + (not) to + infinitivo
> "Sit down." → The teacher **told us to sit** down. |
> "Please don't shout." → She **asked him not to shout**. |
## 6. Verbos introductorios (reporting verbs)
Usar verbos más precisos que *say* eleva tu nivel.
| Patrón | Verbos | Ejemplo |
|---|---|---|
| + to | agree, offer, promise, refuse, threaten | He **refused to** help. |
| + persona + to | advise, ask, encourage, invite, remind, warn | She **reminded me to** call. |
| + -ing | admit, deny, recommend, suggest | He **denied stealing** the money. |
| + preposición + -ing | apologise for, accuse sb of, insist on, blame sb for | She **apologised for being** late. |
| + that | explain, complain, claim, admit | He **admitted that** he was wrong. |
> She **suggested going** to the cinema. | Sugirió ir al cine.
x> She suggested me to go. | She suggested that I go / She suggested (my) going.
`,
ex:[
{t:'mc', q:'"I\'m tired," she said. → She said she ___ tired.', o:['is','was','has been','will be'], a:1, e:'Present simple → past simple.'},
{t:'mc', q:'He ___ me that he would be late.', o:['said','told','asked','spoke'], a:1, e:'Tell + persona.'},
{t:'mc', q:'"Where do you work?" → She asked me where ___.', o:['do I work','I worked','did I work','I work did'], a:1, e:'Pregunta indirecta: orden afirmativo + backshift.'},
{t:'gap', q:'"Don\'t touch it!" → My mum told me ___ touch it.', a:['not to'], e:'Orden negativa → not to + infinitivo.'},
{t:'gap', q:'"I\'ll help you tomorrow." → He said he ___ help me the following day.', a:['would'], e:'Will → would.'},
{t:'fix', q:'He asked me what time was it.', a:['He asked me what time it was.'], e:'Pregunta indirecta: sujeto + verbo.'},
{t:'fix', q:'She suggested me to take a taxi.', a:['She suggested that I take a taxi.','She suggested taking a taxi.','She suggested that I should take a taxi.','She suggested I take a taxi.'], e:'Suggest no lleva persona + to.'},
{t:'tr', q:'"I didn\'t steal the money," said Tom.', k:'DENIED', s:'Tom ___ the money.', a:['denied stealing','denied having stolen','denied that he had stolen'], e:'Deny + -ing.'},
{t:'tr', q:'"Can you help me, please?" she said to him.', k:'ASKED', s:'She ___ her.', a:['asked him to help','asked him if he could help','asked him whether he could help'], e:'Petición → ask + persona + to.'},
{t:'tr', q:'"I\'m sorry I\'m late," said Ana.', k:'APOLOGISED', s:'Ana ___ late.', a:['apologised for being','apologized for being'], e:'Apologise for + -ing.'},
{t:'ord', w:['can','you','tell','me','where','the','station','is'], a:['can you tell me where the station is'], e:'Pregunta indirecta educada: orden afirmativo.'}
]
},

{
id:'b2-passive', level:'B2', title:'The passive in all tenses · causative have/get', es:'Pasiva en todos los tiempos y causativa',
goal:'Dominar la pasiva en cualquier tiempo y decir que otra persona hace algo por ti (have/get something done).',
theory:`
## 1. Pasiva en todos los tiempos
| Tiempo | Pasiva |
|---|---|
| Present continuous | The road **is being repaired**. |
| Past continuous | The room **was being cleaned** when I arrived. |
| Present perfect | The results **have been published**. |
| Past perfect | The tickets **had been sold** before we got there. |
| Future (will) | You **will be contacted** next week. |
| Going to | The house **is going to be sold**. |
| Modales | It **can't be done**. It **should be checked**. |
| Modales perfectos | It **must have been stolen**. |
| Infinitivo | I want **to be told** the truth. |
| Gerundio | I hate **being interrupted**. |
> My car **is being repaired** at the moment. | Me están arreglando el coche ahora.
> A new hospital **has been built** in our town. | Se ha construido un hospital nuevo.
> The thief **will be caught** soon. | Atraparán al ladrón pronto.
> I don't like **being told** what to do. | No me gusta que me digan lo que tengo que hacer.
## 2. Verbos con dos objetos
Con *give, send, offer, show, tell, teach, pay*, el sujeto de la pasiva suele ser la **persona**.
> They offered **me** a job. → **I was offered** a job. | Me ofrecieron un trabajo.
> Somebody told **us** the news. → **We were told** the news. | Nos contaron la noticia.
!trap: "Me dijeron que…", "Me regalaron…", "Nos enseñaron…" → en inglés la persona es sujeto: **I was told** that… / **I was given**… / **We were taught**…
## 3. Causativa: have / get something done
:: have / get + objeto + participio
Cuando **otra persona** (normalmente un profesional) hace algo por nosotros.
> I **had my hair cut** yesterday. | Me corté el pelo ayer (en la peluquería).
> We're **having** the kitchen **painted**. | Nos están pintando la cocina.
> You should **get** your eyes **tested**. | Deberías hacerte una revisión de la vista.
> I need to **get** my car **serviced**. | Tengo que llevar el coche a revisión.
!trap: "Me corté el pelo" (en la peluquería) = I **had my hair cut**. "I cut my hair" significa que lo hiciste tú mismo.
### También para experiencias negativas
> She **had** her bag **stolen** on the metro. | Le robaron el bolso en el metro.
> He **had** his licence **taken away**. | Le quitaron el carnet.
x> I have cut my hair at the hairdresser's. | I had my hair cut at the hairdresser's.
## 4. Get + objeto + to / have + objeto + infinitivo (ampliación)
> I **got** my brother **to help** me. | Conseguí que mi hermano me ayudara.
> I'll **have** my assistant **call** you. | Haré que mi asistente te llame.
`,
ex:[
{t:'mc', q:'The bridge ___ at the moment, so we have to take another route.', o:['is repaired','is being repaired','has repaired','repairs'], a:1, e:'Pasiva de presente continuo: is being + participio.'},
{t:'mc', q:'I ___ a promotion last week!', o:['offered','was offered','have offered','was offering'], a:1, e:'La persona como sujeto: I was offered.'},
{t:'gap', q:'All the tickets ___ (sell) by the time we arrived.', a:['had been sold'], e:'Pasiva de past perfect.'},
{t:'gap', q:'Applicants ___ (contact) by email next week.', a:['will be contacted'], e:'Pasiva de futuro.'},
{t:'gap', q:'I hate ___ (interrupt) when I\'m speaking.', a:['being interrupted'], e:'Gerundio pasivo: being + participio.'},
{t:'fix', q:'I cut my hair yesterday at the new hairdresser\'s.', a:["I had my hair cut yesterday at the new hairdresser's.","I got my hair cut yesterday at the new hairdresser's."], e:'Lo hizo otra persona → causativa.'},
{t:'tr', q:'A mechanic is repairing my car.', k:'HAVING', s:'I\'m ___.', a:['having my car repaired'], e:'Causativa en presente continuo.'},
{t:'tr', q:'Someone stole her phone at the concert.', k:'HAD', s:'She ___ at the concert.', a:['had her phone stolen'], e:'Causativa para experiencias negativas.'},
{t:'tr', q:'They have just announced the results.', k:'BEEN', s:'The results ___ announced.', a:['have just been'], e:'Pasiva de present perfect.'},
{t:'mc', q:'This report ___ before Friday.', o:['must finish','must be finished','must finished','must being finished'], a:1, e:'Pasiva con modal: must be + participio.'}
]
},

{
id:'b2-deduction', level:'B2', title:'Modals of deduction and speculation', es:'Modales de deducción y especulación',
goal:'Expresar distintos grados de certeza sobre el presente y el pasado: must, might, can\'t, must have, can\'t have.',
theory:`
## 1. Deducción sobre el presente
:: must / might / may / could / can't + verbo base (o be + -ing)
| Certeza | Modal | Significado |
|---|---|---|
| 95% sí | must | Seguro que… |
| 50% | might / may / could | Puede que… / Quizá… |
| 95% no | can't / couldn't | Es imposible que… / No puede ser |
> She's been working all day. She **must be** tired. | Debe de estar cansada.
> He **might be** at home, but I'm not sure. | Puede que esté en casa.
> That **can't be** Tom. He's in Australia! | No puede ser Tom. Está en Australia.
> They **must be having** a party. Listen to the music! | Deben de estar de fiesta.
!trap: Lo contrario de **must** (deducción) NO es mustn't, sino **can't**: He must be rich / He **can't** be poor. "He mustn't be rich" ✗ en este sentido.
x> She mustn't be at home; the lights are off. | She can't be at home; the lights are off.
## 2. Deducción sobre el pasado
:: must / might / may / could / can't + have + participio
> The ground is wet. It **must have rained** last night. | Debe de haber llovido anoche.
> I can't find my keys. I **might have left** them at work. | Puede que me las haya dejado en el trabajo.
> She **can't have seen** me; she didn't say hello. | No puede haberme visto.
> They **couldn't have known** about the surprise. | Es imposible que lo supieran.
> He **must have been sleeping** when you called. | Debía de estar durmiendo cuando llamaste.
## 3. Could have: posibilidad no realizada / crítica
> You **could have told** me! | ¡Me lo podrías haber dicho! (reproche)
> We **could have won**, but we didn't play well. | Podríamos haber ganado.
## 4. Should / ought to (expectativa)
> The parcel **should arrive** tomorrow. | El paquete debería llegar mañana. (lo normal es que llegue)
> They **should have arrived** by now. Where are they? | Ya deberían haber llegado.
## 5. Resumen
| | Presente | Pasado |
|---|---|---|
| Seguro que sí | must be | must have been |
| Posible | might/may/could be | might/may/could have been |
| Seguro que no | can't be | can't/couldn't have been |
!tip: En conversación también: **I bet** (seguro que), **There's no way** (es imposible), **Maybe / Perhaps**, **I doubt** (dudo que).
`,
ex:[
{t:'mc', q:'He\'s just run a marathon. He ___ exhausted.', o:['can\'t be','must be','might have been','mustn\'t be'], a:1, e:'Deducción casi segura sobre el presente → must be.'},
{t:'mc', q:'That ___ Sarah\'s car. She sold it last year.', o:["mustn't be","can't be","must be","may be"], a:1, e:'Imposible → can\'t be.'},
{t:'mc', q:'The streets are wet. It ___ during the night.', o:['must rain','must have rained','can\'t have rained','should rain'], a:1, e:'Deducción sobre el pasado → must have + participio.'},
{t:'gap', q:'I\'m not sure where Ana is. She ___ (puede que esté) in the library.', a:['might be','may be','could be'], e:'Posibilidad presente → might/may/could be.'},
{t:'gap', q:'He failed the exam. He ___ (no puede haber estudiado) very much. (escribe: can\'t have studied)', a:["can't have studied","couldn't have studied","cannot have studied"], e:'Imposibilidad en el pasado.'},
{t:'fix', q:'She mustn\'t be Spanish; her accent is French.', a:["She can't be Spanish; her accent is French.","She cannot be Spanish; her accent is French."], e:'Deducción negativa → can\'t.'},
{t:'fix', q:'I can\'t find my wallet. I must leave it in the taxi.', a:["I can't find my wallet. I must have left it in the taxi."], e:'Deducción sobre el pasado → must have left.'},
{t:'tr', q:'I\'m sure Tom forgot about the meeting.', k:'MUST', s:'Tom ___ about the meeting.', a:['must have forgotten'], e:'Seguro (pasado) → must have + participio.'},
{t:'tr', q:'It\'s impossible that she saw us.', k:'HAVE', s:'She ___ us.', a:["can't have seen","couldn't have seen","cannot have seen"], e:'Imposible (pasado) → can\'t have.'},
{t:'mc', q:'Why didn\'t you call me? I ___ you a lift.', o:['could give','could have given','must have given','can have given'], a:1, e:'Posibilidad no realizada → could have + participio.'}
]
},

{
id:'b2-relatives', level:'B2', title:'Non-defining relative clauses', es:'Oraciones de relativo explicativas',
goal:'Añadir información extra con comas, usar which para referirse a toda una frase y colocar preposiciones con whom/which.',
theory:`
## 1. Defining vs non-defining
| Defining (especificativa) | Non-defining (explicativa) |
|---|---|
| Información esencial: identifica | Información extra: se puede quitar |
| Sin comas | Entre comas |
| Se puede usar that | **Nunca** that |
| Se puede omitir el pronombre (si es objeto) | **Nunca** se omite |
> My brother **who lives in Paris** is a chef. | (tengo varios hermanos; hablo del que vive en París)
> My brother, **who lives in Paris**, is a chef. | (solo tengo un hermano; dato adicional)
> Barcelona, **which** is my favourite city, is very crowded. | Barcelona, que es mi ciudad favorita, está muy masificada.
> My grandmother, **who** is 90, still swims every day. | Mi abuela, que tiene 90 años, todavía nada todos los días.
x> Madrid, that is the capital of Spain, is huge. | Madrid, which is the capital of Spain, is huge.
## 2. Which para referirse a toda la oración
> He passed all his exams, **which** surprised everyone. | Aprobó todos sus exámenes, lo que sorprendió a todos.
> She didn't call me, **which** was a bit rude. | No me llamó, lo cual fue un poco maleducado.
!trap: "Lo que" referido a una frase anterior = **, which**, NO "what": He was late, **what** annoyed me ✗ → He was late, **which** annoyed me.
## 3. Whom (formal)
*Whom* es el pronombre de objeto para personas, propio del registro formal, sobre todo tras preposición.
> The candidate, **whom** we interviewed yesterday, was excellent. | (formal; informal: who)
> The person **to whom** I spoke was very helpful. | (formal) = The person **who** I spoke **to** was… (informal)
## 4. Preposición + which / whom
En inglés formal, la preposición va **delante** del pronombre.
> The house **in which** I was born. (formal) = The house **(that)** I was born **in**. (informal)
> The company **for which** she works. = The company she works **for**.
x> The house in that I was born. | The house in which I was born.
!note: Después de preposición, **nunca** that ni who: "with whom", "about which".
## 5. Cuantificadores + of whom / of which
> I have three brothers, **all of whom** live abroad. | Tengo tres hermanos, todos los cuales viven en el extranjero.
> She bought ten books, **none of which** she has read. | Compró diez libros, ninguno de los cuales ha leído.
> There were 50 applicants, **most of whom** had a degree. | Había 50 candidatos, la mayoría de los cuales tenía título.
## 6. Whose y where en explicativas
> Picasso, **whose** paintings are world-famous, was born in Málaga. | Picasso, cuyos cuadros son famosos, nació en Málaga.
> Lima, **where** my parents met, is a fascinating city. | Lima, donde se conocieron mis padres, es fascinante.
`,
ex:[
{t:'mc', q:'My mother, ___ is a nurse, works night shifts.', o:['that','who','which','whom'], a:1, e:'Explicativa sobre persona → who (nunca that).'},
{t:'mc', q:'He forgot my birthday, ___ really upset me.', o:['what','which','that','who'], a:1, e:'Referencia a toda la frase → which.'},
{t:'mc', q:'The woman ___ I was talking is the director.', o:['to who','to whom','to that','to which'], a:1, e:'Preposición + whom (personas).'},
{t:'gap', q:'I have two sisters, both of ___ are doctors.', a:['whom'], e:'Cuantificador + of whom (personas).'},
{t:'gap', q:'He gave me three books, none of ___ I have read.', a:['which'], e:'Cuantificador + of which (cosas).'},
{t:'fix', q:'London, that is the capital of the UK, has nine million people.', a:['London, which is the capital of the UK, has nine million people.'], e:'En explicativas no se usa that.'},
{t:'fix', q:'She lost her job, what was a shock for everyone.', a:['She lost her job, which was a shock for everyone.'], e:'"Lo que" referido a la frase → which.'},
{t:'mc', q:'Which sentence means that I have only ONE car?', o:['My car which is red is old.','My car, which is red, is old.','My car that is red is old.','The car I have that is red is old.'], a:1, e:'Con comas = información extra; solo hay un coche.'},
{t:'tr', q:'This is the company. My father works for it.', k:'WHICH', s:'This is the company ___ works.', a:['for which my father'], e:'Preposición + which (formal).'},
{t:'ord', w:['Shakespeare,','whose','plays','are','famous,','was','born','in','1564'], a:['shakespeare, whose plays are famous, was born in 1564','shakespeare whose plays are famous was born in 1564'], e:'Explicativa con whose entre comas.'}
]
},

{
id:'b2-usedto', level:'B2', title:'Used to, would, be used to, get used to', es:'Used to, would, be/get used to',
goal:'Distinguir entre hábitos pasados (used to/would) y estar o acostumbrarse a algo (be/get used to).',
theory:`
## 1. Used to + infinitivo: hábitos y estados pasados
> I **used to live** in Valencia. | Antes vivía en Valencia.
> We **used to go** camping every summer. | Solíamos ir de acampada cada verano.
> **Did** you **use to** have a dog? | ¿Tenías perro antes?
## 2. Would: hábitos pasados repetidos (no estados)
**Would** también expresa acciones repetidas en el pasado, con un tono nostálgico y narrativo, pero **no** sirve para estados (be, have, live, like, know…).
> When I was a kid, my grandfather **would tell** us stories every night. | Mi abuelo nos contaba cuentos cada noche.
> Every Sunday we**'d have** lunch at my aunt's house. | Cada domingo comíamos en casa de mi tía.
x> I would have long hair when I was young. | I used to have long hair when I was young.
x> We would live in a small village. | We used to live in a small village.
!tip: En narraciones, se suele empezar con *used to* y continuar con *would*: We **used to** spend summers in Galicia. We**'d** get up late and **would** go to the beach every afternoon.
## 3. Be used to + -ing / sustantivo: estar acostumbrado
:: be used to + sustantivo / pronombre / verbo-ing
> I**'m used to getting** up early. | Estoy acostumbrado a madrugar.
> She **isn't used to** the cold. | No está acostumbrada al frío.
> **Are** you **used to driving** on the left? | ¿Estás acostumbrado a conducir por la izquierda?
## 4. Get used to + -ing / sustantivo: acostumbrarse (proceso)
> It took me months to **get used to** the food. | Me costó meses acostumbrarme a la comida.
> You'll soon **get used to working** from home. | Pronto te acostumbrarás a trabajar desde casa.
> I can't **get used to living** without my family. | No consigo acostumbrarme a vivir sin mi familia.
!trap: En **be used to** y **get used to**, *to* es una preposición, así que va seguido de **-ing**: I'm used to **work** ✗ → I'm used to **working** ✓.
x> I'm used to work late. | I'm used to working late.
!trap: "Suelo hacer…" en presente = **usually**: I **usually** have tea. No existe "I use to have tea".
## 5. Resumen
| Estructura | Significado | Ejemplo |
|---|---|---|
| used to + base | Antes (ya no) | I used to smoke. |
| would + base | Hábito pasado (acciones) | We'd play for hours. |
| be used to + -ing | Estar acostumbrado | I'm used to noise. |
| get used to + -ing | Acostumbrarse | I'm getting used to it. |
| usually + presente | Soler (ahora) | I usually walk to work. |
`,
ex:[
{t:'mc', q:'I ___ live in a small village, but now I live in the city.', o:['would','used to','am used to','use to'], a:1, e:'Estado pasado (live) → used to (would no sirve para estados).'},
{t:'mc', q:'After two years in London, I\'m finally used to ___ on the left.', o:['drive','driving','drove','have driven'], a:1, e:'Be used to + -ing.'},
{t:'mc', q:'It took me a long time to ___ used to the noise.', o:['be','get','use','got'], a:1, e:'Proceso de acostumbrarse → get used to.'},
{t:'mc', q:'Which sentence is NOT correct?', o:['We would play in the street for hours.','My dad would read to me.','I would have a bike.','We used to have a bike.'], a:2, e:'Would no se usa con estados como have (poseer).'},
{t:'gap', q:'She isn\'t used to ___ (work) at night.', a:['working'], e:'Be used to + -ing.'},
{t:'fix', q:'I am used to get up at 6 am.', a:['I am used to getting up at 6 am.',"I'm used to getting up at 6 am."], e:'"to" es preposición → -ing.'},
{t:'fix', q:'I use to go to the gym after work.', a:['I usually go to the gym after work.'], e:'Hábito presente → usually.'},
{t:'tr', q:'Living in a hot country is still strange for me.', k:'USED', s:'I\'m not ___ in a hot country.', a:['used to living'], e:'Be (not) used to + -ing.'},
{t:'tr', q:'When I was a child, I often climbed trees.', k:'WOULD', s:'When I was a child, I ___ trees.', a:['would often climb','would climb'], e:'Acción repetida en el pasado → would.'},
{t:'gap', q:'Don\'t worry, you\'ll soon ___ used to the new system.', a:['get'], e:'Get used to = acostumbrarse.'}
]
},

{
id:'b2-gerinf', level:'B2', title:'Gerunds and infinitives: changes in meaning', es:'Gerundio e infinitivo con cambio de significado',
goal:'Dominar los verbos que cambian de significado según vayan con -ing o con to: remember, forget, stop, try, regret, mean, go on.',
theory:`
## 1. Remember / forget
| + -ing | + to |
|---|---|
| Recordar algo que ya hiciste (memoria) | Acordarse de hacer algo (tarea pendiente) |
> I **remember meeting** her at a party in 2015. | Recuerdo haberla conocido en una fiesta.
> **Remember to lock** the door. | Acuérdate de cerrar con llave.
> I'll never **forget seeing** the Grand Canyon. | Nunca olvidaré haber visto el Gran Cañón.
> I **forgot to buy** milk. | Me olvidé de comprar leche.
## 2. Stop
| + -ing | + to |
|---|---|
| Dejar de hacer algo | Parar para hacer otra cosa |
> I **stopped smoking** five years ago. | Dejé de fumar hace cinco años.
> We **stopped to have** a coffee. | Paramos para tomar un café.
## 3. Try
| + -ing | + to |
|---|---|
| Probar algo (como experimento) | Intentar algo (esfuerzo) |
> If you can't sleep, **try drinking** warm milk. | Si no puedes dormir, prueba a beber leche caliente.
> I **tried to open** the window, but it was stuck. | Intenté abrir la ventana, pero estaba atascada.
## 4. Regret
| + -ing | + to |
|---|---|
| Arrepentirse de algo hecho | Lamentar comunicar algo (formal) |
> I **regret not studying** harder. | Me arrepiento de no haber estudiado más.
> We **regret to inform** you that your application has been rejected. | Lamentamos informarle de que…
## 5. Mean
| + -ing | + to |
|---|---|
| Implicar, suponer | Tener la intención de |
> This job **means travelling** a lot. | Este trabajo implica viajar mucho.
> I **meant to call** you, but I forgot. | Tenía la intención de llamarte, pero se me olvidó.
## 6. Go on
| + -ing | + to |
|---|---|
| Seguir haciendo lo mismo | Pasar a hacer otra cosa |
> She **went on talking** for hours. | Siguió hablando durante horas.
> After university, he **went on to become** a famous lawyer. | Después de la universidad, llegó a ser un abogado famoso.
## 7. Verbos de percepción: see, hear, watch, feel
| + -ing | + base |
|---|---|
| Ver parte de la acción, en progreso | Ver la acción completa |
> I **saw** him **crossing** the street. | Lo vi cruzando la calle.
> I **saw** him **cross** the street. | Lo vi cruzar la calle (de principio a fin).
## 8. Need + -ing (sentido pasivo)
> My car **needs washing**. = My car needs **to be washed**. | Mi coche necesita un lavado.
!trap: Pensar en español no ayuda aquí: "Recordar + infinitivo" puede ser memoria o tarea. Pregúntate: ¿la acción es **anterior** (→ -ing) o **posterior** (→ to) al verbo principal?
!tip: Truco general: **-ing** mira hacia atrás (algo que ya ocurrió) y **to** mira hacia delante (algo que va a ocurrir).
`,
ex:[
{t:'mc', q:'Please remember ___ the lights before you leave.', o:['turning off','to turn off','turn off','turned off'], a:1, e:'Tarea pendiente → remember to.'},
{t:'mc', q:'I remember ___ to the zoo when I was five.', o:['to go','going','go','to going'], a:1, e:'Recuerdo de algo pasado → remember + -ing.'},
{t:'mc', q:'On the way home, we stopped ___ some bread.', o:['buying','to buy','buy','bought'], a:1, e:'Parar para hacer algo → stop to.'},
{t:'mc', q:'My doctor told me to stop ___ so much sugar.', o:['to eat','eating','eat','ate'], a:1, e:'Dejar de → stop + -ing.'},
{t:'gap', q:'The computer isn\'t working. Have you tried ___ (restart) it?', a:['restarting'], e:'Probar como solución → try + -ing.'},
{t:'gap', q:'I really regret ___ (not / go) to her wedding.', a:['not going','not having gone'], e:'Arrepentirse de algo pasado → regret + -ing.'},
{t:'gap', q:'Sorry, I didn\'t mean ___ (hurt) you.', a:['to hurt'], e:'Intención → mean to.'},
{t:'fix', q:'I\'ll never forget to see the Northern Lights for the first time.', a:["I'll never forget seeing the Northern Lights for the first time.","I will never forget seeing the Northern Lights for the first time."], e:'Recuerdo de una experiencia → forget + -ing.'},
{t:'fix', q:'Taking this job will mean to move to another city.', a:['Taking this job will mean moving to another city.'], e:'Implicar → mean + -ing.'},
{t:'tr', q:'The garden needs to be watered.', k:'WATERING', s:'The garden ___.', a:['needs watering'], e:'Need + -ing con sentido pasivo.'}
]
},

{
id:'b2-linkers', level:'B2', title:'Linking words: contrast, purpose, cause and result', es:'Conectores: contraste, finalidad, causa y resultado',
goal:'Unir ideas con precisión gramatical: although, despite, however, so that, in order to, due to, therefore…',
theory:`
## 1. Contraste
| Conector | Va seguido de | Ejemplo |
|---|---|---|
| although / even though / though | frase (sujeto + verbo) | **Although** it was raining, we went out. |
| despite / in spite of | sustantivo o -ing | **Despite** the rain, we went out. |
| despite the fact that | frase | **Despite the fact that** it was raining… |
| however / nevertheless | nueva frase, con coma | It was raining. **However**, we went out. |
| but | frase (informal, une dos partes) | It was raining, **but** we went out. |
| whereas / while | contraste entre dos hechos | I love cities, **whereas** my wife prefers the country. |
> **Even though** he's rich, he lives in a tiny flat. | Aunque es rico, vive en un piso diminuto.
> **In spite of feeling** ill, she went to work. | A pesar de encontrarse mal, fue a trabajar.
> The plan was good. **Nevertheless**, it failed. | El plan era bueno. Sin embargo, fracasó.
x> Despite it was raining, we went out. | Despite the rain / Although it was raining, we went out.
x> In spite the weather, we had fun. | In spite of the weather, we had fun.
!trap: **Despite** nunca lleva "of" (despite of ✗), pero **in spite** siempre lo lleva (in spite of ✓).
## 2. Finalidad
| Conector | Va seguido de | Ejemplo |
|---|---|---|
| to / in order to / so as to | infinitivo | I went out **to buy** bread. |
| so that | frase (con can/could/will/would) | I left early **so that** I **could** catch the train. |
| in order not to / so as not to | infinitivo negativo | I wrote it down **so as not to** forget. |
| for | sustantivo (o -ing para la función de un objeto) | I went out **for** a walk. A knife is **for cutting**. |
x> I came here for learn English. | I came here to learn English.
!trap: "Para + infinitivo" con finalidad = **to + base**, NUNCA "for + infinitivo": I study **to** pass the exam (no "for pass").
## 3. Causa
| Conector | Va seguido de | Ejemplo |
|---|---|---|
| because / as / since | frase | We stayed in **because** it was cold. |
| because of / due to / owing to | sustantivo | The flight was delayed **due to** fog. |
> **As** it was late, we took a taxi. | Como era tarde, cogimos un taxi.
> The match was cancelled **because of** the storm. | El partido se canceló por la tormenta.
x> The match was cancelled because the storm. | …because of the storm.
## 4. Resultado / consecuencia
| Conector | Registro | Ejemplo |
|---|---|---|
| so | neutro | It was late, **so** we went home. |
| therefore / consequently / as a result | formal | Sales fell. **As a result**, jobs were cut. |
| so + adj + that / such + (a) + adj + noun + that | énfasis | It was **so** cold **that** the lake froze. It was **such a** cold day **that**… |
> The evidence was weak; **therefore**, he was released. | Las pruebas eran débiles; por lo tanto, lo liberaron.
> She's **such a** good teacher **that** everyone passes. | Es tan buena profesora que todos aprueban.
## 5. Adición
**In addition, Furthermore, Moreover, What's more, Besides** (al inicio de frase) · **as well as** + sustantivo/-ing.
> The hotel was expensive. **Moreover**, the service was terrible. | Además, el servicio fue horrible.
> **As well as speaking** French, she speaks Arabic. | Además de hablar francés, habla árabe.
`,
ex:[
{t:'mc', q:'___ the bad weather, the concert went ahead.', o:['Although','Despite','However','Even though'], a:1, e:'Despite + sustantivo.'},
{t:'mc', q:'___ she was tired, she finished the report.', o:['Despite','In spite of','Although','However'], a:2, e:'Although + frase.'},
{t:'mc', q:'I\'m saving money ___ I can buy a house.', o:['to','for','so that','in order to'], a:2, e:'So that + frase con can.'},
{t:'mc', q:'The train was late ___ a technical problem.', o:['because','due to','so','although'], a:1, e:'Due to + sustantivo.'},
{t:'gap', q:'It was ___ a boring film that I fell asleep.', a:['such'], e:'Such + a + adj + sustantivo + that.'},
{t:'fix', q:'I went to the shop for buy some milk.', a:['I went to the shop to buy some milk.','I went to the shop in order to buy some milk.'], e:'Finalidad → to + infinitivo, no for.'},
{t:'fix', q:'Despite of the traffic, we arrived on time.', a:['Despite the traffic, we arrived on time.','In spite of the traffic, we arrived on time.'], e:'Despite sin "of".'},
{t:'tr', q:'Although he was injured, he finished the race.', k:'SPITE', s:'In ___, he finished the race.', a:['spite of being injured','spite of his injury','spite of the fact that he was injured'], e:'In spite of + -ing / sustantivo.'},
{t:'tr', q:'I wrote down her number because I didn\'t want to forget it.', k:'AS', s:'I wrote down her number so ___ it.', a:['as not to forget'], e:'So as not to + infinitivo.'},
{t:'mc', q:'The company lost money. ___, 200 workers lost their jobs.', o:['Despite','Although','As a result','Whereas'], a:2, e:'Consecuencia → As a result.'}
]
},

{
id:'b2-phrasal', level:'B2', title:'Phrasal verbs: the grammar', es:'Phrasal verbs: su gramática',
goal:'Saber dónde colocar el objeto en un phrasal verb: separables, inseparables, intransitivos y de tres partes.',
theory:`
## 1. ¿Qué es un phrasal verb?
Un verbo + partícula (up, down, out, off, on, in, away, back…) cuyo significado a menudo **no es literal**.
> give up = dejar (un hábito) · look after = cuidar · run out of = quedarse sin · put off = posponer
## 2. Tipo 1: intransitivos (sin objeto)
> The plane **took off** on time. | El avión despegó a tiempo.
> My car **broke down** on the motorway. | Se me averió el coche en la autopista.
> **Hurry up**! We're late. | ¡Date prisa!
> She **grew up** in Chile. | Creció en Chile.
## 3. Tipo 2: separables (verbo + objeto + partícula o verbo + partícula + objeto)
Con un **sustantivo**, el objeto puede ir antes o después de la partícula. Con un **pronombre** (it, them, him, her), el pronombre **siempre va en medio**.
> **Turn off** the TV. / **Turn** the TV **off**. | Apaga la tele.
> **Turn it off**. | Apágala.
> I **picked up** my sister / I **picked** my sister **up** / I **picked her up**. | Recogí a mi hermana.
> Can you **fill in** this form? → Can you **fill it in**? | ¿Puedes rellenarlo?
x> Turn off it. | Turn it off.
x> I'll pick up you at 8. | I'll pick you up at 8.
!trap: Este es el error número uno con phrasal verbs: con pronombre, sepáralos siempre: **put it on**, **take them off**, **give it back**, **throw it away**, **look it up**.
## 4. Tipo 3: inseparables (verbo + partícula + objeto, siempre juntos)
> I **look after** my grandmother. → I **look after her**. | Cuido de mi abuela.
> She **takes after** her father. | Se parece a su padre.
> I **came across** an old photo. → I **came across it**. | Me encontré (por casualidad) una foto vieja.
> The police are **looking into** the case. | La policía investiga el caso.
x> I look her after. | I look after her.
## 5. Tipo 4: tres partes (siempre inseparables)
> We've **run out of** milk. | Nos hemos quedado sin leche.
> I can't **put up with** this noise anymore. | No soporto más este ruido.
> I'm **looking forward to** the holidays. | Tengo ganas de que lleguen las vacaciones.
> She **gets on with** her colleagues. | Se lleva bien con sus compañeros.
> You should **cut down on** sugar. | Deberías reducir el azúcar.
> I need to **catch up with** my emails. | Tengo que ponerme al día con los correos.
## 6. Un verbo, varios significados
| Phrasal verb | Significados |
|---|---|
| take off | despegar · quitarse (ropa) · tener éxito repentino |
| pick up | recoger · aprender sin estudiar · mejorar (la economía) |
| make up | inventar(se) · reconciliarse · maquillarse · componer |
| turn up | aparecer, presentarse · subir (volumen) |
| put out | apagar (fuego, cigarro) · molestar |
> She **picked up** Italian while living in Rome. | Aprendió italiano (de oído) viviendo en Roma.
> He **made up** an excuse. | Se inventó una excusa.
> Only five people **turned up**. | Solo aparecieron cinco personas.
!tip: Aprende los phrasal verbs **en frases completas** y con su objeto típico, no en listas sueltas. En la sección de Vocabulario tienes mazos de phrasal verbs por nivel.
`,
ex:[
{t:'mc', q:'Your shoes are dirty. Please ___ before coming in.', o:['take off them','take them off','take of them','take them out of'], a:1, e:'Pronombre en medio de un phrasal verb separable.'},
{t:'mc', q:'Who will ___ the dog while we\'re on holiday?', o:['look the dog after','look after','look after it','after look'], a:1, e:'Look after es inseparable: look after the dog.'},
{t:'mc', q:'We\'ve run ___ coffee. Can you buy some?', o:['out','out of','off','away'], a:1, e:'Run out of + sustantivo (tres partes).'},
{t:'gap', q:'I don\'t know this word. I\'ll look ___ up in the dictionary. (pronombre)', a:['it'], e:'Look it up: pronombre en medio.'},
{t:'gap', q:'I can\'t put up ___ his rude behaviour any longer.', a:['with'], e:'Put up with = soportar.'},
{t:'fix', q:'This form is important. Please fill in it carefully.', a:['This form is important. Please fill it in carefully.'], e:'Separable + pronombre → fill it in.'},
{t:'fix', q:'I\'ll pick up you at the airport.', a:["I'll pick you up at the airport.",'I will pick you up at the airport.'], e:'Pronombre en medio.'},
{t:'mc', q:'Only ten people ___ for the meeting.', o:['turned up','turned on','took up','gave up'], a:0, e:'Turn up = aparecer, presentarse.'},
{t:'mc', q:'She ___ her mother — they have the same smile.', o:['takes after','looks after','takes off','gets on'], a:0, e:'Take after = parecerse a un familiar.'},
{t:'ord', w:['I','need','to','give','it','back','tomorrow'], a:['I need to give it back tomorrow'], e:'Give it back: pronombre en medio.'}
]
}

);
