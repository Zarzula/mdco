export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  country: string;
  countryFlag: string;
  image: string;
  readTime: string;
  category: string;
}

export interface Debate {
  id: string;
  type: "VS" | "Opinion" | "Ranking" | "Mitos" | "Recomendacion";
  title: string;
  description: string;
  optionA?: string;
  optionB?: string;
  votesA?: number;
  votesB?: number;
  responses: number;
  author: string;
  date: string;
}

export interface Encuesta {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
  totalVotes: number;
  author: string;
  date: string;
}

export interface PlacerContent {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  curiosity: string;
  articles: Article[];
  debates: Debate[];
  encuestas: Encuesta[];
  gallery: { src: string; caption: string; author: string }[];
}

export const placeresContent: Record<string, PlacerContent> = {
  campanas: {
    slug: "campanas",
    title: "Campanas del Mundo",
    subtitle: "Historia, acústica, fundición y campanas famosas de cada rincón del planeta",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    intro: "Las campanas han acompañado a la humanidad durante milenios. Desde los templos budistas de Asia hasta las catedrales europeas, su sonido ha marcado el ritmo de la vida cotidiana, convocado a comunidades y anunciado momentos trascendentales. En este Placer exploraremos su fascinante mundo: la metalurgia detrás de su fundición, la física de su sonido, y las historias que cada campana guarda.",
    curiosity: "La campana más grande del mundo que aún funciona es la Campana del Zar en Moscú, aunque nunca ha sido colgada. Pesa 216 toneladas y tiene una grieta de 11 toneladas.",
    articles: [
      {
        id: "camp-1",
        title: "La Campana de la Libertad: el sonido de la independencia americana",
        excerpt: "Ubicada en Filadelfia, esta campana de 943 kg es uno de los símbolos más reconocidos de Estados Unidos. Su famosa grieta la hace única.",
        content: "La Campana de la Libertad fue encargada en 1751 para el edificio del Parlamento de Pensilvania. Fundida originalmente en Londres por la empresa Lester and Pack, la campana se agrietó durante su primera prueba de sonido en América. Fue refundida dos veces por los artesanos locales John Pass y John Stow. Su inscripción bíblica dice: \"Proclamad la libertad por toda la tierra a todos sus habitantes\". La campana dejó de usarse alrededor de 1846 cuando su grieta se extendió demasiado. Hoy es visitada por millones de personas cada año en el Liberty Bell Center.",
        country: "Estados Unidos",
        countryFlag: "🇺🇸",
        image: "https://images.unsplash.com/photo-1569025690315-48a184e0f186?w=600&q=80",
        readTime: "4 min",
        category: "Historia",
      },
      {
        id: "camp-2",
        title: "Big Ben: la voz de Londres que marca el tiempo del mundo",
        excerpt: "El nombre Big Ben en realidad se refiere a la campana, no a la torre. Pesa 13.7 toneladas y su nota es un Mi natural.",
        content: "Big Ben es la campana principal del reloj situado en la Torre Isabel del Palacio de Westminster. Fue fundida en 1858 por la Whitechapel Bell Foundry. La campana pesa 13.7 toneladas y produce la nota Mi natural. Su nombre posiblemente honra a Sir Benjamin Hall, comisionado de obras durante su instalación. El sonido de Big Ben se transmite en vivo por la BBC desde 1924, convirtiéndola en una de las campanas más escuchadas del mundo. En 2017 fue silenciada por restauración y regresó a sonar regularmente en 2022.",
        country: "Reino Unido",
        countryFlag: "🇬🇧",
        image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80",
        readTime: "5 min",
        category: "Historia",
      },
      {
        id: "camp-3",
        title: "Las campanas de las catedrales españolas: un patrimonio sonoro único",
        excerpt: "España posee una de las tradiciones campaneras más ricas de Europa, con toques que son Patrimonio Cultural Inmaterial.",
        content: "La tradición campanera española se remonta al siglo VI. Las catedrales de Toledo, Sevilla y Santiago de Compostela albergan algunas de las campanas más antiguas y valiosas del continente. En 2022, los toques manuales de campana fueron declarados Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO. La Giralda de Sevilla cuenta con 24 campanas, la más antigua del siglo XVI. Los campaneros españoles desarrollaron un lenguaje único de toques: el toque de difuntos, el toque de fiesta, el toque de fuego, cada uno con un ritmo y patrón específico que la comunidad reconocía sin necesidad de palabras.",
        country: "España",
        countryFlag: "🇪🇸",
        image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80",
        readTime: "6 min",
        category: "Patrimonio",
      },
      {
        id: "camp-4",
        title: "Campanas de templos budistas en Japón: el sonido de la iluminación",
        excerpt: "En Japón, las campanas de los templos (bonshō) se tocan 108 veces en Año Nuevo para purificar los 108 deseos mundanos.",
        content: "Las campanas budistas japonesas, llamadas bonshō, tienen una forma y sonido distintivos. A diferencia de las campanas occidentales que usan un badajo interno, las bonshō se golpean desde el exterior con un tronco de madera llamado shumoku. La tradición del joya no kane consiste en tocar la campana 108 veces a la medianoche del 31 de diciembre, una vez por cada deseo mundano que causa sufrimiento según el budismo. La campana más famosa es la del templo Chion-in en Kioto, que pesa 74 toneladas y requiere 17 monjes para hacerla sonar. Su sonido profundo y reverberante puede escucharse a varios kilómetros de distancia.",
        country: "Japón",
        countryFlag: "🇯🇵",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
        readTime: "5 min",
        category: "Cultura",
      },
      {
        id: "camp-5",
        title: "La fundición artesanal: cómo se crea una campana desde cero",
        excerpt: "El proceso de fundición de campanas no ha cambiado esencialmente en 5,000 años. Es una mezcla de ciencia, arte y tradición.",
        content: "La fundición de campanas es uno de los oficios más antiguos de la humanidad. La aleación tradicional es el bronce campanero: 78% cobre y 22% estaño. El proceso comienza con un molde de arcilla en tres capas: el núcleo interno, la campana falsa (que define la forma) y la capa exterior. Tras secar, se retira la campana falsa y se vierte el bronce fundido a unos 1,100°C. El enfriamiento debe ser lento y controlado para lograr el tono deseado. La nota de una campana depende de su grosor, diámetro y perfil. Un maestro fundidor puede predecir la nota antes de fundir basándose en las proporciones geométricas, un conocimiento que se transmite de generación en generación.",
        country: "Internacional",
        countryFlag: "🌍",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        readTime: "7 min",
        category: "Artesanía",
      },
    ],
    debates: [
      { id: "d-camp-1", type: "VS", title: "Big Ben vs Liberty Bell: ¿cuál es más icónica?", description: "Dos campanas que representan a sus naciones. ¿Cuál tiene más significado histórico?", optionA: "Big Ben", optionB: "Liberty Bell", votesA: 67, votesB: 45, responses: 23, author: "CampaneroMDCO", date: "2026-03-15" },
      { id: "d-camp-2", type: "Opinion", title: "¿Cuál es la campana más bella que has escuchado?", description: "Comparte tu experiencia personal con el sonido de una campana que te haya emocionado.", responses: 18, author: "SonidoSagrado", date: "2026-03-10" },
      { id: "d-camp-3", type: "Mitos", title: "¿Es verdad que las campanas se afinan con la forma y no con el material?", description: "Muchos creen que el bronce es lo que da el sonido, pero el perfil geométrico es lo que realmente determina la nota.", responses: 12, author: "FundidorClasico", date: "2026-03-05" },
      { id: "d-camp-4", type: "Recomendacion", title: "Mejores lugares para escuchar carillones en Europa", description: "Busco recomendaciones de ciudades europeas donde se puedan escuchar carillones en vivo.", responses: 9, author: "ViajeroSonoro", date: "2026-02-28" },
    ],
    encuestas: [
      { id: "e-camp-1", question: "¿Qué aspecto de las campanas te fascina más?", options: [{ text: "Su historia y simbolismo", votes: 45 }, { text: "La acústica y el sonido", votes: 32 }, { text: "El arte de la fundición", votes: 28 }, { text: "Las tradiciones culturales", votes: 38 }], totalVotes: 143, author: "MDCO", date: "2026-03-01" },
      { id: "e-camp-2", question: "¿Cuál región tiene las campanas más interesantes?", options: [{ text: "Europa (catedrales)", votes: 52 }, { text: "Asia (templos budistas)", votes: 41 }, { text: "América (históricas)", votes: 18 }, { text: "Medio Oriente", votes: 12 }], totalVotes: 123, author: "MDCO", date: "2026-02-15" },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&q=80", caption: "Big Ben, Londres", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80", caption: "Templo en Kioto, Japón", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80", caption: "Catedral en España", author: "Comunidad MDCO" },
    ],
  },

  vino: {
    slug: "vino",
    title: "El Mundo del Vino",
    subtitle: "Cepas, regiones vinícolas, cata y maridaje: un viaje sensorial por la vid",
    heroImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80",
    intro: "El vino es mucho más que una bebida: es historia, geografía, química y arte en una copa. Desde los viñedos de Burdeos hasta los valles de Mendoza, cada botella cuenta la historia de su tierra, su clima y las manos que la crearon. En este Placer descubrirás el fascinante universo de la enología, desde los fundamentos de la cata hasta los secretos de las grandes regiones vinícolas del mundo.",
    curiosity: "La botella de vino más antigua que se conserva data del año 325 d.C. y fue encontrada en una tumba romana cerca de Speyer, Alemania. Aún contiene líquido, aunque los expertos no recomiendan beberla.",
    articles: [
      {
        id: "vino-1",
        title: "Guía de cata: aprende a degustar vino como un sommelier",
        excerpt: "Los cinco pasos de la cata profesional: vista, olfato, gusto, retrogusto y conclusión. Una guía práctica para principiantes.",
        content: "La cata de vinos es un arte que cualquiera puede aprender. El primer paso es la vista: observa el color, la transparencia y la viscosidad del vino inclinando la copa sobre un fondo blanco. Los tintos jóvenes son violáceos mientras los añejos tiran a teja. El segundo paso es el olfato: gira la copa suavemente para liberar aromas. Primero huele sin agitar (aromas primarios de la uva), luego agita (aromas secundarios de la fermentación). El tercer paso es el gusto: toma un sorbo pequeño y distribúyelo por toda la boca. Identifica la acidez (laterales de la lengua), el dulzor (punta), los taninos (encías) y el cuerpo (peso en boca). El cuarto paso es el retrogusto: tras tragar, nota cuánto dura el sabor. Un buen vino tiene un final largo y complejo.",
        country: "Internacional",
        countryFlag: "🌍",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
        readTime: "6 min",
        category: "Técnica",
      },
      {
        id: "vino-2",
        title: "Burdeos: la cuna del vino fino francés",
        excerpt: "Con más de 7,000 productores y una clasificación que data de 1855, Burdeos es sinónimo de excelencia vinícola mundial.",
        content: "Burdeos es la región vinícola más prestigiosa del mundo. Dividida por el río Garona en la Rive Gauche (Médoc, Graves) y la Rive Droite (Saint-Émilion, Pomerol), produce vinos que pueden costar desde 5 hasta 5,000 euros la botella. La clasificación de 1855, encargada por Napoleón III para la Exposición Universal de París, estableció cinco niveles de calidad que aún rigen hoy. Los Premiers Grands Crus Classés como Château Lafite Rothschild, Margaux y Latour son considerados los mejores tintos del planeta. La mezcla bordelesa clásica combina Cabernet Sauvignon (estructura), Merlot (suavidad) y Cabernet Franc (elegancia). El terroir calcáreo y el clima oceánico crean condiciones irrepetibles.",
        country: "Francia",
        countryFlag: "🇫🇷",
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
        readTime: "7 min",
        category: "Regiones",
      },
      {
        id: "vino-3",
        title: "Malbec argentino: de cepa olvidada a estrella mundial",
        excerpt: "Originario de Cahors (Francia), el Malbec encontró en Mendoza su expresión más vibrante. La historia de un renacimiento.",
        content: "El Malbec llegó a Argentina en 1853 de la mano del agrónomo francés Michel Pouget. Mientras en Francia la filoxera casi extinguió la cepa, en los suelos pedregosos y la altitud de Mendoza (700-1,500 metros sobre el nivel del mar) encontró su hogar ideal. La intensa radiación solar a gran altitud produce uvas con pieles gruesas, lo que da vinos de color profundo, taninos aterciopelados y aromas a ciruela madura, violetas y chocolate. Hoy Argentina es el mayor productor de Malbec del mundo, con Mendoza como epicentro, seguido por el Valle de Uco que produce los ejemplares más elegantes y de mayor altitud.",
        country: "Argentina",
        countryFlag: "🇦🇷",
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80",
        readTime: "5 min",
        category: "Cepas",
      },
      {
        id: "vino-4",
        title: "Maridaje esencial: qué vino servir con cada comida",
        excerpt: "Las reglas básicas del maridaje y por qué a veces romperlas es la mejor decisión.",
        content: "El maridaje busca que el vino y la comida se potencien mutuamente. Las reglas clásicas son un buen punto de partida: blancos con pescado y mariscos, tintos con carnes rojas, rosados con cocina mediterránea, espumosos con aperitivos. Pero hay principios más profundos. El peso del plato debe coincidir con el cuerpo del vino: un pollo a la plancha pide un tinto ligero (Pinot Noir), mientras un estofado necesita un tinto robusto (Cabernet Sauvignon). La acidez del vino corta la grasa: por eso un Champagne brut es perfecto con frituras. Los taninos se suavizan con proteínas: un filete grueso doma un Malbec joven. Y el dulzor del vino debe ser igual o mayor al del postre.",
        country: "Internacional",
        countryFlag: "🌍",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        readTime: "5 min",
        category: "Maridaje",
      },
    ],
    debates: [
      { id: "d-vino-1", type: "VS", title: "Cabernet Sauvignon vs Malbec: ¿cuál es mejor?", description: "La eterna batalla entre estas dos cepas tintas. ¿Cuál prefieres y por qué?", optionA: "Cabernet Sauvignon", optionB: "Malbec", votesA: 89, votesB: 102, responses: 45, author: "SommelierMDCO", date: "2026-03-18" },
      { id: "d-vino-2", type: "Recomendacion", title: "Vino para cena romántica bajo $30", description: "Busco recomendaciones de vinos accesibles pero elegantes para una cena especial.", responses: 34, author: "WineLover23", date: "2026-03-12" },
      { id: "d-vino-3", type: "Ranking", title: "Top 5 regiones vinícolas del mundo", description: "La comunidad vota: ¿cuáles son las 5 mejores regiones para vino en el mundo?", responses: 56, author: "EnologoMDCO", date: "2026-03-08" },
      { id: "d-vino-4", type: "Mitos", title: "¿El vino mejora siempre con los años?", description: "Uno de los mitos más extendidos. ¿Realmente todos los vinos mejoran con el tiempo?", responses: 28, author: "VinoVerdad", date: "2026-03-01" },
    ],
    encuestas: [
      { id: "e-vino-1", question: "¿Cuál es tu cepa tinta favorita?", options: [{ text: "Malbec", votes: 78 }, { text: "Cabernet Sauvignon", votes: 65 }, { text: "Pinot Noir", votes: 54 }, { text: "Tempranillo", votes: 32 }], totalVotes: 229, author: "MDCO", date: "2026-03-05" },
      { id: "e-vino-2", question: "¿Con qué frecuencia tomas vino?", options: [{ text: "Diariamente", votes: 15 }, { text: "Fines de semana", votes: 89 }, { text: "Ocasiones especiales", votes: 67 }, { text: "Rara vez", votes: 34 }], totalVotes: 205, author: "MDCO", date: "2026-02-20" },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&q=80", caption: "Viñedos al atardecer", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80", caption: "Cata de vinos", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=80", caption: "Barricas de roble", author: "Comunidad MDCO" },
    ],
  },

  cafe: {
    slug: "cafe",
    title: "Café de Especialidad",
    subtitle: "Orígenes, tueste, preparación y el arte del barismo en cada taza",
    heroImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80",
    intro: "El café de especialidad es aquel que obtiene una puntuación de 80 o más en una escala de 100 según la SCA (Specialty Coffee Association). Detrás de cada taza hay una cadena de excelencia: desde el agricultor que selecciona las cerezas a mano, pasando por el tostador que desarrolla los sabores, hasta el barista que prepara la extracción perfecta. En este Placer exploraremos todo ese viaje.",
    curiosity: "El café más caro del mundo, el Kopi Luwak de Indonesia, se produce a partir de granos digeridos por la civeta, un pequeño mamífero. Puede costar más de $600 USD por kilo, aunque su producción ética es cuestionada.",
    articles: [
      {
        id: "cafe-1",
        title: "Etiopía: la cuna del café y sus variedades ancestrales",
        excerpt: "La leyenda del pastor Kaldi, las regiones de Yirgacheffe y Sidamo, y por qué el café etíope es considerado el más complejo del mundo.",
        content: "Etiopía es el lugar de nacimiento del café. Según la leyenda, un pastor llamado Kaldi descubrió el café en el siglo IX cuando notó que sus cabras se ponían especialmente energéticas después de comer las cerezas de cierto arbusto. Las regiones cafeteras etíopes producen perfiles de sabor únicos: Yirgacheffe ofrece notas florales y cítricas con cuerpo ligero y delicado; Sidamo presenta sabores a frutas del bosque y chocolate; Harrar sorprende con notas frutales intensas y un carácter avinado. Etiopía es el único país donde el café crece de forma silvestre en los bosques, con miles de variedades genéticas aún sin clasificar. Los caficultores etíopes practican la ceremonia del café, un ritual social que puede durar horas.",
        country: "Etiopía",
        countryFlag: "🇪🇹",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
        readTime: "6 min",
        category: "Orígenes",
      },
      {
        id: "cafe-2",
        title: "Colombia: del café comercial al movimiento de especialidad",
        excerpt: "Cómo Colombia pasó de ser el país del \"café suave\" a producir algunos de los micro-lotes más codiciados del mundo.",
        content: "Colombia es el tercer productor mundial de café y el primero en cafés suaves lavados. Las regiones de Huila, Nariño y Cauca producen micro-lotes de especialidad que compiten con los mejores del mundo. La geografía colombiana es ideal: la cordillera de los Andes crea microclimas variados entre 1,200 y 2,000 metros de altitud. El café colombiano se caracteriza por su acidez brillante, cuerpo medio y notas a caramelo, frutas tropicales y chocolate. El movimiento de tercera ola ha transformado la cultura cafetera colombiana: jóvenes productores experimentan con procesos como la fermentación anaeróbica y el honey process, obteniendo tazas con complejidad extraordinaria.",
        country: "Colombia",
        countryFlag: "🇨🇴",
        image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80",
        readTime: "5 min",
        category: "Orígenes",
      },
      {
        id: "cafe-3",
        title: "Métodos de preparación: de la prensa francesa al V60",
        excerpt: "Cada método extrae el café de forma diferente. Guía práctica para elegir el tuyo según tus gustos.",
        content: "Los métodos de preparación se dividen en tres grandes familias: inmersión, goteo y presión. La prensa francesa (inmersión) produce un café con cuerpo completo y textura oleosa porque no usa filtro de papel. Se recomienda molienda gruesa y 4 minutos de infusión. El V60 (goteo) es el favorito de los baristas de especialidad: su filtro cónico de papel produce una taza limpia y brillante que destaca las notas de origen. Requiere molienda media-fina y vertido circular controlado en 2.5-3 minutos. El AeroPress (presión) es el más versátil: puede simular un espresso concentrado o un filtrado limpio según la receta. La Chemex combina goteo con un filtro extra grueso para una taza cristalina. El espresso, bajo 9 bares de presión, extrae en 25-30 segundos un concentrado de 30ml con crema.",
        country: "Internacional",
        countryFlag: "🌍",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
        readTime: "7 min",
        category: "Preparación",
      },
      {
        id: "cafe-4",
        title: "El arte del tueste: cómo el calor transforma el grano verde",
        excerpt: "De semilla verde a grano aromático: la ciencia y el arte detrás del proceso que define el sabor de tu café.",
        content: "El tueste es donde la magia ocurre. El grano verde de café contiene más de 1,000 compuestos químicos que se transforman con el calor. Durante el tueste, que dura entre 8 y 15 minutos a temperaturas de 180-230°C, ocurren la reacción de Maillard y la caramelización de azúcares. En un tueste claro (light roast), se preservan las notas de origen: florales, frutales y ácidas. Es el preferido para cafés de especialidad y métodos de filtrado. En un tueste medio, se equilibran las notas de origen con las del tueste: caramelo, nueces y chocolate con leche. Ideal para todos los métodos. En un tueste oscuro (dark roast), dominan las notas del tueste: chocolate amargo, especias, ahumado. Se usa principalmente para espresso e italiano.",
        country: "Internacional",
        countryFlag: "🌍",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
        readTime: "6 min",
        category: "Proceso",
      },
    ],
    debates: [
      { id: "d-cafe-1", type: "VS", title: "V60 vs AeroPress: ¿cuál método es superior?", description: "Dos métodos de filtrado que los baristas adoran. ¿Cuál produce la mejor taza?", optionA: "V60", optionB: "AeroPress", votesA: 76, votesB: 68, responses: 38, author: "BaristaMDCO", date: "2026-03-20" },
      { id: "d-cafe-2", type: "Opinion", title: "¿Cuál fue tu mejor descubrimiento en café de especialidad?", description: "Comparte ese momento en que probaste algo que cambió tu percepción del café.", responses: 42, author: "CafeAddict", date: "2026-03-14" },
      { id: "d-cafe-3", type: "Recomendacion", title: "Mejor molino manual para empezar en casa", description: "Quiero mejorar mi café en casa. ¿Qué molino manual recomiendan con buen presupuesto?", responses: 25, author: "HomeBrewer", date: "2026-03-08" },
    ],
    encuestas: [
      { id: "e-cafe-1", question: "¿Cuál es tu método de preparación favorito?", options: [{ text: "Espresso", votes: 92 }, { text: "V60 / Filtrado", votes: 67 }, { text: "Prensa francesa", votes: 45 }, { text: "AeroPress", votes: 38 }], totalVotes: 242, author: "MDCO", date: "2026-03-10" },
      { id: "e-cafe-2", question: "¿Origen de café favorito?", options: [{ text: "Colombia", votes: 72 }, { text: "Etiopía", votes: 85 }, { text: "Brasil", votes: 34 }, { text: "Guatemala", votes: 28 }], totalVotes: 219, author: "MDCO", date: "2026-02-25" },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80", caption: "Granos recién tostados", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80", caption: "Preparación en V60", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", caption: "Latte art", author: "Comunidad MDCO" },
    ],
  },

  astronomia: {
    slug: "astronomia",
    title: "Astronomía Amateur",
    subtitle: "Observación del cielo, equipos, astrofotografía y cosmología para apasionados",
    heroImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
    intro: "La astronomía amateur es una ventana al universo accesible para todos. No necesitas un telescopio profesional para maravillarte con los anillos de Saturno, las fases de Venus o la danza de las galaxias. En este Placer compartimos conocimientos sobre observación celeste, equipos, astrofotografía y los misterios del cosmos que puedes explorar desde tu propio patio.",
    curiosity: "La luz que ves de la estrella más cercana al Sol, Próxima Centauri, salió de ella hace 4.24 años. Cuando miras el cielo, literalmente estás viendo el pasado.",
    articles: [
      { id: "astro-1", title: "Guía para principiantes: tu primera noche de observación", excerpt: "Todo lo que necesitas saber para empezar a observar el cielo nocturno, desde cómo encontrar constelaciones hasta qué equipo básico necesitas.", content: "La observación astronómica comienza a simple vista. Primero, busca un lugar con poca contaminación lumínica. Las aplicaciones como Stellarium o Sky Map te ayudan a identificar lo que ves. Empieza reconociendo las constelaciones más fáciles: Orión en invierno con sus tres estrellas del cinturón, la Osa Mayor que apunta a la estrella Polar, y Escorpio en verano con su corazón rojo Antares. Con unos binoculares 10x50 puedes ver los cráteres de la Luna, las lunas de Júpiter y cúmulos estelares como las Pléyades. El siguiente paso es un telescopio: para principiantes se recomienda un reflector Dobsoniano de 150mm que ofrece una excelente relación calidad-precio.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", readTime: "6 min", category: "Guía" },
      { id: "astro-2", title: "Los planetas del sistema solar: qué puedes ver con un telescopio casero", excerpt: "Júpiter y sus lunas, los anillos de Saturno, las fases de Venus: el sistema solar desde tu patio.", content: "Con un telescopio modesto puedes ver detalles sorprendentes de nuestros vecinos planetarios. Júpiter revela sus bandas de nubes y hasta cuatro lunas galileanas como puntos brillantes que cambian de posición cada noche. Saturno muestra sus anillos incluso con un telescopio de 60mm, una vista que literalmente quita el aliento la primera vez. Venus exhibe fases como la Luna y Marte muestra su casquete polar cuando está en oposición. Urano y Neptuno son visibles como pequeños discos verdosos y azulados respectivamente. El truco está en la paciencia y conocer los mejores momentos: cuando un planeta está en oposición está más cerca y brillante.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80", readTime: "7 min", category: "Observación" },
      { id: "astro-3", title: "Astrofotografía: captura el universo con tu cámara", excerpt: "Desde fotos de la Vía Láctea con un smartphone hasta nebulosas con equipo especializado.", content: "La astrofotografía ha vivido una revolución gracias a las cámaras digitales. Con un smartphone moderno y una exposición larga puedes capturar la Vía Láctea desde un cielo oscuro. La regla del 500 ayuda a evitar trazos estelares: divide 500 entre la distancia focal de tu lente para obtener el tiempo máximo de exposición en segundos. Para ir más allá necesitas una montura ecuatorial motorizada que compense la rotación terrestre. Las cámaras DSLR o mirrorless modificadas para astronomía captan nebulosas y galaxias mediante el apilado de muchas exposiciones. Software como DeepSkyStacker combina docenas de fotos para reducir el ruido y revelar detalles invisibles al ojo humano.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80", readTime: "8 min", category: "Astrofotografía" },
      { id: "astro-4", title: "El Big Bang y el origen del universo: lo que sabemos hoy", excerpt: "Desde la singularidad inicial hasta la formación de las primeras estrellas: la historia de los primeros minutos del cosmos.", content: "Hace aproximadamente 13,800 millones de años, todo el universo observable estaba comprimido en un punto de densidad y temperatura infinitas. En las primeras fracciones de segundo tras el Big Bang, el universo se expandió exponencialmente en un proceso llamado inflación cósmica. A los 3 minutos se formaron los primeros núcleos atómicos de hidrógeno y helio. Pasaron 380,000 años hasta que el universo se enfrió lo suficiente para que los electrones se unieran a los núcleos, liberando la luz que hoy detectamos como la radiación cósmica de fondo. Las primeras estrellas se encendieron unos 200 millones de años después, iniciando la era de la luz en el cosmos.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80", readTime: "6 min", category: "Cosmología" },
    ],
    debates: [
      { id: "d-astro-1", type: "VS", title: "Telescopio reflector vs refractor: ¿cuál para empezar?", description: "El eterno debate entre los dos tipos principales de telescopios para principiantes.", optionA: "Reflector (Newton)", optionB: "Refractor", votesA: 58, votesB: 42, responses: 31, author: "AstroMDCO", date: "2026-03-16" },
      { id: "d-astro-2", type: "Opinion", title: "¿Cuál fue el objeto celeste que más te impresionó ver por primera vez?", description: "Todos tenemos esa primera vez con el telescopio que nos dejó sin palabras.", responses: 27, author: "StarGazer", date: "2026-03-10" },
      { id: "d-astro-3", type: "Recomendacion", title: "Mejores apps para identificar estrellas y planetas", description: "Busco recomendaciones de aplicaciones de astronomía para Android e iOS.", responses: 19, author: "CieloNocturno", date: "2026-03-02" },
    ],
    encuestas: [
      { id: "e-astro-1", question: "¿Qué planeta te gustaría visitar si pudieras?", options: [{ text: "Marte", votes: 89 }, { text: "Saturno (sus lunas)", votes: 67 }, { text: "Júpiter (Europa)", votes: 45 }, { text: "Venus", votes: 12 }], totalVotes: 213, author: "MDCO", date: "2026-03-01" },
      { id: "e-astro-2", question: "¿Cuánto inviertes en tu equipo de astronomía?", options: [{ text: "Solo a simple vista", votes: 34 }, { text: "Binoculares", votes: 45 }, { text: "Telescopio básico", votes: 56 }, { text: "Equipo avanzado", votes: 23 }], totalVotes: 158, author: "MDCO", date: "2026-02-18" },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80", caption: "Vía Láctea desde cielo oscuro", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=80", caption: "Nebulosa de Orión", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80", caption: "Galaxia espiral", author: "Comunidad MDCO" },
    ],
  },

  chocolate: {
    slug: "chocolate",
    title: "Chocolate y Cacao",
    subtitle: "Del árbol a la barra: bean to bar, orígenes del cacao y el arte del chocolatero",
    heroImage: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200&q=80",
    intro: "El chocolate es uno de los placeres más universales de la humanidad. Desde las civilizaciones mesoamericanas que consideraban al cacao un regalo divino, hasta los maestros chocolateros europeos que refinaron su preparación, el viaje del cacao es una historia de transformación extraordinaria. En este Placer exploraremos desde la botánica del árbol de cacao hasta la ciencia del temperado perfecto.",
    curiosity: "Los mayas y aztecas usaban los granos de cacao como moneda. Un conejo costaba 10 granos de cacao y un esclavo costaba 100. El emperador Moctezuma bebía 50 tazas de chocolate al día.",
    articles: [
      { id: "choco-1", title: "Ecuador: la cuna del cacao fino de aroma", excerpt: "El cacao Nacional de Ecuador, conocido como Arriba, es considerado uno de los más finos del mundo por sus notas florales únicas.", content: "Ecuador produce el 60% del cacao fino de aroma del mundo gracias a su variedad Nacional, también llamada Arriba. Este cacao se distingue por notas florales como jazmín y azahar, combinadas con frutas tropicales y un delicado sabor a nuez. La variedad se originó hace más de 5,000 años en la cuenca amazónica ecuatoriana, lo que la convierte en una de las más antiguas del mundo. Los agricultores ecuatorianos cultivan el cacao bajo sombra en sistemas agroforestales tradicionales que preservan la biodiversidad. Las provincias de Los Ríos, Guayas y Esmeraldas son las principales productoras. En los últimos años, chocolateros ecuatorianos como Pacari y República del Cacao han puesto al país en el mapa de la chocolatería mundial.", country: "Ecuador", countryFlag: "🇪🇨", image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80", readTime: "6 min", category: "Orígenes" },
      { id: "choco-2", title: "Bean to bar: el movimiento que revolucionó el chocolate", excerpt: "Pequeños productores que controlan todo el proceso, desde el grano de cacao hasta la tableta final.", content: "El movimiento bean to bar surgió a principios de los 2000 como respuesta al chocolate industrializado. Los fabricantes bean to bar compran cacao directamente a los agricultores, lo tuestan, muelen, conchean y templan en sus propios talleres. Esto permite rastrear el origen exacto de cada tableta y desarrollar perfiles de sabor únicos. Pioneros como Dandelion Chocolate en San Francisco o Marou en Vietnam demostraron que el chocolate podía tener la misma complejidad que el vino de terroir. Un grano de cacao de Madagascar sabe completamente diferente a uno de Venezuela: el primero tiene notas cítricas y frutales, el segundo es más cremoso con notas de nuez.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80", readTime: "5 min", category: "Proceso" },
      { id: "choco-3", title: "La ciencia del temperado: por qué el chocolate cruje", excerpt: "El temperado es el proceso que da al chocolate su brillo, su crujido y su textura sedosa. La ciencia detrás de la cristalización.", content: "El temperado del chocolate es un proceso de calentamiento y enfriamiento controlado que organiza los cristales de manteca de cacao en su forma más estable (Forma V). Existen seis formas cristalinas posibles, pero solo la Forma V produce un chocolate con brillo, crujido satisfactorio al partirlo y textura que se derrite suavemente en la boca a exactamente 34°C (la temperatura corporal). El proceso clásico implica calentar el chocolate a 50°C para derretir todos los cristales, enfriarlo a 27°C trabajándolo sobre mármol para formar cristales de Forma V, y luego calentarlo ligeramente a 31-32°C para eliminar las formas inestables. Un chocolate mal temperado se ve opaco, tiene manchas blancas y una textura granulosa.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80", readTime: "7 min", category: "Ciencia" },
      { id: "choco-4", title: "Historia del chocolate: de bebida sagrada maya a dulce mundial", excerpt: "3,000 años de historia: cómo el cacao pasó de ser moneda divina en Mesoamérica a la golosina más popular del planeta.", content: "Los olmecas fueron los primeros en cultivar cacao hace unos 3,000 años. Los mayas lo preparaban como una bebida espumosa condimentada con chile y vainilla llamada xocolatl. Los aztecas lo asociaban con Quetzalcóatl y lo reservaban para la élite. Cuando los españoles llegaron a América, Hernán Cortés llevó el cacao a España donde se le agregó azúcar por primera vez. Durante dos siglos fue un secreto español antes de extenderse por Europa. En 1828 el holandés Coenraad van Houten inventó la prensa de cacao, que separaba la manteca del polvo, revolucionando la industria. En 1847 la empresa británica Fry creó la primera tableta de chocolate sólido comestible tal como la conocemos hoy.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80", readTime: "6 min", category: "Historia" },
    ],
    debates: [
      { id: "d-choco-1", type: "VS", title: "Chocolate negro vs chocolate con leche: ¿cuál es superior?", description: "El debate eterno entre los puristas del cacao y los amantes de la cremosidad.", optionA: "Negro (70%+)", optionB: "Con leche", votesA: 95, votesB: 78, responses: 41, author: "ChocoMDCO", date: "2026-03-19" },
      { id: "d-choco-2", type: "Recomendacion", title: "Mejores tabletas bean to bar para regalar", description: "Busco recomendaciones de tabletas de chocolate artesanal para un regalo especial.", responses: 22, author: "CacaoFino", date: "2026-03-11" },
      { id: "d-choco-3", type: "Mitos", title: "¿El chocolate blanco es realmente chocolate?", description: "Técnicamente no contiene sólidos de cacao, pero sí manteca de cacao. ¿Cuenta?", responses: 35, author: "ChocolateVerdad", date: "2026-03-05" },
    ],
    encuestas: [
      { id: "e-choco-1", question: "¿Qué porcentaje de cacao prefieres?", options: [{ text: "50-60% (suave)", votes: 34 }, { text: "70-80% (intenso)", votes: 78 }, { text: "85%+ (puro)", votes: 45 }, { text: "Con leche (<50%)", votes: 56 }], totalVotes: 213, author: "MDCO", date: "2026-03-08" },
      { id: "e-choco-2", question: "¿De dónde prefieres el cacao?", options: [{ text: "Ecuador", votes: 62 }, { text: "Venezuela", votes: 45 }, { text: "Madagascar", votes: 38 }, { text: "Ghana/Costa de Marfil", votes: 22 }], totalVotes: 167, author: "MDCO", date: "2026-02-22" },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80", caption: "Tabletas artesanales", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80", caption: "Granos de cacao", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&q=80", caption: "Proceso bean to bar", author: "Comunidad MDCO" },
    ],
  },

  astrologia: {
    slug: "astrologia",
    title: "Astrología: Mapa del Cielo",
    subtitle: "Constelaciones, signos zodiacales, mitología estelar y el mapa del cielo nocturno",
    heroImage: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=1200&q=80",
    intro: "Desde hace miles de años, la humanidad ha mirado al cielo buscando patrones y significados en las estrellas. Las constelaciones son agrupaciones de estrellas que las culturas antiguas conectaron formando figuras de héroes, animales y objetos. En este Placer explorarás las 12 constelaciones del zodiaco, las constelaciones más notables, su mitología, y aprenderás a reconocerlas en el cielo nocturno con nuestro mapa interactivo.",
    curiosity: "Las constelaciones del zodiaco llevan más de 3,000 años con los mismos nombres. Los babilonios las definieron alrededor del 1000 a.C. siguiendo el camino aparente del Sol a través del cielo, llamado eclíptica.",
    articles: [
      { id: "astrol-1", title: "Los 12 signos del zodiaco: origen y significado astronómico", excerpt: "Las constelaciones zodiacales marcan el camino del Sol a través del cielo. Su historia va mucho más allá de los horóscopos.", content: "El zodiaco es una franja del cielo de unos 18 grados de ancho centrada en la eclíptica, el camino aparente que recorre el Sol a lo largo del año. Las 12 constelaciones que cruza fueron identificadas por los babilonios hace más de 3,000 años. Cada mes, el Sol parece estar frente a una constelación diferente. Aries marca el equinoccio de primavera, Cáncer el solsticio de verano, Libra el equinoccio de otoño y Capricornio el solsticio de invierno. Es importante distinguir entre signos astrológicos (divisiones iguales de 30 grados) y constelaciones astronómicas (de tamaños muy diferentes). Debido a la precesión del eje terrestre, las fechas astrológicas ya no coinciden con las astronómicas: el Sol está en Aries astrológico cuando astronómicamente está en Piscis.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80", readTime: "6 min", category: "Zodiaco" },
      { id: "astrol-2", title: "Cómo encontrar las constelaciones: guía práctica del cielo nocturno", excerpt: "Trucos para orientarte en el cielo: desde la Osa Mayor hasta la Cruz del Sur, aprende a navegar entre las estrellas.", content: "Orientarse en el cielo nocturno es más fácil de lo que parece si conoces algunos trucos. En el hemisferio norte, la Osa Mayor es tu punto de partida: sus dos estrellas delanteras apuntan directamente a la Estrella Polar (Polaris), que marca el norte celeste. Desde ahí puedes encontrar la Osa Menor, Casiopea y el resto del cielo. Orión es el gran referente invernal: su cinturón de tres estrellas es inconfundible. Siguiendo el cinturón hacia abajo encuentras Sirio (la estrella más brillante), y hacia arriba llegas a Aldebarán en Tauro. En el hemisferio sur, la Cruz del Sur apunta al polo sur celeste. Aprende 5 constelaciones y podrás encontrar las demás usándolas como referencia.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", readTime: "7 min", category: "Guía práctica" },
      { id: "astrol-3", title: "Mitología griega en las estrellas: las historias detrás de las constelaciones", excerpt: "Cada constelación esconde una historia épica. Amores de dioses, héroes trágicos y monstruos inmortalizados en el cielo.", content: "El cielo nocturno es un teatro mitológico. Orión, el cazador gigante, persigue eternamente a las Pléyades mientras Escorpio lo acecha desde el lado opuesto del cielo. Perseo sostiene la cabeza de Medusa (la estrella Algol que parpadea) mientras vuela sobre Pegaso, el caballo alado. Andrómeda, encadenada a una roca como sacrificio al monstruo marino Cetus, es rescatada por Perseo. Casiopea, madre de Andrómeda, fue condenada a girar eternamente alrededor del polo por su vanidad. Los gemelos Cástor y Pólux comparten la inmortalidad en Géminis. Hércules realiza sus trabajos cerca del polo norte celeste. Cada cultura tiene sus propias historias: los aborígenes australianos ven un emú en los espacios oscuros de la Vía Láctea.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80", readTime: "8 min", category: "Mitología" },
      { id: "astrol-4", title: "Los 4 elementos en la astrología: Fuego, Tierra, Aire y Agua", excerpt: "Cada signo zodiacal pertenece a un elemento que define su energía. Conoce las características de cada grupo.", content: "La astrología clasifica los 12 signos en 4 elementos, cada uno con 3 signos. Los signos de Fuego (Aries, Leo, Sagitario) representan la energía, la acción y la pasión. Son líderes naturales, entusiastas e impulsivos. Los signos de Tierra (Tauro, Virgo, Capricornio) representan la estabilidad, lo práctico y lo material. Son pacientes, trabajadores y realistas. Los signos de Aire (Géminis, Libra, Acuario) representan el intelecto, la comunicación y las ideas. Son sociales, curiosos y adaptables. Los signos de Agua (Cáncer, Escorpio, Piscis) representan las emociones, la intuición y la profundidad. Son empáticos, sensibles y perceptivos. Esta clasificación tiene raíces en la filosofía griega de los cuatro elementos de Empédocles.", country: "Internacional", countryFlag: "🌍", image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80", readTime: "5 min", category: "Elementos" },
    ],
    debates: [
      { id: "d-astrol-1", type: "VS", title: "¿Te identificas más con tu signo solar o tu ascendente?", description: "Muchas personas sienten que su ascendente los describe mejor que su signo solar.", optionA: "Signo solar", optionB: "Ascendente", votesA: 67, votesB: 89, responses: 45, author: "MapaCeleste", date: "2026-03-22" },
      { id: "d-astrol-2", type: "Opinion", title: "¿Cuál es tu constelación favorita y por qué?", description: "Comparte cuál constelación te fascina más, ya sea por su forma, historia o significado personal.", responses: 38, author: "StarLover", date: "2026-03-18" },
      { id: "d-astrol-3", type: "Mitos", title: "¿La luna llena realmente afecta el comportamiento humano?", description: "Un mito popular que se mantiene a pesar de la falta de evidencia científica. ¿Tú qué opinas?", responses: 52, author: "LunarMDCO", date: "2026-03-12" },
    ],
    encuestas: [
      { id: "e-astrol-1", question: "¿Cuál es tu signo zodiacal?", options: [{ text: "Fuego (Aries/Leo/Sagitario)", votes: 89 }, { text: "Tierra (Tauro/Virgo/Capricornio)", votes: 76 }, { text: "Aire (Géminis/Libra/Acuario)", votes: 68 }, { text: "Agua (Cáncer/Escorpio/Piscis)", votes: 92 }], totalVotes: 325, author: "MDCO", date: "2026-03-20" },
      { id: "e-astrol-2", question: "¿Crees que los signos zodiacales influyen en la personalidad?", options: [{ text: "Sí, totalmente", votes: 78 }, { text: "Algo de verdad hay", votes: 134 }, { text: "Es solo entretenimiento", votes: 56 }, { text: "No creo en eso", votes: 42 }], totalVotes: 310, author: "MDCO", date: "2026-03-15" },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=400&q=80", caption: "Cielo estrellado", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80", caption: "Vía Láctea", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80", caption: "Nebulosa", author: "Comunidad MDCO" },
    ],
  },
};
