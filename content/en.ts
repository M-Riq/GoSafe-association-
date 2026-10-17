import type { Dictionary } from "./fr";

/** English content — mirrors content/fr.ts key for key. */
const en: Dictionary = {
  meta: {
    title: "GOSAFE Association — Reducing the risk of accidents and saving lives",
    description:
      "GOSAFE Association is a Cameroonian organisation specialising in road safety, accident prevention, road crash data analysis and innovation for safer mobility.",
    ogTitle: "GOSAFE Association",
    ogDescription:
      "Preventing accidents. Understanding their causes. Innovating to reduce them. Supporting those they affect.",
    ogLocale: "en_GB",
  },

  common: {
    skipLink: "Skip to content",
    close: "Close",
    scrollHint: "Scroll →",
  },

  organization: {
    name: "GOSAFE Association",
    tagline: "Reducing the risk of accidents and saving lives",
    taglineEmphasis: 2,
    pillars: [
      "Preventing accidents.",
      "Understanding their causes.",
      "Innovating to reduce them.",
      "Supporting those they affect.",
    ],
    conviction: "Every preventable accident is a life that can be saved.",
    legalStatus: "Non-profit association legally registered in Cameroon",
    founded: "2024",
    headquarters: "Yaoundé, Cameroon",
    interventionArea: "Cameroon, with a Central African vocation",
    ambition:
      "To become a leading technical partner in Central Africa in road safety, road crash data analysis and innovation for sustainable mobility.",
  },

  navigation: ["Home", "About", "Our work", "Expertise", "Gallery", "Commitment", "Lulu’s story", "Contact"],

  navbar: {
    mainNav: "Main navigation",
    homeAria: "back to home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactCta: "Contact us",
    languageLabel: "Choose language",
    languageNames: { fr: "Français", en: "English" },
  },

  hero: {
    ctaPrimary: "Discover our work",
    ctaSecondary: "Contact us",
    facts: [
      { term: "Status", value: "Non-profit association" },
      { term: "Founded", value: "Founded in 2024" },
      { term: "Headquarters", value: "Yaoundé, Cameroon" },
      { term: "Presence", value: "8 of 10 regions" },
    ],
  },

  about: {
    eyebrow: "About us",
    title: ["A Cameroonian organisation working for ", "safer", " mobility."],
    intro:
      "GOSAFE Association is a Cameroonian organisation specialising in road safety, accident prevention, road crash data analysis and the development of innovative solutions for safer mobility.",
    photoAlt: "GOSAFE Association members gathered in front of a road safety awareness stand",
    photoBadge: "In the field",
    photoKicker: "Prevention & awareness",
    photoCaption: "A committed team raising awareness of road safety",
    convictionFooter: "GOSAFE’s founding conviction",
    audienceTitle: "Working alongside",
    audience: [
      "Public institutions",
      "Technical partners",
      "Local authorities",
      "Businesses",
      "Civil society",
      "Citizens",
    ],
    collaborationsTitle: "Collaborations within national initiatives",
    collaborations: [
      "Ministry of Transport",
      "Law enforcement agencies",
      "Partners committed to infrastructure and transport safety",
    ],
    approachTitle: "Integrated approach",
    approachCount: "5 dimensions",
    approachInputs: [
      "Technical expertise",
      "Field knowledge",
      "Data analysis",
      "Digital innovation",
      "Human support",
    ],
    approachOutputsTitle: "To deliver",
    approachOutputs: [
      "Reliable diagnostics",
      "Actionable recommendations",
      "Prevention actions tailored to local realities",
      "Support towards recovery and reintegration",
    ],
  },

  statistics: {
    eyebrow: "Our organisational capacity",
    title: ["A national network of committed volunteers, professionals and ", "experts", "."],
    intro:
      "This structure makes it possible to quickly assemble multidisciplinary teams for technical studies, cooperation projects, field missions and national awareness campaigns.",
    figures: [
      {
        label: "Active members",
        detail: "Directly involved in the governance, design, coordination and implementation of projects.",
      },
      {
        label: "Associate members",
        detail: "Available to mobilise according to the needs of missions and field campaigns.",
      },
      {
        label: "Regions covered",
        detail: "Out of Cameroon’s 10 regions, for a progressive intervention capacity across the national territory.",
      },
    ],
    photoAlt: "Participants at the 1st National Road Safety Forum in Yaoundé",
  },

  services: {
    eyebrow: "Our work",
    title: ["Our areas of ", "intervention", ""],
    intro:
      "GOSAFE works across the entire road safety value chain: from raising road users’ awareness to supporting victims, including data analysis and innovation.",
    items: [
      {
        title: "Prevention & awareness",
        description: "Awareness-raising and education of road users, design and delivery of prevention campaigns.",
      },
      {
        title: "Accident analysis",
        description: "Collection, processing and analysis of road traffic accident data.",
      },
      {
        title: "Identifying black spots",
        description: "Identification of accident black spots and decision-making support.",
      },
      {
        title: "Studies & audits",
        description: "Road safety studies, audits and technical analyses.",
      },
      {
        title: "Digital innovation",
        description: "Research, innovation and development of digital solutions applied to mobility.",
      },
      {
        title: "Victim support",
        description: "Psychosocial support, solidarity assistance and actions promoting social reintegration.",
      },
      {
        title: "Institutional support",
        description: "Technical support for public institutions, local authorities and development partners.",
      },
    ],
    ctaKicker: "Let’s work together",
    ctaTitle: "Institutions, local authorities, businesses or technical partners?",
    ctaLink: "Talk to GOSAFE",
  },

  partners: {
    eyebrow: "Our partners",
    title: ["Our ", "partners", ""],
    intro:
      "GOSAFE works alongside public institutions and technical partners committed to safer mobility in Cameroon. Together, we combine authority, expertise and field action to achieve a lasting reduction in road accidents.",
    names: {
      cpcs: "CPCS Transcom Limited",
      mintransport: "Ministry of Transport",
      mintp: "Ministry of Public Works",
      gendarmerie: "National Gendarmerie",
    },
    enlargeLogo: "Enlarge logo:",
    logoDialog: "Partner logo",
    logoAlt: "Logo —",
  },

  expertise: {
    eyebrow: "Multidisciplinary expertise",
    title: ["Many disciplines. ", "One goal", ": saving lives."],
    intro:
      "GOSAFE’s strength lies in the complementary skills brought together within its network of members, volunteers and experts — to address road safety in its technical, human, institutional, legal and technological dimensions.",
    domainsAria: "Areas of expertise",
    nodes: ["Road safety", "Engineering & innovation", "Governance & law", "Field operations", "Citizens"],
    centerKicker: "One goal",
    centerLines: ["Saving", "lives"],
    diagramCaption: "Five areas of expertise converge on a common goal: saving lives.",
    clusters: [
      {
        title: "Road safety & transport",
        profiles: [
          "Road safety experts",
          "Engineers in road safety training programme planning and management",
          "Accident research specialists",
          "Defensive, preventive and professional driving instructors",
          "Pre-licence and post-licence driving instructors",
          "Experienced drivers in categories A, B, C, D, E and G",
        ],
      },
      {
        title: "Analysis, engineering & innovation",
        profiles: [
          "Computer engineers",
          "Statistics and data analysis engineers",
          "Risk management specialists",
          "Experts in applied research, innovation and digital solutions",
        ],
      },
      {
        title: "Governance & legal expertise",
        profiles: ["Lawyers and doctors of law", "Specialists in ethics, professional conduct and integrity"],
      },
      {
        title: "Field operations & interventions",
        profiles: [
          "Vehicle maintenance professionals",
          "Specialised mechanics",
          "First aid specialists",
          "Law enforcement officers specialised in road safety",
        ],
      },
    ],
  },

  citizenEngagement: {
    title: "Citizen engagement",
    description:
      "Beyond its specialist profiles, GOSAFE brings together many committed citizens who volunteer to take part in:",
    actions: [
      "prevention actions",
      "awareness campaigns",
      "promoting a lasting road safety culture",
    ],
  },

  gallery: {
    eyebrow: "Gallery",
    title: ["Our work, ", "in pictures", ""],
    intro:
      "Back in the field: forums, awareness campaigns and meetings with road users across Cameroon.",
    categories: {
      forum: "National Road Safety Forum",
      "moto-taxi": "Motorcycle taxi awareness",
    },
    all: "View all",
    filterAria: "Filter the gallery by category",
    hint: "Click a photo to enlarge it",
    enlarge: "Enlarge:",
    photo: "photo",
    photoFallback: "Photo",
  },

  mission: {
    eyebrow: "Mission · Vision · Values",
    title: ["What ", "guides", " us"],
    missionLabel: "Our mission",
    mission:
      "To contribute to a lasting reduction in road accidents and their human, social and economic consequences through prevention, scientific data analysis, capacity building, the development of innovative solutions and support for victims towards their recovery and reintegration.",
    visionLabel: "Our vision",
    vision:
      "To build an ecosystem where road safety decisions are based on reliable data, innovative technologies and close collaboration between public authorities, technical partners, researchers, the private sector and citizens, in order to save lives on the roads for good.",
    valuesTitle: "Our values",
    values: [
      {
        title: "Commitment",
        description: "We place the protection of human life at the heart of everything we do.",
      },
      {
        title: "Integrity",
        description: "We conduct our activities with ethics, impartiality and transparency.",
      },
      {
        title: "Technical excellence",
        description:
          "We favour rigorous approaches based on data, international standards and best practices.",
      },
      {
        title: "Innovation",
        description: "We develop new solutions to meet the emerging challenges of mobility and road safety.",
      },
      {
        title: "Collaboration",
        description:
          "Lasting progress relies on strong partnerships between institutions, experts, communities and technical partners.",
      },
    ],
  },

  presence: {
    eyebrow: "National presence",
    title: ["Present in ", "8 of the 10", " regions of Cameroon"],
    intro: "A regional presence that provides a progressive intervention capacity across much of the national territory.",
    regionsCovered: "Regions covered",
    vocation: "Vocation: Central Africa",
    officialName: "Official name",
    legalStatus: "Legal status",
    foundedYear: "Year founded",
    headquarters: "Headquarters",
    interventionArea: "Area of intervention",
    domainsTitle: "Areas of expertise",
    domains: [
      "Road safety",
      "Prevention",
      "Accident research",
      "Data collection and analysis",
      "Audits",
      "GIS",
      "Digital innovation",
      "Training",
      "Applied research",
    ],
    mapAria: "Stylised map of Cameroon showing GOSAFE’s headquarters in Yaoundé",
    mapHq: "Headquarters",
    mapCaption: "Stylised map · Headquarters in Yaoundé",
  },

  humanImpact: {
    eyebrow: "Human dimension",
    title: ["", "Supporting", " those they affect."],
    intro:
      "Road safety is not just about data and technology. GOSAFE supports road accident victims towards their recovery and reintegration.",
    victimSupport: [
      {
        title: "Psychosocial support",
        description: "Psychosocial support for people affected by road traffic accidents.",
      },
      {
        title: "Solidarity assistance",
        description: "Solidarity assistance provided to road accident victims.",
      },
      {
        title: "Social reintegration",
        description: "Actions promoting the recovery and social reintegration of those affected.",
      },
    ],
    citizenTitle: ["A lasting road safety culture is built ", "with citizens", "."],
    cta: "Join us",
    mottoLabel: "Our motto",
    photoAlt: "GOSAFE field action with citizens",
  },

  lulu: {
    eyebrow: "Lulu’s story",
    title: ["Lulu had ", "two legs", "."],
    photoAlt: "Lulu, GOSAFE Ambassador, smiling in his wheelchair with his thumbs up",
  },

  contact: {
    eyebrow: "Contact",
    title: ["Let’s ", "write", " the next chapter together."],
    intro:
      "A question, a project, a request for expertise or a wish to join us: our team will answer and direct you to the right person.",
    formKicker: "Contact form",
    formTitle: "Describe your request",
    requiredNote: ["Fields marked with an ", " are required."],
    reachUs: "Reach us",
    phoneLabels: ["Field coordination"],
    email: "Email",
    headquarters: "Headquarters",
    interventionArea: "Area of intervention:",
    followUs: "Follow us",
    socialHandles: {
      facebook: "GOSAFE Association",
      instagram: "@gosafe.association",
      whatsapp: "Message the team",
    },
    communityCall: "join the GOSAFE community and share our prevention campaigns.",
  },

  contactForm: {
    name: "Full name",
    namePlaceholder: "Your name",
    organisation: "Organisation",
    organisationPlaceholder: "Institution, company…",
    email: "Email",
    emailPlaceholder: "you@example.com",
    phone: "Phone",
    subject: "Subject of your request",
    subjects: [
      "Institutional partnership",
      "Study, audit or technical expertise",
      "Training & awareness",
      "Report an accident black spot",
      "Victim support",
      "Join GOSAFE",
      "Other request",
    ],
    message: "Your message",
    messagePlaceholder: "Describe your need, your project or your request for support.",
    consent: "I authorise GOSAFE to use this information to respond to my request.",
    submit: "Send message",
    mailSubjectPrefix: "[GOSAFE Website]",
    mailLabels: {
      name: "Name:",
      organisation: "Organisation:",
      email: "Email:",
      phone: "Phone:",
      subject: "Subject:",
    },
    sentTitle: "Message ready to send",
    sentText:
      "Your email app is opening with a summary of your request. Our team will get back to you as soon as possible.",
    sendAnother: "Send another request",
  },

  finalCta: {
    eyebrow: "Partners",
    title: ["Let’s build ", "safer", " mobility together."],
    intro:
      "GOSAFE works alongside public institutions, technical partners, local authorities, businesses, civil society organisations and citizens to contribute to a lasting reduction in road insecurity in Cameroon.",
    audienceAria: "GOSAFE’s stakeholders",
    contactTitle: "Contact us",
    headquarters: "Headquarters",
    address: "Address",
    email: "Email",
    phone: "Phone",
    write: "Write to GOSAFE",
    comingSoon: "Official contact details will be published on this site soon.",
  },

  footer: {
    backHomeAria: "back to top",
    navigation: "Navigation",
    discover: "Discover",
    sections: {
      chiffres: "Key figures",
      mission: "Mission & vision",
      valeurs: "Our values",
      presence: "National presence",
    },
    institution: "Institution",
    status: "Status",
    founded: "Founded:",
    headquarters: "Headquarters:",
    email: "Email:",
    phone: "Phone:",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export default en;
