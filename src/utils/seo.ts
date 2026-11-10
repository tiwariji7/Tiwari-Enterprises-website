export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export const SITE_CONFIG = {
  name: 'Tiwari Enterprises',
  brandLine: 'Spaces. Crafted to Perfection.',
  positioning: 'Premium Aluminium, Glass & Architectural Solutions',
  domain: 'https://tiwarienterprises.in',
  defaultDescription: 'Tiwari Enterprises specialises in precision architectural aluminium systems and structural glass installations for luxury residences, commercial spaces, and villas in Pune and nearby areas.',
  phone: '+91 98220 00000', // Verified placeholder for lead capture
  whatsapp: '919822000000',
  email: 'contact@tiwarienterprises.in',
  city: 'Pune',
  state: 'Maharashtra',
  country: 'India',
  serviceAreas: ['Pune', 'Baner', 'Wakad', 'Hinjewadi', 'Kothrud', 'Hadapsar', 'Pimpri-Chinchwad'],
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_CONFIG.domain}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/favicon.svg`,
    image: `${SITE_CONFIG.domain}/images/hero/luxury-villa-facade.jpg`,
    description: SITE_CONFIG.defaultDescription,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5204',
      longitude: '73.8567',
    },
    areaServed: SITE_CONFIG.serviceAreas.map(area => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Maharashtra`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Architectural Aluminium & Glass Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Architectural Aluminium Systems & Windows',
            description: 'Thermal-break aluminium sliding windows, slimline casement doors, and structural curtain walls in Pune.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Architectural Glass Solutions',
            description: 'Toughened glass partitions, frameless glass railings, shower enclosures, and modern glass facades.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Secondary Steel & Ceiling Works',
            description: 'Precision structural steel framing, POP false ceilings, and interior architectural elements.',
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:30',
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.domain}${item.url}`,
    })),
  };
}

