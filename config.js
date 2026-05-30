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
        title:       "El origen del mal",
        description: "Si Dios creó un mundo perfecto… ¿de dónde salió el pecado? El origen del conflicto desde la perspectiva adventista.",
        duration:    "1:00",
        tag:         "Gran Conflicto",
        reelUrl:     "https://www.instagram.com/reel/DYGWXlZMZew/?igsh=MWkwOHBzbndmZWUzcg==",
        thumbnail:   "",
        color:       "primary-c",
      },
      {
        id:          "video-2",
        title:       "La Biblia: más vigente que nunca",
        description: "Escrita por más de 40 autores en distintos siglos, su mensaje permanece intacto. No es un libro más — es un mensaje vivo.",
        duration:    "1:00",
        tag:         "Fundamentos",
        reelUrl:     "https://www.instagram.com/reel/DT34vikjO0c/",
        thumbnail:   "",
        color:       "gold",
      },
      {
        id:          "video-3",
        title:       "¿Quién es Dios realmente?",
        description: "Más que tradición — lo que dice la Biblia sobre el carácter de Dios: creador, restaurador, perdonador y lleno de esperanza.",
        duration:    "1:00",
        tag:         "Fundamentos",
        reelUrl:     "https://www.instagram.com/reel/DUovUN1DkHw/?igsh=MWJ4MTY1cjB0b2U3bg==",
        thumbnail:   "",
        color:       "secondary-c",
      },
      {
        id:          "video-4",
        title:       "La oración no es un ritual",
        description: "La Biblia la presenta como algo más profundo: un diálogo real donde el cielo escucha. No una fórmula — una dependencia diaria.",
        duration:    "1:00",
        tag:         "Vida Espiritual",
        reelUrl:     "https://www.instagram.com/reel/DU_4yo-DKNq/?igsh=MWJwNG9sdTF2ZGNhcg==",
        thumbnail:   "",
        color:       "rose",
      },
      {
        id:          "video-5",
        title:       "¿Qué es realmente la fe?",
        description: "La fe no es sentir bonito. Es confiar incluso cuando no ves nada claro — un regalo que transforma cómo vives y decides.",
        duration:    "1:00",
        tag:         "Vida Espiritual",
        reelUrl:     "https://www.instagram.com/reel/DV-CLcfjAp6/?igsh=Y3hvbTVxbThoNmxp",
        thumbnail:   "",
        color:       "gold",
      },
      {
        id:          "video-6",
        title:       "¿Jesús realmente resucitó?",
        description: "No solo una pregunta de fe — también histórica. La resurrección no es un símbolo, es un evento real que cambia todo.",
        duration:    "1:00",
        tag:         "Jesús",
        reelUrl:     "https://www.instagram.com/reel/DWxs0h2jhnm/",
        thumbnail:   "",
        color:       "primary-c",
      },
      {
        id:          "video-7",
        title:       "¿Por qué Jesús murió en la Pascua?",
        description: "No fue coincidencia — fue propósito. El símbolo, el tiempo y el significado que señala directamente a Jesús.",
        duration:    "1:00",
        tag:         "Jesús",
        reelUrl:     "https://www.instagram.com/reel/DW2fy73DIBv/",
        thumbnail:   "",
        color:       "secondary-c",
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
