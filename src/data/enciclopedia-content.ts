export interface EncArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
  tag: string;
}

export interface SubtemaContent {
  slug: string;
  titulo: string;
  categoriaSlug: string;
  categoriaNombre: string;
  descripcion: string;
  heroImage: string;
  articles: EncArticle[];
}

export const enciclopediaContent: Record<string, SubtemaContent> = {
  "astronomia-y-cosmologia": {
    slug: "astronomia-y-cosmologia",
    titulo: "Astronomía y Cosmología",
    categoriaSlug: "ciencias-naturales",
    categoriaNombre: "Ciencias Naturales",
    descripcion: "Desde el Big Bang hasta los confines del universo observable: explora los misterios del cosmos, las galaxias, agujeros negros, el sistema solar y las leyes que gobiernan todo lo que existe.",
    heroImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
    articles: [
      {
        id: "enc-astro-1",
        title: "El Big Bang: los primeros 3 minutos que crearon todo",
        excerpt: "En apenas 180 segundos se formaron los elementos que componen todo lo que existe. La historia del momento más extraordinario del cosmos.",
        content: "Hace aproximadamente 13,800 millones de años, toda la materia, energía, espacio y tiempo del universo observable estaban comprimidos en un estado de densidad y temperatura infinitas, una singularidad que desafía nuestra comprensión. En el primer segundo tras el Big Bang, el universo pasó por transformaciones asombrosas: en la primera billonésima de segundo, las cuatro fuerzas fundamentales (gravedad, electromagnetismo, nuclear fuerte y nuclear débil) se separaron. La inflación cósmica expandió el universo un factor de 10 elevado a 26 en menos de una millonésima de segundo.\n\nA los 3 minutos, la temperatura descendió lo suficiente para que protones y neutrones se combinaran formando los primeros núcleos atómicos: hidrógeno (75%), helio (25%) y trazas de litio. Esta proporción, predicha por la teoría y confirmada por observación, es una de las pruebas más contundentes del Big Bang.\n\nDurante los siguientes 380,000 años, el universo era una sopa opaca de plasma. Cuando la temperatura bajó a unos 3,000 grados, los electrones se unieron a los núcleos formando los primeros átomos neutros. La luz finalmente pudo viajar libremente, creando lo que hoy detectamos como la Radiación Cósmica de Microondas (CMB), descubierta accidentalmente por Penzias y Wilson en 1965, lo que les valió el Nobel. Esta radiación es literalmente la fotografía más antigua del universo, tomada cuando tenía apenas 380,000 años de edad.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
        readTime: "8 min",
        tag: "Cosmología",
      },
      {
        id: "enc-astro-2",
        title: "Agujeros negros: donde el espacio-tiempo se rompe",
        excerpt: "Objetos tan densos que ni la luz puede escapar. Qué son, cómo se forman y por qué son la frontera última de la física.",
        content: "Un agujero negro es una región del espacio donde la gravedad es tan intensa que nada, ni siquiera la luz viajando a 300,000 km/s, puede escapar una vez que cruza su horizonte de eventos. Esta frontera invisible marca el punto de no retorno.\n\nLos agujeros negros se forman cuando una estrella masiva (al menos 25 veces la masa del Sol) agota su combustible nuclear. Sin la presión de la fusión que contrarreste la gravedad, el núcleo colapsa sobre sí mismo en fracciones de segundo. Si la masa resultante supera unas 3 masas solares (el límite de Tolman-Oppenheimer-Volkoff), nada puede detener el colapso y se forma un agujero negro.\n\nExisten tres tipos principales: los estelares (5-100 masas solares), formados por muerte de estrellas masivas; los supermasivos (millones a miles de millones de masas solares), que habitan el centro de casi todas las galaxias; y los intermedios, recientemente confirmados. En el centro de nuestra Vía Láctea reside Sagitario A*, un agujero negro supermasivo de 4 millones de masas solares.\n\nEn 2019, el Event Horizon Telescope capturó la primera imagen directa de un agujero negro: M87*, con 6,500 millones de masas solares, ubicado a 55 millones de años luz. La imagen muestra el anillo de luz brillante de materia supercalentada orbitando justo fuera del horizonte de eventos, exactamente como predijo la Relatividad General de Einstein hace más de un siglo.",
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80",
        readTime: "10 min",
        tag: "Astrofísica",
      },
      {
        id: "enc-astro-3",
        title: "El Sistema Solar: nuestro vecindario cósmico",
        excerpt: "8 planetas, 5 planetas enanos, 200+ lunas y miles de millones de asteroides y cometas orbitan nuestra estrella.",
        content: "Nuestro sistema solar se formó hace 4,600 millones de años a partir de una nube de gas y polvo que colapsó gravitacionalmente, posiblemente disparada por la onda expansiva de una supernova cercana. El 99.86% de toda la masa del sistema está en el Sol.\n\nLos cuatro planetas interiores (Mercurio, Venus, Tierra, Marte) son rocosos y relativamente pequeños. La Tierra es única por su agua líquida, atmósfera protectora y campo magnético que desvía la radiación solar. Venus, a pesar de ser nuestro vecino más cercano, tiene una temperatura superficial de 470°C debido a un efecto invernadero descontrolado, una advertencia sobre el cambio climático.\n\nLos cuatro planetas exteriores son gigantes gaseosos (Júpiter y Saturno) y gigantes de hielo (Urano y Neptuno). Júpiter es tan masivo que podría contener a todos los demás planetas juntos. Su Gran Mancha Roja es una tormenta más grande que la Tierra que lleva siglos activa. Saturno destaca por sus espectaculares anillos, compuestos por billones de fragmentos de hielo y roca.\n\nMás allá de Neptuno se extiende el Cinturón de Kuiper, hogar de Plutón y miles de objetos helados, y la Nube de Oort, una esfera de billones de cometas que marca el verdadero borde gravitacional del sistema solar, extendiéndose hasta casi 2 años luz del Sol.",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80",
        readTime: "9 min",
        tag: "Sistema Solar",
      },
      {
        id: "enc-astro-4",
        title: "Galaxias: islas de estrellas en el océano cósmico",
        excerpt: "Existen más de 2 billones de galaxias en el universo observable. Cada una contiene miles de millones de estrellas.",
        content: "Una galaxia es un sistema gravitacionalmente unido de estrellas, gas, polvo y materia oscura. Nuestra galaxia, la Vía Láctea, contiene entre 100,000 y 400,000 millones de estrellas y tiene un diámetro de unos 100,000 años luz. Nuestro Sol está ubicado a unos 26,000 años luz del centro, en un brazo espiral menor llamado Brazo de Orión.\n\nLas galaxias se clasifican según la secuencia de Hubble: espirales (como la Vía Láctea y Andrómeda), elípticas (masivas esferas de estrellas viejas), lenticulares (intermedias) e irregulares (sin forma definida, como las Nubes de Magallanes). Las galaxias espirales tienen brazos donde nacen estrellas activamente, lo que les da un tono azulado, mientras que las elípticas contienen estrellas más viejas y rojizas.\n\nLas galaxias no están distribuidas al azar: forman estructuras jerárquicas. La Vía Láctea pertenece al Grupo Local (unos 80 miembros), que a su vez forma parte del Supercúmulo de Laniakea, una estructura de 500 millones de años luz que contiene 100,000 galaxias. Entre los supercúmulos existen enormes vacíos cósmicos casi desprovistos de materia.\n\nLa galaxia más lejana confirmada, JADES-GS-z14-0, fue detectada por el telescopio James Webb a una distancia de 13,500 millones de años luz, mostrándonos el universo cuando apenas tenía 300 millones de años.",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
        readTime: "9 min",
        tag: "Galaxias",
      },
      {
        id: "enc-astro-5",
        title: "Materia oscura y energía oscura: el 95% invisible del universo",
        excerpt: "Solo conocemos el 5% del universo. El resto está compuesto por dos misterios que la ciencia aún no logra explicar.",
        content: "Uno de los descubrimientos más desconcertantes de la cosmología moderna es que la materia ordinaria (átomos, estrellas, planetas, personas) constituye apenas el 5% del contenido total del universo. El 27% es materia oscura y el 68% es energía oscura. Juntas, estas dos componentes invisibles dominan el cosmos.\n\nLa materia oscura fue propuesta por Fritz Zwicky en 1933 al notar que las galaxias en el cúmulo de Coma se movían demasiado rápido para la masa visible. Sin una masa adicional invisible, el cúmulo debería haberse desintegrado. En los años 70, Vera Rubin confirmó que las estrellas en los bordes de las galaxias espirales orbitan tan rápido como las del centro, algo imposible sin un halo masivo de materia invisible. No emite ni absorbe luz, pero su gravedad moldea la estructura a gran escala del universo.\n\nLa energía oscura es aún más misteriosa. En 1998, dos equipos independientes descubrieron que la expansión del universo se está acelerando, no desacelerando como se esperaba. Algo actúa como una fuerza antigravitacional a escala cósmica. Este descubrimiento, que ganó el Nobel de Física en 2011, implica que el destino final del universo es la expansión eterna y el enfriamiento gradual hasta la muerte térmica.\n\nA pesar de décadas de búsqueda con detectores subterráneos, aceleradores de partículas y observaciones astronómicas, la naturaleza de la materia oscura y la energía oscura sigue siendo el mayor misterio abierto de la física moderna.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
        readTime: "10 min",
        tag: "Cosmología",
      },
      {
        id: "enc-astro-6",
        title: "Exoplanetas: la búsqueda de otros mundos habitables",
        excerpt: "Desde 1995 hemos descubierto más de 5,500 planetas orbitando otras estrellas. Algunos podrían albergar vida.",
        content: "El primer exoplaneta confirmado alrededor de una estrella similar al Sol fue 51 Pegasi b, descubierto en 1995 por Michel Mayor y Didier Queloz (Nobel de Física 2019). Era un Júpiter caliente que orbitaba su estrella en solo 4 días. Desde entonces, el campo ha explotado.\n\nEl telescopio espacial Kepler, lanzado en 2009, revolucionó la búsqueda al usar el método de tránsito: detecta la minúscula disminución de brillo cuando un planeta pasa frente a su estrella. Kepler descubrió más de 2,600 exoplanetas confirmados y reveló que los planetas son extremadamente comunes: estadísticamente, cada estrella de la Vía Láctea tiene al menos un planeta.\n\nLa zona habitable es la región alrededor de una estrella donde el agua líquida podría existir en la superficie. Varios exoplanetas rocosos han sido encontrados en esta zona: Kepler-442b, TRAPPIST-1e y Proxima Centauri b (que orbita la estrella más cercana al Sol). El sistema TRAPPIST-1 es fascinante: 7 planetas rocosos del tamaño de la Tierra, 3 en la zona habitable, a solo 40 años luz.\n\nEl telescopio James Webb, lanzado en 2021, puede analizar las atmósferas de exoplanetas buscando biofirmas: moléculas como oxígeno, metano y vapor de agua cuya coexistencia podría indicar actividad biológica. La detección de vida más allá de la Tierra sería posiblemente el descubrimiento más trascendental en la historia de la ciencia.",
        image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80",
        readTime: "9 min",
        tag: "Exoplanetas",
      },
      {
        id: "enc-astro-7",
        title: "TON 618: el agujero negro más monstruoso del universo conocido",
        excerpt: "Con 66 mil millones de masas solares, TON 618 es uno de los objetos más masivos jamás descubiertos. Su tamaño desafía la imaginación.",
        content: "TON 618 no es simplemente un agujero negro grande: es un monstruo cósmico que desafía nuestra capacidad de comprensión. Ubicado a unos 10,400 millones de años luz de la Tierra en la constelación de Canes Venatici (los Perros de Caza), TON 618 alberga un agujero negro ultramasivo con una masa estimada de 66 mil millones de veces la masa del Sol. Para poner esto en perspectiva: si el agujero negro supermasivo del centro de nuestra Vía Láctea, Sagitario A* (4 millones de masas solares), fuera una pelota de tenis, TON 618 sería del tamaño de un estadio de fútbol.\n\nEl horizonte de eventos de TON 618 tiene un diámetro estimado de unos 390 mil millones de kilómetros, es decir, aproximadamente 1,300 veces la distancia de la Tierra al Sol. Si lo colocáramos en el centro de nuestro sistema solar, su horizonte de eventos engulliría las órbitas de todos los planetas, incluyendo la de Plutón y gran parte del Cinturón de Kuiper.\n\nTON 618 fue descubierto originalmente en 1957 durante un sondeo de objetos celestes, pero no fue hasta estudios posteriores que se comprendió su verdadera naturaleza. Es un cuásar hiperluminoso: la materia que cae hacia el agujero negro forma un disco de acreción que brilla con una luminosidad equivalente a 140 billones de soles. Esta luz es tan intensa que podemos detectarla a más de 10 mil millones de años luz de distancia, lo que significa que la estamos viendo como era cuando el universo tenía solo 3,400 millones de años.\n\nLo más fascinante es que TON 618 no es único. Se han descubierto otros agujeros negros ultramasivos como Phoenix A (100 mil millones de masas solares) y Holm 15A* (40 mil millones), sugiriendo que estos titanes son más comunes de lo que pensábamos. ¿Cómo crecieron tanto? Los científicos debaten entre fusiones de agujeros negros, acreción directa de gas, o incluso la posibilidad de que se formaran directamente del colapso de enormes nubes de gas en el universo temprano, sin pasar por la fase de estrella.",
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80",
        readTime: "8 min",
        tag: "Agujeros negros",
      },
    ],
  },
};
