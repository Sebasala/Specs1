const mediaFormatList = [
  { name: 'Twitter', values: ['Promoted Tweet', 'TweetCard URL', 'TweetCard App', 'TweetCard Leads', 'Promoted Account', 'TWITTER(Instant Unlock)'] },
  { name: 'Facebook', values: ['Link Ad - FB', 'Link Ad (Presentación)', 'Carousel - FB', 'Video In - Stream', 'Collection Ad', 'Lead Generation Form (Tarjeta de contexto)', 'Canvas', 'Messenger'] },
  { name: 'Instagram', values: ['Link Ad - IG', 'Carousel - IG', 'Stories', 'Lead Generation Form'] },
];

const formatCreativeList = [
  { name: 'Promoted Tweet', values: ['Visible', 'Dark(Tweet)', 'Dark(Tweet + Imagen)', 'Dark(Video)'] },
  { name: 'TweetCard URL', values: ['Website Card'] },
  { name: 'TweetCard App', values: ['Basic App Card', 'Image App Card', 'Video App Card'] },
  { name: 'TweetCard Leads', values: ['Lead Generation Card'] },
  { name: 'Promoted Account', values: ['Promoted Account'] },
  { name: 'TWITTER(Instant Unlock)', values: ['Preview Teaser (PUEDE SER IMAGEN O VIDEO)', 'Tweet Pre - Populado', 'Titulo', 'Hashtag', 'Contenido desbloqueado (PUEDE SER IMAGEN O VIDEO)'] },
  { name: 'Link Ad - FB', values: ['Imagen/Video'] }, // Imagen/Video
  { name: 'Link Ad (Presentación)', values: ['Presentación'] }, // Presentación
  { name: 'Carousel - FB', values: ['Texto', 'Secuencia'] }, // Secuencia
  { name: 'Video In - Stream', values: ['Video'] }, // Imagen/Video
  { name: 'Collection Ad', values: ['Imagen/Video', 'Catálogo (4 - 50 productos)'] }, // Colección
  { name: 'Lead Generation Form (Tarjeta de contexto)', values: ['Imagen/Video', 'Secuencia'] }, // Imagen/Video
  { name: 'Canvas', values: ['Anuncio', 'Encabezado / Logo', 'Contenido'] }, // No se usa
  { name: 'Messenger', values: ['Mensaje (Opcional)'] }, // No se usa

  { name: 'Link Ad - IG', values: ['Imagen/Video'] }, // Imagen/Video
  { name: 'Carousel - IG', values: ['Secuencia'] }, // Secuencia
  { name: 'Stories', values: ['Imagen/Video'] }, // Imagen/Video
  { name: 'Lead Generation Form', values: ['Imagen/Video'] }, // Imagen/Video
];

const contentTypeFormatList = [
  { name: 'Imagen', values: ['JPG', 'PNG', 'JPG - PNG'] },
  { name: 'Video', values: ['MP4', 'MOV', 'GIF', 'MP4 - MOV', 'MP4 - GIF', 'MOV - GIF', 'MP4 - MOV - GIF'] },
];

const textLengthList = [
  {
    medium: 'Facebook',
    formats: ['Link Ad - FB', 'Video In - Stream'],
    name: 'Imagen/Video',
    value: {
      text: 125,
      title: 25,
      description: 30,
    },
    image: '1526502338256.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Min 1200 x 628',
      weight: '',
      comment: 'Relación de aspecto de la imagen: entre 9:16 y 16:9\n' +
        'Resolución recomendada: sube la imagen con la resolución más alta que esté disponible.',
    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: '',
      weight: '< 4 GB',
      length: 'Min 1 seg, Max 240 min',
      comment: 'Relación de aspecto del video: de 9:16 a 16:9\n' +
        'Velocidad de bits: si el archivo es menor a 1 GB y usa una codificación en dos pasos, no hay límite de velocidad de bits.En caso contrario, el límite es de 8 megabits por segundo para 1.080 píxeles y 4 megabits por segundo para 720 píxeles.\n' +
        'Resolución recomendada: sube el video con la resolución más alta que esté disponible y que cumpla los límites relativos al tamaño del archivo y la relación de aspecto.',
    },
  },
  {
    medium: 'Facebook',
    formats: ['Lead Generation Form (Tarjeta de contexto)'],
    name: 'Imagen/Video',
    value: {
      text: 125,
      title: 25,
      description: 30,
    },
    image: '1526391942702.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Min 1200 x 628',
      weight: '',
      comment: 'El formulario de Facebook se enlaza con cualquier otro tipo de formato de anuncio, como el Link Ad o el Carousel.\n' +
        'Relación de aspecto de la imagen: entre 9:16 y 16:9\n' +
        'Resolución recomendada: sube la imagen con la resolución más alta que esté disponible.',
    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: '',
      weight: '< 4 GB',
      length: 'Min 1 seg, Max 240 min',
      comment: 'El formulario de Facebook se enlaza con cualquier otro tipo de formato de anuncio, como el Link Ad o el Carousel.\n' +
        'Relación de aspecto del video: de 9:16 a 16:9\n' +
        'Velocidad de bits: si el archivo es menor a 1 GB y usa una codificación en dos pasos, no hay límite de velocidad de bits.En caso contrario, el límite es de 8 megabits por segundo para 1.080 píxeles y 4 megabits por segundo para 720 píxeles.\n' +
        'Resolución recomendada: sube el video con la resolución más alta que esté disponible y que cumpla los límites relativos al tamaño del archivo y la relación de aspecto.',
    },
  },
  {
    medium: 'Facebook',
    formats: ['Collection Ad'],
    name: 'Colección',
    value: {
      text: 90,
      title: 25,
      description: 0,
    },
    image: '1526505454450.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Min 1200 x 628',
      weight: '',
      comment: 'Relación de aspecto de la imagen: entre 9:16 y 16:9\n' +
        'Resolución recomendada: sube la imagen con la resolución más alta que esté disponible.',
    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: '',
      weight: '< 4 GB',
      length: 'Min 1 seg, Max 240 min',
      comment: 'Relación de aspecto del video: de 9:16 a 16:9\n' +
        'Velocidad de bits: si el archivo es menor a 1 GB y usa una codificación en dos pasos, no hay límite de velocidad de bits.En caso contrario, el límite es de 8 megabits por segundo para 1.080 píxeles y 4 megabits por segundo para 720 píxeles.\n' +
        'Resolución recomendada: sube el video con la resolución más alta que esté disponible y que cumpla los límites relativos al tamaño del archivo y la relación de aspecto.',
    },
  },
  {
    medium: 'Facebook',
    formats: ['Carousel - FB'],
    name: 'Secuencia',
    value: {
      text: 125,
      title: 40,
      description: 20,
    },
    image: '1526504973084.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Min 1.080 x 1.080',
      weight: '< 30 MB',
      comment: 'Número mínimo de imágenes: 2.\n' +
        'Número máximo de imágenes: 10.\n' +
        'Tipo de archivo de imagen: jpg o png.\n' +
        'Tipo de archivo de video: formatos de archivo compatibles.\n' +
        'Tamaño máximo del archivo de video: 4 GB.\n' +
        'Duración del video: hasta 240 minutos.\n' +
        'Tamaño máximo del archivo de imagen: 30 MB.\n' +
        'Resolución recomendada: 1.080 x 1.080 píxeles como mínimo.\n' +
        'Relación de aspecto recomendada: 1: 1.',
    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: '',
      weight: '< 4 GB',
      length: 'Min 1 seg, Max 240 min',
      comment: 'Número mínimo de imágenes: 2.\n' +
        'Número máximo de imágenes: 10.\n' +
        'Tipo de archivo de imagen: jpg o png.\n' +
        'Tipo de archivo de video: formatos de archivo compatibles.\n' +
        'Tamaño máximo del archivo de video: 4 GB.\n' +
        'Duración del video: hasta 240 minutos.\n' +
        'Tamaño máximo del archivo de imagen: 30 MB.\n' +
        'Resolución recomendada: 1.080 x 1.080 píxeles como mínimo.\n' +
        'Relación de aspecto recomendada: 1: 1.',
    },
  },
  {
    medium: 'Facebook',
    formats: ['Link Ad (Presentación)'],
    name: 'Presentación',
    value: {
      text: 125,
      title: 40,
      description: 20,
    },
    image: '1526504790076.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Min 1200 x 628',
      weight: '',
      comment: 'Relación de aspecto de la imagen: entre 9:16 y 16:9\n' +
        'Resolución recomendada: sube la imagen con la resolución más alta que esté disponible.',
    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: '',
      weight: '< 4 GB',
      length: 'Min 1 seg, Max 240 min',
      comment: 'Relación de aspecto del video: de 9:16 a 16:9\n' +
        'Velocidad de bits: si el archivo es menor a 1 GB y usa una codificación en dos pasos, no hay límite de velocidad de bits.En caso contrario, el límite es de 8 megabits por segundo para 1.080 píxeles y 4 megabits por segundo para 720 píxeles.\n' +
        'Resolución recomendada: sube el video con la resolución más alta que esté disponible y que cumpla los límites relativos al tamaño del archivo y la relación de aspecto.',
    },
  },
  {
    medium: 'Twitter',
    creative: ['Dark(Tweet)'],
    name: 'Tweet',
    value: {
      text: 280,
      title: 0,
      description: 0,
    },
    image: '1526506671679.png',
  },
  {
    medium: 'Twitter',
    creative: ['Dark(Tweet + Imagen)', 'Website Card'],
    name: 'Website Card Imagen',
    value: {
      text: 256,
      title: 70,
      description: 50,
    },
    image: '1526507585011.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: '800 x 418, 800 x 800',
      weight: '< 3 MB',
      comment: '800 x 418 pixeles para una relación de aspecto de 1.91:1, 800 x 800 pixeles para una relación de aspecto 1:1',
    },
  },
  {
    medium: 'Twitter',
    creative: ['Dark(Video)'],
    name: 'Website Card Video',
    value: {
      text: 280,
      title: 70,
      description: 50,
    },
    image: '',
    video: {
      format: 'MP4 - MOV',
      dimension: 'Relación de aspecto para videos: 16 x9 y 1 x1',
      weight: '< 1 GB',
      length: '',
      comment: 'Relación de aspecto: 16 x 9 o 1 x 1',
    },
  },
  {
    medium: 'Twitter',
    creative: ['Image App Card'],
    name: 'Image App Card',
    value: {
      text: 256,
      title: 0,
      description: 0,
    },
    image: '1526507975989.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: '800 x 418, 800 x 800',
      weight: '< 3 MB',
      comment: '800 x 418 pixeles para una relación de aspecto de 1.91:1, 800 x 800 pixeles para una relación de aspecto 1:1\n' +
        'Título / precio: extraído de la tienda de aplicaciones.\n' +
        'Opciones de llamada a la acción: Instalar(predeterminada si la app no está instalada), Abrir(predeterminada si la app está instalada), Jugar, Comprar, Reservar, Conectar y Pedir.',
    },

  },
  {
    medium: 'Twitter',
    creative: ['Video App Card'],
    name: 'Video App Card',
    value: {
      text: 256,
      title: 70,
      description: 200,
    },
    image: '',
    video: {
      format: 'MP4 - MOV',
      dimension: 'Relación de aspecto para videos: 16 x9 y 1 x1.',
      weight: '< 1 GB',
      length: 'Max 2 min 20 seg',
      comment: 'Relación de aspecto para videos: 16 x9 y 1 x1.\n' +
        'Tiempo máximo: 2 minutos y 20 segundos.(algunos anunciantes seleccionados podrán solicitar un aumento hasta 10 minutos.Comunícate con tu gestor de cuenta de Twitter para obtener más información.)',
    },
  },
  {
    medium: 'Twitter',
    creative: ['Preview Teaser (PUEDE SER IMAGEN O VIDEO)'],
    value: {
      text: 116,
      title: 0,
      description: 0,
    },
    image: '1526576444755.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: '800 x 418, 800 x 800',
      weight: '< 3 MB',
      comment: '800 x 418 pixeles para una relación de aspecto de 1.91:1, 800 x 800 pixeles para una relación de aspecto 1:1\n' +
        '116 caracteres (se usa 24 que ocupa la imagen o el video)',
    },
    video: {
      format: 'MP4 - MOV',
      dimension: 'Relación de aspecto para videos: 16 x9 y 1 x1.',
      weight: '< 1 GB',
      length: 'Max 2 min 20 seg',
      comment: '116 caracteres(se usa 24 que ocupa la imagen o el video)\n' +
        'Titulo 23 caracteres' +
        'Hashtag 21 caracteres' +
        'Título(debajo del vídeo): 70 caracteres OPCIONAL\n' +
        'Descripción(debajo del vídeo): 200 caracteres OPCIONAL\n' +
        'Relación de aspecto para videos: 16 x9 y 1 x1.\n' +
        'Tiempo máximo: 2 minutos y 20 segundos.(algunos anunciantes seleccionados podrán solicitar un aumento hasta 10 minutos.Comunícate con tu gestor de cuenta de Twitter para obtener más información.)',

    },
  },
  {
    medium: 'Twitter',
    creative: ['Contenido desbloqueado (PUEDE SER IMAGEN O VIDEO)'],
    value: {
      text: 116,
      title: 0,
      description: 23,
    },
    image: '1526576444755.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: '800 x 418, 800 x 800',
      weight: '< 3 MB',
      comment: '800 x 418 pixeles para una relación de aspecto de 1.91:1, 800 x 800 pixeles para una relación de aspecto 1:1\n' +
        '116 caracteres (se usa 24 que ocupa la imagen o el video)\n' +
        'Texto Agradecimiento 23 caracteres',
    },
    video: {
      format: 'MP4 - MOV',
      dimension: 'Relación de aspecto para videos: 16 x9 y 1 x1.',
      weight: '< 1 GB',
      length: 'Max 2 min 20 seg',
      comment: '116 caracteres(se usa 24 que ocupa la imagen o el video)\n' +
        'Texto Agradecimiento 23 caracteres\n' +
        'Titulo 23 caracteres\n' +
        'Hashtag 21 caracteres\n' +
        'Título(debajo del vídeo): 70 caracteres OPCIONAL\n' +
        'Descripción(debajo del vídeo): 200 caracteres OPCIONAL\n' +
        'Relación de aspecto para videos: 16 x9 y 1 x1.\n' +
        'Tiempo máximo: 2 minutos y 20 segundos.(algunos anunciantes seleccionados podrán solicitar un aumento hasta 10 minutos.Comunícate con tu gestor de cuenta de Twitter para obtener más información.)',

    },
  },
  {
    medium: 'Instagram',
    formats: ['Link Ad - IG'],
    name: 'Imagen/Video',
    value: {
      text: 125,
      title: 25,
      description: 30,
    },
    image: '1526581551395.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Cuadrado 1.080 x 1.080, Vertical 1.080 x 566',
      weight: '< 30 MB',
      comment: 'Resolución recomendada: sube la imagen con la resolución más alta que esté disponible y que cumpla los requisitos relativos a la relación de aspecto. Combina una imagen atractiva con un enlace para que a las personas realizen una acción. La imagen debe tener poco Texto.\n' +
        'Relación de aspecto de la imagen: 1,91:1',

    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: 'Cuadrado 1.080 x 1.080, Vertical 1.080 x 566',
      weight: '< 2.3 GB',
      length: 'Max 1 min',
      comment: 'Los anuncios con video ofrecen la misma experiencia visual envolvente que los anuncios con foto de Instagram, con el valor añadido de que las imágenes tienen sonido y movimiento. Además, ahora puedes compartir videos de hasta 60 segundos en formato cuadrado u horizontal.\n' +
        'Relación de aspecto de la imagen: 1,91:1',

    },
  },
  {
    medium: 'Instagram',
    formats: ['Stories'],
    name: 'Imagen/Video',
    value: {
      text: 125,
      title: 25,
      description: 30,
    },
    image: '1526582353216.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Min 600 x 1.067, Recomendado 1.080 x 1.080',
      weight: '< 30 MB',
      comment: 'Tipo de archivo:\n' +
        '.mp4 o.mov(video)\n' +
        '.jpg o.png(foto)\n' +
        'Tamaño de archivo máximo:\n' +
        '4 GB(video)\n' +
        '30 MB(Photo)\n' +
        'Duración del video:\n' +
        'Duración máxima: 15 segundos\n' +
        'Dimensiones:\n' +
        'Resolución recomendada: 1.080 x 1.920\n' +
        'Resolución mínima: 600 x 1.067\n' +
        'Relación de aspecto:\n' +
        'Anuncio en formato vertical en pantalla completa con relación de aspecto 9:16',
    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: 'Min 600 x 1.067, Recomendado 1.080 x 1.080',
      weight: '< 4 GB',
      length: 'Max 15 seg',
      comment: 'Tipo de archivo:\n' +
        '.mp4 o.mov(video)\n' +
        '.jpg o.png(foto)\n' +
        'Tamaño de archivo máximo:\n' +
        '4 GB(video)\n' +
        '30 MB(Photo)\n' +
        'Duración del video:\n' +
        'Duración máxima: 15 segundos\n' +
        'Dimensiones:\n' +
        'Resolución recomendada: 1.080 x 1.920\n' +
        'Resolución mínima: 600 x 1.067\n' +
        'Relación de aspecto:\n' +
        'Anuncio en formato vertical en pantalla completa con relación de aspecto 9:16',

    },
  },
  {
    medium: 'Instagram',
    formats: ['Carousel - IG'],
    name: 'Secuencia',
    value: {
      text: 125,
      title: 40,
    },
    image: '1526582164025.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: 'Cuadrado 1.080 x 1.080, Vertical 1.080 x 566',
      weight: '< 30 MB',
      comment: 'Resolución recomendada: sube la imagen con la resolución más alta que esté disponible y que cumpla los requisitos relativos a la relación de aspecto. Combina una imagen atractiva con un enlace para que a las personas realizen una acción. La imagen debe tener poco Texto.\n' +
        'Se puede con imagen o video Imagen: 1.080 x 1.080 y/o Video: 720p (cuadrado) Hasta 10 unidades en secuencia.\n' +
        'Recomendado: 5 unidades Imagen: JPG - PNG Video: MP4 - MOV - GIF Peso Imagen: < 30 MB Peso Video: < 2.3 GB Longitud Video: < 60 Seg',

    },
    video: {
      format: 'MP4 - MOV - GIF',
      dimension: '720p',
      weight: '< 2.3 GB',
      length: 'Max 1 min',
      comment: 'Los anuncios con video ofrecen la misma experiencia visual envolvente que los anuncios con foto de Instagram, con el valor añadido de que las imágenes tienen sonido y movimiento. Además, ahora puedes compartir videos de hasta 60 segundos en formato cuadrado u horizontal.\n' +
        'Se puede con imagen o video Imagen: 1.080 x 1.080 y / o Video: 720 p(cuadrado) Hasta 10 unidades en secuencia.\n' +
        'Recomendado: 5 unidades Imagen: JPG - PNG Video: MP4 - MOV - GIF Peso Imagen: < 30 MB Peso Video: < 2.3 GB Longitud Video: < 60 Seg',

    },
  },
  {
    medium: 'Instagram',
    formats: ['Lead Generation Form'],
    name: 'Imagen/Video',
    value: {
      text: 2200,
      title: 0,
      description: 0,
    },
    image: '1526588126218.png',
    imagen: {
      format: 'JPG - PNG',
      dimension: '600 x 315, 600 x 600, 600 x 750',
      weight: '< 30 MB',
      comment: '600 x 315 píxeles (1,91:1 horizontal)/600 x 600 píxeles (1:1 cuadrado)/600 x 750 píxeles (4:5 vertical).\n' +
        'Relación de aspecto de la imagen: horizontal (1,91:1), cuadrado (1:1), vertical (4:5).\n' +
        'Número máximo de imágenes en los anuncios por secuencia : 10',

    },
    video: {
      format: 'MP4',
      dimension: 'Relación de aspecto: 1:1.',
      weight: '< 4 GB',
      length: 'Max 1 min',
      comment: 'Relación de aspecto: 1:1.\n' +
        'Video: compresión de video H.264, perfil alto preferiblemente, píxeles cuadrados, velocidad de fotogramas fija y escaneo progresivo.\n' +
        'Tipo de archivo: .mp4 con moov atom preferiblemente, sin listas de edición.\n' +
        'Número máximo de imágenes en los anuncios por secuencia : 10',

    },
  },
];