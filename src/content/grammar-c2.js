/* Gramática C2 — proficiency */
window.GRAMMAR = window.GRAMMAR || [];
window.GRAMMAR.push(

{
id:'c2-inversion', level:'C2', title:'Advanced inversion: so, such, as and conditionals', es:'Inversión avanzada: so, such, as y condicionales',
goal:'Dominar las inversiones menos frecuentes: So + adj…that, Such was…, Nor/Neither, as did…, y combinaciones condicionales.',
theory:`
## 1. So + adjetivo / adverbio + auxiliar + sujeto + that
> The storm was **so** violent **that** trees were uprooted. → **So violent was the storm that** trees were uprooted. | Tan violenta fue la tormenta que…
> **So quickly did** she **speak that** nobody understood her. | Hablaba tan rápido que nadie la entendía.
> **So great was** his anger **that** he couldn't speak. | Tan grande era su enfado que no podía hablar.
## 2. Such + be + sustantivo + that
> His popularity was such that… → **Such was** his popularity **that** he was mobbed everywhere. | Tal era su popularidad que…
> **Such was the demand** for tickets **that** the website crashed. | Tal fue la demanda de entradas que la web se cayó.
!note: Con *such*, el verbo **be** concuerda con el sustantivo que sigue: **Such were** the circumstances that… (plural)
## 3. Nor / neither + auxiliar + sujeto (añadir una negativa)
> I don't like it, **nor do** I understand it. | No me gusta, ni lo entiendo.
> The plan wasn't cheap, **nor was it** practical. | El plan no era barato, ni tampoco práctico.
> She had never been abroad, **neither had** her parents. | Nunca había viajado al extranjero, ni sus padres tampoco.
## 4. As + auxiliar + sujeto (comparación formal)
> She was very religious, **as were** her parents. | Era muy religiosa, como lo eran sus padres.
> He supported the reform, **as did** most of his colleagues. | Apoyó la reforma, como lo hicieron la mayoría de sus colegas.
> Prices rose, **as did** unemployment. | Subieron los precios, y también el desempleo.
## 5. Otras expresiones negativas y restrictivas
| Expresión | Ejemplo |
|---|---|
| Nowhere | **Nowhere else will** you find such quality. |
| In no way | **In no way does** this affect your rights. |
| Not once | **Not once did** he thank me. |
| Not a (single) | **Not a word did** she say. |
| On no account | **On no account must** this information be shared. |
| Only if | **Only if** all members agree **can** the rule be changed. |
| No longer | **No longer is** smoking allowed in bars. |
| Not since | **Not since** the 1960s **has** the country seen such protests. |
| Barely / scarcely | **Barely had** the plane landed **when** passengers stood up. |
> **Not since** the war **had** the city suffered such devastation. | Desde la guerra la ciudad no había sufrido tal devastación.
> **Nowhere is** this **more evident than** in our schools. | En ningún sitio es esto más evidente que en nuestras escuelas.
## 6. Inversión condicional en negativa y con were to
> **Had it not been for** her quick thinking, we'd all have died. | De no haber sido por su rapidez mental…
> **Were it not for** the subsidy, the theatre would close. | Si no fuera por la subvención…
> **Were the government to** raise taxes, there would be protests. | Si el Gobierno subiera los impuestos…
> **Should** the situation **worsen**, we will evacuate. |
x> Hadn't it been for her… | Had it not been for her…
!trap: En la inversión condicional negativa, **not** NO se contrae con el auxiliar: **Had it not been** ✓ / Hadn't it been ✗ · **Were it not** ✓ / Weren't it ✗.
## 7. Inversión tras adverbios de lugar y movimiento (literario)
> **Into the room walked** a tall stranger. | En la habitación entró un desconocido alto.
> **On the hill stood** an old church. | En la colina se alzaba una vieja iglesia.
> **Here lies** John Smith. | Aquí yace John Smith.
!note: Con pronombre no se invierte: **Here it comes** / **Off they went** (no "Here comes it").
`,
ex:[
{t:'mc', q:'___ was the noise that we couldn\'t hear ourselves think.', o:['So','Such','Too','Very'], a:1, e:'Such + be + sustantivo + that.'},
{t:'mc', q:'So ___ that she won every award.', o:['her performance was impressive','impressive was her performance','was her performance impressive','impressive her performance was'], a:1, e:'So + adjetivo + be + sujeto + that.'},
{t:'mc', q:'He didn\'t apologise, ___ show any regret.', o:['nor he did','nor did he','neither he did','and nor he'], a:1, e:'Nor + auxiliar + sujeto.'},
{t:'mc', q:'She voted for the proposal, as ___ most of the board.', o:['voted','did','was','had'], a:1, e:'As + did + sujeto (comparación formal).'},
{t:'gap', q:'___ it not been for the rescue team, they would have died.', a:['had'], e:'Had it not been for = de no haber sido por.'},
{t:'gap', q:'Not since 1990 ___ the team won the championship. (auxiliar)', a:['has'], e:'Not since + inversión (present perfect).'},
{t:'fix', q:'Weren\'t it for your support, I would give up.', a:['Were it not for your support, I would give up.','If it were not for your support, I would give up.',"If it weren't for your support, I would give up."], e:'No se contrae: Were it not for…'},
{t:'tr', q:'The demand for the product was so great that the factory couldn\'t cope.', k:'SUCH', s:'___ for the product that the factory couldn\'t cope.', a:['such was the demand'], e:'Such was + sujeto + that.'},
{t:'tr', q:'If the company were to collapse, thousands would lose their jobs.', k:'WERE', s:'___ collapse, thousands would lose their jobs.', a:['were the company to'], e:'Inversión con were to.'},
{t:'tr', q:'He never thanked me once.', k:'ONCE', s:'Not ___ me.', a:['once did he thank'], e:'Not once + did + sujeto.'},
{t:'ord', w:['nowhere','else','will','you','find','such','hospitality'], a:['nowhere else will you find such hospitality'], e:'Nowhere + auxiliar + sujeto.'}
]
},

{
id:'c2-concession', level:'C2', title:'Concession and contrast at proficiency level', es:'Concesión y contraste a nivel C2',
goal:'Expresar concesiones con matices: however + adj, no matter, much as, try as I might, adj + as/though, for all, albeit, notwithstanding.',
theory:`
## 1. However / whatever / whoever / no matter
:: however + adjetivo/adverbio + sujeto + verbo
> **However hard** I try, I can't remember her name. | Por mucho que lo intento, no recuerdo su nombre.
> **However much** it costs, I'll buy it. | Cueste lo que cueste, lo compraré.
> **Whatever** you do, don't tell Mum. | Hagas lo que hagas, no se lo digas a mamá.
> **Whoever** calls, tell them I'm busy. | Llame quien llame, diles que estoy ocupado.
> **No matter what** happens, I'll be there. | Pase lo que pase, estaré allí.
> **No matter how** rich they are, they're never satisfied. | Por muy ricos que sean, nunca están satisfechos.
x> However I try hard, I fail. | However hard I try, I fail.
!trap: "Por muy + adjetivo que…" = **however + adjetivo** o **no matter how + adjetivo**. El adjetivo va pegado a however.
## 2. Adjetivo / adverbio / sustantivo + as / though + sujeto + verbo
> **Tired as** she was, she kept working. | Por cansada que estuviera, siguió trabajando.
> **Strange though** it may seem, I miss the rain. | Por extraño que parezca, echo de menos la lluvia.
> **Hard as** he tried, he couldn't open it. | Por mucho que lo intentó…
> **Child as** she was, she understood everything. | Aunque era una niña, lo entendía todo. (sustantivo sin artículo)
## 3. Much as + sujeto + verbo
> **Much as** I admire him, I can't agree with him. | Por mucho que lo admire, no puedo darle la razón.
> **Much as** I'd like to help, I simply can't. | Por mucho que me gustaría ayudar, no puedo.
## 4. Try as I might / may
> **Try as I might**, I couldn't convince her. | Por más que lo intenté, no pude convencerla.
## 5. Conectores formales de concesión
| Expresión | Uso | Ejemplo |
|---|---|---|
| albeit | aunque (+ adj/adv/frase reducida) | It was a success, **albeit** a modest one. |
| notwithstanding | a pesar de (muy formal; antes o después del sustantivo) | **Notwithstanding** the risks, they proceeded. |
| for all + sustantivo | a pesar de todo… | **For all** his money, he isn't happy. |
| be that as it may | sea como sea | **Be that as it may**, we need a decision. |
| even so / all the same / still | aun así | It's expensive. **Even so**, I'll buy it. |
| admittedly / granted | hay que reconocer que | **Admittedly**, the plan has flaws. |
| that said / having said that | dicho esto | The food was great. **That said**, it was overpriced. |
| while / whilst (inicio) | si bien | **While** I understand your point, I disagree. |
| although… still | aunque… aun así | **Although** it was late, he **still** called. |
> The project went ahead, **albeit** with some delays. | El proyecto siguió adelante, aunque con algunos retrasos.
> **For all** its faults, it's a wonderful city. | Con todos sus defectos, es una ciudad maravillosa.
> The weather was terrible. **All the same**, we enjoyed ourselves. | Aun así, lo pasamos bien.
## 6. Contraste refinado
> **Whereas** the north is industrial, the south relies on tourism. | Mientras que el norte…
> **Contrary to** popular belief, bats are not blind. | Contrariamente a la creencia popular…
> **As opposed to** last year, sales have risen. | A diferencia del año pasado…
> **Rather than** complaining, why don't you help? | En lugar de quejarte…
!tip: En un ensayo C2, varía los conectores concesivos: alterna *albeit*, *admittedly*, *that said*, *much as*, *for all*. La variedad precisa es lo que distingue C2 de C1.
`,
ex:[
{t:'mc', q:'___ hard he worked, he never earned enough.', o:['Whatever','However','No matter','Although'], a:1, e:'However + adjetivo/adverbio.'},
{t:'mc', q:'___ as it may seem, I\'ve never seen the sea.', o:['Strange','Strangely','How strange','However strange'], a:0, e:'Adjetivo + as + sujeto + verbo.'},
{t:'mc', q:'The trip was enjoyable, ___ a little tiring.', o:['despite','albeit','however','even'], a:1, e:'Albeit + adjetivo = aunque.'},
{t:'mc', q:'___ all his talent, he never became famous.', o:['Despite of','For','In spite','Although'], a:1, e:'For all + sustantivo = a pesar de.'},
{t:'gap', q:'___ as I like her, I don\'t trust her. (por mucho que)', a:['much'], e:'Much as + sujeto + verbo.'},
{t:'gap', q:'Try as I ___, I couldn\'t lift the box.', a:['might','may'], e:'Try as I might = por más que lo intenté.'},
{t:'fix', q:'However I study hard, I always forget the vocabulary.', a:['However hard I study, I always forget the vocabulary.','No matter how hard I study, I always forget the vocabulary.'], e:'However + adverbio + sujeto + verbo.'},
{t:'tr', q:'Although I admire his work, I find him arrogant.', k:'MUCH', s:'___ his work, I find him arrogant.', a:['much as i admire'], e:'Much as + sujeto + verbo.'},
{t:'tr', q:'Although she was exhausted, she finished the race.', k:'AS', s:'___, she finished the race.', a:['exhausted as she was','exhausted though she was'], e:'Adjetivo + as + sujeto + verbo.'},
{t:'tr', q:'It doesn\'t matter what you say, I won\'t change my mind.', k:'WHATEVER', s:'___, I won\'t change my mind.', a:['whatever you say'], e:'Whatever + sujeto + verbo.'}
]
},

{
id:'c2-modals', level:'C2', title:'Modal nuances: may well, might as well, would have thought', es:'Matices de los modales',
goal:'Usar modales con la precisión de un nativo: may/might well, might as well, could hardly, would have thought, dare, shall.',
theory:`
## 1. May well / might well / could well: probabilidad alta
Añadir **well** aumenta la probabilidad.
> She **may well** be right. | Es muy posible que tenga razón.
> It **could well** rain later. | Bien podría llover más tarde.
> Prices **might well** rise again next year. | Es bastante probable que los precios vuelvan a subir.
> You **may well** ask! | ¡Buena pregunta! (= es una pregunta muy razonable, a menudo irónico)
## 2. Might as well / may as well: no hay mejor opción
Sugiere que algo es lo más sensato porque no hay alternativa mejor (a menudo con resignación).
> The bus isn't coming. We **might as well** walk. | El bus no viene. Ya puestos, vamos andando.
> There's nothing on TV. I **may as well** go to bed. | Total, me voy a la cama.
> You **might as well** be talking to a wall. | Es como hablar con la pared.
## 3. Could hardly / can hardly
> I **could hardly** believe my eyes. | Apenas podía creer lo que veía.
> You **can hardly** blame him. | No puedes culparlo, la verdad.
## 4. Would have thought / I would imagine (suposición educada)
> I **would have thought** you'd be happy about it. | Pensaba que estarías contento.
> I**'d imagine** he's very busy. | Me imagino que estará muy ocupado.
> You**'d think** they'd have fixed it by now. | Cualquiera pensaría que ya lo habrían arreglado. (crítica)
## 5. Would: comportamiento típico y crítica
> He **would** say that, wouldn't he? | Él diría eso, claro. (típico de él)
> That **would** be my sister calling. | Esa será mi hermana llamando. (suposición)
> I **wouldn't** know. | Yo qué sé / No tendría forma de saberlo.
## 6. Shall (formal, legal y ofertas)
> **Shall** I open the window? / **Shall** we go? | ¿Abro la ventana? / ¿Nos vamos?
> The tenant **shall** pay the rent monthly. | El inquilino pagará el alquiler mensualmente. (lenguaje legal = obligación)
> You **shall** go to the ball! | ¡Irás al baile! (promesa enfática, literario)
## 7. Dare y need como semimodales
> How **dare** you speak to me like that! | ¡Cómo te atreves a hablarme así!
> I **daren't** tell her. / I **don't dare (to)** tell her. | No me atrevo a decírselo.
> **Need** I say more? | ¿Hace falta que diga más? (formal)
> You **needn't** come if you're busy. | No hace falta que vengas.
> **I dare say** you're right. | Me atrevería a decir que tienes razón / Supongo que sí.
## 8. Be to / be to have (órdenes y destino)
> You **are not to** leave this room. | No debes salir de esta habitación. (orden)
> What **am I to** do? | ¿Qué voy a hacer? / ¿Qué se supone que debo hacer?
> If we **are to** succeed, we need more funding. | Si queremos tener éxito… (condición necesaria)
## 9. Can / could para crítica y características
> She **can** be very rude at times. | A veces puede ser muy grosera. (rasgo ocasional)
> You **could** at least say thank you! | ¡Al menos podrías dar las gracias!
`,
ex:[
{t:'mc', q:'Nobody else is coming, so we ___ start without them.', o:['might as well','may well','could hardly','would rather'], a:0, e:'No hay mejor alternativa → might as well.'},
{t:'mc', q:'Take an umbrella. It ___ rain later — the forecast isn\'t good.', o:['might as well','could well','can hardly','dare'], a:1, e:'Probabilidad alta → could well.'},
{t:'mc', q:'I ___ believe it when I heard the news.', o:['could hardly','might as well','may well','would have'], a:0, e:'Could hardly = apenas podía.'},
{t:'mc', q:'How ___ you read my diary!', o:['need','dare','shall','would'], a:1, e:'How dare you = ¡cómo te atreves!'},
{t:'gap', q:'If we are ___ meet the deadline, we must work this weekend.', a:['to'], e:'If + be to = si queremos (condición necesaria).'},
{t:'gap', q:'I would have ___ she\'d be pleased, but she was furious. (verbo)', a:['thought'], e:'Would have thought = suposición que resultó falsa.'},
{t:'gap', q:'"Why is he so angry?" "You may ___ ask!"', a:['well'], e:'You may well ask = buena pregunta.'},
{t:'tr', q:'It is quite likely that she will get the job.', k:'WELL', s:'She ___ the job.', a:['may well get','might well get','could well get'], e:'May/might/could well = muy probable.'},
{t:'tr', q:'It\'s pointless to wait any longer, so let\'s go home.', k:'AS', s:'We ___ home.', a:['might as well go','may as well go'], e:'Might as well = ya puestos.'},
{t:'mc', q:'In a contract: "The buyer ___ pay within 30 days."', o:['will maybe','shall','might','would'], a:1, e:'Shall en lenguaje legal = obligación.'}
]
},

{
id:'c2-causatives', level:'C2', title:'Advanced verb patterns and causatives', es:'Patrones verbales avanzados y causativas',
goal:'Dominar make/let/have/get + objeto, verbos de percepción, have something happen, won\'t have, y patrones con objeto + infinitivo.',
theory:`
## 1. Causativas: hacer que alguien haga algo
| Estructura | Matiz | Ejemplo |
|---|---|---|
| make + obj + base | obligar | The teacher **made us rewrite** the essay. |
| let + obj + base | permitir | My parents **let me stay** out late. |
| have + obj + base | encargar (profesional, autoridad) | I'll **have my secretary send** you the file. |
| get + obj + to + base | convencer, conseguir | I finally **got him to apologise**. |
| have + obj + participio | algo hecho por otro | We **had the roof repaired**. |
| get + obj + participio | algo hecho por otro (informal, esfuerzo) | I need to **get this document signed**. |
| get + obj + -ing | poner algo/alguien en marcha | Can you **get the engine running**? |
| have + obj + -ing | provocar un efecto continuado | The film **had us laughing** all night. |
> She **had** the whole audience **crying**. | Hizo llorar a todo el público.
> I can't **get** this printer **to work**. | No consigo que funcione esta impresora.
x> She made me to cry. | She made me cry.
x> They let us to leave early. | They let us leave early.
!trap: **Make** y **let** van con infinitivo **sin to** en activa, pero **make** lleva **to** en pasiva: We were **made to** wait. (Let no tiene pasiva: we were **allowed to** leave.)
## 2. Won't have / can't have + obj + -ing/participio
Expresa que no toleramos algo.
> I **won't have** you **talking** to your mother like that. | No voy a consentir que le hables así a tu madre.
> I **won't have** my house **turned into** a hotel. | No permitiré que mi casa se convierta en un hotel.
## 3. Have something happen (experiencia)
> I've never **had** that **happen** before. | Nunca me había pasado algo así.
> We **had** a stranger **knock** on our door at midnight. | Un desconocido llamó a nuestra puerta a medianoche.
## 4. Verbos de percepción: completa vs en curso
> I **heard** someone **scream**. | Oí a alguien gritar (el grito completo).
> I **heard** someone **screaming**. | Oí a alguien gritando (durante un rato).
> He **was seen to leave** the building at 9. | Se le vio salir del edificio a las 9. (pasiva: **to** + base)
> She **was heard singing** in the shower. |
## 5. Verbo + objeto + infinitivo con verbos de opinión (formal)
> I **consider him to be** the best candidate. | Lo considero el mejor candidato.
> They **believed her to be** innocent. | La creían inocente.
> We **found the hotel to be** excellent. |
## 6. Verbos con preposición + -ing + objeto
> She **objected to being** treated like a child. | Se opuso a que la trataran como a una niña.
> I **resent having to** work weekends. | Me molesta tener que trabajar los fines de semana.
> He **insisted on my/me paying**. | Insistió en que yo pagara. (posesivo = más formal)
> I **don't appreciate your/you shouting** at me. | No me gusta que me grites.
## 7. Verbos que no admiten "that" + persona
x> I want that you come. | I want you to come.
x> She made that I wait. | She made me wait.
x> I would like that you help me. | I'd like you to help me.
!trap: Las estructuras españolas "que + subjuntivo" (quiero que, hizo que, dejó que, consiguió que) se traducen casi siempre con **objeto + infinitivo** (con o sin to). Domina la tabla del punto 1.
`,
ex:[
{t:'mc', q:'The comedian had the audience ___ for hours.', o:['laugh','to laugh','laughing','laughed'], a:2, e:'Have + obj + -ing = provocar un efecto continuado.'},
{t:'mc', q:'My boss made me ___ the whole report again.', o:['to write','write','writing','written'], a:1, e:'Make + obj + base sin to.'},
{t:'mc', q:'We were made ___ for over an hour.', o:['wait','to wait','waiting','waited'], a:1, e:'Make en pasiva → be made to.'},
{t:'mc', q:'I won\'t have you ___ like that in my house!', o:['behave','to behave','behaving','behaved'], a:2, e:'Won\'t have + obj + -ing = no consentir.'},
{t:'gap', q:'I finally got the kids ___ (tidy) their rooms.', a:['to tidy'], e:'Get + obj + to + infinitivo.'},
{t:'gap', q:'The suspect was seen ___ (enter) the bank.', a:['to enter','entering'], e:'Percepción en pasiva: to + base (o -ing).'},
{t:'fix', q:'My parents never let me to go to parties.', a:['My parents never let me go to parties.','My parents never allowed me to go to parties.'], e:'Let + obj + base sin to.'},
{t:'fix', q:'She would like that we arrive early.', a:['She would like us to arrive early.',"She'd like us to arrive early."], e:'Would like + obj + to.'},
{t:'tr', q:'I persuaded my brother to lend me his car.', k:'GOT', s:'I ___ his car.', a:['got my brother to lend me'], e:'Get + obj + to.'},
{t:'tr', q:'I\'ll ask my assistant to email you the details.', k:'HAVE', s:'I\'ll ___ you the details.', a:['have my assistant email'], e:'Have + obj + base.'}
]
},

{
id:'c2-nounphrases', level:'C2', title:'Complex noun phrases', es:'Sintagmas nominales complejos',
goal:'Construir sintagmas nominales densos y precisos: adjetivos compuestos, premodificación, posmodificación y aposiciones.',
theory:`
## 1. Adjetivos compuestos (compound adjectives)
Con número + sustantivo, el sustantivo va en **singular** y con guiones.
> a **five-minute** walk | un paseo de cinco minutos (no "five-minutes")
> a **ten-year-old** girl | una niña de diez años
> a **two-hour** meeting, a **30-page** report, a **three-star** hotel |
x> A two-hours flight. | A two-hour flight.
### Otros compuestos frecuentes
> a **well-known** writer, a **long-term** solution, a **time-consuming** task, a **world-famous** chef, a **high-quality** product, an **eye-opening** experience, a **far-reaching** reform, a **thought-provoking** film |
## 2. Sustantivo + sustantivo (noun modifiers)
En inglés, un sustantivo puede modificar a otro como si fuera adjetivo. El **núcleo va al final**.
> a **car** door (puerta de coche), a **tennis** ball, **customer** satisfaction, **energy** consumption |
> **government** spending **cuts** | recortes del gasto público
> a **climate change** awareness **campaign** | una campaña de concienciación sobre el cambio climático
!trap: El orden es inverso al español: "campaña de concienciación" = **awareness campaign**. Lee los grupos nominales ingleses **de derecha a izquierda**.
## 3. Orden de los adjetivos
**Opinión – tamaño – edad – forma – color – origen – material – propósito + sustantivo**
> a **lovely little old** stone cottage | una casita de piedra antigua preciosa
> a **beautiful long red** silk dress |
> an **expensive Italian leather** handbag |
x> a red big car | a big red car
## 4. Posmodificación
Información **después** del núcleo: preposiciones, relativas reducidas, infinitivos.
> The man **in the grey suit** | El hombre del traje gris
> A decision **to be taken** tomorrow | Una decisión que se tomará mañana
> The first person **to arrive** | La primera persona en llegar
> Students **wishing to apply** should register online. | Los alumnos que deseen presentarse… (= who wish)
> The issues **raised at the meeting** | Los temas planteados en la reunión (= which were raised)
## 5. Aposición
Un sintagma que identifica o describe otro, normalmente entre comas.
> Marie Curie, **the first woman to win a Nobel Prize**, was born in Warsaw. |
> My neighbour, **a retired surgeon**, helped us. |
> **A keen photographer**, she travels with three cameras. | (aposición al inicio, muy elegante)
## 6. Sustantivos con of, genitivo 's y compuestos
| Forma | Uso | Ejemplo |
|---|---|---|
| 's | personas, animales, organizaciones, tiempo | the company**'s** profits, **today's** news, a **week's** holiday |
| of | cosas, ideas, nombres largos | the end **of** the film, the cost **of** living |
| noun + noun | tipo, clase | a **film** director, a **coffee** cup |
> a cup **of** coffee (con café) vs a **coffee** cup (taza para café) |
> **two weeks'** notice | un preaviso de dos semanas
!tip: Practica "comprimir" frases: "a report that was written by three experts and that has 200 pages" → **a 200-page report written by three experts**.
`,
ex:[
{t:'mc', q:'It\'s only a ___ drive from here.', o:['ten-minutes','ten-minute','ten minutes','ten-minute\'s'], a:1, e:'Compuesto con número: sustantivo en singular.'},
{t:'mc', q:'She bought a ___ sofa.', o:['leather beautiful brown','brown beautiful leather','beautiful brown leather','leather brown beautiful'], a:2, e:'Opinión – color – material.'},
{t:'mc', q:'"Campaña de concienciación" =', o:['awareness campaign','campaign awareness','campaign of awareness','aware campaign'], a:0, e:'Noun + noun: el núcleo va al final.'},
{t:'gap', q:'She was the first woman ___ (climb) the mountain.', a:['to climb'], e:'The first + to infinitivo.'},
{t:'gap', q:'I need to give my employer two ___ notice. (apóstrofo)', a:["weeks'"], e:'Genitivo de tiempo en plural: weeks\'.'},
{t:'fix', q:'We stayed in a five-stars hotel.', a:['We stayed in a five-star hotel.'], e:'Compuesto: five-star (singular).'},
{t:'fix', q:'He drives a red big car.', a:['He drives a big red car.'], e:'Tamaño antes que color.'},
{t:'tr', q:'The report has 50 pages and contains important data.', k:'PAGE', s:'The ___ important data.', a:['50-page report contains','fifty-page report contains'], e:'Compuesto: 50-page report.'},
{t:'tr', q:'Anyone who wishes to attend must register.', k:'WISHING', s:'Anyone ___ must register.', a:['wishing to attend'], e:'Relativa reducida con -ing.'},
{t:'mc', q:'Which is a cup made for coffee (maybe empty)?', o:['a cup of coffee','a coffee cup','a coffee\'s cup','a cup for the coffee of'], a:1, e:'Noun + noun indica tipo/función.'}
]
},

{
id:'c2-comparison', level:'C2', title:'Advanced comparison', es:'Comparación avanzada',
goal:'Comparar con precisión y matiz: the more… the more, all the more, none the wiser, nothing like, twice as, by far, no less than.',
theory:`
## 1. The + comparativo…, the + comparativo
> **The more** I read, **the less** I understand. | Cuanto más leo, menos entiendo.
> **The sooner, the better.** | Cuanto antes, mejor.
> **The older** she gets, **the wiser** she becomes. |
> **The more money** you earn, **the more** you spend. | (con sustantivo: the more + sustantivo)
## 2. All the + comparativo / none the + comparativo
> His apology made me **all the more** angry. | Su disculpa me enfadó aún más.
> Knowing the risks makes her achievement **all the more** impressive. | …tanto más impresionante.
> I read the instructions, but I'm **none the wiser**. | Leí las instrucciones, pero sigo igual (sin entender).
> He's had surgery but he's **none the worse for** it. | Lo han operado, pero está perfectamente.
## 3. Modificadores de comparativos y as… as
| Expresión | Significado | Ejemplo |
|---|---|---|
| nothing like as / nowhere near as | ni de lejos tan | It's **nothing like as** hard as I thought. |
| not nearly as | ni mucho menos tan | He's **not nearly as** clever as he thinks. |
| just as / every bit as | igual de, tan… como | She's **every bit as** talented as her sister. |
| twice / three times as… as | el doble / el triple de | Rents are **twice as** high **as** in my city. |
| half as… as | la mitad de | It's **half as** expensive. |
| considerably / significantly / marginally + comparativo | considerablemente / ligeramente | Sales were **marginally** higher. |
| by far / easily + superlativo | con diferencia | It's **by far** the best option. |
| no + comparativo + than | no más… que (= tan… como) | He's **no taller than** me. |
| no less than / no more than | nada menos que / no más de | **No less than** 5,000 people came. |
> This flat is **three times the size of** mine. | Este piso es tres veces más grande que el mío.
> The new model is **considerably more efficient than** the old one. |
## 4. Comparar con verbos y cláusulas
> It was **more expensive than I'd expected**. | Era más caro de lo que esperaba.
> She's **less interested in money than she used to be**. |
> He **would rather** die **than** apologise. | Antes moriría que disculparse.
> I **prefer** walking **to** driving. | Prefiero andar a conducir.
x> I prefer walking than driving. | I prefer walking to driving.
## 5. Superlativos avanzados
> It's **the second largest** city in the country. | La segunda ciudad más grande.
> She's **by far the most** experienced. |
> **The least** I can do is pay for dinner. | Lo mínimo que puedo hacer es pagar la cena.
> **At (the) best**, the plan is risky; **at worst**, it's a disaster. | En el mejor de los casos… en el peor…
> I'm **not in the least** worried. | No estoy preocupado en absoluto.
## 6. Comparaciones idiomáticas (similes)
> **as light as a feather**, **as good as gold** (muy bueno, niño), **as clear as mud** (nada claro, irónico), **as fit as a fiddle** (en plena forma), **as old as the hills** |
!trap: "Más… de lo que" = **than** + cláusula: more difficult **than I thought** (no "of what I thought").
x> It was more difficult of what I thought. | It was more difficult than I thought.
`,
ex:[
{t:'mc', q:'___ you practise, the more fluent you\'ll become.', o:['More','The more','Most','The most'], a:1, e:'The more…, the more…'},
{t:'mc', q:'The exam was ___ as difficult as I had feared — it was quite easy.', o:['nothing like','every bit','just','twice'], a:0, e:'Nothing like as = ni de lejos tan.'},
{t:'mc', q:'I prefer reading ___ watching TV.', o:['than','to','that','from'], a:1, e:'Prefer + -ing + to + -ing.'},
{t:'gap', q:'He explained it twice, but I\'m still none the ___. (no entiendo más)', a:['wiser'], e:'None the wiser = sigo sin entender.'},
{t:'gap', q:'Her calm made the situation all the ___ frightening. (más)', a:['more'], e:'All the more = aún más.'},
{t:'fix', q:'The film was more boring of what I expected.', a:['The film was more boring than I expected.','The film was more boring than I had expected.'], e:'Más… de lo que = than.'},
{t:'tr', q:'My house is half the size of hers.', k:'TWICE', s:'Her house is ___ mine.', a:['twice as big as','twice as large as','twice the size of'], e:'Twice as… as / twice the size of.'},
{t:'tr', q:'Peter is just as intelligent as his sister.', k:'BIT', s:'Peter is ___ as his sister.', a:['every bit as intelligent'], e:'Every bit as = igual de.'},
{t:'tr', q:'As you get older, you worry less.', k:'THE', s:'___ you get, ___ you worry. (escribe: the older / the less)', a:['the older / the less','the older the less'], e:'The + comparativo…, the + comparativo.'},
{t:'mc', q:'Prices have risen ___ — about 0.5%.', o:['marginally','by far','considerably','twice'], a:0, e:'Marginally = ligeramente.'}
]
},

{
id:'c2-register', level:'C2', title:'Register: formal vs informal grammar', es:'Registro: gramática formal vs informal',
goal:'Ajustar la gramática al contexto: whom, preposiciones al final, contracciones, "one", pasiva, vocabulario latino vs phrasal verbs.',
theory:`
## 1. El registro es parte de la gramática en C2
En C2 no basta con que una frase sea correcta: debe ser **apropiada** para el contexto. La misma idea se expresa con estructuras distintas en un email a un amigo, un informe o un discurso.
## 2. Tabla de contrastes
| Rasgo | Informal | Formal |
|---|---|---|
| Contracciones | I'm, don't, it's | I am, do not, it is |
| Pronombre relativo objeto | the man **who** I saw | the man **whom** I saw |
| Preposición | Who did you speak **to**? | **To whom** did you speak? |
| Verbos | find out, get, put off, go up | discover, obtain, postpone, increase |
| Sujeto genérico | **you** never know | **one** never knows |
| Voz | We'll fix it. | It **will be rectified**. |
| Conectores | but, so, also | however, therefore, furthermore |
| Elipsis | Sounds good. Got it. | That sounds good. I have understood. |
| Peticiones | Can you send me…? | I would be grateful if you could send me… |
| Pronombres vagos | stuff, things, a lot of | matters, issues, a considerable amount of |
## 3. Ejemplos paralelos
> Informal: **Sorry** I **couldn't** make it to the meeting. | Perdona que no pudiera ir a la reunión.
> Formal: **Please accept my apologies for** my **absence** from the meeting. | Le ruego disculpe mi ausencia.
> Informal: We **need to sort out** this **problem asap**. |
> Formal: This **issue** must **be resolved** as a matter of **urgency**. |
> Informal: **Thanks for** getting back to me **so fast**. |
> Formal: **Thank you for your prompt reply.** |
## 4. Estructuras propias del registro formal
> **Should you require** further assistance, do not hesitate to contact me. | (inversión condicional)
> **It has come to our attention that**… | Hemos tenido conocimiento de que…
> **We regret to inform you that**… |
> **I am writing with regard to / in reference to**… | Le escribo en relación con…
> **I would appreciate it if** you **could**… |
> **Further to** our conversation… | En relación con nuestra conversación…
## 5. Estructuras propias del registro informal
> **Gonna / wanna / gotta** (solo hablado o chat muy informal) |
> **Like**, **you know**, **kind of**, **sort of** (relleno y atenuación) |
> **Reckon** = think: I **reckon** she'll come. |
> Preguntas coletilla: It's cold, **isn't it**? / You couldn't help me, **could you**? |
> Sujeto omitido: (Have you) **Got** a minute? (Are you) **Coming**? |
## 6. "Who" vs "whom" hoy
!note: *Whom* es necesario después de preposición en registro formal ("to whom", "with whom"). En otros casos, *who* es perfectamente aceptable incluso en textos semiformales. Un *whom* mal usado (como sujeto) es peor que no usarlo: "the man **whom** is coming" ✗.
## 7. Neutralidad de género
> **They** como singular genérico: If a student needs help, **they** should ask. | (estándar actual)
> **Chair/chairperson**, **firefighter**, **police officer**, **flight attendant**, **humankind** |
!trap: Un error muy típico en exámenes C1/C2 es **mezclar registros**: empezar un email formal con "Dear Sir or Madam" y terminar con "See ya!", o usar "gonna" en un ensayo. Mantén la coherencia de principio a fin.
!tip: Antes de escribir, decide: ¿quién lee? ¿qué relación tengo con esa persona? ¿qué efecto quiero conseguir? Luego elige gramática y vocabulario coherentes.
`,
ex:[
{t:'mc', q:'Most formal: "Who did you give the keys to?"', o:['Who you gave the keys to?','To whom did you give the keys?','Whom did you give the keys?','Who did you give to the keys?'], a:1, e:'Formal: preposición + whom al principio.'},
{t:'mc', q:'Formal equivalent of "We need to sort out the problem":', o:['The problem needs sorting.','The issue must be resolved.','We gotta fix it.','We must sort the problem out.'], a:1, e:'Pasiva + vocabulario latino (resolve, issue).'},
{t:'mc', q:'Formal equivalent of "Can you send me the report?"', o:['Send me the report.','I would be grateful if you could send me the report.','Can u send the report?','Give me the report, OK?'], a:1, e:'I would be grateful if you could…'},
{t:'gap', q:'Formal: ___ you require any further information, please contact us. (inversión)', a:['should'], e:'Should you require…'},
{t:'gap', q:'Formal verb for "put off" a meeting: ___', a:['postpone','defer'], e:'Put off → postpone / defer.'},
{t:'gap', q:'Formal verb for "get" (a permit): ___', a:['obtain','acquire'], e:'Get → obtain.'},
{t:'fix', q:'Dear Sir, I\'m writing to ask about the job. Thanks a lot and see ya!', a:['Dear Sir, I am writing to enquire about the position. Thank you in advance. Yours faithfully,','Dear Sir, I am writing to enquire about the job. Thank you for your time. Yours faithfully,'], e:'Registro coherente: sin contracciones, cierre formal (Yours faithfully). Si tu versión es formal y coherente, márcala como correcta.'},
{t:'mc', q:'Which sentence mixes registers inappropriately?', o:['I would appreciate your prompt reply.','We regret to inform you that the event is cancelled, so, like, sorry!','Further to our conversation, please find attached the contract.','Should you have any queries, do not hesitate to contact me.'], a:1, e:'"like, sorry!" es informal dentro de una frase formal.'},
{t:'mc', q:'Choose the correct use:', o:['The candidate whom will be hired…','The candidate who we interviewed…','The candidate to who I spoke…','The candidate whom is ready…'], a:1, e:'Who como objeto es aceptable; whom nunca como sujeto; tras preposición → whom.'},
{t:'tr', q:'We are sorry that we can\'t help you.', k:'REGRET', s:'We ___ we are unable to help you.', a:['regret to inform you that','regret that'], e:'Formal: We regret that / We regret to inform you that.'}
]
},

{
id:'c2-discourse', level:'C2', title:'Discourse markers and cohesion', es:'Marcadores del discurso y cohesión',
goal:'Organizar ideas y matizar actitudes con marcadores sofisticados: admittedly, mind you, as it were, so to speak, by the same token, in effect.',
theory:`
## 1. Cohesión: referencia y sustitución
Un texto C2 evita la repetición y conecta ideas con **referencias** claras.
> The government announced new taxes. **This decision** provoked protests. | (this + sustantivo resumen)
> Several solutions were proposed. **The former** was cheap; **the latter**, effective. | La primera… la segunda…
> **Such measures** are unlikely to work. | Medidas de ese tipo…
> **The above-mentioned / aforementioned** issues… | (muy formal)
!tip: Usa **sustantivos resumen** (this problem, this approach, this trend, these concerns) en lugar de un "this" o "it" ambiguo al inicio de frase.
## 2. Marcadores de actitud y matiz
| Marcador | Función | Ejemplo |
|---|---|---|
| admittedly | conceder | **Admittedly**, the plan is expensive. |
| granted | conceder | **Granted**, he's talented, but he's lazy. |
| mind you | añadir una matización (informal) | It was cheap. **Mind you**, it broke after a week. |
| that said / having said that | contrapeso | It's a great city. **That said**, it's pricey. |
| as it were | "por así decirlo" (expresión figurada) | He's the king of the office, **as it were**. |
| so to speak | por así decirlo | We're all in the same boat, **so to speak**. |
| to put it mildly | por decirlo suavemente | The meeting was tense, **to put it mildly**. |
| needless to say | ni que decir tiene | **Needless to say**, he was furious. |
| incidentally / by the way | por cierto | **Incidentally**, did you get my email? |
| frankly / to be honest | francamente | **Frankly**, I don't care. |
| in effect | en la práctica | The new rule is, **in effect**, a tax increase. |
| by the same token | del mismo modo, por la misma razón | **By the same token**, we should protect workers. |
| on the face of it | a primera vista | **On the face of it**, the offer looks generous. |
| to all intents and purposes | a todos los efectos | It's, **to all intents and purposes**, finished. |
| if anything | en todo caso, si acaso | It's not worse; **if anything**, it's better. |
| at any rate | en cualquier caso | I'm not sure he'll come. **At any rate**, I'll call him. |
## 3. Organizar un argumento
| Función | Marcadores |
|---|---|
| Introducir | To begin with · First and foremost · It is often argued that |
| Añadir | Furthermore · Moreover · Not only that, but · On top of that |
| Ejemplificar | For instance · A case in point is · To illustrate |
| Contrastar | Conversely · On the other hand · By contrast · Then again |
| Reformular | In other words · That is to say · To put it another way · Namely |
| Generalizar | On the whole · By and large · As a rule · For the most part |
| Concluir | All things considered · In the final analysis · On balance · Ultimately |
> **A case in point is** Finland, whose education system… | Un buen ejemplo es Finlandia…
> **On balance**, the advantages outweigh the drawbacks. | En conjunto, las ventajas superan a los inconvenientes.
> **By and large**, the public supports the measure. | En general…
!trap: "On the other hand" exige normalmente un "on the one hand" implícito o explícito y se usa para **contrastar dos aspectos del mismo tema**, no como "sin embargo" para cualquier contradicción. Para una simple contradicción, usa **however** o **by contrast**.
!trap: "Actually" NO significa "actualmente" (= currently, nowadays): significa "en realidad / de hecho". "Eventually" NO es "eventualmente" (= possibly), sino "finalmente, con el tiempo".
## 4. Marcadores conversacionales avanzados
> **Come to think of it**, I did see him yesterday. | Ahora que lo pienso…
> **As I was saying**, … | Como iba diciendo…
> **Speaking of which**, … | Hablando de eso…
> **Be that as it may**, … | Sea como sea…
> **For what it's worth**, I think you did the right thing. | Por si sirve de algo…
> **All the same**, I'd rather not. | Aun así, prefiero no hacerlo.
`,
ex:[
{t:'mc', q:'The hotel was beautiful. ___, it was miles from the beach.', o:['Mind you','Needless to say','In other words','By the same token'], a:0, e:'Mind you = añadir una matización (informal).'},
{t:'mc', q:'The new regulation is, ___, a ban on small businesses.', o:['in effect','if anything','incidentally','granted'], a:0, e:'In effect = en la práctica.'},
{t:'mc', q:'The economy hasn\'t got worse; ___, it has improved slightly.', o:['if anything','that said','as it were','admittedly'], a:0, e:'If anything = en todo caso.'},
{t:'mc', q:'"Actually" means:', o:['currently','in fact','nowadays','at the moment'], a:1, e:'Falso amigo: actually = en realidad.'},
{t:'gap', q:'___ to say, the boss was not amused. (ni que decir tiene)', a:['needless'], e:'Needless to say.'},
{t:'gap', q:'The debate was heated, to put it ___. (suavemente)', a:['mildly'], e:'To put it mildly.'},
{t:'gap', q:'On ___, I think the benefits outweigh the costs. (en conjunto)', a:['balance'], e:'On balance = en conjunto.'},
{t:'mc', q:'Two options were offered: a loan and a grant. The ___ had to be repaid; the ___ did not.', o:['former / latter','latter / former','first / second one','one / other one'], a:0, e:'The former (el primero mencionado) / the latter (el segundo).'},
{t:'mc', q:'Many cities have improved public transport. ___ is Madrid, where…', o:['A case in point','In effect','Mind you','So to speak'], a:0, e:'A case in point = un buen ejemplo.'},
{t:'fix', q:'Actually, I am living in Madrid, but next year I will move. (= actualmente)', a:['Currently, I am living in Madrid, but next year I will move.','At the moment, I am living in Madrid, but next year I will move.',"Currently, I'm living in Madrid, but next year I'll move."], e:'"Actualmente" = currently / at the moment, no actually.'}
]
},

{
id:'c2-tricky', level:'C2', title:'Tricky areas: articles, quantifiers and dummy subjects', es:'Zonas difíciles: artículos, cuantificadores y sujetos vacíos',
goal:'Pulir los detalles que delatan a un hablante no nativo: artículos con abstractos y genéricos, each/every, either/neither, it/there.',
theory:`
## 1. Artículos: el nivel fino
### Genérico con the + singular (especies, inventos, instrumentos)
> **The tiger** is an endangered species. | El tigre es una especie en peligro.
> Who invented **the telephone**? | ¿Quién inventó el teléfono?
> She plays **the violin**. | Toca el violín.
### Abstractos: sin artículo en general, con artículo si se especifican
> **Society** has changed. vs **The society** we live in is unequal. |
> **Nature** is beautiful. / **History** repeats itself. / **The history of** Spain. |
### Nombres de instituciones y "a/an" con adjetivos que clasifican
> She has **a** remarkable **knowledge** of art. | (incontable modificado → a veces a/an)
> We had **a** wonderful **time**. / It's **a** pity. / **a** great deal of / **a** shame |
> **The** rich, **the** poor, **the** elderly, **the** unemployed | (adjetivo como grupo social, plural)
### Expresiones fijas
> at **the** moment, in **the** end, on **the** whole, by **the** way, **in** hospital (BrE), at **the** cinema, **on** TV, **on the** radio, go **to** sea, **in** prison |
!trap: El español usa artículo con generalizaciones ("Los españoles cenan tarde", "La educación es importante"). El inglés no: **Spaniards** have dinner late. **Education** is important.
## 2. Each / every / all
| each | every | all |
|---|---|---|
| individual, uno por uno (2+) | todos como grupo (3+) | todos (plural/incontable) |
| each + singular | every + singular | all + plural |
| each of the + plural | every one of the + plural | all (of) the + plural |
> **Each** student has **their** own laptop. | Cada alumno tiene su portátil.
> **Every** room in the hotel has a view. |
> **Each of** my parents gave me a present. | (solo 2 → each, no every)
> I've read **every** book / **all the** books in the series. |
x> Every of the students passed. | Every one of the students passed. / Each of the students passed.
## 3. Either / neither / both / none
> **Either** day is fine. | Cualquiera de los dos días me va bien.
> **Neither** answer **is** correct. | Ninguna de las dos respuestas es correcta. (singular)
> **Neither of** them **is/are** coming. | (formal: is; informal: are)
> **Both** options are good. / **Both of** them… |
> **None of** the five candidates **was/were** suitable. | Ninguno de los cinco… (3+ → none)
x> Both of them didn't come. | Neither of them came.
## 4. Sujetos vacíos: it y there
El inglés **siempre necesita sujeto**. El español lo omite ("Llueve", "Hay", "Es importante").
| Uso | Ejemplo |
|---|---|
| Tiempo, hora, distancia | **It**'s raining. **It**'s 5 o'clock. **It**'s 10 km to the coast. |
| Sujeto anticipado | **It**'s important **to sleep** well. **It** surprised me **that** she left. |
| Existencia | **There** is a problem. **There** seems to be a mistake. |
| Objeto anticipado | I find **it** hard **to concentrate**. I'd appreciate **it if** you called. |
> **It** is said that… / **It** remains to be seen whether… | Está por ver si…
> **There's no point (in)** arguing. | No tiene sentido discutir.
> **It's no use** crying over spilt milk. | No sirve de nada…
x> Is important to rest. | It is important to rest.
x> I find difficult to concentrate. | I find it difficult to concentrate.
x> In my city is a big park. | In my city there is a big park.
!trap: "Me parece difícil + infinitivo", "Me encanta cuando…", "Te agradecería que…" necesitan **it** como objeto: I find **it** difficult to…, I love **it** when…, I'd appreciate **it** if…
## 5. Concordancia sujeto-verbo complicada
> **The number of** students **has** increased. vs **A number of** students **have** complained. |
> **Everyone / Everybody** **has** arrived. (singular) |
> **The police are** investigating. (plural) · **The news is** good. (singular) |
> **Mathematics / Physics / Economics** **is** difficult. (singular) |
> **Ten kilometres is** a long way. (cantidad como unidad → singular) |
> **The team is/are** playing well. (BrE admite plural para colectivos) |
`,
ex:[
{t:'mc', q:'___ is a fascinating subject.', o:['The history','History','A history','Histories'], a:1, e:'Abstracto en general → sin artículo.'},
{t:'mc', q:'___ of my two brothers lives in Canada.', o:['Every','Each','All','Both'], a:1, e:'Dos elementos, individualmente → each.'},
{t:'mc', q:'The number of tourists ___ risen dramatically.', o:['have','has','are','were'], a:1, e:'The number of → singular.'},
{t:'mc', q:'___ seems to be a misunderstanding.', o:['It','There','This','Here'], a:1, e:'Existencia → there seems to be.'},
{t:'gap', q:'I find ___ hard to believe that he\'s 60. (pronombre)', a:['it'], e:'Find + it + adj + to.'},
{t:'gap', q:'I\'d appreciate ___ if you could reply soon.', a:['it'], e:'I\'d appreciate it if…'},
{t:'fix', q:'Is very important to drink water.', a:['It is very important to drink water.',"It's very important to drink water."], e:'El inglés necesita sujeto: It is…'},
{t:'fix', q:'Both of them didn\'t pass the exam.', a:['Neither of them passed the exam.'], e:'Negación de ambos → neither.'},
{t:'fix', q:'The Spanish people have dinner very late.', a:['Spanish people have dinner very late.','The Spanish have dinner very late.','Spaniards have dinner very late.'], e:'Generalización → sin artículo (o "the Spanish").'},
{t:'mc', q:'She plays ___ cello beautifully.', o:['—','a','the','one'], a:2, e:'Instrumentos musicales → the.'}
]
}

);
