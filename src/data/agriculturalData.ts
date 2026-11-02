import { 
  CategoryInfo, 
  Product, 
  ServiceItem, 
  CropSolution, 
  ResourceArticle, 
  Testimonial 
} from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'Fertilizers',
    name: 'Fertilizers',
    shortDescription: 'High-grade mineral and blended plant nutrients formulated to deliver essential nitrogen, phosphorus, and potassium.',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    itemCount: 14
  },
  {
    id: 'Agro-Chemicals',
    name: 'Agro-Chemicals',
    shortDescription: 'Certified crop conditioning chemicals, adjuvants, stickers, and growth regulators for field application.',
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80',
    itemCount: 12
  },
  {
    id: 'Herbicides',
    name: 'Herbicides',
    shortDescription: 'Selective and non-selective weed control solutions to protect field rows, grain crops, and orchards.',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    itemCount: 16
  },
  {
    id: 'Insecticides',
    name: 'Insecticides',
    shortDescription: 'Targeted pest control agents formulated to control chewing, sucking, and boring pests with proven residual efficacy.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a46?auto=format&fit=crop&w=800&q=80',
    itemCount: 15
  },
  {
    id: 'Fungicides',
    name: 'Fungicides',
    shortDescription: 'Preventative and curative fungal treatments guarding against blights, rusts, powdery mildew, and leaf spots.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    itemCount: 11
  },
  {
    id: 'Organic Manure',
    name: 'Organic Manure',
    shortDescription: 'Aged compost, sterilized animal manures, and humic matter for sustainable soil microbial enhancement.',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80',
    itemCount: 8
  },
  {
    id: 'Seeds',
    name: 'Seeds',
    shortDescription: 'High-germination, disease-tolerant certified hybrid and open-pollinated seed varieties for commercial yields.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    itemCount: 22
  },
  {
    id: 'Crop Protection',
    name: 'Crop Protection',
    shortDescription: 'Integrated plant health compounds, bio-stimulants, and shielding formulations to combat biotic and abiotic stress.',
    image: 'https://images.unsplash.com/photo-1592417817038-d13fd7342605?auto=format&fit=crop&w=800&q=80',
    itemCount: 10
  },
  {
    id: 'Soil Improvement Products',
    name: 'Soil Improvement Products',
    shortDescription: 'Agricultural lime, gypsum, mycorrhizae inoculants, and biochar to correct pH and rebuild structural fertility.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    itemCount: 9
  },
  {
    id: 'Other Agricultural Supplies',
    name: 'Other Agricultural Supplies',
    shortDescription: 'Commercial manual and battery knapsack sprayers, PPE kits, calibrated measuring cylinders, and nozzle tips.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    itemCount: 18
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'npk-15-15-15',
    name: 'AgriGrow NPK 15-15-15 Balanced Compound Fertilizer',
    category: 'Fertilizers',
    productType: 'Granular',
    shortDescription: 'Homogeneous, quick-dissolving multi-nutrient granular fertilizer providing equal nitrogen, phosphorus, and potassium.',
    description: 'AgriGrow NPK 15-15-15 is a top-tier balanced compound fertilizer engineered for basal application and early top-dressing across cereals, vegetables, and perennial tree crops. Each granule contains an exact chemical ratio of 15% Total Nitrogen (N), 15% Available Phosphate (P2O5), and 15% Soluble Potash (K2O). This eliminates spatial nutrient segregation and ensures every plant row receives an identical ratio for uniform root establishment and vigorous canopy growth.',
    packSize: '50 kg Bag',
    availableSizes: ['25 kg Bag', '50 kg Bag', '1 Metric Ton Pallet'],
    price: 38.50,
    priceDisplay: '$38.50',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    application: 'Basal / Pre-planting broadcast or banded placement',
    applicationRate: '200 - 350 kg per hectare depending on soil test analysis',
    suitableCrops: ['Maize', 'Rice', 'Cassava', 'Vegetables', 'Tomatoes', 'Pepper'],
    keyBenefits: [
      'Chemically homogenous granules prevent nutrient segregation in field spreaders',
      'Rapid root development in seedling stages and accelerated vegetative establishment',
      'Enhanced drought tolerance through balanced potassium supply',
      'Low dust formulation suitable for mechanical and manual spreading'
    ],
    usageInstructions: [
      'Conduct soil testing prior to application to calibrate nutrient deficits.',
      'Incorporate 5-8 cm below seed level during planting to avoid seedling root burn.',
      'For row crops such as maize, apply alongside planting furrow at 7-10 cm distance from seed row.',
      'Ensure soil contains adequate moisture when applying or irrigate immediately after.'
    ],
    storageInformation: 'Store in dry, well-ventilated warehouse on pallets away from direct sunlight and damp floors. Reseal opened bags.',
    safetyInformation: {
      hazardLevel: 'Caution',
      activeIngredient: 'Total Nitrogen 15%, Phosphate (P2O5) 15%, Potash (K2O) 15%',
      ppeRequired: ['Dust mask', 'Work gloves', 'Protective eyewear', 'Closed-toe boots'],
      reentryInterval: 'Immediate once dust settles',
      withholdingPeriod: 'None',
      disposalInstructions: 'Triple rinse packaging and recycle clean plastic sacks according to local agricultural waste regulations.'
    },
    featured: true
  },
  {
    id: 'urea-46-nitrogen',
    name: 'AgriPure Prilled Urea 46% N High-Concentration Nitrogen',
    category: 'Fertilizers',
    productType: 'Granular',
    shortDescription: 'High-potency solid nitrogen fertilizer designed for side-dressing during peak vegetative and tillering phases.',
    description: 'AgriPure Prilled Urea provides 46% nitrogen by weight, representing the most concentrated dry nitrogen source commercially available. It is completely water-soluble and engineered for high-demand growth windows such as maize knee-high stage, rice tillering, and leafy vegetable flushes.',
    packSize: '50 kg Bag',
    availableSizes: ['50 kg Bag', '500 kg Bulk Sack'],
    price: 42.00,
    priceDisplay: '$42.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80',
    application: 'Side-dressing & Top-dressing into moist soil',
    applicationRate: '100 - 150 kg per hectare applied in split doses',
    suitableCrops: ['Maize', 'Rice', 'Vegetables', 'Oil Palm', 'Plantain'],
    keyBenefits: [
      'Maximum 46% active nitrogen delivers high crop vigor per bag transported',
      'Rapid conversion to plant-available ammonium and nitrate under warm soil conditions',
      'Cost-effective per unit of nitrogen compared to liquid solutions',
      'Quickly soluble for broadcast application before anticipated rainfall'
    ],
    usageInstructions: [
      'Apply strictly when soil is moist or directly before scheduled irrigation/rainfall to minimize volatilization.',
      'Never leave on dry alkaline soils without mechanical incorporation.',
      'Split application into 2 stages: 40% early vegetative and 60% peak growth.'
    ],
    storageInformation: 'Hygroscopic product. Must be stored in airtight bags in a moisture-free warehouse elevated from concrete flooring.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Total Nitrogen (Ammoniacal/Urea) 46.0%',
      ppeRequired: ['Rubber gloves', 'Dust respirator', 'Safety goggles'],
      reentryInterval: 'Immediately once incorporated',
      withholdingPeriod: '7 days before harvest for salad crops',
      disposalInstructions: 'Dispose of empty sacks at municipal plastic recycling depot.'
    },
    featured: false
  },
  {
    id: 'force-field-glyphosate-480',
    name: 'ClearField 480 SL Non-Selective Systemic Herbicide',
    category: 'Herbicides',
    productType: 'Liquid',
    shortDescription: 'Broad-spectrum post-emergence systemic herbicide for total control of annual and perennial grasses and broadleaf weeds.',
    description: 'ClearField 480 SL is a systemic, non-selective translocated herbicide containing 480 g/L Glyphosate as isopropylamine salt. It enters through foliage, rapidly translocating to roots, rhizomes, and stolons to prevent re-sprouting. Ideal for pre-planting land clearing, minimum-tillage seedbed preparation, and inter-row directed weeding in established tree plantations.',
    packSize: '5 Litres',
    availableSizes: ['1 Litre', '5 Litres', '20 Litres Drum'],
    price: 34.00,
    priceDisplay: '$34.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    application: 'Foliar spray on actively growing green weeds',
    applicationRate: '2.0 - 4.0 Litres per hectare in 150-200 L water',
    suitableCrops: ['Pre-planting all crops', 'Cocoa', 'Oil Palm', 'Plantain', 'Orchards'],
    keyBenefits: [
      'Complete root-kill of persistent perennial grasses such as spear grass and couch grass',
      'Rainfast within 4 to 6 hours after spray deposit dries',
      'Inactivated upon contact with soil particles, leaving no toxic residual barrier for subsequent sown seeds',
      'Formulated with high-grade surfactant for accelerated cuticular uptake'
    ],
    usageInstructions: [
      'Apply to weeds when they are actively photosynthesizing and undisturbed by drought or mowing.',
      'Do not allow spray drift to touch green stems, leaves, or fruit of valuable crops.',
      'Calibrate knapsack pressure sprayer and use flood-jet or even-fan nozzles.'
    ],
    storageInformation: 'Keep locked in chemical storeroom between 5°C and 35°C. Never store near food, animal feed, or seeds.',
    safetyInformation: {
      hazardLevel: 'Warning',
      activeIngredient: 'Glyphosate (IPA Salt) 480 g/L SL',
      ppeRequired: ['Chemical-resistant nitrile gloves', 'Full face shield or splash goggles', 'Long sleeve cotton overalls', 'Rubber work boots'],
      reentryInterval: '24 hours after application',
      withholdingPeriod: 'Do not graze livestock for 14 days following application',
      disposalInstructions: 'Triple rinse container into spray tank, puncture container base to prevent reuse, and deliver to authorized collection point.'
    },
    featured: true
  },
  {
    id: 'atrazine-500-sc',
    name: 'MaizeShield Atrazine 500 SC Selective Herbicide',
    category: 'Herbicides',
    productType: 'Liquid',
    shortDescription: 'Pre-emergence and early post-emergence selective herbicide for season-long grass and broadleaf control in maize.',
    description: 'MaizeShield Atrazine 500 SC is a suspension concentrate containing 500 g/L Atrazine. It provides residual weed suppression by inhibiting photosynthesis in germinating weed seeds while maize naturally metabolizes the chemical safely. It gives young maize seedlings critical weed-free emergence during the first 6 weeks.',
    packSize: '5 Litres',
    availableSizes: ['1 Litre', '5 Litres'],
    price: 29.50,
    priceDisplay: '$29.50',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    application: 'Soil surface pre-emergence or early post-emergence',
    applicationRate: '3.0 - 4.5 Litres per hectare depending on soil organic matter',
    suitableCrops: ['Maize', 'Sorghum', 'Sugarcane'],
    keyBenefits: [
      'Selective tolerance allows spraying right after sowing maize without crop damage',
      'Provides 6 to 10 weeks of reliable residual soil barrier against broadleaf weeds',
      'High purity flowable suspension that mixes smoothly without clogging nozzle strainers',
      'Minimizes costly manual hand-weeding labor during early critical crop growth'
    ],
    usageInstructions: [
      'Apply within 48 hours after planting maize seed before weed seedlings emerge.',
      'Requires light soil moisture to activate the chemical barrier in top 3 cm of soil.',
      'Do not apply on sandy soils with less than 1% organic matter.'
    ],
    storageInformation: 'Store in cool, dry pesticide storage lockers away from children, livestock, and drinking water sources.',
    safetyInformation: {
      hazardLevel: 'Caution',
      activeIngredient: 'Atrazine 500 g/L SC',
      ppeRequired: ['Protective gloves', 'Face shield', 'Waterproof apron', 'Boots'],
      reentryInterval: '48 hours',
      withholdingPeriod: '60 days for maize grain',
      disposalInstructions: 'Rinse three times, puncture, and return to authorized pesticide collection facility.'
    },
    featured: false
  },
  {
    id: 'crop-guard-mancozeb-80wp',
    name: 'CropGuard Mancozeb 80% WP Broad-Spectrum Protectant Fungicide',
    category: 'Fungicides',
    productType: 'Chemical',
    shortDescription: 'Multi-site contact protectant fungicide for controlling early/late blight, downy mildew, and anthracnose.',
    description: 'CropGuard Mancozeb 80% WP is a proven wettable powder agricultural fungicide providing broad-spectrum protective coverage on leaves and fruit. As a multi-site inhibitor containing zinc and manganese, it prevents fungal spore germination with virtually no risk of resistance build-up.',
    packSize: '1 kg Foil Pouch',
    availableSizes: ['1 kg Pouch', '5 kg Bag', '25 kg Sack'],
    price: 12.50,
    priceDisplay: '$12.50',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    application: 'Preventative foliar spray before disease onset',
    applicationRate: '1.5 - 2.5 kg per hectare in 300-500 L water',
    suitableCrops: ['Tomatoes', 'Pepper', 'Vegetables', 'Cocoa', 'Rice'],
    keyBenefits: [
      'Multi-site mode of action prevents fungi from mutating resistant strains',
      'Fortified with zinc and manganese micronutrients that promote green leaf area',
      'Strong leaf-adhesion characteristics resisting moderate rainfall wash-off',
      'Crucial protectant for tomato early and late blight management'
    ],
    usageInstructions: [
      'Start spraying preventatively before disease symptoms appear, especially in humid conditions.',
      'Repeat at 7 to 10 day intervals during periods of high disease pressure.',
      'Ensure complete coverage of both upper and lower leaf surfaces.'
    ],
    storageInformation: 'Keep dry and sealed. Protect from atmospheric moisture which causes powder degradation.',
    safetyInformation: {
      hazardLevel: 'Caution',
      activeIngredient: 'Mancozeb 800 g/kg (Dithiocarbamate group)',
      ppeRequired: ['Particulate respirator', 'Chemical-resistant rubber gloves', 'Goggles', 'Coveralls'],
      reentryInterval: '24 hours',
      withholdingPeriod: '7 days for tomatoes and peppers; 14 days for root crops',
      disposalInstructions: 'Do not contaminate waterways. Bury or incinerate empty bags in licensed disposal incinerators.'
    },
    featured: true
  },
  {
    id: 'azoxy-systemic-fungicide',
    name: 'TopShield Azoxystrobin 250 SC Translaminar Fungicide',
    category: 'Fungicides',
    productType: 'Liquid',
    shortDescription: 'Strobilurin broad-spectrum fungicide with preventative, curative, and translaminar properties for leaf spot and blast.',
    description: 'TopShield 250 SC contains 250 g/L Azoxystrobin, a systemic strobilurin fungicide that inhibits mitochondrial respiration in fungi. It moves translaminarly across leaf tissues, protecting both sides of the leaf and producing a proven physiological "greening effect" that improves grain filling.',
    packSize: '1 Litre Bottle',
    availableSizes: ['250 ml', '500 ml', '1 Litre'],
    price: 48.00,
    priceDisplay: '$48.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    application: 'Foliar application at flag leaf or early flowering',
    applicationRate: '400 - 600 ml per hectare in 200 L water',
    suitableCrops: ['Rice', 'Maize', 'Vegetables', 'Tomatoes', 'Pepper'],
    keyBenefits: [
      'Translaminar redistribution protects new shoots and under-leaf fungal spores',
      'Extends photosynthetic leaf longevity (greening effect) for higher test weights',
      'Exceptional defense against rice blast and sheath blight',
      'Curative and anti-sporulant action stops early established lesions'
    ],
    usageInstructions: [
      'Mix thoroughly with clean water; compatible with most standard neutral insecticides.',
      'Apply at early boot or flag leaf stage in cereals for maximum yield protection.',
      'Rotate with non-strobilurin chemistry to steward against resistance.'
    ],
    storageInformation: 'Store in cool original containers away from heat sources and direct UV light.',
    safetyInformation: {
      hazardLevel: 'Caution',
      activeIngredient: 'Azoxystrobin 250 g/L SC',
      ppeRequired: ['Nitrile gloves', 'Protective eyewear', 'Protective coverall suit'],
      reentryInterval: '12 hours',
      withholdingPeriod: '14 days for rice and field maize; 3 days for tomatoes',
      disposalInstructions: 'Follow national pesticide disposal regulations.'
    },
    featured: false
  },
  {
    id: 'cyper-kill-insecticide',
    name: 'StrikeForce Cypermethrin 10% EC Contact Insecticide',
    category: 'Insecticides',
    productType: 'Liquid',
    shortDescription: 'Rapid knock-down synthetic pyrethroid insecticide controlling caterpillars, stem borers, aphids, and beetles.',
    description: 'StrikeForce 10% EC is a fast-acting pyrethroid insecticide formulated to control chewing and piercing insects across a diverse range of crops. It acts on the insect nervous system via contact and ingestion, delivering an immediate knock-down response and effective repellent properties against egg deposition.',
    packSize: '1 Litre',
    availableSizes: ['250 ml', '1 Litre', '5 Litres'],
    price: 16.50,
    priceDisplay: '$16.50',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a46?auto=format&fit=crop&w=800&q=80',
    application: 'Foliar spray when insect thresholds are reached',
    applicationRate: '500 - 800 ml per hectare in 200 L water',
    suitableCrops: ['Maize', 'Vegetables', 'Tomatoes', 'Pepper', 'Cocoa'],
    keyBenefits: [
      'Rapid knock-down effect halts feeding within 15 minutes of contact',
      'Broad spectrum covering over 30 common agricultural pest species',
      'Proven repellent activity deters adult moths from laying eggs on crops',
      'Economical per-hectare cost for commercial field protection'
    ],
    usageInstructions: [
      'Spray early in morning or late afternoon when target insects are active on foliage.',
      'Avoid spraying during peak bee foraging hours on flowering crops.',
      'Ensure spray nozzles reach inside the leaf whorls when targeting maize fall armyworm.'
    ],
    storageInformation: 'Combustible liquid. Keep in locked chemical shed away from open flames, heat, and direct sunlight.',
    safetyInformation: {
      hazardLevel: 'Warning',
      activeIngredient: 'Cypermethrin 100 g/L EC',
      ppeRequired: ['Organic vapor respirator', 'Heavy chemical gloves', 'Eye goggles', 'Rubber boots'],
      reentryInterval: '24 hours',
      withholdingPeriod: '7 days before harvesting fruit and vegetables',
      disposalInstructions: 'Toxic to aquatic organisms. Do not wash sprayers in ponds, rivers, or irrigation canals.'
    },
    featured: true
  },
  {
    id: 'lambda-star-insecticide',
    name: 'Vanguard Lambda-Cyhalothrin 5% EC High-Efficacy Insecticide',
    category: 'Insecticides',
    productType: 'Liquid',
    shortDescription: 'Advanced pyrethroid insecticide engineered with UV-stability for prolonged residual control of fall armyworm and thrips.',
    description: 'Vanguard 5% EC provides enhanced residual performance against stubborn crop pests including fall armyworm, fruit borers, pod borers, and thrips. Enhanced with UV inhibitors, it remains chemically active on leaf surfaces longer than conventional pyrethroids even under hot tropical conditions.',
    packSize: '1 Litre',
    availableSizes: ['100 ml', '500 ml', '1 Litre'],
    price: 21.00,
    priceDisplay: '$21.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80',
    application: 'Direct foliar spray targeting feeding larvae',
    applicationRate: '300 - 500 ml per hectare in 200 L water',
    suitableCrops: ['Maize', 'Vegetables', 'Tomatoes', 'Pepper', 'Rice'],
    keyBenefits: [
      'Enhanced UV-stable formulation maintains killing power in intense sunshine',
      'Highly active at low dose rates, reducing container handling volume',
      'Quick paralysis of feeding larvae stops crop defoliation immediately',
      'Effective contact and stomach action against concealed pests'
    ],
    usageInstructions: [
      'Scout fields weekly and apply at the first sign of egg hatch or early instar larvae.',
      'Use hollow cone nozzles to create fine droplets that penetrate plant whorls.',
      'Do not apply more than 3 times in a single growing cycle.'
    ],
    storageInformation: 'Store upright in original container in an authorized agricultural store.',
    safetyInformation: {
      hazardLevel: 'Warning',
      activeIngredient: 'Lambda-Cyhalothrin 50 g/L EC',
      ppeRequired: ['Respirator', 'Chemical rubber gloves', 'Goggles', 'Protective overalls'],
      reentryInterval: '24 hours',
      withholdingPeriod: '10 days for food crops',
      disposalInstructions: 'Dispose of in compliance with local pesticide waste regulations.'
    },
    featured: false
  },
  {
    id: 'organic-poultry-manure-pellets',
    name: 'TerraVita Compost & Sterilized Pelletized Poultry Manure',
    category: 'Organic Manure',
    productType: 'Organic',
    shortDescription: 'Thermally sanitized, weed-seed free concentrated organic manure pellets rich in organic carbon and biological nutrients.',
    description: 'TerraVita Pelletized Organic Manure is derived from composted, heat-sterilized poultry manure, compressed into easy-to-spread 4mm pellets. It replenishes soil organic matter, stimulates beneficial soil fungi and bacteria, improves cation-exchange capacity (CEC), and increases water retention in sandy and degraded soils.',
    packSize: '25 kg Bag',
    availableSizes: ['25 kg Bag', '50 kg Bag', 'Bulk Ton Bag'],
    price: 19.50,
    priceDisplay: '$19.50',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80',
    application: 'Soil incorporation prior to planting or ridging',
    applicationRate: '500 - 1500 kg per hectare depending on soil organic matter',
    suitableCrops: ['Vegetables', 'Cassava', 'Tomatoes', 'Pepper', 'Plantain', 'Maize'],
    keyBenefits: [
      '100% heat sterilized to eliminate pathogens (Salmonella, E. coli) and weed seeds',
      'Pelletized form allows uniform broadcasting with standard agricultural seed and fertilizer spreaders',
      'Slow-release organic nitrogen, phosphorus, calcium, and trace minerals over 90 days',
      'Rebuilds microbial diversity and soil moisture retention during dry spells'
    ],
    usageInstructions: [
      'Broadcast over prepared beds or furrows 7-14 days before planting.',
      'Incorporate mechanically into top 10-15 cm of soil.',
      'Can be safely combined with mineral fertilizers to maximize nutrient efficiency.'
    ],
    storageInformation: 'Store in a dry location sheltered from rain to prevent premature pellet breakdown.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Organic Matter > 65%, NPK analysis ~ 4-3-3 plus Humic Acids and Calcium',
      ppeRequired: ['Standard dust mask', 'Work gloves'],
      reentryInterval: 'Immediate',
      withholdingPeriod: 'None; certified safe for organic and conventional growers',
      disposalInstructions: 'Bags are recyclable woven polypropylene.'
    },
    featured: true
  },
  {
    id: 'bio-humus-liquid-manure',
    name: 'HumicGold Concentrated Liquid Bio-Manure & Soil Conditioner',
    category: 'Organic Manure',
    productType: 'Liquid',
    shortDescription: 'Liquid humic and fulvic acid extract fortified with organic marine kelp to stimulate vigorous root zone development.',
    description: 'HumicGold is an organic liquid soil conditioner containing concentrated potassium humate and cold-water kelp extract. Designed for fertigation, drip irrigation, or in-furrow drenching, it accelerates nutrient chelation in the root rhizosphere and reduces nutrient leaching in sandy soils.',
    packSize: '10 Litres Can',
    availableSizes: ['5 Litres', '10 Litres', '20 Litres Drum'],
    price: 36.00,
    priceDisplay: '$36.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    application: 'Soil drench or drip fertigation system',
    applicationRate: '5 - 10 Litres per hectare injected into irrigation water',
    suitableCrops: ['Tomatoes', 'Pepper', 'Vegetables', 'Plantain', 'Cocoa'],
    keyBenefits: [
      'Stimulates lateral root branching and dense root hair development',
      'Chelates locked soil phosphorus and micronutrients, making them plant-accessible',
      'Mitigates soil salinity and chemical fertilizer burn in intense production',
      'Fully soluble without clogging fine drip emitters or spray nozzles'
    ],
    usageInstructions: [
      'Shake well before diluting with irrigation water.',
      'Apply at transplanting stage and repeat every 21 days during active root growth.',
      'Can be mixed with water-soluble fertilizers in the fertilizer tank.'
    ],
    storageInformation: 'Store out of direct sunlight in original tight containers between 5°C and 30°C.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Humic Acids 18%, Fulvic Acids 4%, Potassium (K2O) 6%',
      ppeRequired: ['Rubber gloves', 'Protective eyewear'],
      reentryInterval: 'Immediate',
      withholdingPeriod: 'None',
      disposalInstructions: 'Rinse container thoroughly and dispose according to standard container guidelines.'
    },
    featured: false
  },
  {
    id: 'certified-hybrid-maize-seed',
    name: 'AgriYield Pro-90 Certified Hybrid Yellow Maize Seed',
    category: 'Seeds',
    productType: 'Seed',
    shortDescription: 'High-yielding, drought-tolerant certified yellow maize hybrid with 98% germination rate and fortified resistance to rust.',
    description: 'AgriYield Pro-90 is a certified medium-maturity single-cross hybrid maize seed bred for commercial grain yield and silage production. It features strong root lodging resistance, tight husk cover that deters ear rots and weevils, and proven heat and moisture stress resilience. Pre-treated with seed protectant for early wireworm and soil fungus safety.',
    packSize: '10 kg Bag',
    availableSizes: ['2 kg Pack', '10 kg Bag', '25 kg Bag'],
    price: 28.00,
    priceDisplay: '$28.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    application: 'Direct mechanical or manual seedbed sowing',
    applicationRate: '20 - 25 kg per hectare (plant population: 53,000 - 60,000 plants/ha)',
    suitableCrops: ['Maize'],
    keyBenefits: [
      'Potential commercial yield of 7.5 to 9.5 MT/hectare under standard agronomic management',
      'Matures in 110 - 118 days with consistent ear placement and uniform stand',
      'Fortified genetic resistance against Maize Streak Virus and Turcicum Leaf Blight',
      'Pre-coated with fungicide/insecticide seed dress for maximum seedling survival'
    ],
    usageInstructions: [
      'Plant at 75 cm row spacing with 25 cm between plants in the row.',
      'Plant at uniform depth of 3 to 5 cm in moist, well-drained seedbeds.',
      'Do not wash seed treatment off prior to planting.'
    ],
    storageInformation: 'Store in cool, dry seed store away from rodents and moisture. Do not expose to temperatures above 30°C.',
    safetyInformation: {
      hazardLevel: 'Caution',
      activeIngredient: 'Seed treated with Thiram & Metalaxyl seed dressing',
      ppeRequired: ['Gloves when handling seed', 'Dust mask during mechanical hopper loading'],
      reentryInterval: 'Immediate',
      withholdingPeriod: 'Treated seed is NOT for human consumption, animal feed, or oil extraction',
      disposalInstructions: 'Do not leave spilled treated seed on soil surface where wild birds can ingest.'
    },
    featured: true
  },
  {
    id: 'f1-tomato-seed-cobra',
    name: 'Solano F1 Commercial Hybrid Tomato Seed (Indeterminate)',
    category: 'Seeds',
    productType: 'Seed',
    shortDescription: 'Premium heat-set indeterminate hybrid tomato seed with exceptional firmness, TYLCV resistance, and shelf life.',
    description: 'Solano F1 is an elite commercial hybrid tomato variety engineered for high yields in open-field and protected tunnel farming. Producing uniform, firm, deep-red oval fruits averaging 110-130 grams, it displays exceptional resistance to Tomato Yellow Leaf Curl Virus (TYLCV), Fusarium Wilt (races 1 & 2), and Verticillium Wilt.',
    packSize: '1,000 Seeds Pack',
    availableSizes: ['1,000 Seeds Pack', '5,000 Seeds Can'],
    price: 32.00,
    priceDisplay: '$32.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    application: 'Nursery seedling tray propagation prior to field transplanting',
    applicationRate: '150 - 200 grams of seed (approx. 20,000 - 25,000 plants) per hectare',
    suitableCrops: ['Tomatoes'],
    keyBenefits: [
      'High resistance against Tomato Yellow Leaf Curl Virus (TYLCV) and Bacterial Wilt',
      'Thick pericarp walls ensure firm fruits that withstand long-distance road transport without bruising',
      'Extended harvesting window of 8 to 12 weeks with consistent fruit sizing',
      'High Brix content and deep red coloration preferred by wholesale markets'
    ],
    usageInstructions: [
      'Sow in clean seedling trays using sterilized peat moss or coco peat substrate.',
      'Transplant sturdy 21-day-old seedlings with 4-5 true leaves into raised field beds.',
      'Stake plants and implement balanced calcium/boron feeding to avoid blossom-end rot.'
    ],
    storageInformation: 'Keep sealed foil pack in cool, dry room or vegetable crisper compartment (15°C).',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Purity > 99.5%, Germination > 90%, Thiram coated',
      ppeRequired: ['Clean gloves during tray seeding'],
      reentryInterval: 'Immediate',
      withholdingPeriod: 'None',
      disposalInstructions: 'Standard seed packet recycling.'
    },
    featured: false
  },
  {
    id: 'calcium-ammonium-nitrate-can',
    name: 'AgriNitro CAN 27% N + 12% CaO Top-Dressing Fertilizer',
    category: 'Fertilizers',
    productType: 'Granular',
    shortDescription: 'Fast-acting nitrogen fertilizer enriched with water-soluble calcium to prevent soil acidification and blossom-end rot.',
    description: 'AgriNitro Calcium Ammonium Nitrate (CAN 27) supplies 50% quick-acting nitrate nitrogen and 50% sustained ammonium nitrogen, coupled with 12% plant-available Calcium Oxide (CaO). Unlike pure urea, CAN does not acidify agricultural soil, making it ideal for intensive vegetable farming, fruit trees, and acid-sensitive soils.',
    packSize: '50 kg Bag',
    availableSizes: ['25 kg Bag', '50 kg Bag', '1 Metric Ton Pallet'],
    price: 39.00,
    priceDisplay: '$39.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80',
    application: 'Top-dressing and vegetative side-dressing',
    applicationRate: '150 - 250 kg per hectare applied in bands along crop rows',
    suitableCrops: ['Tomatoes', 'Pepper', 'Vegetables', 'Maize', 'Cassava'],
    keyBenefits: [
      'Balanced 50/50 nitrate and ammonium supply for immediate and continuous nitrogen uptake',
      'Supplies crucial calcium that fortifies plant cell walls and prevents fruit cracking',
      'Zero soil acidifying effect, maintaining optimal rhizosphere pH',
      'Minimal ammonia volatilization even when surface-applied without immediate incorporation'
    ],
    usageInstructions: [
      'Apply during early flowering and fruit set on vegetables.',
      'Place in a ring around plants or along the crop bed 10 cm from main stems.',
      'Irrigate lightly after application for swift root absorption.'
    ],
    storageInformation: 'Store in dry warehouse elevated on wooden pallets. Protect from high humidity.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Total Nitrogen 27.0% (13.5% Nitrate N, 13.5% Ammoniacal N), CaO 12.0%',
      ppeRequired: ['Work gloves', 'Dust mask'],
      reentryInterval: 'Immediate',
      withholdingPeriod: 'None',
      disposalInstructions: 'Recycle clean packaging.'
    },
    featured: false
  },
  {
    id: 'dolomitic-agricultural-lime',
    name: 'AgriCal Dolomitic Agricultural Lime (Calcium & Magnesium Carbonate)',
    category: 'Soil Improvement Products',
    productType: 'Granular',
    shortDescription: 'Ultra-fine agricultural grade dolomitic limestone for neutralising soil acidity and restoring calcium and magnesium balance.',
    description: 'AgriCal Dolomitic Agricultural Lime is a high-purity natural pulverized mineral containing 54% Calcium Carbonate (CaCO3) and 40% Magnesium Carbonate (MgCO3) with a Calcium Carbonate Equivalent (CCE) of 102%. It neutralizes toxic aluminum in acidic soils, optimizing soil pH so fertilizers can be absorbed efficiently by crops.',
    packSize: '50 kg Bag',
    availableSizes: ['50 kg Bag', '1 Metric Ton Bulk Tote'],
    price: 18.00,
    priceDisplay: '$18.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    application: 'Soil broadcast and disc harrowing 4-6 weeks prior to planting',
    applicationRate: '1.0 - 2.5 Metric Tons per hectare based on soil buffer pH test',
    suitableCrops: ['Maize', 'Rice', 'Cassava', 'Cocoa', 'Oil Palm', 'Vegetables'],
    keyBenefits: [
      'Raises acidic soil pH into the optimal 6.0 - 6.8 zone where crop nutrient availability peaks',
      'Supplies essential magnesium needed for chlorophyll synthesis and enzyme activation',
      'Precipitates toxic soil aluminum (Al3+) that stunts seedling taproot growth',
      'Finely milled particles react with soil moisture within weeks of incorporation'
    ],
    usageInstructions: [
      'Take soil samples to calculate exact lime requirement before ordering bulk tonnage.',
      'Spread evenly across tilled fields using mechanical lime spreader or manual broadcast.',
      'Incorporate thoroughly into top 15-20 cm of root zone with disc plough or rototiller.'
    ],
    storageInformation: 'Store in dry shelter or outdoors covered with heavy UV-resistant tarpaulin on elevated ground.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Calcium Carbonate 54%, Magnesium Carbonate 40%, CCE 102%',
      ppeRequired: ['Dust mask / N95 respirator', 'Eye protection goggles', 'Work gloves'],
      reentryInterval: 'Immediate once dust clears',
      withholdingPeriod: 'None',
      disposalInstructions: 'Natural mineral; empty bags recyclable.'
    },
    featured: true
  },
  {
    id: 'bio-stimulant-seaweed-extract',
    name: 'CropShield Pro Max Bio-Stimulant & Stress Recovery Tonic',
    category: 'Crop Protection',
    productType: 'Liquid',
    shortDescription: 'Cold-pressed Ascophyllum nodosum seaweed formulation rich in betaines, amino acids, and plant defense activators.',
    description: 'CropShield Pro Max is an agricultural bio-stimulant engineered to safeguard crops against severe heat stress, drought shock, and chemical burn. Formulated with pure cold-processed Ascophyllum nodosum marine algae and L-free amino acids, it triggers natural antioxidant production and maintains stomatal efficiency during adverse climate episodes.',
    packSize: '5 Litres Can',
    availableSizes: ['1 Litre', '5 Litres', '20 Litres'],
    price: 45.00,
    priceDisplay: '$45.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1592417817038-d13fd7342605?auto=format&fit=crop&w=800&q=80',
    application: 'Foliar spray during abiotic stress windows or transplant shock',
    applicationRate: '1.5 - 2.5 Litres per hectare in 200 L water',
    suitableCrops: ['Vegetables', 'Tomatoes', 'Pepper', 'Rice', 'Maize', 'Cocoa'],
    keyBenefits: [
      'Prevents flower abortion and premature fruit drop during sudden heat spikes',
      'Shortens recovery time by 50% following severe insect infestation or herbicide drift shock',
      'Enhances chlorophyll density and root uptake of applied fertilizers',
      '100% biodegradable and zero residue on harvested produce'
    ],
    usageInstructions: [
      'Apply at 3 critical growth stages: nursery transplant, pre-flowering, and early fruit swell.',
      'Can be tank-mixed with standard protectant fungicides and foliar fertilizers.',
      'Do not apply during the direct midday heat; spray before 9:00 AM or after 4:30 PM.'
    ],
    storageInformation: 'Store in cool indoor shed away from direct solar heat. Keep container cap sealed.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Ascophyllum nodosum Seaweed Extract 28%, Free Amino Acids 10%, Boron 0.5%',
      ppeRequired: ['Safety goggles', 'Waterproof gloves'],
      reentryInterval: 'Immediate upon drying',
      withholdingPeriod: '0 days',
      disposalInstructions: 'Standard plastic recycling.'
    },
    featured: false
  },
  {
    id: 'pro-knapsack-sprayer-16l',
    name: 'AgriSprayer Pro 16L Heavy-Duty Manual Knapsack Sprayer',
    category: 'Other Agricultural Supplies',
    productType: 'Equipment',
    shortDescription: 'Industrial-grade polypropylene 16-liter knapsack sprayer with solid brass lance, pressure chamber, and dual nozzle kit.',
    description: 'The AgriSprayer Pro 16L is built specifically for tough farm conditions. Featuring a UV-stabilized heavy-duty polypropylene tank, durable internal piston pump with Viton chemical seals, stainless steel filter screen, and reinforced brass trigger and spray wand. Comes complete with fan, cone, and adjustable four-hole nozzle tips for accurate agro-chemical application.',
    packSize: 'Single Unit Box',
    availableSizes: ['16 Litres Manual', '20 Litres Battery-Electric'],
    price: 49.00,
    priceDisplay: '$49.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    application: 'Foliar agro-chemical, fertilizer, and herbicide spraying',
    applicationRate: 'Calibrated per nozzle selection (0.8 - 1.6 L/min)',
    suitableCrops: ['All Field Crops', 'Vegetables', 'Orchards', 'Nurseries'],
    keyBenefits: [
      'Chemical-resistant Viton seals prevent leakage of corrosive solvents and oils',
      'Ergonomic padded back cushion and contoured straps minimize operator fatigue',
      'Reversible pump handle allows comfortable left-hand or right-hand operation',
      'Includes 4 interchangeable nozzle tips and replacement O-ring repair kit'
    ],
    usageInstructions: [
      'Always strain spray water through the tank mouth filter basket to prevent nozzle clogging.',
      'Operate pump handle steadily at 20-30 strokes per minute to maintain even pressure.',
      'Rinse tank thoroughly with clean water three times immediately after chemical spraying.'
    ],
    storageInformation: 'Empty completely, flush clean water through lance, and store in dry area away from direct sunlight.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'UV-Stabilized Polypropylene, Brass Lance, Viton Gaskets',
      ppeRequired: ['Operator PPE must match the agro-chemical being sprayed'],
      reentryInterval: 'N/A',
      withholdingPeriod: 'N/A',
      disposalInstructions: 'Long-life reusable equipment; spare parts available.'
    },
    featured: true
  },
  {
    id: 'certified-hybrid-rice-seed',
    name: 'PaddyMaster Oryza-7 Lowland Certified Hybrid Rice Seed',
    category: 'Seeds',
    productType: 'Seed',
    shortDescription: 'High-tillering lowland certified hybrid rice seed with high head-rice recovery rate and tolerance to bacterial leaf blight.',
    description: 'PaddyMaster Oryza-7 is a certified semi-dwarf hybrid rice seed engineered for both irrigated paddies and rainfed lowlands. It delivers intense early tillering, stiff straw that prevents lodging during wet harvesting, and slender translucent grains with superior milling recovery.',
    packSize: '25 kg Bag',
    availableSizes: ['10 kg Bag', '25 kg Bag', '50 kg Bag'],
    price: 35.00,
    priceDisplay: '$35.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80',
    application: 'Direct seeding or transplanting in prepared paddy mud',
    applicationRate: '40 - 50 kg per hectare (for direct wet seeding) or 25 kg (for transplanting)',
    suitableCrops: ['Rice'],
    keyBenefits: [
      'Exceptional tillering capacity yielding 18-24 productive panicles per hill',
      'High milling recovery rate exceeding 68% with low chalkiness',
      'Strong tolerance against Bacterial Leaf Blight (Xanthomonas oryzae) and Brown Planthopper',
      'Matures reliably within 115-125 days'
    ],
    usageInstructions: [
      'Pre-soak seeds in clean water for 24 hours and incubate for 24-36 hours until sprouted.',
      'Sow sprouted seeds in wet nursery beds or direct-seed in puddled paddy fields.',
      'Maintain 2-5 cm standing water layer after transplant establishment.'
    ],
    storageInformation: 'Store in cool, dry room on pallets. Protect against moisture absorption.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Certified Seed Class 1, Treated with Fungicide Protectant',
      ppeRequired: ['Standard work gloves'],
      reentryInterval: 'Immediate',
      withholdingPeriod: 'Not for consumption as food grain',
      disposalInstructions: 'Recycle seed sacks.'
    },
    featured: false
  },
  {
    id: 'copper-hydroxide-fungicide',
    name: 'BlueShield 50 WP Copper Hydroxide Bactericide & Fungicide',
    category: 'Agro-Chemicals',
    productType: 'Chemical',
    shortDescription: 'Preventative inorganic copper contact fungicide and bactericide for black pod, bacterial spot, and canker control.',
    description: 'BlueShield 50 WP contains 500 g/kg active copper as cupric hydroxide in an ultra-fine wettable powder. It releases bioactive Cu2+ ions that penetrate bacterial and fungal cells, disrupting multi-enzyme activities. Crucial for cocoa black pod prevention and vegetable bacterial spot control.',
    packSize: '1 kg Pouch',
    availableSizes: ['1 kg Pouch', '10 kg Carton'],
    price: 15.00,
    priceDisplay: '$15.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    application: 'Preventative foliar and stem wash spray',
    applicationRate: '2.0 - 3.5 kg per hectare in 400 L water',
    suitableCrops: ['Cocoa', 'Tomatoes', 'Pepper', 'Vegetables', 'Plantain'],
    keyBenefits: [
      'Dual efficacy against both fungal pathogens and difficult-to-control bacterial infections',
      'Finely micronized copper particles provide superior surface adherence on cocoa pods',
      'High elemental copper bioavailability allows lower application rates compared to Bordeaux mixture',
      'Excellent resistance management partner in spray schedules'
    ],
    usageInstructions: [
      'Apply preventatively prior to rainy season or at the first sign of weather conducive to disease.',
      'Ensure thorough wash of cocoa tree trunks, pods, and branch intersections.',
      'Do not tank-mix with highly acidic chemicals or organophosphates.'
    ],
    storageInformation: 'Store in dry place. Keep pouches tightly sealed to avoid caking.',
    safetyInformation: {
      hazardLevel: 'Warning',
      activeIngredient: 'Copper Hydroxide 500 g/kg (Metallic copper equivalent)',
      ppeRequired: ['Dust respirator', 'Splash goggles', 'Chemical rubber gloves', 'Full overalls'],
      reentryInterval: '48 hours',
      withholdingPeriod: '7 days for vegetables; 14 days for cocoa',
      disposalInstructions: 'Toxic to aquatic life. Do not discharge into water bodies.'
    },
    featured: false
  },
  {
    id: 'heavy-duty-certified-farm-ppe-kit',
    name: 'AgriSafe Professional Chemical Application PPE Safety Kit',
    category: 'Other Agricultural Supplies',
    productType: 'Equipment',
    shortDescription: 'Complete ISO-certified chemical personal protective equipment kit including respirator, face shield, and chemical suit.',
    description: 'The AgriSafe Chemical PPE Kit provides comprehensive personal protection for operators applying agro-chemicals, herbicides, and pesticides. Includes a dual-cartridge organic vapor respirator, EN166 chemical splash goggles, heavy-gauge 15-mil nitrile chemical gauntlet gloves, durable microporous chemical overalls with hood, and an impermeable PVC spray apron.',
    packSize: 'Full Set Kit',
    availableSizes: ['Size M', 'Size L', 'Size XL', 'Size XXL'],
    price: 55.00,
    priceDisplay: '$55.00',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80',
    application: 'Operator safety during mixing, loading, and field application',
    applicationRate: 'Mandatory during all pesticide operations',
    suitableCrops: ['All Agricultural Fields', 'Nurseries', 'Storage Facilities'],
    keyBenefits: [
      'Certified A1P2 dual gas and particulate filtration protects respiratory system from toxic vapors and mists',
      'Heavy 15-mil nitrile gloves resist solvent penetration and skin absorption',
      'Breathable yet liquid-tight overall fabric prevents heat prostration during midday work',
      'Reusable durable gear packaged in a dedicated chemical storage carry tote'
    ],
    usageInstructions: [
      'Inspect all seals, straps, and filter cartridges prior to entering chemical mixing zone.',
      'Perform positive and negative pressure seal check on the half-mask respirator.',
      'Wash gloves with clean water and soap before removing them from hands.'
    ],
    storageInformation: 'Store in clean, dry, chemical-free room. Do not store inside pesticide warehouse.',
    safetyInformation: {
      hazardLevel: 'General',
      activeIngredient: 'Certified protective barrier materials (EN149, EN166, EN374)',
      ppeRequired: ['None required to wear the kit'],
      reentryInterval: 'N/A',
      withholdingPeriod: 'N/A',
      disposalInstructions: 'Dispose of heavily contaminated suits in accordance with hazardous waste protocols.'
    },
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'crop-protection-advice',
    title: 'Crop Protection Advice',
    shortDescription: 'Technical diagnostic assessments and targeted chemical treatment plans to prevent yield loss from weed, insect, and fungal pressure.',
    fullDescription: 'Our licensed agronomists provide actionable, field-verified crop protection strategies. We evaluate field history, disease pressure, pest thresholds, and climatic forecasts to develop targeted preventative and curative spray schedules that optimize control while reducing unnecessary chemical expenses.',
    deliverables: [
      'Field pest and pathogen identification',
      'Economic injury threshold calculation',
      'Active ingredient rotation schedules to stop chemical resistance',
      'Spray calibration and nozzle selection protocols'
    ],
    icon: 'ShieldCheck',
    suitableFor: 'Commercial grain farmers, fruit orchards, greenhouse growers'
  },
  {
    id: 'farm-input-supply',
    title: 'Farm Input Supply',
    shortDescription: 'Dependable regional distribution of certified fertilizers, certified seeds, high-grade agro-chemicals, and essential farm tools.',
    fullDescription: 'We operate direct supply lines from certified global and domestic agricultural manufacturers. Every batch of fertilizer, seed, and chemical is verified for purity and active ingredient percentage, ensuring farmers receive genuine products that perform as promised in the field.',
    deliverables: [
      'Guaranteed authentic certified agricultural inputs',
      'Direct warehouse pickup or scheduled farm gate delivery',
      'Manufacturer batch certificates and analysis reports',
      'Flexible packaging from smallholder packs to bulk 1-ton totes'
    ],
    icon: 'PackageCheck',
    suitableFor: 'Smallholders, medium enterprises, large commercial estates'
  },
  {
    id: 'fertilizer-recommendations',
    title: 'Fertilizer Recommendations',
    shortDescription: 'Science-backed soil nutrient calibration providing exact N-P-K and micronutrient blend prescriptions for specific crop stages.',
    fullDescription: 'Avoid costly under-fertilization or wasteful nutrient leaching. Our agronomy team interprets laboratory soil test results to build customized nutrient budgets tailored to your target yield, soil cation-exchange capacity, and crop developmental milestones.',
    deliverables: [
      'Soil nutrient deficit and pH analysis interpretation',
      'Basal vs. top-dressing split application timetables',
      'Custom dry bulk and water-soluble fertigation blends',
      'Cost-per-hectare nutrient efficiency calculations'
    ],
    icon: 'Sprout',
    suitableFor: 'Cereal producers, commercial vegetable growers, plantation managers'
  },
  {
    id: 'pest-disease-management',
    title: 'Pest & Disease Management',
    shortDescription: 'Integrated Pest Management (IPM) systems combining biological scouting, selective chemistry, and preventative cultural controls.',
    fullDescription: 'We help growers implement Integrated Pest Management (IPM) programs that manage troublesome pests like Fall Armyworm, Tuta Absoluta, Stem Borers, and fungal blights while protecting beneficial pollinators and maintaining soil health.',
    deliverables: [
      'Scouting protocol design and field monitoring traps',
      'Chemical compatibility and tank-mixing audits',
      'Biological predator and beneficial insect conservation guidance',
      'Post-harvest grain storage pest management'
    ],
    icon: 'Bug',
    suitableFor: 'Intensive vegetable growers, maize and cereal farms, cocoa estates'
  },
  {
    id: 'soil-improvement-guidance',
    title: 'Soil Improvement Guidance',
    shortDescription: 'Comprehensive soil remediation programs focusing on pH neutralization, organic carbon replenishment, and microbial restoration.',
    fullDescription: 'Healthy soil is the foundation of agricultural profitability. We assist growers in remediating acidic, compacted, or nutrient-depleted soils using calibrated agricultural liming, organic compost incorporation, biochar, and cover-cropping strategies.',
    deliverables: [
      'Soil acidity buffer curve and liming calculations',
      'Organic matter restoration and compost application plans',
      'Drainage, compaction, and soil tilth evaluations',
      'Microbial inoculant and mycorrhizae implementation'
    ],
    icon: 'Layers',
    suitableFor: 'Degraded lands, continuous cropping plots, new farm developments'
  },
  {
    id: 'agricultural-consultation',
    title: 'Agricultural Consultation',
    shortDescription: 'On-farm technical visits, crop viability studies, and comprehensive agronomic support throughout the entire cropping season.',
    fullDescription: 'Our experienced senior agronomists partner directly with farm managers and agricultural investors. From pre-season variety selection to harvest timing and post-harvest storage, we provide hands-on technical guidance that drives farm productivity.',
    deliverables: [
      'Dedicated on-site agronomy farm visits',
      'Seasonal production calendar and budgeting',
      'Staff training on safe chemical handling and sprayer calibration',
      'End-of-season yield review and continuous improvement planning'
    ],
    icon: 'UsersCheck',
    suitableFor: 'Farm owners, corporate agricultural projects, grower cooperatives'
  },
  {
    id: 'bulk-agricultural-supply',
    title: 'Bulk Agricultural Supply',
    shortDescription: 'Large-volume logistics, wholesale pallet pricing, and contracted forward deliveries for commercial agricultural enterprises.',
    fullDescription: 'For commercial plantations, farmer cooperatives, and agro-dealers, we offer dedicated contract manufacturing, bulk transport logistics, and competitive volume tier pricing. Secure your seasonal input requirements well ahead of planting spikes without supply disruptions.',
    deliverables: [
      'Truckload and pallet-tier volume discounts',
      'Forward contracting and guaranteed seasonal price locks',
      'Coordinated transport to remote farming clusters',
      'Structured credit terms for verified commercial partners'
    ],
    icon: 'Truck',
    suitableFor: 'Farmer unions, commercial plantations, agro-chemical stockists'
  }
];

export const CROPS: CropSolution[] = [
  {
    id: 'maize',
    name: 'Maize (Corn)',
    scientificOrType: 'Cereal Grain / Staple Field Crop',
    description: 'High-energy staple grain requiring balanced basal fertilization, timely nitrogen top-dressing, and early suppression of weed competition and fall armyworm.',
    recommendedProducts: [
      'AgriYield Pro-90 Certified Hybrid Yellow Maize Seed',
      'AgriGrow NPK 15-15-15 Balanced Compound Fertilizer',
      'AgriPure Prilled Urea 46% N',
      'MaizeShield Atrazine 500 SC Selective Herbicide',
      'StrikeForce Cypermethrin 10% EC'
    ],
    keyChallenges: [
      'Fall armyworm defoliation during whorl stage',
      'Early weed competition stunting seedling vigor',
      'Nitrogen deficiency during rapid knee-high vegetative flush'
    ],
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rice',
    name: 'Rice (Paddy & Upland)',
    scientificOrType: 'Cereal Grain / Wetland & Lowland',
    description: 'Vital grain crop demanding clean seedbed preparation, water management, split urea dosing, and preventative blast fungus management.',
    recommendedProducts: [
      'PaddyMaster Oryza-7 Lowland Certified Hybrid Rice Seed',
      'AgriPure Prilled Urea 46% N',
      'TopShield Azoxystrobin 250 SC',
      'ClearField 480 SL Non-Selective Herbicide'
    ],
    keyChallenges: [
      'Rice blast and sheath blight during humid conditions',
      'Stem borer tunneling during tillering and panicle initiation',
      'Aquatic and semi-aquatic weed infestation in shallow water'
    ],
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cassava',
    name: 'Cassava',
    scientificOrType: 'Root & Tuber / Resilient Starch',
    description: 'High-starch root crop requiring deep loosened soil, adequate potassium for tuber bulking, and weed control during the first 90 days before canopy closure.',
    recommendedProducts: [
      'AgriGrow NPK 15-15-15 Balanced Compound Fertilizer',
      'TerraVita Compost & Sterilized Pelletized Poultry Manure',
      'AgriCal Dolomitic Agricultural Lime',
      'ClearField 480 SL Non-Selective Herbicide'
    ],
    keyChallenges: [
      'Weed competition during early stem establishment',
      'Potassium depletion leading to poor tuber weight',
      'Cassava mosaic disease and green mite pressure'
    ],
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vegetables',
    name: 'Vegetables (Leafy & Brassicas)',
    scientificOrType: 'Horticulture / Intensive Beds',
    description: 'Fast-growing cabbage, kale, lettuce, and spinach requiring nutrient-dense soils, organic matter, and careful scouting for caterpillars and aphids.',
    recommendedProducts: [
      'TerraVita Compost & Sterilized Pelletized Poultry Manure',
      'AgriNitro CAN 27% N + 12% CaO',
      'CropShield Pro Max Bio-Stimulant',
      'StrikeForce Cypermethrin 10% EC'
    ],
    keyBenefits: [],
    keyChallenges: [
      'Diamondback moth larvae causing severe leaf skeletonization',
      'Flea beetles and aphids transmitting viral pathogens',
      'Rapid wilting during hot dry weather without organic mulching'
    ],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  } as unknown as CropSolution,
  {
    id: 'tomatoes',
    name: 'Tomatoes',
    scientificOrType: 'Solanaceous Fruit / Intensive Horticulture',
    description: 'High-value crop requiring constant monitoring for early and late blight, calcium feeding to avoid blossom-end rot, and fruit borer protection.',
    recommendedProducts: [
      'Solano F1 Commercial Hybrid Tomato Seed',
      'CropGuard Mancozeb 80% WP',
      'AgriNitro CAN 27% N + 12% CaO',
      'BlueShield 50 WP Copper Hydroxide',
      'Vanguard Lambda-Cyhalothrin 5% EC'
    ],
    keyChallenges: [
      'Late blight (Phytophthora infestans) devastating foliage within 48 hours',
      'Blossom-end rot caused by irregular moisture and calcium deficiency',
      'Tomato fruit borer and whitefly vectoring leaf curl virus'
    ],
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pepper',
    name: 'Pepper (Sweet & Hot Chilli)',
    scientificOrType: 'Solanaceous / High Market Demand',
    description: 'Demands well-drained fertile beds, balanced micronutrient feeding, and proactive mite, thrip, and anthracnose management.',
    recommendedProducts: [
      'TerraVita Compost & Sterilized Pelletized Poultry Manure',
      'CropGuard Mancozeb 80% WP',
      'HumicGold Concentrated Liquid Bio-Manure',
      'Vanguard Lambda-Cyhalothrin 5% EC'
    ],
    keyChallenges: [
      'Thrips and broad mites causing leaf curl and stunted growth',
      'Anthracnose circular fruit rot during rain periods',
      'Bacterial spot leading to widespread defoliation'
    ],
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cocoa',
    name: 'Cocoa',
    scientificOrType: 'Perennial Cash Crop / Agro-Forestry',
    description: 'Long-term tree crop requiring regular mirid bug control, preventative black pod fungal spraying, and soil conditioning.',
    recommendedProducts: [
      'BlueShield 50 WP Copper Hydroxide',
      'StrikeForce Cypermethrin 10% EC',
      'AgriCal Dolomitic Agricultural Lime',
      'ClearField 480 SL Non-Selective Herbicide'
    ],
    keyChallenges: [
      'Black Pod disease (Phytophthora) causing severe bean losses in wet weather',
      'Mirid (capsid) bug damage causing chupon dieback',
      'Epiphytic moss and parasitic mistletoe choking mature branches'
    ],
    image: 'https://images.unsplash.com/photo-1541855353051-d4cbff0bc1fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'oil-palm',
    name: 'Oil Palm',
    scientificOrType: 'Perennial Oil Plantation',
    description: 'High potassium and magnesium demanding plantation tree with strict circle weeding and nutrient replenishment requirements for fresh fruit bunches.',
    recommendedProducts: [
      'AgriCal Dolomitic Agricultural Lime',
      'AgriPure Prilled Urea 46% N',
      'ClearField 480 SL Non-Selective Herbicide',
      'AgriGrow NPK 15-15-15'
    ],
    keyChallenges: [
      'Heavy weed competition around weed circles and harvesting paths',
      'Magnesium deficiency causing orange frond spotting',
      'Rhinoceros beetle attacking spear leaves in replanted young stands'
    ],
    image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'plantain',
    name: 'Plantain & Banana',
    scientificOrType: 'Musa Genus / Perennial Stool',
    description: 'Heavy feeder demanding high organic matter, potassium, nematode suppression, and preventative control of Black Sigatoka leaf disease.',
    recommendedProducts: [
      'TerraVita Compost & Sterilized Pelletized Poultry Manure',
      'AgriPure Prilled Urea 46% N',
      'TopShield Azoxystrobin 250 SC',
      'HumicGold Concentrated Liquid Bio-Manure'
    ],
    keyChallenges: [
      'Black Sigatoka destroying green leaf surface needed to fill bunches',
      'Banana root weevils and nematodes undermining stool anchorage',
      'High wind lodging in unshaded or shallow root soils'
    ],
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'field-crops',
    name: 'Other Field Crops (Soybeans, Sorghum & Groundnuts)',
    scientificOrType: 'Broad-Acre Agronomy / Legumes & Grains',
    description: 'Commercial legumes and hardy cereals requiring inoculation, phosphatic starter fertilizers, and selective grass weed control.',
    recommendedProducts: [
      'AgriGrow NPK 15-15-15 Balanced Compound Fertilizer',
      'AgriCal Dolomitic Agricultural Lime',
      'CropShield Pro Max Bio-Stimulant',
      'StrikeForce Cypermethrin 10% EC'
    ],
    keyChallenges: [
      'Pod borer infestation during flowering and pod development',
      'Phosphorus lock-up in acidic soils reducing nodule count',
      'Leaf spot diseases causing premature shedding of foliage'
    ],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Quality Products',
    description: 'Every fertilizer, seed, and chemical batch is fully certified, chemically analyzed, and sourced directly from reputable manufacturers.',
    icon: 'AwardCheck'
  },
  {
    title: 'Reliable Supply',
    description: 'Robust warehouse reserves and established transport partnerships ensure your inputs arrive on time before crucial planting windows.',
    icon: 'Truck'
  },
  {
    title: 'Experienced Support',
    description: 'Licensed field agronomists on staff provide accurate diagnostic recommendations, dosage rates, and safety guidance.',
    icon: 'GraduationCap'
  },
  {
    title: 'Wide Product Selection',
    description: 'Comprehensive one-stop inventory spanning mineral fertilizers, organic manure, crop protection, certified seeds, and farm tools.',
    icon: 'Boxes'
  },
  {
    title: 'Farmer-Focused Solutions',
    description: 'We prioritize farmer profitability and soil longevity, matching the right product to your exact crop and soil needs.',
    icon: 'Handshake'
  },
  {
    title: 'Reliable Customer Service',
    description: 'Dedicated customer support team ready to assist with order tracking, technical data sheets, and custom bulk quotations.',
    icon: 'Headphones'
  }
];

export const RESOURCES: ResourceArticle[] = [
  {
    id: 'how-to-improve-soil-fertility',
    title: 'How to Improve Soil Fertility for Sustainable Crop Yields',
    category: 'Soil Management',
    readTime: '6 min read',
    date: 'August 14, 2026',
    shortDescription: 'Practical methods for balancing mineral nutrients, replenishing depleted soil organic matter, and restoring biological soil vitality.',
    author: 'Dr. Arthur Evans, Senior Agronomist',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    content: [
      'Soil fertility is far more than just adding synthetic fertilizer; it requires managing physical structure, chemical nutrient availability, and living biological soil ecosystems.',
      '1. Routine Soil Testing: Begin every crop cycle with a representative composite soil test. Testing reveals soil pH, organic matter percentage, and available phosphorus and potassium levels, preventing wasteful over-application.',
      '2. Addressing Soil pH: In acidic soils (pH < 5.8), phosphorus becomes chemically bound to aluminum and iron, rendering it unavailable to plants. Applying calibrated agricultural limestone restores pH to the optimal 6.0-6.8 zone.',
      '3. Integrating Organic Matter: Incorporating composted manure or green manure crops increases soil cation exchange capacity (CEC), allowing sandy soils to retain applied nutrients rather than letting them wash away into groundwater.',
      '4. Balanced Fertilization: Combine slow-release organic soil builders with precisely timed mineral applications to nourish both the soil microbiome and the active crop.'
    ],
    keyTakeaways: [
      'Test soil chemistry every 2-3 seasons to calibrate real nutrient deficits',
      'Maintain soil pH between 6.0 and 6.8 for peak nutrient uptake efficiency',
      'Incorporate certified composted manure to increase moisture and nutrient retention'
    ]
  },
  {
    id: 'managing-common-crop-diseases',
    title: 'Managing Common Crop Diseases: Prevention & Intervention',
    category: 'Crop Protection',
    readTime: '8 min read',
    date: 'August 02, 2026',
    shortDescription: 'Identifying early symptoms of fungal blights, bacterial wilts, and viral infections with practical management protocols.',
    author: 'Elena Vance, Plant Pathologist',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    content: [
      'Crop diseases can decimate a healthy field in days if not caught and addressed early. Understanding the Disease Triangle—host plant susceptibility, pathogen presence, and favorable environmental conditions—is fundamental.',
      '1. Preventative vs. Curative Spraying: Protectant fungicides like Mancozeb or Copper Hydroxide form a protective chemical shield on leaf surfaces, preventing fungal spores from penetrating. Once lesions appear, systemic fungicides like Azoxystrobin are required to arrest internal mycelial growth.',
      '2. Cultural Sanitation: Remove and destroy infected crop residues from previous seasons. Many fungal spores overwinter in decaying stems and fallen leaves.',
      '3. Plant Spacing & Canopy Airflow: Dense, overcrowded planting creates humid, stagnant microclimates that accelerate spore germination. Maintain recommended inter-row spacing to allow sunlight penetration and leaf drying.'
    ],
    keyTakeaways: [
      'Apply multi-site protectant fungicides before humid rainy conditions begin',
      'Never allow standing water or dense canopies that trap moisture for prolonged hours',
      'Rotate chemical fungicide groups (FRAC codes) to avoid pathogen resistance'
    ]
  },
  {
    id: 'understanding-fertilizer-application',
    title: 'Understanding Fertilizer Application: The 4R Nutrient Stewardship',
    category: 'Fertilizer Guide',
    readTime: '7 min read',
    date: 'July 26, 2026',
    shortDescription: 'Applying the Right Source, at the Right Rate, at the Right Time, and in the Right Place to maximize fertilizer investment.',
    author: 'Markus Weber, Nutrient Specialist',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    content: [
      'Fertilizer represents one of the single largest operating expenditures for commercial crop producers. Adopting the globally recognized 4R framework maximizes crop response while minimizing environmental losses.',
      'Right Source: Match fertilizer nutrient form to plant requirements and soil properties (e.g., using CAN instead of Urea on acid-sensitive soils).',
      'Right Rate: Base application rates strictly on realistic yield goals and soil test data. Excess nitrogen causes vegetative lodging and attracts chewing insect pests.',
      'Right Time: Align nutrient availability with crop uptake curves. For corn, apply 30% of nitrogen at planting and 70% at knee-high rapid elongation stage.',
      'Right Place: Position nutrients where plant roots can easily access them—incorporating granular fertilizer into moist soil rather than broadcasting onto dry crusts.'
    ],
    keyTakeaways: [
      'Split nitrogen applications to prevent leaching losses from heavy rains',
      'Band basal fertilizers 5-8 cm away from seeds to avoid osmotic root scorch',
      'Ensure soil has adequate moisture when applying granular fertilizers'
    ]
  },
  {
    id: 'effective-weed-management',
    title: 'Effective Weed Management in Commercial Field Production',
    category: 'Weed Control',
    readTime: '5 min read',
    date: 'July 15, 2026',
    shortDescription: 'Combining pre-emergence residual chemical barriers with directed post-emergence herbicides to preserve crop moisture and nutrients.',
    author: 'Sarah Osei, Weed Agronomist',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    content: [
      'Weeds compete aggressively with young crops for sunlight, soil moisture, and applied nutrients. The first 4 to 6 weeks after crop emergence represent the critical weed-free period.',
      '1. The Power of Pre-Emergence Chemistry: Applying a selective pre-emergence herbicide like Atrazine immediately after planting creates an invisible barrier in the upper soil layer, destroying germinating weed seeds before they break the surface.',
      '2. Clean Seedbeds: Use non-selective systemic herbicides such as Glyphosate 480 SL prior to planting to eradicate perennial deep-rooted weeds without turning the soil and bringing buried weed seeds to the surface.',
      '3. Sprayer Calibration: Calibrate knapsack or tractor boom pressure sprayers with clean water. Check nozzle output with a measuring cylinder to avoid under-dosing (which breeds resistance) or over-dosing (which risks crop phytotoxicity).'
    ],
    keyTakeaways: [
      'Maintain zero weed competition during the first 30 days after planting',
      'Use fan nozzles at steady 2-bar pressure for uniform herbicide droplet distribution',
      'Apply systemic herbicides when target weeds have healthy, dust-free green leaves'
    ]
  },
  {
    id: 'protecting-crops-from-insect-damage',
    title: 'Protecting Crops from Insect Damage: Thresholds & Timing',
    category: 'Pest Management',
    readTime: '6 min read',
    date: 'June 29, 2026',
    shortDescription: 'How to scout field pests, recognize economic injury thresholds, and apply targeted insecticides safely and effectively.',
    author: 'Elena Vance, Plant Pathologist',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a46?auto=format&fit=crop&w=800&q=80',
    content: [
      'Indiscriminate calendar spraying wastes money and destroys beneficial insects. Modern crop protection relies on economic threshold scouting.',
      '1. Scouting Routine: Walk fields in a "W" or "Z" pattern twice weekly. Check undersides of leaves, terminal buds, and leaf axils where insects shelter.',
      '2. Understanding Thresholds: Spraying is justified only when pest populations reach a density where the cost of projected crop damage exceeds the cost of chemical treatment.',
      '3. Timing Applications: Spray early in the morning or late in the afternoon when ambient temperatures are cooler, humidity is higher, and beneficial pollinators like honeybees are back in their hives.'
    ],
    keyTakeaways: [
      'Scout fields systematically twice every week during active growth',
      'Avoid spraying during high midday heat which causes rapid chemical droplet evaporation',
      'Always observe mandatory pre-harvest withholding periods specified on product labels'
    ]
  },
  {
    id: 'best-practices-for-healthy-crop-growth',
    title: 'Best Practices for Healthy Crop Growth: Seedbed to Harvest',
    category: 'Agronomy Fundamentals',
    readTime: '7 min read',
    date: 'June 12, 2026',
    shortDescription: 'Core agronomic fundamentals: certified seed selection, seedbed preparation, optimal plant population, and crop rotation.',
    author: 'Dr. Arthur Evans, Senior Agronomist',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    content: [
      'High crop productivity is not the result of a single product; it is the cumulative effect of executing basic agronomic fundamentals with consistency.',
      '1. Certified High-Germination Seeds: Farm-saved grain often suffers from disease contamination, variable vigor, and genetic breakdown. Certified hybrid seeds ensure 90%+ germination, uniform maturity, and built-in disease tolerance.',
      '2. Plant Population Density: Calibrate planter spacing precisely. Over-crowding causes spindly stems and small fruit; under-planting wastes expensive field area and encourages weed colonization.',
      '3. Crop Rotation: Rotate cereal crops with nitrogen-fixing grain legumes or tubers to break persistent insect reproductive cycles and balance soil nutrient extraction depths.'
    ],
    keyTakeaways: [
      'Invest in certified seeds treated with fungicide/insecticide seed dressing',
      'Calibrate plant population density to match water and fertilizer availability',
      'Practice multi-year crop rotations to break insect and pathogen lifecycles'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Samuel Adebayo',
    role: 'Commercial Grain Farmer (120 Hectares)',
    farmName: 'Adebayo Agro Farms',
    location: 'Oyo State',
    quote: 'We switched our entire 120-hectare maize operation to AgriSupply’s hybrid seeds and structured NPK/Urea split application program. Our average yield climbed from 3.8 tons to 6.2 tons per hectare. Their technical team came to our farm to verify calibration before planting.',
    cropsGrown: 'Yellow Maize & Soybeans',
    initials: 'SA',
    verifiedCustomer: true
  },
  {
    id: 'test-2',
    name: 'Grace Mwangi',
    role: 'Greenhouse & Open Field Vegetable Producer',
    farmName: 'Rift Valley Fresh Greens',
    location: 'Nakuru County',
    quote: 'Managing tomato blight during the heavy rains used to be our biggest headache. The team at AgriSupply recommended a preventative schedule alternating Mancozeb and Azoxystrobin alongside CAN calcium feeding. Our fruit firmness improved and blossom-end rot dropped to zero.',
    cropsGrown: 'Hybrid Tomatoes & Sweet Peppers',
    initials: 'GM',
    verifiedCustomer: true
  },
  {
    id: 'test-3',
    name: 'Kwame Mensah',
    role: 'Managing Director, Cooperative Cocoa Enterprise',
    farmName: 'Golden Pod Cocoa Growers',
    location: 'Western Region',
    quote: 'Supplying 450 cooperative farmers with authentic chemicals used to be fraught with counterfeit products. AgriSupply delivers factory-sealed copper fungicides and sprayers directly to our regional aggregation centers with full batch documentation.',
    cropsGrown: 'Cocoa & Plantain Intercrop',
    initials: 'KM',
    verifiedCustomer: true
  },
  {
    id: 'test-4',
    name: 'Ibrahim Danjuma',
    role: 'Irrigated Rice & Cereal Producer (85 Hectares)',
    farmName: 'Hadejia River Basin Farms',
    location: 'Jigawa State',
    quote: 'We order both fertilizer and pre-emergence herbicides in bulk pallets. What sets this company apart is their reliable delivery schedules. The trucks arrived exactly two days before our paddy transplanting date, with zero damaged packaging.',
    cropsGrown: 'Lowland Rice & Sorghum',
    initials: 'ID',
    verifiedCustomer: true
  }
];

export const COMPANY_INFO = {
  name: 'AgriSupply Co.',
  tagline: 'Reliable Agricultural Solutions for Healthier Crops',
  description: 'Supplying certified fertilizers, agro-chemicals, crop protection products, organic manure, hybrid seeds, and professional agronomic guidance to commercial growers and farming enterprises.',
  address: '14 Industrial Parkway, Agro-Hub Zone, Sector 4',
  city: 'Agriland',
  phone: '+1 (800) 458-2474',
  directSales: '+1 (800) 458-2475',
  email: 'orders@agrisupplycompany.com',
  supportEmail: 'agronomy@agrisupplycompany.com',
  hours: {
    weekdays: 'Monday – Friday: 7:30 AM – 5:30 PM',
    saturday: 'Saturday: 8:00 AM – 2:00 PM',
    sunday: 'Sunday: Closed (Emergency Logistics On Call)'
  },
  stats: [
    { label: 'Verified Agricultural Inputs', value: '150+' },
    { label: 'Commercial Hectares Supported', value: '85,000+' },
    { label: 'Active Farm Clients & Co-ops', value: '4,200+' },
    { label: 'Field Agronomists on Staff', value: '28' }
  ]
};
