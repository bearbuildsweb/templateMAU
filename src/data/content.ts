import { PortfolioItem, Testimonial } from '../types';
import classicWhiteWeddingImg from '../assets/images/classic_white_wedding_1788328016957.jpg';
import sandtonPenthouseGlamImg from '../assets/images/sandton_penthouse_fullglam_1788328363873.jpg';
import traditionalZuluWeddingImg from '../assets/images/traditional_zulu_wedding_1788328033735.jpg';
import sowetoFamilyGlamImg from '../assets/images/soweto_family_glam_1788328048549.jpg';
import hydeParkModernBrideImg from '../assets/images/hyde_park_modern_bride_1788328062678.jpg';
import testimonialZaneleImg from '../assets/images/testimonial_zanele_1788342425833.jpg';
import testimonialNandiImg from '../assets/images/testimonial_nandi_1788342438187.jpg';
import testimonialThandoImg from '../assets/images/testimonial_thando_1788342456476.jpg';
import testimonialLesediImg from '../assets/images/testimonial_lesedi_1788342467290.jpg';

export const SITE_CONFIG = {
  brandName: 'BEAUTY BY LIYANA',
  tagline: 'Refined makeup artistry for Johannesburg.',
  subheadline: 'Bespoke soft glam, full glam, bridal & traditional artistry across Johannesburg.',
  whatsappNumber: '+27680246914',
  whatsappDisplay: '068 024 6914',
  email: 'bearbuildsweb@gmail.com',
  instagram: '@beautybyliyana',
  instagramUrl: 'https://instagram.com',
  location: 'Johannesburg (Sandton, Rosebank, Soweto, Midrand & On-Location)',
  studioAddress: 'Sandton Atelier & On-Location across Gauteng',
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'look-1',
    title: 'The Classic White Wedding',
    category: 'BRIDAL',
    subtitle: 'Timeless silk veil & luminous bridal radiance',
    image: classicWhiteWeddingImg,
    aspectRatio: 'tall',
    featuredQuote: '“Weightless, ethereal bridal radiance engineered for timeless white wedding portraits.”',
    description: 'Bespoke classic white wedding artistry featuring soft champagne lids, seamless skin hydration, and tear-proof 16-hour longevity.',
    technique: 'Micro-sculpting, targeted hydration prep & tear-proof lash bonding.',
    palette: ['#F5E6DA', '#D4A373', '#9D8189', '#4A3B32'],
    keyProducts: ['Charlotte Tilbury', 'Dior Backstage', 'Fenty Beauty', 'Danessa Myricks'],
    client: 'Muldersdrift Estate White Wedding',
    year: '2025'
  },
  {
    id: 'look-2',
    title: 'Sandton Penthouse Glam',
    category: 'FULL GLAM',
    subtitle: 'High-impact red carpet contour & bronze smoke',
    image: sandtonPenthouseGlamImg,
    aspectRatio: 'portrait',
    featuredQuote: '“Sculpted architectural contour with seamless molten glow.”',
    description: 'Ultra-refined full glam exploring sultry smoked cocoa lids, perfected warm satin skin, and high-definition bone sculpting.',
    technique: 'Layered contour sculpting & transfer-resistant veil.',
    palette: ['#1C1917', '#78350F', '#D97706', '#FEF3C7'],
    keyProducts: ['Pat McGrath Labs', 'Fenty Pro Filt\'r', 'Juvia\'s Place'],
    client: 'Sandton Gala Evening',
    year: '2025'
  },
  {
    id: 'look-3',
    title: 'Rosebank Sunday Glow',
    category: 'SOFT GLAM',
    subtitle: 'Skin-first brunch & intimate celebration',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    featuredQuote: '“Skin that breathes with an effortless lit-from-within flush.”',
    description: 'Fresh, luminous skin paired with fluffy natural brows, dewy terracotta cheek flush, and rich brown-lined butter gloss.',
    technique: 'Lymphatic skin prep, underpainting & warm micro-bronzing.',
    palette: ['#B45309', '#D97706', '#E5E7EB', '#78350F'],
    keyProducts: ['NARS Sheer Glow', 'Rare Beauty Blush', 'Fenty Gloss Bomb'],
    client: 'Rosebank Intimate Celebration',
    year: '2025'
  },
  {
    id: 'look-4',
    title: 'Traditional Zulu Township Wedding',
    category: 'BRIDAL',
    subtitle: 'Soweto celebration, regal isicholo & traditional beadwork',
    image: traditionalZuluWeddingImg,
    aspectRatio: 'wide',
    featuredQuote: '“Honouring Zulu heritage and township jubilation with vibrant, all-day radiant beauty.”',
    description: 'Warm golden amber complexion curated to harmonize with vibrant Zulu beadwork, isicholo headwear, and high-energy Soweto wedding festivities.',
    technique: 'Melanin-matched pigment blending, sweat-resistant base & waterproof seal.',
    palette: ['#881337', '#B45309', '#FDE68A', '#1F2937'],
    keyProducts: ['MAC Cosmetics', 'Danessa Myricks Yummy Skin', 'Huda Beauty', 'Fenty Beauty'],
    client: 'Soweto Zulu Traditional Wedding',
    year: '2025'
  },
  {
    id: 'look-5',
    title: 'Wits Honors Radiance',
    category: 'SOFT GLAM',
    subtitle: 'Graduation & milestone celebration',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait',
    featuredQuote: '“Clean, confident, camera-ready skin for life’s milestone moments.”',
    description: 'Soft-focus daytime glam with subtle espresso crease definition, cashmere lips, and flashback-free under-eye setting.',
    technique: 'Pinpoint concealing & micro-fine silica setting.',
    palette: ['#E5D4C0', '#D6A28C', '#8C6250', '#2E282A'],
    keyProducts: ['Laura Mercier Translucent Honey', 'Armani Luminous Silk', 'Kevyn Aucoin'],
    client: 'Wits Great Hall Ceremony',
    year: '2025'
  },
  {
    id: 'look-6',
    title: 'Fourways Matric Ball',
    category: 'FULL GLAM',
    subtitle: 'Sultry bronze cat-eye & velvety ombre nude',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    featuredQuote: '“Dramatic, magnetic, and flawless under flash photography.”',
    description: 'Smoked chocolate feline liner, 3D individual lash mapping, and custom brown-and-honey ombre lips.',
    technique: 'Feline diffuse wing & layered liquid blush.',
    palette: ['#451A03', '#92400E', '#FDE68A', '#1F2937'],
    keyProducts: ['Anastasia Beverly Hills', 'Fenty Beauty', 'Patrick Ta'],
    client: 'Fourways Private Ball',
    year: '2025'
  },
  {
    id: 'look-7',
    title: 'Braamfontein Golden Hour',
    category: 'SOFT GLAM',
    subtitle: 'Intimate date night & birthday glam',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait',
    featuredQuote: '“Soft warmth that effortlessly accentuates natural facial symmetry.”',
    description: 'Warm monochrome tones, laminated brow styling, and glowing skin tailored for intimate dinner lighting.',
    technique: 'Under-painting & golden cream bronzer buffing.',
    palette: ['#E7D7C1', '#BF988F', '#A77573', '#684551'],
    keyProducts: ['Lys Beauty', 'NARS', 'Victoria Beckham Beauty'],
    client: 'Braamfontein Celebration',
    year: '2025'
  },
  {
    id: 'look-8',
    title: 'Midrand Sunset Gala',
    category: 'FULL GLAM',
    subtitle: 'Molten bronze metallic lid & sculpted cheekbone',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait',
    featuredQuote: '“Sculptural, high-contrast African luxury glam.”',
    description: 'Molten bronze foil eyeshadow, glass skin highlights, and deep chocolate contour tailored for gala evening flash.',
    technique: 'Layered foil pigments & structural bone mapping.',
    palette: ['#1C1917', '#92400E', '#FBBF24', '#0F172A'],
    keyProducts: ['Pat McGrath Labs', 'Danessa Myricks Colorfix', 'MAC Pro'],
    client: 'Midrand Gala Evening',
    year: '2025'
  },
  {
    id: 'look-9',
    title: 'Soweto Noir Luxe',
    category: 'FULL GLAM',
    subtitle: 'High-fashion family celebration & velvet plum full glam',
    image: sowetoFamilyGlamImg,
    aspectRatio: 'portrait',
    featuredQuote: '“A striking high-fashion family portrait celebrating love, lineage, and modern luxury.”',
    description: 'Editorial full glam family styling with sculpted bone structure, deep velvet plum lip, and radiant high-definition skin engineered for celebratory family photography in Soweto.',
    technique: 'Precision lip architecture, bone mapping & micro-powder dusting.',
    palette: ['#4C0519', '#881337', '#FDE047', '#1E1B4B'],
    keyProducts: ['Gucci Beauty', 'Lisa Eldridge', 'NARS Audacious', 'Pat McGrath Labs'],
    client: 'Soweto Family Celebration',
    year: '2025'
  },
  {
    id: 'look-10',
    title: 'Hyde Park Modern Bride',
    category: 'BRIDAL',
    subtitle: 'Champagne pearl radiance & soft glam bridal',
    image: hydeParkModernBrideImg,
    aspectRatio: 'tall',
    featuredQuote: '“Effortless luxury that felt lightweight from vows to after-party.”',
    description: 'Soft champagne eyeshadow with delicate flutter lashes, velvet contour, and decolletage glow enhancement.',
    technique: 'Airbrushed longevity veil & satin lip layering.',
    palette: ['#F5E6DA', '#D4A373', '#A77573', '#3B2F2F'],
    keyProducts: ['Charlotte Tilbury', 'Dior Forever', 'Hourglass Ambient'],
    client: 'Hyde Park Boutique Wedding',
    year: '2025'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'My makeup stayed completely fresh from the 11am church ceremony in Muldersdrift to the reception dancing at midnight. I looked like the most radiant version of myself.',
    clientName: 'Zanele K.',
    role: 'Bride',
    occasion: 'Muldersdrift Wedding',
    image: testimonialZaneleImg,
    date: '2025',
    lookTitle: 'The Classic White Wedding'
  },
  {
    id: 't-2',
    quote: 'Liyana created the exact soft glam I envisioned for my 30th birthday in Rosebank. The undertone match was perfection—no flashback, just pure skin radiance.',
    clientName: 'Nandi M.',
    role: 'Birthday Client',
    occasion: 'Rosebank Celebration',
    image: testimonialNandiImg,
    date: '2025',
    lookTitle: 'Rosebank Sunday Glow'
  },
  {
    id: 't-3',
    quote: 'For our Zulu traditional wedding in Soweto, Liyana delivered a look that honoured our traditional attire with stunning warmth and modern luxury. Everyone complimented my glow.',
    clientName: 'Thando N.',
    role: 'Traditional Bride',
    occasion: 'Zulu Traditional Union',
    image: testimonialThandoImg,
    date: '2025',
    lookTitle: 'Traditional Zulu Township Wedding'
  },
  {
    id: 't-4',
    quote: 'My daughter’s matric dance makeup in Fourways was show-stopping. Sophisticated, age-appropriate, and lasted all night through photos and dancing.',
    clientName: 'Lesedi B.',
    role: 'Matric Dance Client',
    occasion: 'Fourways Gala',
    image: testimonialLesediImg,
    date: '2025',
    lookTitle: 'Fourways Matric Ball'
  }
];


