/** French content — the original site copy. content/en.ts must keep exactly the same shape. */
const fr = {
  meta: {
    title: "GOSAFE Association — Réduire le risque d’accident et sauver des vies",
    description:
      "GOSAFE Association est une organisation camerounaise spécialisée dans la sécurité routière, la prévention des accidents, l’analyse des données d’accidentalité et l’innovation au service d’une mobilité plus sûre.",
    ogTitle: "GOSAFE Association",
    ogDescription:
      "Prévenir les accidents. Comprendre leurs causes. Innover pour les réduire. Accompagner ceux qu’ils touchent.",
    ogLocale: "fr_CM",
  },

  common: {
    skipLink: "Aller au contenu",
    close: "Fermer",
    scrollHint: "Faites défiler →",
  },

  organization: {
    name: "GOSAFE Association",
    tagline: "Réduire le risque d’accident et sauver des vies",
    /** How many trailing words of the tagline are highlighted ("sauver des vies"). */
    taglineEmphasis: 3,
    pillars: [
      "Prévenir les accidents.",
      "Comprendre leurs causes.",
      "Innover pour les réduire.",
      "Accompagner ceux qu’ils touchent.",
    ],
    conviction: "Chaque accident évitable représente une vie qui peut être sauvée.",
    legalStatus: "Association à but non lucratif légalement déclarée au Cameroun",
    founded: "2024",
    headquarters: "Yaoundé, Cameroun",
    interventionArea: "Cameroun, avec vocation Afrique centrale",
    ambition:
      "Devenir un partenaire technique de référence en Afrique centrale dans les domaines de la sécurité routière, de l’analyse des données d’accidents et de l’innovation au service d’une mobilité durable.",
  },

  /** Same order as `sectionIds` in content/gosafe.ts. */
  navigation: ["Accueil", "À propos", "Nos actions", "Expertise", "Galerie", "Engagement", "Histoire de Lulu", "Contact"],

  navbar: {
    mainNav: "Navigation principale",
    homeAria: "retour à l’accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    contactCta: "Nous contacter",
    languageLabel: "Choisir la langue",
    languageNames: { fr: "Français", en: "English" },
  },

  hero: {
    ctaPrimary: "Découvrir nos actions",
    ctaSecondary: "Nous contacter",
    facts: [
      { term: "Statut", value: "Association à but non lucratif" },
      { term: "Création", value: "Fondée en 2024" },
      { term: "Siège", value: "Yaoundé, Cameroun" },
      { term: "Présence", value: "8 régions sur 10" },
    ],
  },

  about: {
    eyebrow: "À propos",
    title: ["Une organisation camerounaise au service d’une mobilité ", "plus sûre", "."],
    intro:
      "GOSAFE Association est une organisation camerounaise spécialisée dans la sécurité routière, la prévention des accidents, l’analyse des données d’accidentalité et le développement de solutions innovantes au service d’une mobilité plus sûre.",
    photoAlt: "Membres de GOSAFE Association réunis devant un stand de sensibilisation à la sécurité routière",
    photoBadge: "Sur le terrain",
    photoKicker: "Prévention & sensibilisation",
    photoCaption: "Une équipe engagée pour la sensibilisation à la sécurité routière",
    convictionFooter: "La conviction fondatrice de GOSAFE",
    audienceTitle: "Aux côtés de",
    audience: [
      "Institutions publiques",
      "Partenaires techniques",
      "Collectivités territoriales",
      "Entreprises",
      "Société civile",
      "Citoyens",
    ],
    collaborationsTitle: "Collaborations dans le cadre d’initiatives nationales",
    collaborations: [
      "Ministère des Transports",
      "Forces de maintien de l’ordre",
      "Partenaires engagés pour la sécurité des infrastructures et des transports",
    ],
    approachTitle: "Approche intégrée",
    approachCount: "5 dimensions",
    approachInputs: [
      "Expertise technique",
      "Connaissance du terrain",
      "Analyse des données",
      "Innovation numérique",
      "Accompagnement humain",
    ],
    approachOutputsTitle: "Pour produire",
    approachOutputs: [
      "Des diagnostics fiables",
      "Des recommandations opérationnelles",
      "Des actions de prévention adaptées aux réalités locales",
      "Un accompagnement vers la reconstruction et la réinsertion",
    ],
  },

  statistics: {
    eyebrow: "Notre capacité organisationnelle",
    title: ["Un réseau national de bénévoles, de professionnels et d’", "experts", " engagés."],
    intro:
      "Cette organisation permet de constituer rapidement des équipes multidisciplinaires adaptées aux études techniques, aux projets de coopération, aux missions de terrain et aux campagnes nationales de sensibilisation.",
    /** Same order as `keyFigures` in content/gosafe.ts. */
    figures: [
      {
        label: "Membres actifs",
        detail:
          "Directement impliqués dans la gouvernance, la conception, la coordination et la mise en œuvre des projets.",
      },
      {
        label: "Membres associés",
        detail: "Mobilisables selon les besoins des missions et des campagnes de terrain.",
      },
      {
        label: "Régions couvertes",
        detail:
          "Sur les 10 régions du Cameroun, pour une capacité d’intervention progressive sur le territoire national.",
      },
    ],
    photoAlt: "Participants au 1er Forum national sur la sécurité routière à Yaoundé",
  },

  services: {
    eyebrow: "Nos actions",
    title: ["Nos domaines d’", "intervention", ""],
    intro:
      "GOSAFE intervient sur l’ensemble de la chaîne de valeur de la sécurité routière : de la sensibilisation des usagers à l’accompagnement des victimes, en passant par l’analyse des données et l’innovation.",
    items: [
      {
        title: "Prévention & sensibilisation",
        description:
          "Sensibilisation et éducation des usagers de la route, conception et mise en œuvre de campagnes de prévention.",
      },
      {
        title: "Analyse des accidents",
        description: "Collecte, traitement et analyse des données d’accidents de la circulation.",
      },
      {
        title: "Identification des points noirs",
        description: "Identification des points noirs accidentogènes et appui à la prise de décision.",
      },
      {
        title: "Études & audits",
        description: "Réalisation d’études, d’audits et d’analyses techniques en matière de sécurité routière.",
      },
      {
        title: "Innovation numérique",
        description: "Recherche, innovation et développement de solutions numériques appliquées à la mobilité.",
      },
      {
        title: "Accompagnement des victimes",
        description: "Soutien psychosocial, assistance solidaire et actions favorisant la réinsertion sociale.",
      },
      {
        title: "Accompagnement institutionnel",
        description:
          "Appui technique aux institutions publiques, aux collectivités et aux partenaires de développement.",
      },
    ],
    ctaKicker: "Travaillons ensemble",
    ctaTitle: "Institutions, collectivités, entreprises ou partenaires techniques\u00a0?",
    ctaLink: "Échanger avec GOSAFE",
  },

  partners: {
    eyebrow: "Nos partenaires",
    title: ["Nos ", "partenaires", ""],
    intro:
      "GOSAFE agit aux côtés d’institutions publiques et de partenaires techniques engagés pour une mobilité plus sûre au Cameroun. Ensemble, nous unissons autorité, expertise et action de terrain pour réduire durablement les accidents de la route.",
    names: {
      cpcs: "CPCS Transcom Limited",
      mintransport: "Ministère des Transports",
      mintp: "Ministère des Travaux Publics",
      gendarmerie: "Gendarmerie Nationale",
    },
    enlargeLogo: "Agrandir le logo :",
    logoDialog: "Logo du partenaire",
    logoAlt: "Logo —",
  },

  expertise: {
    eyebrow: "Expertise multidisciplinaire",
    title: ["Plusieurs disciplines. ", "Un seul objectif", " : sauver des vies."],
    intro:
      "La force de GOSAFE réside dans la complémentarité des compétences réunies au sein de son réseau de membres, de bénévoles et d’experts — pour aborder la sécurité routière dans ses dimensions techniques, humaines, institutionnelles, juridiques et technologiques.",
    domainsAria: "Domaines d’expertise",
    /** Diagram nodes, clockwise from the top. */
    nodes: ["Sécurité routière", "Ingénierie & innovation", "Gouvernance & droit", "Terrain", "Citoyens"],
    centerKicker: "Un objectif",
    centerLines: ["Sauver", "des vies"],
    diagramCaption: "Cinq domaines de compétences convergent vers un objectif commun : sauver des vies.",
    clusters: [
      {
        title: "Sécurité routière & transport",
        profiles: [
          "Experts en sécurité routière",
          "Ingénieurs en planification et gestion des programmes de formation en sécurité routière",
          "Spécialistes en accidentologie",
          "Formateurs en conduite défensive, préventive et professionnelle",
          "Formateurs pré-permis et post-permis de conduire",
          "Conducteurs expérimentés des catégories A, B, C, D, E et G",
        ],
      },
      {
        title: "Analyse, ingénierie & innovation",
        profiles: [
          "Ingénieurs en informatique",
          "Ingénieurs en statistiques et analyse de données",
          "Spécialistes du management des risques",
          "Experts en recherche appliquée, innovation et solutions numériques",
        ],
      },
      {
        title: "Gouvernance & expertise juridique",
        profiles: ["Avocats et docteurs en droit", "Spécialistes en éthique, déontologie et intégrité professionnelle"],
      },
      {
        title: "Opérations & interventions de terrain",
        profiles: [
          "Professionnels de la maintenance automobile",
          "Mécaniciens spécialisés",
          "Spécialistes en secourisme",
          "Agents des forces de maintien de l’ordre experts en sécurité routière",
        ],
      },
    ],
  },

  citizenEngagement: {
    title: "Engagement citoyen",
    description:
      "Au-delà des profils spécialisés, GOSAFE rassemble de nombreux citoyens engagés qui participent volontairement :",
    actions: [
      "aux actions de prévention",
      "aux campagnes de sensibilisation",
      "à la promotion d’une culture durable de la sécurité routière",
    ],
  },

  gallery: {
    eyebrow: "Galerie",
    title: ["Nos actions, ", "en images", ""],
    intro:
      "Retour sur le terrain : forums, campagnes de sensibilisation et rencontres avec les usagers de la route à travers le Cameroun.",
    categories: {
      forum: "Forum national sur la sécurité routière",
      "moto-taxi": "Sensibilisation des moto-taxis",
    },
    all: "Tout voir",
    filterAria: "Filtrer la galerie par catégorie",
    hint: "Cliquez sur une photo pour l’agrandir",
    enlarge: "Agrandir :",
    photo: "photo",
    photoFallback: "Photo",
  },

  mission: {
    eyebrow: "Mission · Vision · Valeurs",
    title: ["Ce qui nous ", "guide", ""],
    missionLabel: "Notre mission",
    mission:
      "Contribuer à la réduction durable des accidents de la route et de leurs conséquences humaines, sociales et économiques grâce à la prévention, à l’analyse scientifique des données, au renforcement des capacités, au développement de solutions innovantes et à l’accompagnement des victimes vers leur reconstruction et leur réinsertion.",
    visionLabel: "Notre vision",
    vision:
      "Construire un écosystème où les décisions en matière de sécurité routière reposent sur des données fiables, des technologies innovantes et une collaboration étroite entre les pouvoirs publics, les partenaires techniques, les chercheurs, le secteur privé et les citoyens, afin de sauver durablement des vies sur les routes.",
    valuesTitle: "Nos valeurs",
    values: [
      {
        title: "Engagement",
        description: "Nous plaçons la protection de la vie humaine au cœur de chacune de nos actions.",
      },
      {
        title: "Intégrité",
        description: "Nous conduisons nos activités avec éthique, impartialité et transparence.",
      },
      {
        title: "Excellence technique",
        description:
          "Nous privilégions des approches rigoureuses fondées sur les données, les normes internationales et les meilleures pratiques.",
      },
      {
        title: "Innovation",
        description:
          "Nous développons des solutions nouvelles pour répondre aux défis émergents de la mobilité et de la sécurité routière.",
      },
      {
        title: "Collaboration",
        description:
          "Les progrès durables reposent sur des partenariats solides entre institutions, experts, communautés et partenaires techniques.",
      },
    ],
  },

  presence: {
    eyebrow: "Présence nationale",
    title: ["Présents dans ", "8 des 10", " régions du Cameroun"],
    intro:
      "Une présence régionale qui offre une capacité d’intervention progressive sur une grande partie du territoire national.",
    regionsCovered: "Régions couvertes",
    vocation: "Vocation : Afrique centrale",
    officialName: "Nom officiel",
    legalStatus: "Statut juridique",
    foundedYear: "Année de création",
    headquarters: "Siège social",
    interventionArea: "Zone d’intervention",
    domainsTitle: "Domaines d’expertise",
    domains: [
      "Sécurité routière",
      "Prévention",
      "Accidentologie",
      "Collecte et analyse des données",
      "Audits",
      "SIG",
      "Innovation numérique",
      "Formation",
      "Recherche appliquée",
    ],
    mapAria: "Carte stylisée du Cameroun indiquant le siège de GOSAFE à Yaoundé",
    mapHq: "Siège",
    mapCaption: "Carte stylisée · Siège social à Yaoundé",
  },

  humanImpact: {
    eyebrow: "Dimension humaine",
    title: ["", "Accompagner", " ceux qu’ils touchent."],
    intro:
      "La sécurité routière ne se limite pas aux données et à la technologie. GOSAFE accompagne les victimes d’accidents de la route vers leur reconstruction et leur réinsertion.",
    victimSupport: [
      {
        title: "Soutien psychosocial",
        description: "Un soutien psychosocial pour les personnes affectées par les accidents de la circulation.",
      },
      {
        title: "Assistance solidaire",
        description: "Une assistance solidaire apportée aux victimes d’accidents de la route.",
      },
      {
        title: "Réinsertion sociale",
        description: "Des actions favorisant la reconstruction et la réinsertion sociale des personnes affectées.",
      },
    ],
    citizenTitle: ["Une culture durable de la sécurité routière se construit ", "avec les citoyens", "."],
    cta: "S’engager à nos côtés",
    mottoLabel: "Notre devise",
    photoAlt: "Action de terrain de GOSAFE auprès des citoyens",
  },

  lulu: {
    eyebrow: "Histoire de Lulu",
    title: ["Lulu avait ", "deux jambes", "."],
    photoAlt: "Lulu, Ambassadeur de GOSAFE, souriant dans son fauteuil roulant, les pouces levés",
  },

  contact: {
    eyebrow: "Contact",
    title: ["", "Écrivons", " la suite ensemble."],
    intro:
      "Une question, un projet, une demande d’expertise ou l’envie de nous rejoindre : notre équipe vous répond et vous oriente vers le bon interlocuteur.",
    formKicker: "Formulaire de contact",
    formTitle: "Décrivez votre demande",
    requiredNote: ["Les champs marqués d’un ", " sont obligatoires."],
    reachUs: "Nous joindre",
    /** Same order as `contactChannels.phones` in content/gosafe.ts. */
    phoneLabels: ["Coordination terrain"],
    email: "E-mail",
    headquarters: "Siège social",
    interventionArea: "Zone d’intervention :",
    followUs: "Nous suivre",
    socialHandles: {
      facebook: "GOSAFE Association",
      instagram: "@gosafe.association",
      whatsapp: "Écrire à l’équipe",
    },
    communityCall: "rejoignez la communauté GOSAFE et relayez nos campagnes de prévention.",
  },

  contactForm: {
    name: "Nom complet",
    namePlaceholder: "Votre nom",
    organisation: "Organisation",
    organisationPlaceholder: "Institution, entreprise…",
    email: "E-mail",
    emailPlaceholder: "vous@exemple.com",
    phone: "Téléphone",
    subject: "Objet de la demande",
    subjects: [
      "Partenariat institutionnel",
      "Étude, audit ou expertise technique",
      "Formation & sensibilisation",
      "Signaler un point noir accidentogène",
      "Accompagnement des victimes",
      "Rejoindre GOSAFE",
      "Autre demande",
    ],
    message: "Votre message",
    messagePlaceholder: "Décrivez votre besoin, votre projet ou votre demande d’accompagnement.",
    consent: "J’autorise GOSAFE à utiliser ces informations pour répondre à ma demande.",
    submit: "Envoyer le message",
    mailSubjectPrefix: "[Site GOSAFE]",
    mailLabels: {
      name: "Nom :",
      organisation: "Organisation :",
      email: "E-mail :",
      phone: "Téléphone :",
      subject: "Objet :",
    },
    sentTitle: "Message prêt à partir",
    sentText:
      "Votre messagerie s’ouvre avec le récapitulatif de votre demande. Notre équipe revient vers vous dans les meilleurs délais.",
    sendAnother: "Envoyer une autre demande",
  },

  finalCta: {
    eyebrow: "Partenaires",
    title: ["Construisons ensemble une mobilité ", "plus sûre", "."],
    intro:
      "GOSAFE œuvre aux côtés des institutions publiques, des partenaires techniques, des collectivités territoriales, des entreprises, des organisations de la société civile et des citoyens pour contribuer durablement à la réduction de l’insécurité routière au Cameroun.",
    audienceAria: "Interlocuteurs de GOSAFE",
    contactTitle: "Nous contacter",
    headquarters: "Siège social",
    address: "Adresse",
    email: "E-mail",
    phone: "Téléphone",
    write: "Écrire à GOSAFE",
    comingSoon: "Les coordonnées officielles de contact seront communiquées prochainement sur ce site.",
  },

  footer: {
    backHomeAria: "retour en haut",
    navigation: "Navigation",
    discover: "Découvrir",
    sections: {
      chiffres: "En chiffres",
      mission: "Mission & vision",
      valeurs: "Nos valeurs",
      presence: "Présence nationale",
    },
    institution: "Institution",
    status: "Statut",
    founded: "Création :",
    headquarters: "Siège :",
    email: "E-mail :",
    phone: "Téléphone :",
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },
};

export type Dictionary = typeof fr;
export default fr;
