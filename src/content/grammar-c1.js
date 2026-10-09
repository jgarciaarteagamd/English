/* Gramática C1 — advanced */
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(

{
id:'c1-inversion', level:'C1', title:'Inversion after negative adverbials', es:'Inversión tras adverbios negativos',
goal:'Dar énfasis y formalidad con estructuras como Never have I…, Not only… but also, Hardly… when, No sooner… than.',
theory:`
## 1. ¿Qué es la inversión?
Cuando una oración empieza por una expresión **negativa o restrictiva**, el sujeto y el auxiliar **se invierten**, como en una pregunta. Es típico del inglés **formal, escrito o retórico**, y muy valorado en exámenes C1/C2.
:: Expresión negativa + auxiliar + sujeto + verbo principal
> I have **never** seen such chaos. → **Never have I seen** such chaos. | Nunca había visto semejante caos.
> I **rarely** go out on weekdays. → **Rarely do I go** out on weekdays. | Rara vez salgo entre semana.
!note: Si no hay auxiliar, se añade **do/does/did** (como en las preguntas): **Little did he know**… / **Seldom does she** complain.
## 2. Expresiones de frecuencia / tiempo
**Never (before), Rarely, Seldom, Hardly ever, At no time**
> **Seldom have** we **seen** such talent. | Pocas veces hemos visto tanto talento.
> **At no time did** I **say** you were wrong. | En ningún momento dije que te equivocaras.
## 3. Una acción inmediatamente después de otra
| Estructura | Ejemplo |
|---|---|
| Hardly / Scarcely + had + S + part. + **when** | **Hardly had** I sat down **when** the phone rang. |
| No sooner + had + S + part. + **than** | **No sooner had** we arrived **than** it started raining. |
> **Hardly had** she **left** **when** her boss called. | Apenas se había ido cuando llamó su jefe.
> **No sooner had** I **paid** **than** I realised it was a mistake. | Nada más pagar, me di cuenta de que era un error.
x> No sooner had I arrived when it started. | No sooner had I arrived than it started.
!trap: **No sooner** va con **than** (es un comparativo: sooner… than). **Hardly/Scarcely** van con **when** (o before).
## 4. Not only… but (also)
> **Not only is** she a great singer, **but** she **also** writes her own songs. | No solo es una gran cantante, sino que también compone.
> **Not only did** they **lose** the match, **but** they **also** lost their best player. | No solo perdieron el partido…
## 5. Only + expresión de tiempo/condición
La inversión va en la **segunda** cláusula (la principal).
> **Only when** I got home **did I realise** I'd lost my wallet. | Solo cuando llegué a casa me di cuenta…
> **Only after** the meeting **did** he **apologise**. | Solo después de la reunión se disculpó.
> **Only by** working hard **can you succeed**. | Solo trabajando duro puedes tener éxito.
> **Only then did** I **understand**. | Solo entonces lo entendí.
## 6. Not until, Under no circumstances, On no account, In no way, Little
> **Not until** I saw it with my own eyes **did I believe** it. | No lo creí hasta que lo vi con mis propios ojos.
> **Under no circumstances should** you **open** this door. | Bajo ningún concepto debes abrir esta puerta.
> **On no account are** visitors **allowed** to feed the animals. | Bajo ningún concepto se permite a los visitantes…
> **Little did** she **know** that her life was about to change. | Poco sabía ella que su vida estaba a punto de cambiar.
> **In no way am I** responsible for this. | De ninguna manera soy responsable de esto.
!tip: Usa la inversión con moderación: una o dos veces en un ensayo formal impresiona; en una conversación informal suena teatral.
x> Never I have seen such a mess. | Never have I seen such a mess.
x> Only when I got home I realised. | Only when I got home did I realise.
`,
ex:[
{t:'mc', q:'Never ___ such a beautiful sunset.', o:['I have seen','have I seen','I saw','did I saw'], a:1, e:'Never al inicio → inversión: have I seen.'},
{t:'mc', q:'No sooner had we sat down ___ the waiter brought the bill.', o:['when','than','that','then'], a:1, e:'No sooner… than.'},
{t:'mc', q:'Hardly had the film started ___ the power went off.', o:['than','when','that','as'], a:1, e:'Hardly… when.'},
{t:'mc', q:'Only after the exam ___ how easy it had been.', o:['I realised','did I realise','I did realise','realised I'], a:1, e:'Only after… + inversión en la principal.'},
{t:'gap', q:'Little ___ he know that the police were watching him.', a:['did'], e:'Little + did + sujeto + verbo base.'},
{t:'gap', q:'Not only ___ she speak five languages, but she also plays three instruments.', a:['does'], e:'Not only + does + sujeto (presente sin auxiliar).'},
{t:'tr', q:'You should not touch this button under any circumstances.', k:'CIRCUMSTANCES', s:'Under ___ touch this button.', a:['no circumstances should you'], e:'Under no circumstances + should + sujeto.'},
{t:'tr', q:'I only understood the problem when I read the report.', k:'DID', s:'Only when I read the report ___ the problem.', a:['did i understand'], e:'Only when… + inversión.'},
{t:'tr', q:'As soon as I closed my eyes, the alarm went off.', k:'SOONER', s:'No ___ my eyes than the alarm went off.', a:['sooner had i closed'], e:'No sooner + had + sujeto + participio.'},
{t:'fix', q:'Rarely we go to the cinema these days.', a:['Rarely do we go to the cinema these days.'], e:'Rarely al inicio → inversión con do.'},
{t:'ord', w:['seldom','have','I','met','such','a','generous','person'], a:['seldom have I met such a generous person'], e:'Seldom + have + I + participio.'}
]
},

{
id:'c1-cleft', level:'C1', title:'Cleft sentences', es:'Oraciones escindidas (cleft sentences)',
goal:'Destacar la información clave con It is/was… that, What I need is…, All I want is…, The reason why…',
theory:`
## 1. ¿Para qué sirven?
Las **cleft sentences** dividen una oración en dos partes para **poner el foco** en un elemento. Son muy naturales en inglés hablado y escrito para corregir, contrastar o enfatizar. En español usamos estructuras parecidas ("Fue Juan quien…", "Lo que necesito es…").
## 2. It-cleft: It + be + elemento destacado + that/who
> Juan broke the window. → **It was Juan who** broke the window. | Fue Juan quien rompió la ventana.
> **It was** in 2010 **that** I first visited Peru. | Fue en 2010 cuando visité Perú por primera vez.
> **It's** not the money **that** worries me; **it's** the time. | No es el dinero lo que me preocupa; es el tiempo.
> **It was** only when I left home **that** I appreciated my parents. | Solo cuando me fui de casa valoré a mis padres.
!trap: En español variamos "quien / cuando / donde / lo que", pero en inglés casi siempre basta **that** (o who para personas): It was in Lima **that** we met (no "where" en registro cuidado).
## 3. Wh-cleft (pseudo-cleft): What + cláusula + be + elemento destacado
> I need a holiday. → **What I need is** a holiday. | Lo que necesito son unas vacaciones.
> **What I love about London is** its parks. | Lo que me encanta de Londres son sus parques.
> **What happened was** that the server crashed. | Lo que pasó fue que el servidor se cayó.
> **What she did was (to) call** the police. | Lo que hizo fue llamar a la policía.
> **What surprised me was** how calm he was. | Lo que me sorprendió fue lo tranquilo que estaba.
!note: Cuando el elemento destacado es una acción, usamos **What + sujeto + do/did + is/was + (to) infinitivo**: What you should do **is** apologise.
## 4. Variantes con All, The thing, The reason, The place, The person
> **All I want is** a quiet life. | Lo único que quiero es una vida tranquila.
> **All you have to do is** press this button. | Lo único que tienes que hacer es pulsar este botón.
> **The thing that** annoys me **is** his attitude. | Lo que me molesta es su actitud.
> **The reason (why)** I called **is that** I need your help. | La razón por la que llamé es que necesito tu ayuda.
> **The place where** I feel happiest **is** the beach. | El lugar donde me siento más feliz es la playa.
> **The person who** inspired me most **was** my teacher. | La persona que más me inspiró fue mi profesor.
## 5. Reverse wh-cleft
El elemento destacado va **al principio**, frecuente en conclusiones.
> A holiday **is what I need**. | Unas vacaciones es lo que necesito.
> That's **what I meant**. / That's **why** I left. / That's **where** we met. |
x> The reason is because I was tired. | The reason is that I was tired.
!tip: "The reason is because…" es muy común en el habla, pero se considera incorrecto en registro formal: usa **The reason is that…**.
`,
ex:[
{t:'mc', q:'___ was my sister who told me the news.', o:['It','What','She','There'], a:0, e:'It-cleft: It was + persona + who.'},
{t:'mc', q:'What I really need ___ a long holiday.', o:['are','is','be','it is'], a:1, e:'What-cleft: el verbo be va en singular (is).'},
{t:'mc', q:'All you have to do ___ sign here.', o:['are','is to','is','it is'], a:2, e:'All you have to do is + infinitivo (to opcional): is sign / is to sign.'},
{t:'gap', q:'It was in Rome ___ they first met.', a:['that'], e:'It-cleft: It was + lugar + that.'},
{t:'gap', q:'What she did ___ resign immediately. (dos palabras: verbo + to)', a:['was to','was'], e:'What + sujeto + did + was (to) + infinitivo.'},
{t:'fix', q:'The reason I\'m late is because the bus broke down.', a:["The reason I'm late is that the bus broke down."], e:'Registro cuidado: The reason is that…'},
{t:'tr', q:'His arrogance annoys me.', k:'WHAT', s:'___ his arrogance.', a:['what annoys me is'], e:'Wh-cleft para enfatizar.'},
{t:'tr', q:'I didn\'t realise how much I loved her until she left.', k:'WAS', s:'It ___ that I realised how much I loved her.', a:['was only when she left','was not until she left',"wasn't until she left"], e:'It-cleft con not until / only when.'},
{t:'tr', q:'I only want some peace and quiet.', k:'ALL', s:'___ some peace and quiet.', a:['all i want is'], e:'All I want is…'},
{t:'ord', w:['what','surprised','me','was','his','reaction'], a:['what surprised me was his reaction'], e:'What + cláusula + was + elemento destacado.'}
]
},

{
id:'c1-passive', level:'C1', title:'Impersonal passive and passive reporting', es:'Pasiva impersonal: It is said that… / He is said to…',
goal:'Transmitir rumores, creencias y opiniones de forma impersonal y formal, como en prensa y textos académicos.',
theory:`
## 1. Dos estructuras con verbos de opinión
Verbos: **say, believe, think, know, report, expect, consider, claim, rumour, allege, estimate, understand, suppose**.
### a) It + passive + that-clause
> **It is said that** he is a millionaire. | Se dice que es millonario.
> **It is believed that** the painting was stolen in 1990. | Se cree que el cuadro fue robado en 1990.
> **It has been reported that** three people were injured. | Se ha informado de que tres personas resultaron heridas.
> **It is expected that** prices will rise. | Se espera que los precios suban.
### b) Sujeto + passive + to-infinitive (más elegante y frecuente en prensa)
> **He is said to be** a millionaire. | Se dice que es millonario.
> **The painting is believed to have been stolen** in 1990. | Se cree que el cuadro fue robado en 1990.
> **Prices are expected to rise.** | Se espera que suban los precios.
## 2. Elegir el infinitivo correcto
Fíjate en **cuándo** ocurre la acción respecto al verbo de opinión.
| Relación temporal | Infinitivo | Ejemplo |
|---|---|---|
| Simultánea (presente/estado) | to + base | She **is thought to live** in Paris. |
| Simultánea en progreso | to be + -ing | He **is believed to be hiding** in the mountains. |
| Anterior | to have + participio | He **is said to have left** the country. |
| Anterior en progreso | to have been + -ing | They **are thought to have been planning** it for months. |
| Anterior + pasiva | to have been + participio | The bridge **is known to have been built** by the Romans. |
> The suspect **is reported to have fled** to Brazil. | Se informa de que el sospechoso huyó a Brasil.
> She **was thought to be** the best candidate. | Se pensaba que era la mejor candidata.
> Over 1,000 people **are estimated to have attended** the protest. | Se calcula que más de 1.000 personas asistieron a la protesta.
!trap: El "se dice / se cree / se calcula" español se traduce perfectamente con estas estructuras. Evita la traducción literal "It says that…" (= el texto dice que…), que tiene otro significado.
x> He is said that he is rich. | He is said to be rich. / It is said that he is rich.
x> She is believed to leave the country last week. | She is believed to have left the country last week.
## 3. There is said to be…
> **There are said to be** ghosts in the castle. | Se dice que hay fantasmas en el castillo.
> **There is thought to have been** a mistake. | Se cree que hubo un error.
## 4. Otras pasivas avanzadas
### Pasiva con verbos + preposición
> The issue **was dealt with** quickly. | El asunto se resolvió rápidamente.
> She hates **being laughed at**. | Odia que se rían de ella.
### Get-passive (informal, a menudo algo inesperado o negativo)
> He **got fired** last week. | Lo despidieron la semana pasada.
> Our flight **got cancelled**. | Nos cancelaron el vuelo.
### Pasiva con make / let
> We **were made to wait** for hours. | Nos hicieron esperar horas. (make → be made **to**)
x> We were made wait for hours. | We were made to wait for hours.
`,
ex:[
{t:'mc', q:'The president is believed ___ the country yesterday.', o:['to leave','to have left','leaving','that he left'], a:1, e:'Acción anterior → to have + participio.'},
{t:'mc', q:'It ___ that the company will close next year.', o:['says','is said','is saying','said'], a:1, e:'It is said that = se dice que.'},
{t:'mc', q:'The thieves are thought ___ in the area at the moment.', o:['to hide','to be hiding','to have hidden','hiding'], a:1, e:'Simultáneo y en progreso → to be + -ing.'},
{t:'gap', q:'She is known ___ (be) a very generous person.', a:['to be'], e:'Estado simultáneo → to be.'},
{t:'gap', q:'This castle is said ___ (build) in the 12th century.', a:['to have been built'], e:'Anterior + pasivo → to have been + participio.'},
{t:'fix', q:'He is said that he speaks ten languages.', a:['He is said to speak ten languages.','It is said that he speaks ten languages.'], e:'O "It is said that…" o "He is said to…", no las dos mezcladas.'},
{t:'fix', q:'The workers were made work overtime.', a:['The workers were made to work overtime.'], e:'Make en pasiva → be made to.'},
{t:'tr', q:'People believe that the singer is living in Spain.', k:'BELIEVED', s:'The singer ___ in Spain.', a:['is believed to be living','is believed to live'], e:'Sujeto + is believed + to be + -ing.'},
{t:'tr', q:'Experts estimate that the fire destroyed 200 homes.', k:'ESTIMATED', s:'The fire ___ 200 homes.', a:['is estimated to have destroyed'], e:'Acción anterior → to have + participio.'},
{t:'tr', q:'People say there is a secret tunnel under the house.', k:'BE', s:'There is said ___ a secret tunnel under the house.', a:['to be'], e:'There is said to be…'}
]
},

{
id:'c1-participle', level:'C1', title:'Participle clauses', es:'Oraciones de participio',
goal:'Condensar información con -ing, participio pasado y having + participio, como en la escritura avanzada.',
theory:`
## 1. ¿Qué son?
Las **participle clauses** sustituyen a una oración subordinada completa (con conjunción + sujeto + verbo) por un participio. Hacen el texto más **conciso y elegante**.
> **Because I felt** tired, I went to bed. → **Feeling** tired, I went to bed. | Como me sentía cansado, me acosté.
## 2. Present participle (-ing): sentido activo, simultáneo o causa
> **Walking** down the street, I saw an old friend. | Mientras caminaba por la calle, vi a un viejo amigo.
> **Not knowing** what to say, she remained silent. | Al no saber qué decir, se quedó callada.
> **Being** a doctor, he knew exactly what to do. | Al ser médico, sabía exactamente qué hacer.
> The man **sitting** next to me was snoring. | El hombre sentado a mi lado roncaba. (= who was sitting)
## 3. Past participle: sentido pasivo
> **Built** in 1889, the Eiffel Tower is Paris's symbol. | Construida en 1889, la Torre Eiffel… (= which was built)
> **Seen** from above, the city looks tiny. | Vista desde arriba, la ciudad parece diminuta. (= when it is seen)
> **Asked** about the scandal, the minister refused to comment. | Al ser preguntado sobre el escándalo…
> The documents **stolen** last week have been found. | Los documentos robados la semana pasada…
## 4. Perfect participle (having + participio): acción anterior
> **Having finished** the report, she went home. | Tras terminar el informe, se fue a casa.
> **Having lived** in Japan for years, he speaks fluent Japanese. | Habiendo vivido en Japón años…
> **Having been told** the truth, I felt relieved. | Tras contarme la verdad, me sentí aliviado. (pasiva)
## 5. Con conjunciones
> **After leaving** school, he joined the army. | Después de dejar el colegio…
> **While working** in London, she met her husband. | Mientras trabajaba en Londres…
> **Before signing**, read the contract carefully. | Antes de firmar…
> **When asked**, he denied everything. | Cuando le preguntaron, lo negó todo.
> **Once opened**, consume within three days. | Una vez abierto, consumir en tres días.
## 6. ¡Cuidado con el sujeto! (dangling participles)
El sujeto implícito del participio **debe ser el mismo** que el de la oración principal.
x> Walking into the room, the lights went off. | Walking into the room, I noticed that the lights went off. / As I walked into the room, the lights went off.
x> Having eaten dinner, the phone rang. | Having eaten dinner, I heard the phone ring. / After we had eaten dinner, the phone rang.
!trap: En español toleramos más los gerundios "colgados" ("Entrando en la sala, se apagaron las luces"). En inglés este error es muy visible y puede resultar cómico: ¡parece que las luces entraron en la sala!
!tip: Las oraciones de participio son ideales en **writing** formal (ensayos, informes). En conversación, mejor la oración completa.
`,
ex:[
{t:'mc', q:'___ in 1920, the hotel has a lot of history.', o:['Building','Built','Having built','To build'], a:1, e:'Sentido pasivo → participio pasado.'},
{t:'mc', q:'___ all her money, she had to borrow some from a friend.', o:['Spending','Spent','Having spent','To have spent'], a:2, e:'Acción anterior → having + participio.'},
{t:'mc', q:'___ what to do, I called my mother for advice.', o:["Not knowing","Don't knowing","Not known","Knowing not"], a:0, e:'Negativa: not + -ing.'},
{t:'gap', q:'The woman ___ (stand) by the door is my boss.', a:['standing'], e:'= who is standing → present participle.'},
{t:'gap', q:'Most of the goods ___ (make) in this factory are exported.', a:['made'], e:'= which are made → past participle.'},
{t:'gap', q:'When ___ (question) by the police, he refused to answer.', a:['questioned'], e:'When + participio pasado (pasivo).'},
{t:'fix', q:'Arriving at the hotel, the receptionist gave us our keys.', a:['When we arrived at the hotel, the receptionist gave us our keys.','Arriving at the hotel, we were given our keys by the receptionist.','As we arrived at the hotel, the receptionist gave us our keys.'], e:'Dangling participle: el sujeto del participio debe ser el de la principal.'},
{t:'tr', q:'After she had finished her degree, she moved to Canada.', k:'HAVING', s:'___ degree, she moved to Canada.', a:['having finished her'], e:'Having + participio = acción anterior.'},
{t:'tr', q:'Because he was a nurse, he knew how to help.', k:'BEING', s:'___ nurse, he knew how to help.', a:['being a'], e:'Causa → being.'},
{t:'mc', q:'Which sentence is correct?', o:['Driving to work, my phone rang.','Driving to work, I heard my phone ring.','Driven to work, my phone rang.','Having driven to work, my phone rang.'], a:1, e:'El sujeto implícito (I) coincide con el de la principal.'}
]
},

{
id:'c1-conditionals', level:'C1', title:'Mixed conditionals and alternatives to if', es:'Condicionales mixtos y alternativas a if',
goal:'Combinar tiempos en condicionales y usar provided that, as long as, otherwise, but for, suppose, y la inversión condicional.',
theory:`
## 1. Condicionales mixtos
### Pasado → presente
Una condición pasada irreal con un resultado **presente**.
:: If + past perfect, would + verbo base (now)
> If I **had taken** that job, I **would be** rich now. | Si hubiera aceptado ese trabajo, ahora sería rico.
> If she **hadn't missed** the flight, she **would be** here now. | Si no hubiera perdido el vuelo, ahora estaría aquí.
### Presente → pasado
Una condición presente/permanente irreal con un resultado **pasado**.
:: If + past simple, would have + participio
> If I **spoke** Russian, I **would have understood** the film. | Si hablara ruso, habría entendido la peli.
> If he **weren't** so lazy, he **would have finished** by now. | Si no fuera tan vago, ya habría terminado.
## 2. Inversión condicional (formal)
Se elimina *if* y se invierte el auxiliar.
| Normal | Invertida |
|---|---|
| If I had known… | **Had I known**, I would have come. |
| If you should need help… | **Should you need** help, call us. |
| If I were in your position… | **Were I** in your position, I'd resign. |
| If they were to win… | **Were they to win**, it would be a miracle. |
> **Should you have** any questions, please contact us. | Si tuviera alguna pregunta, no dude en contactarnos. (muy común en emails formales)
> **Had we left** earlier, we wouldn't have missed the train. | De haber salido antes…
x> Had not I known… | Had I not known… / If I hadn't known…
## 3. Alternativas a if
| Expresión | Significado | Ejemplo |
|---|---|---|
| unless | a menos que | We'll go **unless** it rains. |
| provided / providing (that) | siempre que | You can go **provided that** you're back by 10. |
| as long as / so long as | siempre que | I'll lend it **as long as** you return it. |
| on condition that | con la condición de que | He agreed **on condition that** he was paid. |
| suppose / supposing / what if | supongamos que | **Suppose** you lost your job, what would you do? |
| in case | por si (acaso) | Take an umbrella **in case** it rains. |
| otherwise / or else | si no, de lo contrario | Hurry, **otherwise** we'll be late. |
| but for / if it weren't for / if it hadn't been for | si no fuera/hubiera sido por | **But for** your help, I would have failed. |
| even if | aunque, incluso si | **Even if** you apologise, she won't forgive you. |
!trap: **In case** NO significa "en caso de que" con sentido condicional, sino "por si acaso" (precaución): Take a coat **in case** it gets cold (llévalo de todas formas). Compara: **If** it gets cold, put on your coat.
> **If it weren't for** my parents, I couldn't afford university. | Si no fuera por mis padres, no podría pagar la universidad.
> **If it hadn't been for** the goalkeeper, we would have lost. | Si no hubiera sido por el portero, habríamos perdido.
## 4. If + will / would (casos especiales)
> **If you will** follow me, I'll show you to your room. | Si me hace el favor de seguirme… (petición educada)
> **If you would** wait here, the doctor will see you shortly. | Si es tan amable de esperar aquí…
`,
ex:[
{t:'mc', q:'If I had studied medicine, I ___ a doctor now.', o:['would have been','would be','will be','had been'], a:1, e:'Mixto: pasado irreal → resultado presente.'},
{t:'mc', q:'If she weren\'t so shy, she ___ to the party last night.', o:['would come','would have come','will come','came'], a:1, e:'Mixto: rasgo presente → resultado pasado.'},
{t:'mc', q:'___ you need any further information, please do not hesitate to contact us.', o:['If','Should','Would','Had'], a:1, e:'Inversión condicional formal: Should you need…'},
{t:'mc', q:'Take some snacks ___ you get hungry on the way.', o:['if','in case','unless','provided'], a:1, e:'Por si acaso → in case.'},
{t:'gap', q:'___ I known about the problem, I would have helped. (inversión)', a:['had'], e:'Had I known = If I had known.'},
{t:'gap', q:'You can borrow the car as ___ as you drive carefully.', a:['long'], e:'As long as = siempre que.'},
{t:'tr', q:'If you hadn\'t helped me, I would have failed.', k:'FOR', s:'But ___, I would have failed.', a:['for your help'], e:'But for + sustantivo.'},
{t:'tr', q:'If I had saved money, I could buy a house now.', k:'HAD', s:'___ money, I could buy a house now.', a:['had i saved'], e:'Inversión condicional + mixto.'},
{t:'tr', q:'Hurry up or we\'ll miss the bus.', k:'OTHERWISE', s:'Hurry up, ___ the bus.', a:["otherwise we'll miss","otherwise we will miss"], e:'Otherwise = si no.'},
{t:'fix', q:'If I would have known, I would have told you.', a:['If I had known, I would have told you.','Had I known, I would have told you.'], e:'Nunca would en la cláusula if.'}
]
},

{
id:'c1-unreal', level:'C1', title:'Unreal past: it\'s time, would rather, as if', es:'Pasado irreal: It\'s time, would rather, as if',
goal:'Usar el pasado con significado presente irreal en estructuras como It\'s (high) time, I\'d rather you…, as if/as though.',
theory:`
## 1. El "pasado irreal"
En inglés, el pasado no solo expresa tiempo pasado: también **distancia de la realidad** (como en el segundo condicional y en *wish*). Estas estructuras usan el pasado con significado **presente o futuro**.
## 2. It's (high / about) time + past simple
Indica que algo **ya debería estar ocurriendo** (con un matiz de crítica o urgencia).
> **It's time** we **left**. | Ya es hora de que nos vayamos.
> **It's high time** you **got** a job. | Ya va siendo hora de que consigas trabajo.
> **It's about time** the government **did** something. | Ya era hora de que el Gobierno hiciera algo.
!note: Sin sujeto, usamos el infinitivo: **It's time to go.** Con sujeto, pasado: **It's time we went.**
x> It's time you go to bed. | It's time you went to bed.
## 3. Would rather / would sooner
### Mismo sujeto → infinitivo sin to
> I**'d rather stay** at home tonight. | Prefiero quedarme en casa esta noche.
> I**'d rather not talk** about it. | Prefiero no hablar de ello.
> I**'d rather walk than take** the bus. | Prefiero caminar que coger el autobús.
### Distinto sujeto → past simple (presente/futuro) o past perfect (pasado)
> I**'d rather you didn't smoke** in here. | Preferiría que no fumaras aquí.
> I**'d rather** you **came** tomorrow. | Preferiría que vinieras mañana.
> I**'d rather** you **hadn't told** her. | Preferiría que no se lo hubieras dicho.
x> I'd rather you don't call me at work. | I'd rather you didn't call me at work.
!trap: "Prefiero que + subjuntivo" → **I'd rather + sujeto + pasado**. No "I prefer that you…" (suena extraño) y no presente.
## 4. Would prefer
> I**'d prefer to stay** in. | (mismo sujeto: to + infinitivo)
> I**'d prefer you to stay**. / I'd prefer it if you **stayed**. | (distinto sujeto)
## 5. As if / as though
### Situación posible (lo parece y puede ser verdad) → tiempo normal
> It looks **as if** it**'s going to rain**. | Parece que va a llover. (probable)
> She sounds **as though** she **has** a cold. | Suena como si estuviera resfriada.
### Situación irreal o improbable → pasado (were) / past perfect
> He talks **as if** he **were** the boss. (no lo es) | Habla como si fuera el jefe.
> She looked at me **as though** she **had seen** a ghost. | Me miró como si hubiera visto un fantasma.
> Don't treat me **as if** I **were** a child! | ¡No me trates como si fuera un niño!
## 6. Suppose / supposing / imagine + pasado
> **Suppose** you **won** the lottery. What would you do? | Supón que te tocara la lotería.
> **Supposing** we **missed** the last train, how would we get home? |
`,
ex:[
{t:'mc', q:'It\'s high time you ___ responsibility for your actions.', o:['take','took','will take','have taken'], a:1, e:'It\'s high time + past simple.'},
{t:'mc', q:'I\'d rather you ___ anyone about this.', o:["don't tell","didn't tell","won't tell","not tell"], a:1, e:'Would rather + otro sujeto + pasado.'},
{t:'mc', q:'I\'d rather ___ at home tonight.', o:['to stay','stay','stayed','staying'], a:1, e:'Mismo sujeto → infinitivo sin to.'},
{t:'mc', q:'He spends money as if he ___ a millionaire.', o:['is','were','has been','will be'], a:1, e:'Situación irreal → as if + were.'},
{t:'gap', q:'It\'s about time the council ___ (repair) this road.', a:['repaired'], e:'It\'s about time + pasado.'},
{t:'gap', q:'I\'d rather you ___ (not / mention) it yesterday, but it\'s too late now.', a:["hadn't mentioned","had not mentioned"], e:'Preferencia sobre el pasado → past perfect.'},
{t:'fix', q:'It\'s time we go home.', a:['It\'s time we went home.','It is time we went home.',"It's time to go home."], e:'It\'s time + sujeto + pasado.'},
{t:'fix', q:'I\'d rather you don\'t use my laptop.', a:["I'd rather you didn't use my laptop.","I would rather you didn't use my laptop."], e:'Would rather + sujeto + past simple.'},
{t:'tr', q:'You should really start looking for a job now.', k:'TIME', s:'It\'s high ___ looking for a job.', a:['time you started','time you began'], e:'It\'s high time + sujeto + pasado.'},
{t:'tr', q:'I would prefer you not to bring your dog.', k:'RATHER', s:'I\'d ___ your dog.', a:["rather you didn't bring","rather you did not bring"], e:'Would rather + sujeto + pasado negativo.'}
]
},

{
id:'c1-subjunctive', level:'C1', title:'The subjunctive and formal structures', es:'El subjuntivo y estructuras formales',
goal:'Usar el subjuntivo inglés (suggest that he go, it\'s essential that she be) y alternativas con should.',
theory:`
## 1. El subjuntivo en inglés
El subjuntivo inglés es casi invisible: es simplemente el **verbo base** (sin -s, sin pasado) para todas las personas. Se usa tras ciertos verbos, adjetivos y sustantivos que expresan **necesidad, petición o recomendación**. Es **formal** y muy frecuente en inglés americano.
:: verbo/adjetivo de exigencia + that + sujeto + verbo base
> I **suggest** that he **take** a few days off. | Sugiero que se tome unos días libres. (no "takes")
> The doctor **recommended** that she **rest**. | El médico recomendó que descansara.
> They **insisted** that he **be** present. | Insistieron en que estuviera presente.
> It is **essential** that every student **attend** the meeting. | Es esencial que todos los alumnos asistan.
> We **request** that the payment **be made** before Friday. | Solicitamos que el pago se realice antes del viernes. (pasiva: be + participio)
## 2. Palabras que activan el subjuntivo
| Tipo | Ejemplos |
|---|---|
| Verbos | suggest, recommend, insist, demand, request, propose, require, ask, urge, advise |
| Adjetivos | essential, vital, crucial, important, necessary, imperative, urgent, advisable |
| Sustantivos | suggestion, recommendation, demand, requirement, proposal, insistence |
## 3. Negativa: not + verbo base
> I suggest that you **not** **mention** this to anyone. | Sugiero que no lo menciones.
> It's vital that the patient **not be** disturbed. | Es vital que no se moleste al paciente.
## 4. Alternativa británica: should + infinitivo
En inglés británico es muy común usar **should**:
> I suggest that he **should take** a break. | = I suggest that he take a break.
> It's essential that she **should be** informed. |
!note: En el habla informal británica también se oye el indicativo ("I suggest he takes a break"), pero en exámenes y escritura formal, usa el subjuntivo o *should*.
## 5. Suggest y recommend: ¡cuidado con el patrón!
| ✓ Correcto | ✗ Incorrecto |
|---|---|
| I suggest (that) you **go**. | I suggest you to go. |
| I suggest **going**. | I suggest to go. |
| I recommend (that) she **see** a doctor. | I recommend her to see… (posible en BrE, pero evítalo) |
x> I suggest you to apply for the job. | I suggest (that) you apply for the job.
!trap: Influidos por "te sugiero que + subjuntivo", muchos hispanohablantes escriben "I suggest you to…". El patrón correcto es **suggest (that) + sujeto + verbo base**, o **suggest + -ing**.
## 6. Subjuntivo en expresiones fijas
Restos del subjuntivo antiguo que se usan hoy:
> **Be that as it may**, we must continue. | Sea como sea, debemos continuar.
> **God save** the King. / **Long live** the Queen. |
> **So be it.** | Que así sea.
> **Come what may**, I'll support you. | Pase lo que pase, te apoyaré.
> **If need be**, we can work on Saturday. | Si fuera necesario, podemos trabajar el sábado.
> **Suffice it to say** that he wasn't happy. | Baste decir que no estaba contento.
## 7. Were (subjuntivo pasado)
> If I **were** you… / I wish she **were** here. / **Were** it not for your help… |
`,
ex:[
{t:'mc', q:'The committee recommended that the plan ___ rejected.', o:['is','be','was','will be'], a:1, e:'Subjuntivo pasivo: be + participio.'},
{t:'mc', q:'It is essential that he ___ on time tomorrow.', o:['arrives','arrive','arrived','will arrive'], a:1, e:'Subjuntivo: verbo base sin -s.'},
{t:'mc', q:'I suggest ___ a taxi; it\'s getting late.', o:['to take','taking','you to take','that you took'], a:1, e:'Suggest + -ing.'},
{t:'gap', q:'She insisted that he ___ (be) told the truth.', a:['be'], e:'Insist that + sujeto + be.'},
{t:'gap', q:'It\'s vital that the door ___ (not / leave) unlocked.', a:['not be left'], e:'Negativa + pasiva: not be + participio.'},
{t:'fix', q:'I suggest you to see a specialist.', a:['I suggest you see a specialist.','I suggest that you see a specialist.','I suggest that you should see a specialist.','I suggest seeing a specialist.'], e:'Suggest no va con persona + to.'},
{t:'fix', q:'The manager demanded that every employee attends the training.', a:['The manager demanded that every employee attend the training.','The manager demanded that every employee should attend the training.'], e:'Subjuntivo: attend (sin -s).'},
{t:'tr', q:'"You should apply for the job," she told me.', k:'SUGGESTED', s:'She ___ for the job.', a:['suggested that i apply','suggested i apply','suggested that i should apply','suggested applying','suggested i should apply'], e:'Suggest (that) + sujeto + verbo base / should.'},
{t:'mc', q:'___ it to say, the party was a disaster.', o:['Suffice','Sufficient','Suffices','Be sufficient'], a:0, e:'Expresión fija con subjuntivo: Suffice it to say.'},
{t:'mc', q:'___ what may, I\'ll finish this marathon.', o:['Comes','Come','Coming','To come'], a:1, e:'Come what may = pase lo que pase.'}
]
},

{
id:'c1-pastmodals', level:'C1', title:'Past modals: criticism, regret and necessity', es:'Modales en pasado: crítica, arrepentimiento y necesidad',
goal:'Dominar should have, needn\'t have vs didn\'t need to, was supposed to, would have, y sus matices.',
theory:`
## 1. Should have / ought to have: crítica y arrepentimiento
> You **should have told** me earlier! | ¡Deberías habérmelo dicho antes!
> I **shouldn't have eaten** so much. | No debería haber comido tanto.
> We **ought to have booked** a table. | Deberíamos haber reservado mesa.
## 2. Needn't have vs didn't need to
Esta distinción es **típica de exámenes C1/C2**.
| needn't have + participio | didn't need to + infinitivo |
|---|---|
| Lo hiciste, pero no era necesario (esfuerzo inútil) | No era necesario (normalmente no lo hiciste) |
> I **needn't have bought** so much food; nobody came. | No hacía falta que comprara tanta comida (y la compré).
> I **didn't need to buy** food because Ana had already done it. | No tuve que comprar comida (y no la compré).
> You **needn't have worried**. Everything went fine. | No hacía falta que te preocuparas.
!trap: En español "no hacía falta que…" cubre los dos casos. Pregúntate: **¿se hizo la acción?** Si sí y fue innecesaria → needn't have.
## 3. Was / were supposed to: lo previsto que no ocurrió
> The train **was supposed to arrive** at 6, but it was late. | Se suponía que el tren llegaba a las 6.
> You **were supposed to** call me! | ¡Se suponía que ibas a llamarme!
> I'm **not supposed to** eat sugar. | Se supone que no debo comer azúcar. (presente: norma/recomendación)
## 4. Could have / might have
### Posibilidad no realizada
> You **could have been** killed! | ¡Podrías haberte matado!
> It **might have been** worse. | Podría haber sido peor.
### Reproche
> You **might have** warned me! | ¡Podrías haberme avisado!
### Habilidad no aprovechada
> She **could have been** a professional dancer, but she chose law. | Podría haber sido bailarina profesional.
!note: **Could have** = tenía la capacidad pero no lo hice. **Was able to** = lo logré en una ocasión concreta: Despite the storm, we **were able to** land. (No "could land" en afirmativa para un logro concreto).
x> After hours of trying, I could open the door. | After hours of trying, I was able to / managed to open the door.
## 5. Would have: disposición o deseo no realizado
> I **would have come** to your party, but I was ill. | Habría ido a tu fiesta, pero estaba enfermo.
> I **would have liked** to see the show. | Me habría gustado ver el espectáculo.
## 6. Must have / can't have (repaso de deducción)
> She **must have left** already; her coat's gone. | Debe de haberse ido ya.
> He **can't have finished** so quickly! | ¡No puede haber terminado tan rápido!
## 7. Resumen
| Estructura | Significado |
|---|---|
| should have done | era lo correcto, pero no se hizo (crítica) |
| shouldn't have done | se hizo, pero no era correcto |
| needn't have done | se hizo, pero era innecesario |
| didn't need to do | no era necesario (generalmente no se hizo) |
| could have done | era posible, pero no ocurrió |
| was supposed to do | estaba previsto, pero no ocurrió |
| would have done | lo habría hecho (si…) |
`,
ex:[
{t:'mc', q:'We ___ taken a taxi. The station was only five minutes away.', o:["didn't need to","needn't have","mustn't have","couldn't have"], a:1, e:'Se tomó el taxi y no hacía falta → needn\'t have.'},
{t:'mc', q:'I ___ wear a suit, so I went in jeans.', o:["needn't have","didn't need to","shouldn't have","mustn't"], a:1, e:'No era necesario y no lo hizo → didn\'t need to.'},
{t:'mc', q:'You ___ me you were coming! I would have cooked something special.', o:['should have told','must have told','needn\'t have told','could tell'], a:0, e:'Crítica sobre el pasado → should have.'},
{t:'mc', q:'Despite the fog, the pilot ___ land safely.', o:['could','was able to','could have','might'], a:1, e:'Logro en una ocasión concreta → was able to / managed to.'},
{t:'gap', q:'The meeting ___ (supuestamente) start at 9, but it began at 10. (escribe: was supposed to)', a:['was supposed to'], e:'Lo previsto que no ocurrió.'},
{t:'gap', q:'You ___ (podrías haberte) hurt yourself! Be more careful. (escribe: could have)', a:['could have','might have'], e:'Posibilidad no realizada.'},
{t:'fix', q:'I shouldn\'t have to study so much; the exam was really easy.', a:["I needn't have studied so much; the exam was really easy.","I didn't need to study so much; the exam was really easy."], e:'Esfuerzo innecesario → needn\'t have studied.'},
{t:'tr', q:'It was a mistake to lend him money.', k:'SHOULDN\'T', s:'I ___ him money.', a:["shouldn't have lent","should not have lent"], e:'Arrepentimiento → shouldn\'t have + participio.'},
{t:'tr', q:'It wasn\'t necessary for you to wash the dishes, but you did.', k:'NEEDN\'T', s:'You ___ the dishes.', a:["needn't have washed","need not have washed"], e:'Needn\'t have + participio.'},
{t:'tr', q:'I wanted to go to the concert, but I had to work.', k:'WOULD', s:'I ___ to the concert, but I had to work.', a:['would have gone'], e:'Disposición no realizada → would have.'}
]
},

{
id:'c1-futurepast', level:'C1', title:'Future in the past and future nuances', es:'Futuro en el pasado y matices de futuro',
goal:'Expresar planes que no se cumplieron y matizar el futuro con be about to, be bound to, be due to, be set to, be on the verge of.',
theory:`
## 1. Futuro en el pasado
Para hablar desde un punto del pasado sobre algo que entonces era futuro.
| Forma | Ejemplo |
|---|---|
| was/were going to | I **was going to** call you, but I forgot. |
| would | She knew she **would** be late. |
| was/were about to | I **was about to** leave when he arrived. |
| was/were to (destino) | It was a decision he **was to** regret. |
| was/were to have + part. (plan frustrado) | The president **was to have opened** the bridge, but he fell ill. |
| was/were due to | The plane **was due to** land at 7. |
> We **were going to** buy that house, but the price went up. | Íbamos a comprar esa casa, pero subió el precio.
> I **was about to** give up when I got the call. | Estaba a punto de rendirme cuando recibí la llamada.
> Little did they know that they **were to** become famous. | Poco sabían que se iban a hacer famosos.
> He **would** later become prime minister. | Más tarde se convertiría en primer ministro.
## 2. Matices de futuro
| Expresión | Significado | Ejemplo |
|---|---|---|
| be about to | inminente (a punto de) | The film **is about to** start. |
| be on the point / verge of + -ing | a punto de (formal) | The company **is on the verge of collapsing**. |
| be bound to | seguro (predicción) | You**'re bound to** pass; you've worked so hard. |
| be sure / certain to | seguro | It **is certain to** rain later. |
| be likely / unlikely to | probable / improbable | Prices **are likely to** rise. |
| be due to | previsto (horario) | The report **is due to** be published in May. |
| be set to | listo para, previsto (prensa) | Unemployment **is set to** fall. |
| be to (formal, órdenes/planes oficiales) | deberá / está previsto | The Queen **is to** visit Canada. You **are to** report at 8 am. |
> Don't worry about the interview. You**'re bound to** do well. | Seguro que te va bien.
> Scientists **are on the verge of** a major breakthrough. | Los científicos están a punto de un gran avance.
> The new law **is set to** come into force next year. | La nueva ley entrará en vigor el año que viene.
!trap: "Estar a punto de" = **be about to + infinitivo** (sin "of"); **be on the point of + -ing**. No mezcles: be about **of** ✗.
x> I was about of leaving. | I was about to leave.
!note: **Be likely to** es mucho más natural que "probably will" en textos formales: The project **is likely to** be delayed. **It is unlikely that** they'll agree.
## 3. Futuro con verbos de intención
> We **intend to** expand into Asia. | Tenemos intención de expandirnos a Asia.
> I**'m planning on** studying abroad. | Estoy pensando en estudiar fuera.
> She**'s considering** moving to Berlin. | Está considerando mudarse a Berlín.
> They **hope to** finish by June. | Esperan terminar en junio.
`,
ex:[
{t:'mc', q:'I ___ phone you, but my battery died.', o:['would','was going to','am going to','will'], a:1, e:'Plan pasado no realizado → was going to.'},
{t:'mc', q:'Hurry up! The train ___ leave.', o:['is bound to','is about to','is on the verge to','is due'], a:1, e:'Inminente → is about to.'},
{t:'mc', q:'Don\'t worry, she\'s ___ to call you back. She always does.', o:['about','bound','verge','set on'], a:1, e:'Seguro → be bound to.'},
{t:'mc', q:'The company is on the verge of ___ bankrupt.', o:['go','going','to go','gone'], a:1, e:'On the verge of + -ing.'},
{t:'gap', q:'The new stadium is ___ to open in 2027. (previsto, prensa)', a:['set','due'], e:'Be set to / be due to.'},
{t:'gap', q:'I was ___ to go to bed when the doorbell rang.', a:['about'], e:'Was about to = estaba a punto de.'},
{t:'fix', q:'The minister was about of resigning when the scandal broke.', a:['The minister was about to resign when the scandal broke.','The minister was on the point of resigning when the scandal broke.'], e:'About to + infinitivo / on the point of + -ing.'},
{t:'tr', q:'It\'s very probable that prices will increase.', k:'LIKELY', s:'Prices ___ increase.', a:['are likely to','are very likely to'], e:'Be likely to.'},
{t:'tr', q:'He planned to become a lawyer, but he became an actor instead.', k:'GOING', s:'He ___ a lawyer, but he became an actor instead.', a:['was going to become','was going to be'], e:'Futuro en el pasado no realizado.'},
{t:'mc', q:'They met in 1990. They ___ marry five years later.', o:['would','will','are to','were going'], a:0, e:'Would = futuro en el pasado (narración): se casarían.'}
]
},

{
id:'c1-emphasis', level:'C1', title:'Emphasis: auxiliary do, fronting and intensifiers', es:'Énfasis: do enfático, anteposición e intensificadores',
goal:'Dar fuerza a tus ideas como un hablante nativo: do/did enfático, intensificadores, the very, whatsoever, fronting.',
theory:`
## 1. Do / does / did enfático
En frases afirmativas, añadir **do/does/did** + verbo base enfatiza, contradice o insiste.
> I **do** like your new haircut! | ¡Me gusta mucho tu nuevo corte de pelo! (de verdad)
> She **does** work hard, even if you don't believe it. | Sí que trabaja mucho.
> I **did** tell you about the meeting! | ¡Sí que te lo dije!
> **Do** sit down. | Siéntese, por favor. (invitación cortés y enfática)
> Although I didn't win, I **did** enjoy the experience. | Aunque no gané, sí que disfruté la experiencia.
!trap: En español enfatizamos con "sí que", "de verdad", "claro que". En inglés, el **do enfático** cumple esta función. En el habla, se acentúa: I **DO** like it.
## 2. Intensificadores
| Con adjetivos graduables (good, tired, big) | Con adjetivos extremos (amazing, exhausted, huge) |
|---|---|
| very, extremely, really, incredibly, terribly | absolutely, completely, totally, utterly, really |
> I'm **extremely** tired. / I'm **absolutely** exhausted. |
x> I'm very exhausted. | I'm absolutely exhausted.
x> It was absolutely good. | It was really good / absolutely amazing.
## 3. Énfasis en negativas
> I don't like it **at all**. | No me gusta nada.
> There's no evidence **whatsoever**. | No hay ninguna prueba en absoluto.
> I didn't sleep **a wink**. | No pegué ojo.
> **Not a single** person helped me. | Ni una sola persona me ayudó.
> I'm **by no means** an expert. | No soy un experto, ni mucho menos.
> It's **nowhere near** finished. | No está ni de lejos terminado.
## 4. The very, the (adjetivo) itself, own
> That's **the very** thing I was looking for! | ¡Eso es justo lo que buscaba!
> At **the very** beginning / end. | Al mismísimo principio / final.
> The idea **itself** is good, but the timing is wrong. | La idea en sí es buena…
> She made it with her **own** hands. | Lo hizo con sus propias manos.
## 5. Such / so, what a, how
> It was **such a** relief! / He's **so** kind! | ¡Qué alivio! / ¡Es tan amable!
> **What a** mess! / **How** strange! | ¡Qué desastre! / ¡Qué raro!
## 6. Fronting (anteposición)
Mover un elemento al principio para destacarlo o crear contraste (estilo literario o enfático).
> This film I'll never forget. (= I'll never forget this film.) | Esta película no la olvidaré nunca.
> Strange **as it may seem**, I enjoyed it. | Por extraño que parezca, lo disfruté.
> **Gone are** the days when we could buy a house with one salary. | Atrás quedaron los días en que…
> **Here comes** the bus! / **There goes** my last chance. |
> **Down came** the rain. | Y cayó la lluvia. (literario, verbos de movimiento: inversión con sustantivo)
## 7. Repetición y estructuras enfáticas
> I waited and waited, but she never came. | Esperé y esperé…
> She is **far and away** the best candidate. | Es con diferencia la mejor candidata.
> It's **one thing** to say it and **quite another** to do it. | Una cosa es decirlo y otra muy distinta hacerlo.
`,
ex:[
{t:'mc', q:'"You never listen to me!" "That\'s not true. I ___ listen to you."', o:['am','do','have','did'], a:1, e:'Do enfático para contradecir.'},
{t:'mc', q:'After the marathon, I was ___ exhausted.', o:['very','absolutely','a bit very','extremely much'], a:1, e:'Adjetivo extremo → absolutely.'},
{t:'mc', q:'There is no reason ___ to be worried.', o:['at all','whatsoever','both are possible','never'], a:2, e:'Ambos intensifican la negación: no reason at all / no reason whatsoever.'},
{t:'gap', q:'That\'s the ___ book I\'ve been looking for! (mismísimo)', a:['very'], e:'The very = justo, mismísimo.'},
{t:'gap', q:'I ___ (did/do) warn you about the risks, but you didn\'t listen.', a:['did'], e:'Did enfático en pasado.'},
{t:'fix', q:'The view from the top was very amazing.', a:['The view from the top was absolutely amazing.','The view from the top was really amazing.','The view from the top was amazing.'], e:'Very no se usa con adjetivos extremos.'},
{t:'tr', q:'Although it may seem strange, I prefer winter.', k:'AS', s:'Strange ___, I prefer winter.', a:['as it may seem','as it seems'], e:'Adjetivo + as + sujeto + verbo (fronting concesivo).'},
{t:'tr', q:'The days when people wrote letters are gone.', k:'GONE', s:'___ when people wrote letters.', a:['gone are the days'], e:'Fronting con inversión.'},
{t:'mc', q:'I\'m ___ an expert, but I know a little about wine.', o:['by no means','no means','not means','by means'], a:0, e:'By no means = de ninguna manera, ni mucho menos.'},
{t:'ord', w:['I','do','hope','you','can','come'], a:['I do hope you can come'], e:'Do enfático + verbo base.'}
]
},

{
id:'c1-ellipsis', level:'C1', title:'Ellipsis and substitution', es:'Elipsis y sustitución',
goal:'Evitar repeticiones como un nativo: so/not, do so, one/ones, auxiliares, y omisiones naturales.',
theory:`
## 1. So y not tras verbos de opinión
Sustituyen una oración completa tras **think, hope, expect, suppose, believe, guess, be afraid, imagine**.
> "Will it rain?" "I **think so**." | "Creo que sí."
> "Is he coming?" "I **hope not**." | "Espero que no."
> "Did we win?" "I**'m afraid not**." | "Me temo que no."
> "Is it expensive?" "I **don't think so**." | "No creo." (más natural que "I think not")
x> I think yes. | I think so.
x> I hope no. | I hope not.
!trap: "Creo que sí / Espero que no" NO se traducen con yes/no: **I think so / I hope not**.
## 2. Sustitución con auxiliares
Repetimos solo el auxiliar en lugar del verbo completo.
> She can swim, but I **can't**. | Ella sabe nadar, pero yo no.
> "Have you finished?" "Yes, I **have**." |
> I didn't like the film, but my sister **did**. | A mí no me gustó la peli, pero a mi hermana sí.
> He said he'd help, and he **did**. | Dijo que ayudaría, y lo hizo.
## 3. So / neither / nor + auxiliar + sujeto (acuerdo)
> "I love jazz." "**So do I**." | "A mí también."
> "I can't swim." "**Neither can I**." / "**Nor can I**." | "Yo tampoco."
> "I've been to Paris." "**So has** my brother." |
x> "I'm tired." "Me too tired." | "So am I." / "Me too."
## 4. Do so / do it / do that
> He was asked to leave, and he **did so** immediately. | Se le pidió que se fuera y así lo hizo. (formal)
> If you want to apply, you should **do so** before Friday. | Si quieres presentarte, hazlo antes del viernes.
## 5. One / ones
Sustituyen un sustantivo contable ya mencionado.
> "Which shirt do you prefer?" "The blue **one**." | "La azul."
> I don't like these shoes. I prefer the black **ones**. |
> I need a pen. Have you got **one**? |
!trap: En español basta con el adjetivo ("la azul", "los negros"). En inglés el adjetivo **necesita** one/ones: the red ✗ → the red **one** ✓.
x> I prefer the red. | I prefer the red one.
## 6. Elipsis del infinitivo: to
> "Would you like to come?" "I'd love **to**." | "Me encantaría."
> I didn't want to go, but I had **to**. | No quería ir, pero tuve que hacerlo.
> You can leave if you want **to**. |
## 7. Elipsis en coordinación y respuestas cortas
> She went to the bank and (she) paid the bills. |
> "Where are you going?" "(I'm going) To the gym." |
> "Coffee?" "(Yes,) Please." |
> **Sounds** good. / **Doesn't matter.** / **Not sure.** | (elipsis del sujeto en conversación)
`,
ex:[
{t:'mc', q:'"Is the shop open on Sunday?" "I don\'t think ___."', o:['it','so','yes','that'], a:1, e:'I don\'t think so.'},
{t:'mc', q:'"Will it be expensive?" "I hope ___."', o:["no","not","don't","so not"], a:1, e:'I hope not.'},
{t:'mc', q:'"I haven\'t seen that film." "___."', o:['So have I','Neither have I','Neither I have','Me neither have'], a:1, e:'Acuerdo negativo: Neither have I.'},
{t:'mc', q:'These glasses are dirty. Can you give me clean ___?', o:['one','ones','them','some ones'], a:1, e:'Plural → ones.'},
{t:'gap', q:'I don\'t speak German, but my wife ___.', a:['does'], e:'Auxiliar para evitar repetir "speaks German".'},
{t:'gap', q:'"Do you want to come?" "I\'d love ___."', a:['to'], e:'Elipsis: I\'d love to.'},
{t:'fix', q:'"Is she coming?" "I think yes."', a:['"Is she coming?" "I think so."','I think so.'], e:'I think so.'},
{t:'fix', q:'I don\'t like the green jacket. I prefer the black.', a:["I don't like the green jacket. I prefer the black one."], e:'Adjetivo + one.'},
{t:'mc', q:'"I\'m really tired." "___ I."', o:['So do','So am','Neither am','Too am'], a:1, e:'Be → So am I.'},
{t:'mc', q:'Applicants who wish to apply should ___ online.', o:['do so','do it so','make so','so do'], a:0, e:'Do so (formal) sustituye "apply".'}
]
},

{
id:'c1-academic', level:'C1', title:'Nominalisation and hedging', es:'Nominalización y lenguaje atenuado (hedging)',
goal:'Escribir en registro académico y profesional: convertir verbos en sustantivos y matizar afirmaciones con prudencia.',
theory:`
## 1. Nominalización
Convertir **verbos o adjetivos en sustantivos** hace el texto más formal, objetivo y denso en información. Es característico de informes, artículos académicos y prensa seria.
| Estilo hablado (verbos) | Estilo formal (sustantivos) |
|---|---|
| Prices **rose** sharply, which **worried** consumers. | The sharp **rise** in prices caused **concern** among consumers. |
| They **decided** to close the factory. | The **decision** to close the factory… |
| If we **analyse** the data carefully… | Careful **analysis** of the data… |
| The government **failed** to act. | The government's **failure** to act… |
| Because people are **aware** of the problem… | Growing **awareness** of the problem… |
> The **introduction** of the new policy led to a significant **reduction** in costs. | La introducción de la nueva política supuso una reducción significativa de los costes.
> There has been a marked **improvement** in student **performance**. | Ha habido una mejora notable en el rendimiento de los alumnos.
!tip: Sufijos frecuentes: **-tion/-sion** (decide→decision), **-ment** (develop→development), **-ance/-ence** (perform→performance), **-ity** (able→ability), **-ness** (aware→awareness), **-al** (refuse→refusal), **-ure** (fail→failure).
!note: No abuses: demasiada nominalización hace el texto pesado. Busca el equilibrio, sobre todo en emails.
## 2. Hedging: atenuar afirmaciones
En la escritura académica y profesional en inglés se evitan las afirmaciones absolutas. El **hedging** muestra prudencia, precisión y cortesía.
### Verbos
> The results **suggest** that… / This **appears to** / **seems to** indicate… | Los resultados sugieren que…
> It **tends to** be more common in urban areas. | Tiende a ser más frecuente…
### Modales
> This **may / might / could** be due to… | Esto podría deberse a…
### Adverbios y adjetivos
> This is **possibly / probably / arguably** the most important factor. | Este es posiblemente / probablemente / podría decirse que es el factor más importante.
> It is **likely / unlikely / possible** that… |
> **Generally / Typically / To some extent / In most cases** |
### Estructuras impersonales
> **It could be argued that** technology isolates people. | Se podría argumentar que…
> **There is some evidence to suggest that**… | Hay ciertos indicios de que…
> **It would seem that**… / **It is widely believed that**… |
### Cuantificadores prudentes
> **Many / Some / A number of** studies have shown… (en lugar de "All studies show…") |
## 3. Comparación
| Afirmación directa | Con hedging |
|---|---|
| Social media causes depression. | Social media **may contribute to** depression **in some cases**. |
| This is the best solution. | This **would appear to be** the most **effective** solution. |
| Everyone agrees that… | It is **widely** accepted that… |
!trap: En español académico también atenuamos, pero los hispanohablantes tienden a escribir en inglés frases demasiado categóricas ("This proves that…", "Obviously…", "Everybody knows…"). En un examen C1/C2 de writing, el hedging mejora la nota de registro.
## 4. Otros recursos del registro formal
> Contracciones → formas completas (do not, it is). |
> Phrasal verbs → verbos latinos: find out → **discover**, look into → **investigate**, put off → **postpone**, go up → **increase**. |
> "I think" → **It could be argued / It seems / Evidence suggests**. |
`,
ex:[
{t:'mc', q:'Choose the most formal version: "They decided to cut costs, which surprised everyone."', o:['Their decision to cut costs came as a surprise to everyone.','They decided to cut costs and everyone was like, surprised.','Everyone got surprised because they decided cutting costs.','The deciding of cutting costs surprised everybody.'], a:0, e:'Nominalización: decided → decision; surprised → came as a surprise.'},
{t:'mc', q:'Which is the best "hedged" statement?', o:['This proves that diet causes cancer.','This may suggest a link between diet and cancer.','Diet definitely causes cancer.','Obviously diet causes cancer.'], a:1, e:'May + suggest + "a link" atenúan la afirmación.'},
{t:'gap', q:'Noun of "fail": the government\'s ___ to act.', a:['failure'], e:'Fail → failure.'},
{t:'gap', q:'Noun of "aware": growing public ___.', a:['awareness'], e:'Aware → awareness.'},
{t:'gap', q:'Noun of "reduce": a significant ___ in costs.', a:['reduction'], e:'Reduce → reduction.'},
{t:'gap', q:'It ___ be argued that cities are becoming less safe. (modal)', a:['could','might','can','may'], e:'It could be argued that… = estructura de hedging.'},
{t:'tr', q:'Prices increased sharply last year.', k:'INCREASE', s:'There was a ___ prices last year.', a:['sharp increase in'], e:'Nominalización + adjetivo: a sharp increase in.'},
{t:'tr', q:'The results show that the drug works.', k:'APPEAR', s:'The results ___ that the drug works.', a:['appear to show','appear to suggest','appear to indicate'], e:'Hedging: appear to.'},
{t:'mc', q:'Choose the formal equivalent of "find out":', o:['discover','get to know','figure','look up'], a:0, e:'Find out → discover / ascertain.'},
{t:'mc', q:'Choose the formal equivalent of "put off" (the meeting):', o:['cancel off','postpone','delay off','set back up'], a:1, e:'Put off → postpone.'}
]
}

);
