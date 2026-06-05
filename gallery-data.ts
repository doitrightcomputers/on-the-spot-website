// Gallery data with all Tony's photos organized by category
export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Van & Equipment' | 'Vehicles' | 'Carmel Locations' | 'Before & After';
  description: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  // Van & Equipment - Showcase the fully equipped Mercedes-Benz Sprinter van
  {
    id: 'van-1',
    url: '/manus-storage/20260604_van_6fe599e0.jpg',
    title: 'On-The-Spot Equipped Van',
    category: 'Van & Equipment',
    description: 'Fully equipped Mercedes-Benz Sprinter van with all specialized cleaning equipment',
    alt: 'On-The-Spot fully equipped van with professional cleaning equipment'
  },
  {
    id: 'van-2',
    url: '/manus-storage/20260604_van-2_a9fa1c50.jpg',
    title: 'Professional Equipment Setup',
    category: 'Van & Equipment',
    description: 'State-of-the-art cleaning equipment including RIGID Turbo dryers and carpet cleaning machines',
    alt: 'Professional cleaning equipment including RIGID Turbo dryers and extraction machines'
  },
  {
    id: 'van-3',
    url: '/manus-storage/20260604_van-3_54a839e2.jpg',
    title: 'Van Equipment Detail',
    category: 'Van & Equipment',
    description: 'Specialized cleaning tools and equipment for ultra-prestige cleaning services',
    alt: 'Detailed view of professional cleaning equipment in van'
  },
  {
    id: 'van-4',
    url: '/manus-storage/20260604_van-4_06e8a15c.jpg',
    title: 'Complete Mobile Setup',
    category: 'Van & Equipment',
    description: 'Everything Tony needs for professional cleaning fits in his van',
    alt: 'Complete mobile cleaning setup in van'
  },
  {
    id: 'van-5',
    url: '/manus-storage/20260604_van-5_9f55b028.jpg',
    title: 'Van Equipment Organization',
    category: 'Van & Equipment',
    description: 'Organized professional cleaning equipment ready for service',
    alt: 'Organized professional cleaning equipment'
  },
  {
    id: 'van-6',
    url: '/manus-storage/20260604_van-6_03ef5ae8.jpg',
    title: 'Equipment Ready for Service',
    category: 'Van & Equipment',
    description: 'Professional-grade equipment for luxury property cleaning',
    alt: 'Professional-grade cleaning equipment ready for service'
  },
  {
    id: 'van-7',
    url: '/manus-storage/20260604_van-7_8842b247.jpg',
    title: 'Van Interior Setup',
    category: 'Van & Equipment',
    description: 'Interior view of fully equipped cleaning van',
    alt: 'Interior view of fully equipped cleaning van'
  },
  {
    id: 'van-8',
    url: '/manus-storage/20260604_van-8_90d81e7a.jpg',
    title: 'Professional Equipment Detail',
    category: 'Van & Equipment',
    description: 'Close-up of specialized cleaning equipment',
    alt: 'Close-up of specialized cleaning equipment'
  },
  {
    id: 'van-9',
    url: '/manus-storage/20260604_van-9_b345717f.jpg',
    title: 'Van Equipment Setup',
    category: 'Van & Equipment',
    description: 'Complete setup of professional cleaning equipment',
    alt: 'Complete setup of professional cleaning equipment'
  },
  {
    id: 'van-10',
    url: '/manus-storage/20260604_van-10_3d5d57c0.jpg',
    title: 'Equipment Configuration',
    category: 'Van & Equipment',
    description: 'Professional equipment configuration for optimal service',
    alt: 'Professional equipment configuration'
  },

  // Van in Carmel - Showcase the van in luxury locations
  {
    id: 'carmel-1',
    url: '/manus-storage/20260604_vanCarmel_c18c87b7.jpg',
    title: 'Van in Carmel',
    category: 'Carmel Locations',
    description: 'On-The-Spot van serving luxury properties in Carmel-By-The-Sea',
    alt: 'On-The-Spot van in Carmel-By-The-Sea'
  },
  {
    id: 'carmel-2',
    url: '/manus-storage/20260604_vanCarmel-2_96019ee1.jpg',
    title: 'Carmel Service Location',
    category: 'Carmel Locations',
    description: 'Van positioned for luxury property cleaning in Carmel',
    alt: 'Van positioned for luxury property cleaning in Carmel'
  },
  {
    id: 'carmel-3',
    url: '/manus-storage/20260604_vanCarmel-3_7c430e83.jpg',
    title: 'Van in Luxury Area',
    category: 'Carmel Locations',
    description: 'Serving ultra-prestige properties in Carmel-By-The-Sea',
    alt: 'Van serving ultra-prestige properties in Carmel'
  },
  {
    id: 'carmel-4',
    url: '/manus-storage/20260604_vanCarmel-4_e562bae9.jpg',
    title: 'Carmel Cleaning Service',
    category: 'Carmel Locations',
    description: 'Professional cleaning service in luxury Carmel location',
    alt: 'Professional cleaning service in Carmel'
  },
  {
    id: 'carmel-5',
    url: '/manus-storage/20260604_vanCarmel-5_c1d067ef.jpg',
    title: 'Van Ready for Service',
    category: 'Carmel Locations',
    description: 'Van positioned and ready for premium cleaning service',
    alt: 'Van ready for premium cleaning service'
  },
  {
    id: 'carmel-6',
    url: '/manus-storage/20260604_vanCarmel-6_76771d4f.jpg',
    title: 'Carmel Property Service',
    category: 'Carmel Locations',
    description: 'Serving luxury properties throughout Carmel-By-The-Sea',
    alt: 'Serving luxury properties in Carmel'
  },
  {
    id: 'carmel-7',
    url: '/manus-storage/20260604_vanCarmel-7_e681784b.jpg',
    title: 'Van in Luxury Setting',
    category: 'Carmel Locations',
    description: 'Professional van in exclusive Carmel location',
    alt: 'Professional van in exclusive Carmel location'
  },
  {
    id: 'carmel-8',
    url: '/manus-storage/20260604_vanCarmel-8_95b1338f.jpg',
    title: 'Premium Service Location',
    category: 'Carmel Locations',
    description: 'Van providing premium cleaning in Carmel',
    alt: 'Van providing premium cleaning in Carmel'
  },
  {
    id: 'carmel-9',
    url: '/manus-storage/20260604_vanCarmel-9_bbf5e79c.jpg',
    title: 'Carmel Cleaning Expert',
    category: 'Carmel Locations',
    description: 'On-The-Spot serving Carmel luxury properties',
    alt: 'On-The-Spot serving Carmel luxury properties'
  },
  {
    id: 'carmel-10',
    url: '/manus-storage/20260604_vanCarmel-10_4f9646ce.jpg',
    title: 'Van in Carmel Setting',
    category: 'Carmel Locations',
    description: 'Professional van in beautiful Carmel location',
    alt: 'Professional van in Carmel'
  },
  {
    id: 'carmel-11',
    url: '/manus-storage/20260604_vanCarmel-11_25f65af0.jpg',
    title: 'Carmel Service Ready',
    category: 'Carmel Locations',
    description: 'Van ready to serve Carmel properties',
    alt: 'Van ready to serve Carmel properties'
  },
  {
    id: 'carmel-12',
    url: '/manus-storage/20260604_vanCarmel-12_e67c5e7b.jpg',
    title: 'Luxury Property Service',
    category: 'Carmel Locations',
    description: 'Professional service for luxury Carmel properties',
    alt: 'Professional service for luxury Carmel properties'
  },

  // Van Stage/Showcase - Professional presentation
  {
    id: 'stage-1',
    url: '/manus-storage/20260604_vanStageCarmel_8cce640a.jpg',
    title: 'Van Showcase',
    category: 'Van & Equipment',
    description: 'Professional showcase of On-The-Spot van and equipment',
    alt: 'Professional showcase of On-The-Spot van'
  },
  {
    id: 'stage-2',
    url: '/manus-storage/20260604_vanStageCarmel-2_0e3f8dc5.jpg',
    title: 'Equipment Showcase',
    category: 'Van & Equipment',
    description: 'Professional presentation of cleaning equipment',
    alt: 'Professional presentation of cleaning equipment'
  },
  {
    id: 'stage-3',
    url: '/manus-storage/20260604_vanStageCarmel-3_ab6c3a7c.jpg',
    title: 'Van Display',
    category: 'Van & Equipment',
    description: 'Display of fully equipped professional van',
    alt: 'Display of fully equipped professional van'
  },
  {
    id: 'stage-4',
    url: '/manus-storage/20260604_vanStageCarmel-4_451f2bfc.jpg',
    title: 'Professional Setup',
    category: 'Van & Equipment',
    description: 'Professional setup of On-The-Spot equipment',
    alt: 'Professional setup of On-The-Spot equipment'
  },

  // Vehicles - Luxury vehicle cleaning
  {
    id: 'vehicle-1',
    url: '/manus-storage/20260604_cleanFerrari_4d478af1.jpg',
    title: 'Luxury Vehicle Detailing',
    category: 'Vehicles',
    description: 'Professional detailing of luxury vehicles including Ferraris and Porsches',
    alt: 'Professional detailing of luxury Ferrari'
  },

  // Carmel Locations - Sidewalk and property cleaning
  {
    id: 'location-1',
    url: '/manus-storage/20260604_carmelSidewalk_f66a0088.jpg',
    title: 'Carmel Sidewalk Cleaning',
    category: 'Carmel Locations',
    description: 'Professional pressure washing of Carmel sidewalks and outdoor areas',
    alt: 'Professional pressure washing of Carmel sidewalk'
  },
  {
    id: 'location-2',
    url: '/manus-storage/20260604_carmelSidewalk-2_1682471c.jpg',
    title: 'Downtown Carmel Cleaning',
    category: 'Carmel Locations',
    description: 'Professional cleaning service in downtown Carmel-By-The-Sea',
    alt: 'Professional cleaning in downtown Carmel'
  },
  {
    id: 'beachside',
    url: '/manus-storage/20260604_vanBeachside_24cd0e11.jpg',
    title: 'Beachside Service',
    category: 'Carmel Locations',
    description: 'Van positioned for beachside property cleaning',
    alt: 'Van positioned for beachside property cleaning'
  },

  // Before & After - Transformation showcase
  {
    id: 'before-after-1',
    url: '/manus-storage/20260604_before_bed09092.jpg',
    title: 'Before Cleaning',
    category: 'Before & After',
    description: 'Before professional cleaning service',
    alt: 'Before professional cleaning service'
  },
  {
    id: 'before-after-2',
    url: '/manus-storage/20260604_After_2b036dee.jpg',
    title: 'After Professional Cleaning',
    category: 'Before & After',
    description: 'Dramatic transformation after On-The-Spot professional cleaning',
    alt: 'After professional cleaning - dramatic transformation'
  },
];

export const galleryCategories = [
  'Van & Equipment',
  'Vehicles',
  'Carmel Locations',
  'Before & After',
];
