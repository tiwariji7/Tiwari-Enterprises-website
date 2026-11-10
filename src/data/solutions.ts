export interface Solution {
  slug: string;
  title: string;
  isPrimary: boolean;
  shortDescription: string;
  heroHeadline: string;
  heroDescription: string;
  image: string;
  applications: {
    title: string;
    description: string;
    configurations: string[];
    finishes: string[];
    hardwareNotes: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  puneFocus: string;
}

export const SOLUTIONS: Record<string, Solution> = {
  aluminium: {
    slug: 'aluminium',
    title: 'Architectural Aluminium Solutions',
    isPrimary: true,
    shortDescription: 'Precision engineered thermal-break sliding systems, slimline casement windows, and custom structural facades.',
    heroHeadline: 'Engineered Precision in Architectural Aluminium.',
    heroDescription: 'From minimalist floor-to-ceiling sliding systems to heavy-duty structural facades, we craft high-performance aluminium solutions tailored for contemporary residences, commercial buildings, and luxury villas across Pune.',
    image: '/images/hero/hero-sliding.webp',
    applications: [
      {
        title: 'Minimalist Slimline Sliding Systems',
        description: 'Engineered for expansive openings with sightlines as slender as 18mm–24mm. Designed to withstand wind loads while offering effortless fingertip sliding glide.',
        configurations: ['2-Track, 3-Track, and 4-Track sliding', 'Concealed pocket sliders', '90-degree corner opening without center post', 'Motorized automated options'],
        finishes: ['Class 1 Architectural Anodising (Natural, Bronze, Champagne, Black)', 'Super Durable Polyester Powder Coating (Qualicoat Class 2)'],
        hardwareNotes: 'Heavy-duty stainless steel quad rollers rated up to 400kg per sash, concealed multi-point espagnolette locking.',
      },
      {
        title: 'High-Performance Casement Windows & Doors',
        description: 'Tilt-and-turn and side-hung windows providing maximum acoustic insulation, airtightness, and monsoon water resistance.',
        configurations: ['Open-out / Open-in casements', 'Tilt-and-turn dual function', 'Fixed architectural vision panels', 'Top-hung ventilator sashes'],
        finishes: ['Textured architectural mattes', 'Wood-grain sublimation finishes', 'Custom RAL colour matching'],
        hardwareNotes: '3D adjustable heavy-duty friction stays, compression gaskets with vulcanized corners.',
      },
      {
        title: 'Curtain Walls & Commercial Facades',
        description: 'Stick and semi-unitised aluminium curtain wall systems engineered for commercial structures, retail showrooms, and institutional headquarters.',
        configurations: ['Concealed structural glazing', 'Cap-profile curtain walling', 'Integrated openable vents with concealed actuators'],
        finishes: ['Fluorocarbon PVDF coating for 20-year UV stability', 'Hard anodised architectural grey'],
        hardwareNotes: 'Custom cast-in anchors, structural thermal break barriers, and structural silicone jointing.',
      },
      {
        title: 'Architectural Louvers & Sunshades',
        description: 'Aerofoil and box-section aluminium louvers offering privacy, solar heat gain reduction, and distinctive building aesthetics.',
        configurations: ['Fixed horizontal/vertical louvers', 'Operable motorized solar tracking blades', 'Acoustic louvers for plant rooms'],
        finishes: ['Powder-coated architectural bronze', 'Anodised natural silver'],
        hardwareNotes: 'Concealed bracket fixing with vibration-dampening EPDM isolators.',
      },
    ],
    specifications: [
      { label: 'Alloy Grade', value: 'Architectural 6063-T6 virgin extrusion' },
      { label: 'Glazing Capability', value: 'Single, DGU up to 36mm, and laminated glass' },
      { label: 'Monsoon Proofing', value: 'Tested for Pune wind pressures & heavy tropical rainfall' },
      { label: 'Acoustic Rating', value: 'Up to 42 dB sound attenuation with acoustic DGU' },
    ],
    puneFocus: 'Customized specifically for Pune microclimates — balancing summer heat deflection with monsoon water drainage in areas like Baner, Wakad, Kothrud, and Prabhat Road.',
  },
  glass: {
    slug: 'glass',
    title: 'Architectural Glass Solutions',
    isPrimary: true,
    shortDescription: 'Toughened glass partitions, frameless balustrades, shower enclosures, and bespoke structural glass installations.',
    heroHeadline: 'Clarity, Safety & Structural Elegance in Glass.',
    heroDescription: 'Transforming interior daylight and exterior facades through safety-engineered toughened glass, frameless railings, acoustic partitions, and custom architectural glazing.',
    image: '/images/hero/hero-partitions.webp',
    applications: [
      {
        title: 'Architectural Glass Railings & Balustrades',
        description: 'Continuous frameless structural glass balustrades with recessed base shoe profiles or minimalist stainless steel standoff brackets.',
        configurations: ['Floor-recessed continuous aluminium channel', 'Side-mounted SS316 spigots and point fixings', 'Minimal slimline slotted handrail'],
        finishes: ['Ultra-clear low-iron glass', 'Tinted bronze and grey glass', 'Frosted acid-etched privacy bands'],
        hardwareNotes: 'SGP / PVB structural laminated glass with dry-glaze gasket system for zero mess.',
      },
      {
        title: 'Acoustic Office & Interior Partitions',
        description: 'Demountable and full-height glass partition walls for corporate boardrooms, creative studios, and luxury residential zoning.',
        configurations: ['Single glazed (10mm / 12mm)', 'Double glazed acoustic systems (Rw up to 45dB)', 'Full-height pivot and sliding doors'],
        finishes: ['Matte black slimline profiles', 'Anodised satin brass framing', 'Linear reeded (fluted) architectural glass'],
        hardwareNotes: 'Concealed German pivot hinges, magnetic latch locks, and automatic drop seals.',
      },
      {
        title: 'Frameless Shower Enclosures',
        description: 'Custom-measured tempered glass shower cubicles with water-repellent surface treatments and marine-grade fittings.',
        configurations: ['Corner walk-in screens', 'Hinged 90-degree enclosures', 'Sliding roller shower systems with soft-close'],
        finishes: ['Clear toughened glass', 'Fluted reeded glass for subtle privacy', 'Brushed brass, rose gold, or matte black hardware'],
        hardwareNotes: 'Solid forged brass hinges, magnetic anti-leak seals, anti-limescale glass coating.',
      },
      {
        title: 'Skylights, Canopies & Glass Bridges',
        description: 'Walkable structural glass floors, entrance canopies, and automated opening architectural skylights.',
        configurations: ['Laminated safety glass canopies', 'Insulated thermal skylights', 'Non-slip etched walkable panels'],
        finishes: ['Solar control reflective tinting', 'Ceramic frit printed safety patterns'],
        hardwareNotes: 'Engineered SS 316 spider fittings, tension rods, and silicone expansion seals.',
      },
    ],
    specifications: [
      { label: 'Glass Types', value: 'Toughened (tempered), PVB/SGP laminated, DGU, fluted, acoustic' },
      { label: 'Safety Compliance', value: 'BIS 2553 certified architectural safety glass' },
      { label: 'Thickness Range', value: '8mm to 25.52mm multi-layer structural configurations' },
      { label: 'Hardware Quality', value: 'Grade 304/316 stainless steel & solid brass components' },
    ],
    puneFocus: 'Engineered for luxury homes, high-rise balconies, and modern workspaces across Pune, ensuring strict structural safety during stormy monsoon gusts.',
  },
  steel: {
    slug: 'steel',
    title: 'Secondary Structural Steel Works',
    isPrimary: false,
    shortDescription: 'Precision secondary steel sub-frames, architectural staircases, and heavy canopy supports.',
    heroHeadline: 'Sub-Structure Engineering & Architectural Steel.',
    heroDescription: 'Robust, clean-tolerance secondary steel frameworks engineered to support large-span glass installations, heavy cantilevered canopies, and custom architectural features.',
    image: '/images/work/prabhat-facade.webp',
    applications: [
      {
        title: 'Glass Sub-Frame Supports',
        description: 'Heavy gauge steel lintels, posts, and structural brackets engineered for oversized glass doors and facade attachments.',
        configurations: ['ISMB & RHS/SHS hollow sections', 'Concealed floor tie-backs', 'Adjustable facade anchor brackets'],
        finishes: ['Epoxy zinc-rich primer with polyurethane topcoat', 'Hot-dip galvanising'],
        hardwareNotes: 'Grade 8.8 structural high-tensile bolts, certified full-penetration welding.',
      },
      {
        title: 'Architectural Feature Stairs & Pergolas',
        description: 'Minimal floating stringer staircases and outdoor steel pergola frameworks ready for glass cladding.',
        configurations: ['Cantilevered mono-stringer stairs', 'Clean-welded courtyard pergolas'],
        finishes: ['Architectural charcoal matte paint', 'Rust-resistant primers'],
        hardwareNotes: 'Chemical anchor stud fixings into primary RCC structures.',
      },
    ],
    specifications: [
      { label: 'Material Standards', value: 'IS 2062 Grade E250 / E350 Structural Steel' },
      { label: 'Corrosion Protection', value: 'Industrial anti-corrosion barrier coating' },
      { label: 'Integration', value: 'Seamless coordination with aluminium and glass assemblies' },
    ],
    puneFocus: 'Serving as the backbone for architectural glass & aluminium projects throughout Pune.',
  },
  ceilings: {
    slug: 'ceilings',
    title: 'POP & Architectural False Ceilings',
    isPrimary: false,
    shortDescription: 'Acoustic bulkheads, perimeter lighting coves, and seamless gypsum ceiling integration.',
    heroHeadline: 'Seamless Architectural Ceilings & Lighting Coves.',
    heroDescription: 'Tailored false ceiling and perimeter bulkhead systems designed to integrate flush curtain tracks, concealed linear lighting, and air-conditioning diffusers alongside glass facades.',
    image: '/images/work/kothrud-courtyard.webp',
    applications: [
      {
        title: 'Perimeter Curtain & Blind Pockets',
        description: 'Concealed ceiling recesses designed specifically above aluminium sliding systems for motorized blinds and drapery.',
        configurations: ['Double-pocket blind recess', 'Integrated indirect LED coves', 'Flush shadow-gap borders'],
        finishes: ['Zero-crack skimmed plaster finish', 'Acoustic perforation options'],
        hardwareNotes: 'Heavy-gauge GI framework with perimeter spring clips.',
      },
    ],
    specifications: [
      { label: 'Core Board', value: 'High-density moisture-resistant gypsum & Saint-Gobain Gyproc' },
      { label: 'Framing Gauge', value: '0.50mm BMT zinc-coated galvanized iron grid' },
    ],
    puneFocus: 'Essential complementary detailing for high-end residential interiors in Pune.',
  },
  interiors: {
    slug: 'interiors',
    title: 'Bespoke Interior Architectural Works',
    isPrimary: false,
    shortDescription: 'Custom architectural metal shelving, glass display vitrines, and interior space dividers.',
    heroHeadline: 'Refined Details for Contemporary Interiors.',
    heroDescription: 'Bringing the same architectural discipline of aluminium and glass to bespoke interior elements: room dividers, vanity mirrors, and custom display elements.',
    image: '/images/hero/hero-glazing.webp',
    applications: [
      {
        title: 'Bespoke Slatted Screens & Metal Panelling',
        description: 'Architectural room dividers with slim metal vertical fins and reeded glass inserts.',
        configurations: ['Floor-to-ceiling slatted room dividers', 'Metal-framed glass vitrines'],
        finishes: ['Powder-coated champagne, matte charcoal, and brushed gold'],
        hardwareNotes: 'Precision concealed screw assembly with invisible anchor points.',
      },
    ],
    specifications: [
      { label: 'Design Intent', value: 'Custom fabrication to architect drawings' },
      { label: 'Material Blends', value: 'Aluminium, brass trims, acoustic glass, and LED integration' },
    ],
    puneFocus: 'Crafted for modern homes, luxury penthouses, and executive offices across Pune.',
  },
};

