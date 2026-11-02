export type ProductCategoryType = 
  | 'Fertilizers'
  | 'Agro-Chemicals'
  | 'Herbicides'
  | 'Insecticides'
  | 'Fungicides'
  | 'Organic Manure'
  | 'Seeds'
  | 'Crop Protection'
  | 'Soil Improvement Products'
  | 'Other Agricultural Supplies';

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryType;
  productType: 'Chemical' | 'Organic' | 'Granular' | 'Liquid' | 'Seed' | 'Equipment';
  shortDescription: string;
  description: string;
  packSize: string;
  availableSizes: string[];
  price: number | null; // null = Contact for Price
  priceDisplay: string;
  availability: 'In Stock' | 'Limited Stock' | 'Bulk Order Only' | 'Pre-Order';
  image: string;
  application: string;
  applicationRate: string;
  suitableCrops: string[];
  keyBenefits: string[];
  usageInstructions: string[];
  storageInformation: string;
  safetyInformation: {
    hazardLevel: 'Caution' | 'Warning' | 'General' | 'Danger';
    activeIngredient?: string;
    ppeRequired: string[];
    reentryInterval: string;
    withholdingPeriod: string;
    disposalInstructions: string;
  };
  featured?: boolean;
}

export interface CategoryInfo {
  id: ProductCategoryType;
  name: string;
  shortDescription: string;
  image: string;
  itemCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  icon: string;
  suitableFor: string;
}

export interface CropSolution {
  id: string;
  name: string;
  scientificOrType: string;
  description: string;
  recommendedProducts: string[];
  keyChallenges: string[];
  image: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  shortDescription: string;
  author: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  farmName: string;
  location: string;
  quote: string;
  cropsGrown: string;
  initials: string;
  verifiedCustomer: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}
