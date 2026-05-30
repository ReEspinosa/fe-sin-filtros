// ============================================================
//  ✏️  FE SIN FILTROS — CONFIGURACIÓN CENTRAL
//  Edita este archivo para personalizar tu sitio sin tocar HTML
// ============================================================

const CONFIG = {

  // ── DATOS GENERALES ──────────────────────────────────────
  siteName:    "Fe Sin Filtros",
  tagline:     "Estudios bíblicos para quien busca respuestas reales.",
  description: "Un espacio auténtico para explorar la fe, hacer preguntas difíciles y conectar con una comunidad que te acepta tal como eres.",

  // ── CONTACTO ─────────────────────────────────────────────
  whatsapp: {
    number:  "525524397603",      // ← tu número con código de país, sin +
    message: "Hola! Me gustaría solicitar un estudio bíblico.",
  },
  email: "rebeca07e.r@gmail.com",  // ← tu correo

  // ── IGLESIA ──────────────────────────────────────────────
  church: {
    name:      "Iglesia Adventista del Séptimo Día Central",
    address:   "Tu dirección aquí, Ciudad de México",
    schedules: [
      { day: "Sábado",   time: "9:30 AM — Escuela Sabática" },
      { day: "Sábado",   time: "11:00 AM — Culto Divino"   },
      { day: "Sábado",time: "5:00 PM — SOciedad de Jóvenes" },
    ],
    mapsEmbed: "https://maps.google.com/maps?q=TU+DIRECCIÓN&output=embed", // ← link de Google Maps embed
  },

  // ── REDES SOCIALES ───────────────────────────────────────
  social: {
    instagram: "https://instagram.com/RBKESPINOSA",
    tiktok:    "https://tiktok.com/@RBKESPINOSA",
    youtube:   "",   // opcional
  },

  // ── VIDEOS (reels de Instagram) ──────────────────────────
  // Agrega o quita objetos. El orden aquí = orden en la galería.
  videos: [
    {
      id:          "video-1",
      title:       "¿Qué es la Fe de Jesús?",
      description: "Introducción a la serie — de qué se trata y por qué importa hoy.",
      duration:    "8:24",
      tag:         "Introducción",
      reelUrl:     "https://www.instagram.com/reel/XXXXXXXXX/",  // ← link de tu reel
      // thumbnail: usa una imagen tuya, o deja en blanco para el degradado
      thumbnail:   "",
      // color de fondo de la card si no hay thumbnail (usa colores del sistema)
      color:       "primary-c",   // primary-c | gold | secondary-c | rose
    },
    {
      id:          "video-2",
      title:       "La Ley de Dios y la Gracia",
      description: "¿Se contradicen? Exploramos uno de los temas más mal entendidos.",
      duration:    "12:10",
      tag:         "Doctrina",
      reelUrl:     "https://www.instagram.com/reel/XXXXXXXXX/",
      thumbnail:   "",
      color:       "gold",
    },
    {
      id:          "video-3",
      title:       "El Sábado: ¿Obligación o Regalo?",
      description: "Más allá de la regla — el corazón detrás del cuarto mandamiento.",
      duration:    "15:33",
      tag:         "Doctrina",
      reelUrl:     "https://www.instagram.com/reel/XXXXXXXXX/",
      thumbnail:   "",
      color:       "secondary-c",
    },
    {
      id:          "video-4",
      title:       "¿Qué pasa después de la muerte?",
      description: "Una respuesta bíblica clara a la pregunta que todos tenemos.",
      duration:    "10:05",
      tag:         "Profecía",
      reelUrl:     "https://www.instagram.com/reel/XXXXXXXXX/",
      thumbnail:   "",
      color:       "rose",
    },
    {
      id:          "video-5",
      title:       "El Gran Conflicto explicado",
      description: "El macro-relato de la Biblia en un solo video.",
      duration:    "18:47",
      tag:         "Profecía",
      reelUrl:     "https://www.instagram.com/reel/XXXXXXXXX/",
      thumbnail:   "",
      color:       "primary-c",
    },
    {
      id:          "video-6",
      title:       "Bautismo: ¿por qué importa?",
      description: "El significado profundo detrás de este paso de fe.",
      duration:    "9:18",
      tag:         "Decisión",
      reelUrl:     "https://www.instagram.com/reel/XXXXXXXXX/",
      thumbnail:   "",
      color:       "gold",
    },
  ],

  // ── TESTIMONIOS ──────────────────────────────────────────
  testimonials: [
    {
      name:  "Sofía M.",
      role:  "Estudiante · UNAM",
      quote: "Encontré un espacio donde mis preguntas no son juzgadas, sino bienvenidas. Cambió mi perspectiva por completo.",
      color: "secondary-c",
    },
    {
      name:  "Carlos G.",
      role:  "Diseñador",
      quote: "Los recursos prácticos me ayudaron a encontrar claridad en medio de mucha ansiedad profesional y personal.",
      color: "gold",
    },
    {
      name:  "Ana R.",
      role:  "Emprendedora",
      quote: "Sentir que no estás sola en tu búsqueda espiritual es liberador. Esta comunidad me cambió.",
      color: "rose",
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────
  quizOptions: [
    {
      icon:  "menu_book",
      title: "Quiero entender lo básico",
      desc:  "Fundamentos y primeros pasos.",
      goTo:  "video-1",   // id del video recomendado
      color: "gold",
    },
    {
      icon:  "psychology_alt",
      title: "Tengo dudas profundas",
      desc:  "Escepticismo, ciencia y fe.",
      goTo:  "video-2",
      color: "secondary-c",
    },
    {
      icon:  "self_improvement",
      title: "Busco paz y propósito",
      desc:  "Sanidad emocional y dirección.",
      goTo:  "video-4",
      color: "rose",
    },
  ],
};
