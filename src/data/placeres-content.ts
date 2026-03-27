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

export interface PlacerContent {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  curiosity: string;
  articles: Article[];
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
    gallery: [
      { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80", caption: "Granos recién tostados", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80", caption: "Preparación en V60", author: "Comunidad MDCO" },
      { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", caption: "Latte art", author: "Comunidad MDCO" },
    ],
  },
};
