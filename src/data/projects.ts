export interface Project {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial';
  discipline: 'Aluminium' | 'Glass' | 'Combined';
  location: string;
  summary: string;
  brief: string;
  scope: string[];
  materials: string[];
  featuredImage: string;
  galleryImages: string[];
  year: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'baner-residence-minimal-windows',
    title: 'Private Villa, Baner',
    category: 'Residential',
    discipline: 'Aluminium',
    location: 'Baner, Pune',
    summary: 'Floor-to-ceiling thermal-break slimline sliding systems designed to integrate interior living spaces with exterior garden courtyards.',
    brief: 'The homeowner and architectural team required expansive 11-foot unobstructed openings while ensuring wind resistance, water tightness during Pune monsoons, and acoustic dampening.',
    scope: [
      'Precision laser survey and sub-frame preparation',
      'Installation of 3-track concealed bottom-threshold sliding doors',
      'Structural bronze anodised exterior louvers for solar shielding',
      'Integrated heavy-duty EPDM weather seals and multi-point perimeter locks',
    ],
    materials: [
      '6063-T6 Architectural Grade Extruded Aluminium',
      '28mm High-Performance Low-E Double Glazed Units (DGU)',
      'Custom European stainless steel roller bearings (rated for 300kg per sash)',
      'Class 1 Anodised Matt Bronze architectural finish',
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    ],
    year: '2025',
  },
  {
    slug: 'koregaon-park-acoustic-partitions',
    title: 'Creative Studio, Koregaon Park',
    category: 'Commercial',
    discipline: 'Glass',
    location: 'Koregaon Park, Pune',
    summary: 'Minimalist acoustic glass partitions with matte black slimline profiles and frameless architectural pivot doors.',
    brief: 'Convert an expansive open-plan creative loft into private acoustically treated consultation rooms without sacrificing the ambient daylight penetration.',
    scope: [
      'Full-height 12mm acoustic laminated glass wall installation',
      'Precision concealed top and bottom architectural channels',
      'Frameless pivot doors fitted with heavy-duty oil-bath floor springs',
      'Bespoke solid aluminium offset tubular pull handles',
    ],
    materials: [
      '12.76mm Acoustic PVB Laminated Toughened Glass',
      'Architectural grade matte black hard-anodised slimline profiles',
      'Concealed German pivot mechanisms and acoustic perimeter drop seals',
    ],
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
    ],
    year: '2025',
  },
  {
    slug: 'wakad-penthouse-frameless-railings',
    title: 'Duplex Penthouse, Wakad',
    category: 'Residential',
    discipline: 'Glass',
    location: 'Wakad, Pune',
    summary: 'Continuous frameless structural glass balustrades with recessed base shoe channel engineered for elevated wind loads.',
    brief: 'A continuous, uninterrupted 360-degree glass perimeter for a 22nd-floor terrace garden requiring verified structural deflection tests.',
    scope: [
      'Core drilling and anchoring into RCC slab with chemical anchors',
      'Installation of heavy-duty continuous aluminium base shoe',
      'Precision alignment of 17.52mm laminated toughened glass panels',
      'Installation of minimal SS316 slim top safety cap profile',
    ],
    materials: [
      '17.52mm SentryGlas (SGP) Laminated Ultra-Clear Glass',
      'Structural 6005-T5 architectural aluminium base profile',
      'Marine-grade SS316 top cap with dry-glaze gasket clamping',
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
    year: '2024',
  },
  {
    slug: 'prabhat-road-commercial-facade',
    title: 'Corporate Headquarters, Prabhat Road',
    category: 'Commercial',
    discipline: 'Aluminium',
    location: 'Prabhat Road, Pune',
    summary: 'Semi-unitised architectural curtain wall facade integrating high-performance solar control glass with custom aluminium spandrel panels.',
    brief: 'Refurbish an aging commercial building facade to achieve modern energy ratings, superior thermal insulation, and an iconic contemporary aesthetic.',
    scope: [
      'Structural 3D laser scanning of existing civil structure',
      'Fabrication and anchoring of custom structural aluminium mullions and transoms',
      'Structural silicone glazing (SSG) with double-glazed solar-shield panels',
      'Integration of concealed openable top-hung ventilation vents',
    ],
    materials: [
      'Thermally broken extruded structural aluminium framing',
      '30mm Solarban 70 high-performance double glazed units',
      'Dow Corning 983 two-part structural silicone sealant',
    ],
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80',
    ],
    year: '2024',
  },
  {
    slug: 'kothrud-courtyard-sliding-systems',
    title: 'Bespoke Residence, Kothrud',
    category: 'Residential',
    discipline: 'Aluminium',
    location: 'Kothrud, Pune',
    summary: 'Corner-opening pocket sliding door systems providing seamless continuity between living pavilion and traditional inner courtyard.',
    brief: 'Deliver a pillar-less 90-degree corner sliding configuration that pockets completely into wall cavities when open.',
    scope: [
      'Engineering of cantilevered header beam track and concealed pocket receivers',
      'Precision mitre fabrication with reinforced mechanical corner cleats',
      'Concealed sub-floor drainage channels for heavy monsoon runoff',
    ],
    materials: [
      'Slim-profile architectural thermal-break aluminium systems',
      'Clear neutral insulated double glazing',
      'Anodised natural champagne matte coating',
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    ],
    year: '2024',
  },
  {
    slug: 'senapati-bapat-executive-suites',
    title: 'Executive Suites, Senapati Bapat Road',
    category: 'Commercial',
    discipline: 'Glass',
    location: 'SB Road, Pune',
    summary: 'Double-glazed switchable smart privacy glass walls with brushed gold anodised aluminium framing.',
    brief: 'Create versatile boardrooms that instantly transition from transparent showcase environments to confidential meeting spaces at the push of a button.',
    scope: [
      'Installation of PDLC smart switchable glass panels',
      'Concealed low-voltage wiring and RF remote control modules',
      'Bespoke architectural brushed gold anodised perimeter frames',
    ],
    materials: [
      '13.52mm PDLC Polymer Dispersed Liquid Crystal Smart Glass',
      'Custom brushed architectural gold hard-anodised aluminium sections',
      'Integrated acoustic perimeter seals',
    ],
    featuredImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    ],
    year: '2024',
  },
];

