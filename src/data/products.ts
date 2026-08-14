export interface Product {
  id: string;
  name: string;
  category: 'organic' | 'mineral' | 'liquid' | 'granular' | 'specialty' | 'powder' | 'liquids';
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  usage: string[];
  ingredients: string[];
  safetyTips: string[];
  price: string;
  inStock: boolean;
  application: string;
}

export const products: Product[] = [
  {
    id: 'bhoomi-shakthi',
    name: 'Bhoomi Shakthi',
    category: 'organic',
    image: '/poduct/BHOOMI SHAKTHI.webp',
    shortDescription: 'Potassium Humate 98%',
    fullDescription: `Bhoomi Shakthi is a Bio-stimulate boost enhancer for soil and crop containing Potassium Humate 98%. This organic granular formulation improves soil health, enhances root growth, increases nutrient uptake, and boosts yield & quality. The product works as a soil conditioner and helps improve overall crop productivity.

Key Benefits:
• Improves Soil Health
• Enhances Root Growth  
• Increases Nutrient Uptake
• Boosts Yield & Quality

Recommended Dosage:
• 1 kg per acre at the time of sowing/planting, top-dressing.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 1 kg.`,
    features: [
      'Potassium Humate 98% concentration',
      'Bio-stimulate boost enhancer',
      'Improves soil health significantly',
      'Enhances root growth and development',
      'Increases nutrient uptake efficiency',
      'Boosts yield and quality of crops',
      'Organic granular formulation',
      'Soil conditioner properties'
    ],
    usage: [
      '1 kg per acre at sowing/planting time',
      'Apply during top-dressing',
      'Use along with fertilizers as regular practice',
      'Suitable for wide range of crops',
      'Effective for soil conditioning',
      'Apply to vegetables, fruits, field crops'
    ],
    ingredients: [
      'Potassium Humate (98%)',
      'Organic soil enhancers',
      'Soil conditioning compounds',
      'Root growth promoters',
      'Nutrient uptake enhancers',
      'Yield boosting agents'
    ],
    safetyTips: [
      'Follow recommended dosage of 1kg per acre',
      'Use with regular fertilizer practice',
      'Safe for all crop types',
      'Store in cool, dry place',
      'Organic and eco-friendly'
    ],
    price: '₹450',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-amino-plus',
    name: 'Win Amino Plus',
    category: 'liquids',
    image: '/poduct/WIN AMINO PLUS.webp',
    shortDescription: 'Bioactive Protein Hyrolysate 25%',
    fullDescription: `Win Amino Plus is a unique residue free plant bio stimulator base on protein hydrolyzed, amino acids and vitamins. Win Amino Plus enhances chlorophyll content, reproductive growth of plant ultimately makes flowering and branches stronger. Win Amino Plus accelerates plant growth speed and improves the metabolism system. Win Amino Plus enhances the flowering capacity of the plant and works as a yield booster. Win Amino Plus increases the number of fruits and reduce the pre-dropping of fruits & flowers, An adequate dose of produce increase and maintain fruit size and shine.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 250 ml`,
    features: [
      'Unique residue free plant bio stimulator',
      'Based on protein hydrolyzed with amino acids & vitamins',
      'Enhances chlorophyll content',
      'Strengthens flowering and branches',
      'Accelerates plant growth speed',
      'Works as yield booster',
      'Reduces pre-dropping of fruits & flowers',
      'Maintains fruit size and shine'
    ],
    usage: [
      '25 ml per 10 ltr of water',
      '2.5 ml per ltr of water',
      '250 to 300 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply during growth and flowering stages',
      'Suitable for wide range of crops'
    ],
    ingredients: [
      'Bioactive protein hydrolysate (25%)',
      'Hydrolyzed amino acids',
      'Essential vitamins',
      'Bio stimulator compounds',
      'Chlorophyll enhancers',
      'Metabolism improvers'
    ],
    safetyTips: [
      'Residue free formulation',
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Safe for all crop types',
      'Store in cool, dry place'
    ],
    price: '₹750',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-crop-don',
    name: 'Win Crop Don',
    category: 'liquids',
    image: '/poduct/WIN CROP DON.webp',
    shortDescription: 'Biostimulant',
    fullDescription: `Win Crop Don is a naturally derived organic product which can make the plant healthy, vigorous and improves resistance against pests and diseases.

Product Features:
• Win Crop Don is a naturally derived organic product which can make the plant healthy, vigorous and improves resistance against pests and diseases.

Effectiveness:
• Improve the resistance against pest and diseases.

Recommended Dosage:
• 2.5 ml per 1 ltr. of water
• 250 ml per acre

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 250 ml | 500 ml | 1 ltr.`,
    features: [
      'Naturally derived organic product',
      'Makes plants healthy and vigorous',
      'Improves resistance against pests and diseases',
      'Biostimulant properties',
      'Enhances plant defense mechanisms',
      'Organic crop protection solution'
    ],
    usage: [
      '2.5 ml per 1 litre of water',
      '250 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply to improve plant resistance',
      'Suitable for pest and disease management',
      'Regular application throughout growing season'
    ],
    ingredients: [
      'Naturally derived organic compounds',
      'Plant health enhancers',
      'Resistance building factors',
      'Biostimulant compounds',
      'Pest and disease resistance promoters'
    ],
    safetyTips: [
      'Follow recommended dosage: 2.5ml per litre',
      'Use with regular fertilizer practice',
      'Naturally derived and safe',
      'Store in cool, dry place',
      'Safe for organic farming'
    ],
    price: '₹890',
    inStock: true,
    application: 'All Crops - Pest & Disease Resistance'
  },
  {
    id: 'win-flower',
    name: 'Win Flower',
    category: 'liquids',
    image: '/poduct/WIN FLOWER.webp',
    shortDescription: 'Bioactive Protein Hyrolysate 25%',
    fullDescription: `Win Flower initiates flower bud differentiation and helps in the quick emergence of flower or inflorescence. Win Flower induces early flowering and more retention of flower & fruits in many of the field and horticultural crops. Win Flower control flower and fruit drops result in healthy, vigorous, growth, significant increase in quantity and quality yield.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 500 ml`,
    features: [
      'Initiates flower bud differentiation',
      'Helps quick emergence of flower/inflorescence',
      'Induces early flowering',
      'Promotes flower & fruit retention',
      'Controls flower and fruit drops',
      'Results in healthy, vigorous growth',
      'Significant increase in quantity and quality yield',
      'Bioactive protein hydrolysate 25%'
    ],
    usage: [
      '25 ml per 10 ltr of water',
      '2.5 ml per ltr of water',
      '250 to 300 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply during pre-flowering and flowering stages',
      'Suitable for field and horticultural crops'
    ],
    ingredients: [
      'Bioactive protein hydrolysate (25%)',
      'Flower bud differentiation compounds',
      'Flowering induction factors',
      'Retention enhancers',
      'Drop control agents',
      'Yield improvement compounds'
    ],
    safetyTips: [
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Apply at right flowering stage',
      'Store in cool, dry place',
      'Suitable for organic farming'
    ],
    price: '₹680',
    inStock: true,
    application: 'Flowering Plants'
  },
  {
    id: 'win-fruits',
    name: 'Win Fruits',
    category: 'liquids',
    image: '/poduct/WIN FRUITS.webp',
    shortDescription: 'Biomass Hydrolysate',
    fullDescription: `Win Fruits initiates flower bud differentiation and helps in the quick emergence of fruits. Win Fruits induces early flowering and more retention of fruits in many of the field and horticultural crops. Win Fruits control fruit drops result in healthy, vigorous, growth, significantly increase in quantity and quality yield.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 500 ml`,
    features: [
      'Initiates flower bud differentiation',
      'Helps quick emergence of fruits',
      'Induces early flowering',
      'Promotes fruit retention',
      'Controls fruit drops effectively',
      'Results in healthy, vigorous growth',
      'Significantly increases quantity and quality yield',
      'Biomass hydrolysate formula'
    ],
    usage: [
      '750-1500 ml per hectare',
      'Drenching/Drip irrigation: 2500 ml per hectare',
      'Use along with fertilizers as regular practice',
      'Apply during flowering and fruit development',
      'Suitable for field and horticultural crops',
      'Effective for wide range of crops'
    ],
    ingredients: [
      'Biomass hydrolysate',
      'Flower bud differentiation compounds',
      'Fruit development enhancers',
      'Retention promoting factors',
      'Drop control agents',
      'Yield improvement compounds'
    ],
    safetyTips: [
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Apply at flowering and fruiting stages',
      'Store in cool, dry place',
      'Safe for horticultural crops'
    ],
    price: '₹920',
    inStock: true,
    application: 'Fruit Crops'
  },
  {
    id: 'win-gold-magic',
    name: 'Win Gold Magic',
    category: 'liquids',
    image: '/poduct/WIN GOLD MAGIC.webp',
    shortDescription: 'Biostimulant',
    fullDescription: `Win Gold Magic is a consortium of NPK duly fortified with highly active Humic substances.

Product Features:
• Win Gold Magic is a consortium of NPK duly fortified with highly active Humic substances
• Improves plant capacity to uptake and utilize the nutrients in a more efficient way.
• Improves seed germination and ensures early establishment of the plants.
• Promotes canopy growth, tillering / branching and crop productivity.
• Strengthens resistance power and helps the plants to withstand biotic and abiotic stresses
• Improves the soil structure and enhances its ability to hold more water and nutrients.
• 100% water soluble: no-deposit, no-clogging on drip irrigation systems.
• Promotes higher yield and better quality of the produce.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

Recommended Dosage:
• Seed Dressing: Mix 5ml of Win Gold Magic with 1 kg of seed thoroughly and sow. During growth flowering and fruit formation stages: Apply Win Magic at 2 ml per litre of water as a spray (Shake the container before use).
• 750 to 1500 ml per hectare (300 to 600 ml per acre)for foliar spray and up to 2500 ml per hectare (1000 ml per acre) for drenching or drip irrigation.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 500 ml | 5 ltr`,
    features: [
      'NPK consortium with humic substances',
      'Improves nutrient uptake efficiency',
      'Enhances seed germination',
      'Promotes canopy growth & productivity',
      'Strengthens stress resistance',
      '100% water soluble formula',
      'Improves soil structure',
      'Higher yield and better quality'
    ],
    usage: [
      'Seed dressing: 5ml per kg seed',
      'Foliar spray: 2ml per litre water',
      '750-1500ml per hectare for foliar spray',
      'Up to 2500ml per hectare for drip irrigation',
      'Shake container before use',
      'Use with regular fertilizers'
    ],
    ingredients: [
      'NPK nutrients',
      'Highly active humic substances',
      'Biostimulant compounds',
      'Water soluble nutrients',
      'Stress resistance factors'
    ],
    safetyTips: [
      'Shake container before use',
      'Follow recommended dosage',
      'Compatible with drip irrigation',
      'Store in cool, dry place',
      'Use with regular fertilizer practice'
    ],
    price: '₹1200',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-hap-granules',
    name: 'Win HAP Granules',
    category: 'granular',
    image: '/poduct/WIN HAP GRANULES.webp',
    shortDescription: 'Bioactive Humic Substances Granules',
    fullDescription: `Win HAP Granules is a plant Biostimulant in granular form containing Humic substances & nutrients.

Product Features:
• Win HAP Granules is a plant Biostimulant in granular form containing Humic substances & nutrients.
• It contains active forms of Humic Substances like Humic acid, Fulvic acids, Humins and exhibits Phytohormones like activity.
• The product accelerates plant metabolic processes and enhances Nutrient uptake thereby increasing yield.
• Win HAP granules helps the crops to manage abiotic and biotic stress.
• Enhance quality and shelf life of the produce.
• Enhances population and activity of soil microbes.

Effectiveness:
• Win HAP granules enhances growth and productivity of a wide range of crops such as field crops plantation crops, vegetables, fruits, ornamental cotton fibre and crops in home garden.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 2 kg | 5 kg.`,
    features: [
      'Plant biostimulant in granular form',
      'Contains humic substances & nutrients',
      'Active forms of humic acid, fulvic acids, humins',
      'Exhibits phytohormones like activity',
      'Accelerates plant metabolic processes',
      'Enhances nutrient uptake and yield',
      'Helps manage abiotic and biotic stress',
      'Enhances quality and shelf life',
      'Boosts soil microbial activity'
    ],
    usage: [
      '12.5- 25 kg per hectare',
      'Use along with fertilizers as regular practice',
      'Apply during planting or growing season',
      'Broadcast or incorporate into soil',
      'Suitable for wide range of crops',
      'Effective for field and plantation crops'
    ],
    ingredients: [
      'Bioactive humic substances',
      'Humic acid',
      'Fulvic acids',
      'Humins',
      'Essential nutrients',
      'Phytohormone-like compounds',
      'Soil microbe enhancers'
    ],
    safetyTips: [
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Safe for all crop types',
      'Enhances soil microbial activity',
      'Store in dry place'
    ],
    price: '₹580',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-hap-liquid',
    name: 'Win HAP Liquid',
    category: 'liquids',
    image: '/poduct/WIN HAP LIQUID.webp',
    shortDescription: 'Bioactive Humic Substances',
    fullDescription: `Win HAP Liquid is a plant Biostimulant containing 6% Humic substances derived from Renewable Agro Biomass.

Product Features:
• Win HAP Liquid is a plant Biostimulant containing 6% Humic substances derived from Renewable Agro Biomass
• It contains active forms of Humic. Substances like Humic acid. Fulvic acids and Humins and exhibits Phytohormones like activity.
• The product accelerates plant metabolic processes and enhances nutrient uptake thereby increasing yield.
• The product helps crops to manage abiotic and biotic stress.
• Ecohume enhance quality and shelf life of the products.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

For Better Efficacy:
• Win HAP Liquid applications at vegetative stage and early reproductive growth state is more effective.
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 500 ml | 1 ltr. | 5 ltr.`,
    features: [
      'Plant biostimulant with 6% humic substances',
      'Derived from renewable agro biomass',
      'Contains humic acid, fulvic acids and humins',
      'Exhibits phytohormones like activity',
      'Accelerates plant metabolic processes',
      'Enhances nutrient uptake and yield',
      'Helps manage abiotic and biotic stress',
      'Improves quality and shelf life'
    ],
    usage: [
      '750-1500 ml per hectare',
      'Drenching/Drip irrigation: 2500 ml per hectare',
      'Apply at vegetative stage for better efficacy',
      'Apply during early reproductive growth',
      'Use along with fertilizers as regular practice',
      'Suitable for wide range of crops'
    ],
    ingredients: [
      'Bioactive humic substances (6%)',
      'Humic acid',
      'Fulvic acids',
      'Humins',
      'Phytohormone-like compounds',
      'Renewable agro biomass derivatives'
    ],
    safetyTips: [
      'Most effective at vegetative stage',
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Derived from renewable sources',
      'Store in cool, dry place'
    ],
    price: '₹650',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-hi-growth',
    name: 'Win Hi-Growth',
    category: 'liquids',
    image: '/poduct/WIN HI-GROWTH.webp',
    shortDescription: 'Bioactive Fulvic Acid, Amino Acid and Vitamins',
    fullDescription: `Win Hi-Growth is a Plant Growth Promoter (Enriched with Amino Peptides). Win Hi-Growth and development of healthy roots of the plant which absorb essential nutrients and moisture from the soil and make the plants strong. Win Hi-Growth increases the plant photo synthetic activity, strength in the plant to face adverse weather conditions. Win Hi-Growth increases the quality and yield of crops and profits at low cost investment. Win Hi-Growth develops resistance against pests and diseases completely safe for humans, animals and the environment.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 500 ml`,
    features: [
      'Plant Growth Promoter with Amino Peptides',
      'Develops healthy root system',
      'Increases photosynthetic activity',
      'Builds strength against adverse weather',
      'Improves quality and yield at low cost',
      'Develops pest and disease resistance',
      'Safe for humans, animals and environment'
    ],
    usage: [
      '25 ml per 10 ltr of water',
      '2.5 ml per ltr of water',
      '250 to 300 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply during growth stages',
      'Suitable for wide range of crops'
    ],
    ingredients: [
      'Bioactive fulvic acid',
      'Amino acids and peptides',
      'Essential vitamins',
      'Plant growth promoters',
      'Root development compounds',
      'Photosynthesis enhancers'
    ],
    safetyTips: [
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Safe for humans and animals',
      'Environment friendly',
      'Store in cool, dry place'
    ],
    price: '₹780',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-kissan-100',
    name: 'Win Kissan 100',
    category: 'liquids',
    image: '/poduct/Win Kissan 100.webp',
    shortDescription: 'Wetter, Spreader & Penetrator',
    fullDescription: `WIN KISSAN 100 is a new generation multi-action, highly concentrated non-ionic spray adjuvant with minimum 82% active ingredients.

Product Features:
• WIN KISSAN 100 is a new generation multi-action, highly concentrated non-ionic spray adjuvant with minimum 82% active ingredients.
• It is specially designed as an excellent activator wetter, spreader, penetrator and acts to increases yield by improving the crop coverage.
• It improves effectiveness Agrochemicals by inducing uniform spread of spray droplets reduces bouncing back and loss of spray fluid and enhances spray retention time on plant surfaces.
• It has a unique property to maintain soil moisture by improving water penetration and absorption in the soil.
• It facilitated uniform mixing of powder pesticides and fertilizers.
• It is biodegradable, environmental friendly and compatible with wide range of agrochemicals such as insecticides, herbicides, PGP's and foliar fertilizers.

Effectiveness:
• Can be used for all crops including vegetables, fruits, floriculture and plantation as a tank mix.

Recommended Dosage:
• 5 ml in 15 litres of water (with recommended dosage of insecticides, fungicides, foliar fertilizers and plant nutrients as per label instruction)
• 20 ml in 15 litres of water (with herbicides)
• 160 ml in 80 litres of water per acre (for irrigation)

For Better Efficacy:
• Ensure complete coverage of canopy
• Follow the label

Packaging Size: 100 ml | 500 ml | 5 ltr`,
    features: [
      'Multi-action spray adjuvant',
      'Minimum 82% active ingredients',
      'Excellent wetter, spreader & penetrator',
      'Improves crop coverage',
      'Biodegradable & eco-friendly',
      'Compatible with wide range of agrochemicals'
    ],
    usage: [
      '5 ml in 15 litres water with insecticides/fungicides',
      '20 ml in 15 litres water with herbicides',
      '160 ml in 80 litres water per acre for irrigation',
      'Ensure complete canopy coverage',
      'Use as tank mix with other agrochemicals'
    ],
    ingredients: [
      'Non-ionic surfactants (82% minimum)',
      'Wetting agents',
      'Spreading compounds',
      'Penetration enhancers',
      'Biodegradable components'
    ],
    safetyTips: [
      'Follow label instructions carefully',
      'Use recommended dosage only',
      'Ensure proper mixing',
      'Store in cool, dry place',
      'Compatible with most agrochemicals'
    ],
    price: '₹520',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-moss',
    name: 'Win Moss',
    category: 'liquids',
    image: '/poduct/WIN MOSS.webp',
    shortDescription: 'Bioactive Humic Substances with Nutrients',
    fullDescription: `WIN Moss is an Eco-friendly Biostimulant for Lush Green Crop, improved crop growth and productivity.

Product Features:
• WIN Moss is an Eco-friendly Biostimulant for Lush Green Crop, improved crop growth and productivity.
• Provides quick supplements of nutrients.
• Improves chlorophyll synthesis and greenery in plants.
• Improves quality and post-harvest life of agri products.
• Enhances population and activity of soil microbes.

Effectiveness:
• Win Moss enhances growth and productivity of a wide range of crops such as field cross plantation crops, vegetables, fruits, ornamental, fibre crops, home & garden etc.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 500 ml`,
    features: [
      'Eco-friendly biostimulant',
      'Promotes lush green crop growth',
      'Quick nutrient supplements',
      'Improves chlorophyll synthesis',
      'Enhances post-harvest life',
      'Boosts soil microbial activity'
    ],
    usage: [
      'Foliar application: 2.5ml per litre water',
      'Soil application: 500ml per acre for drip irrigation',
      'Use along with fertilizers as regular practice',
      'Suitable for wide range of crops',
      'Apply during growth stages'
    ],
    ingredients: [
      'Bioactive humic substances',
      'Essential nutrients',
      'Biostimulant compounds',
      'Chlorophyll enhancers',
      'Microbial activators'
    ],
    safetyTips: [
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Store in cool, dry place',
      'Eco-friendly and safe',
      'Suitable for organic farming'
    ],
    price: '₹430',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-plant-boost',
    name: 'Win Plant Boost',
    category: 'liquids',
    image: '/poduct/WIN PLANT BOOST.webp',
    shortDescription: 'Bioactive Protein Hyrolysate with Nutrients',
    fullDescription: `Win Plant Boost is a naturally driven organic product that influences all crops plant physiological systems. Win Plant Boost penetrates through the cellular membrane to stimulate the plant's physiological process. Win Plant Boost accelerates cellular division and increases vegetative growth. Win Plant Boost enhances the enzymatic activities to strengthen the plant defense mechanism at the time of flowering & fruiting to resist pests & diseases. Win Plant Boost promotes root growth and enhances the ability to absorb plant nutrients from the soil. Win Plant Boost reduces flower and fruit drops. Win Plant Boost significance increase in quality and quantity yield.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 1 Ltr.`,
    features: [
      'Naturally driven organic product',
      'Influences all crop physiological systems',
      'Penetrates through cellular membrane',
      'Accelerates cellular division',
      'Increases vegetative growth',
      'Enhances enzymatic activities',
      'Strengthens plant defense mechanism',
      'Promotes root growth and nutrient absorption',
      'Reduces flower and fruit drops'
    ],
    usage: [
      '25 ml per 10 ltr of water',
      '2.5 ml per ltr of water',
      '250 to 300 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply during growth, flowering & fruiting stages',
      'Suitable for wide range of crops'
    ],
    ingredients: [
      'Bioactive protein hydrolysate',
      'Essential nutrients',
      'Cellular membrane penetrators',
      'Enzymatic activity enhancers',
      'Root growth promoters',
      'Defense mechanism strengtheners'
    ],
    safetyTips: [
      'Naturally driven organic product',
      'Follow recommended dosage',
      'Use with regular fertilizer practice',
      'Safe for all crop types',
      'Store in cool, dry place'
    ],
    price: '₹690',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-plant-care',
    name: 'Win Plant Care',
    category: 'liquids',
    image: '/poduct/WIN PLANT CARE.webp',
    shortDescription: 'Bio-Chemical',
    fullDescription: `Plant Care is virus & bacteria killer suitable for foliar application of all crop. It has strong killing effect against plant virus and bacteria so that it acts effectively against all viral and bacterial diseases of plants. The main ingredient of Plant Care is lysozyme, which is a multi purpose enzyme which protect plants from bacteria and virus, it is capable of breaking the chemical bonds of the outer cell wall of the bacteria and virus. It is capable of breaking the chemical bonds of the outer cell wall of the bacteria and virus. It stops the viral and bacterial growth & induces resistance in plant against viral and bacterial diseases. the growth of virus may be stopped by direct contact with the spray of plant care.

TARGET DISEASES:
Tobacco mosaic virus, cauliflower mosaic virus, barley yellow dwarf, bud blight, sugarcane mosaic virus lettuce mosaic virus, maize mosaic virus, peanut stunt virus, leaf curl virus, potato virus, yellow mosaic virus etc.

Effectiveness:
• Effective control of bacterial virus diseases.

Recommended Dosage:
• 2 ml per ltr.
• 250 ml per acre

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 100 ml | 250 ml`,
    features: [
      'Virus & bacteria killer for foliar application',
      'Strong killing effect against plant virus and bacteria',
      'Acts effectively against all viral and bacterial diseases',
      'Contains lysozyme as main ingredient',
      'Multi-purpose enzyme protection',
      'Breaks chemical bonds of bacteria and virus cell walls',
      'Stops viral and bacterial growth',
      'Induces resistance against viral diseases',
      'Direct contact spray effectiveness'
    ],
    usage: [
      '2 ml per litre of water',
      '250 ml per acre',
      'Foliar application on all crops',
      'Use along with fertilizers as regular practice',
      'Direct contact spray for virus control',
      'Apply during disease prevention or treatment'
    ],
    ingredients: [
      'Lysozyme (main active ingredient)',
      'Multi-purpose enzyme compounds',
      'Cell wall breaking agents',
      'Antiviral compounds',
      'Antibacterial agents',
      'Resistance inducing factors'
    ],
    safetyTips: [
      'Follow recommended dosage: 2ml per litre',
      'Use with regular fertilizer practice',
      'Suitable for foliar application',
      'Effective against wide range of viral diseases',
      'Store in cool, dry place'
    ],
    price: '₹620',
    inStock: true,
    application: 'All Crops - Viral & Bacterial Disease Control'
  },
  {
    id: 'win-protect',
    name: 'Win Protect',
    category: 'liquids',
    image: '/poduct/WIN PROTECT.webp',
    shortDescription: 'Bio-Chemicals',
    fullDescription: `Win Protect is a bio-chemical bio stimulant designed to enhance plant defense mechanisms and overall plant health. This advanced formulation increases water absorption from soil, enhances crop immunity, and boosts photosynthetic activity. Its defense power develops roughness in the leaves which prevent various diseases and infections. The defense power saves plants from sun stress, especially when there is shortage of irrigation water, and results in healthy growth of the plant.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

Recommended Dosage:
• For use in nursery, use 250 g/acre.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 250 gms.`,
    features: [
      'Increases water absorption from soil',
      'Enhances crop immunity',
      'Increases photosynthetic activity',
      'Defense power develops leaf roughness preventing diseases',
      'Saves plants from sun stress during water shortage',
      'Results in healthy plant growth',
      'Bio-chemical bio stimulant formulation'
    ],
    usage: [
      '250 g per acre for nursery use',
      'Use along with fertilizers as regular practice',
      'Apply to wide range of crops',
      'Suitable for vegetables, fruits, plantation crops',
      'Effective for field crops and ornamentals',
      'Ideal for home and gardens'
    ],
    ingredients: [
      'Bio-chemical compounds',
      'Bio stimulant agents',
      'Water absorption enhancers',
      'Immunity boosting factors',
      'Photosynthetic activity promoters',
      'Defense mechanism activators'
    ],
    safetyTips: [
      'Follow recommended dosage: 250g per acre',
      'Use with regular fertilizer practice',
      'Especially effective during water stress',
      'Safe for wide range of crops',
      'Store in cool, dry place'
    ],
    price: '₹750',
    inStock: true,
    application: 'All Crops - Defense & Stress Protection'
  },
  {
    id: 'win-raksha',
    name: 'Win Raksha',
    category: 'liquids',
    image: '/poduct/WIN RAKSHA.webp',
    shortDescription: 'Biostimulant',
    fullDescription: `Win Raksha is a naturally derived organic product which can make the plant healthy, vigorous and improves resistance against pests and diseases.

Product Features:
• Win Raksha is a naturally derived organic product which can make the plant healthy, vigorous and improves resistance against pests and diseases.

Effectiveness:
• Improve the resistance against pest and diseases.

Recommended Dosage:
• 2.5 ml per 1 ltr. of water
• 250 ml per acre

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 250 ml | 500 ml | 1 ltr.`,
    features: [
      'Naturally derived organic product',
      'Makes plants healthy and vigorous',
      'Improves resistance against pests and diseases',
      'Biostimulant properties',
      'Enhances plant defense mechanisms',
      'Organic crop protection solution'
    ],
    usage: [
      '2.5 ml per 1 litre of water',
      '250 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply to improve plant resistance',
      'Suitable for pest and disease management',
      'Regular application throughout growing season'
    ],
    ingredients: [
      'Naturally derived organic compounds',
      'Plant health enhancers',
      'Resistance building factors',
      'Biostimulant compounds',
      'Pest and disease resistance promoters'
    ],
    safetyTips: [
      'Follow recommended dosage: 2.5ml per litre',
      'Use with regular fertilizer practice',
      'Naturally derived and safe',
      'Store in cool, dry place',
      'Safe for organic farming'
    ],
    price: '₹820',
    inStock: true,
    application: 'All Crops - Pest & Disease Resistance'
  },
  {
    id: 'win-speed-pro',
    name: 'Win Speed Pro',
    category: 'powder',
    image: '/poduct/WIN SPEED PRO.webp',
    shortDescription: 'Biostimulant - Protein Hydrolysate',
    fullDescription: `WIN SPEED PRO is a naturally derived organic product which can make the plant healthy and vigorous and improves resistance against pest and diseases.

Product Features:
• WIN SPEED PRO is a naturally derived organic product which can make the plant healthy and vigorous and improves resistance against pest and diseases.

Effectiveness:
• Improve resistance against pest and diseases.

Recommended Dosage:
• 1gm. per 1 litre of water.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 100 gms.`,
    features: [
      'Naturally derived organic product',
      'Makes plants healthy and vigorous',
      'Improves resistance against pest and diseases',
      'Protein hydrolysate formulation',
      'Biostimulant properties',
      'Enhances plant vigor and health'
    ],
    usage: [
      '1 gm per 1 litre of water',
      'Use along with fertilizers as regular practice',
      'Apply to improve plant resistance',
      'Suitable for pest and disease management',
      'Mix thoroughly before application'
    ],
    ingredients: [
      'Protein hydrolysate',
      'Naturally derived organic compounds',
      'Plant health enhancers',
      'Resistance building factors',
      'Biostimulant compounds'
    ],
    safetyTips: [
      'Follow recommended dosage: 1gm per litre',
      'Use with regular fertilizer practice',
      'Naturally derived and safe',
      'Store in cool, dry place',
      'Mix thoroughly before use'
    ],
    price: '₹880',
    inStock: true,
    application: 'All Crops - Pest & Disease Resistance'
  },
  {
    id: 'win-super-pro',
    name: 'Win Super Pro',
    category: 'liquids',
    image: '/poduct/WIN SUPER PRO.webp',
    shortDescription: 'Biostimulant',
    fullDescription: `Win Super Pro is a naturally derived organic product which can make the plant healthy, vigorous and improves resistance against trips & mites diseases.

Product Features:
• Win Super Pro is a naturally derived organic product which can make the plant healthy, vigorous and improves resistance against trips & mites diseases.

Effectiveness:
• Improve the resistance against trips & mites diseases.

Recommended Dosage:
• 2.5 ml per 1 ltr. of water
• 250 ml per acre

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 250 ml | 500 ml | 1 ltr.`,
    features: [
      'Naturally derived organic product',
      'Makes plants healthy and vigorous',
      'Improves resistance against trips & mites diseases',
      'Bio stimulant properties',
      'Enhances plant defense mechanisms',
      'Specialized for trips and mites control'
    ],
    usage: [
      '2.5 ml per 1 litre of water',
      '250 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply to improve resistance against trips & mites',
      'Suitable for pest management',
      'Regular application during vulnerable periods'
    ],
    ingredients: [
      'Naturally derived organic compounds',
      'Bio stimulant compounds',
      'Plant health enhancers',
      'Trips & mites resistance factors',
      'Disease resistance promoters'
    ],
    safetyTips: [
      'Follow recommended dosage: 2.5ml per litre',
      'Use with regular fertilizer practice',
      'Naturally derived and safe',
      'Store in cool, dry place',
      'Effective for organic farming'
    ],
    price: '₹1150',
    inStock: true,
    application: 'All Crops - Trips & Mites Control'
  },
  {
    id: 'win-veera',
    name: 'Win Veera',
    category: 'specialty',
    image: '/poduct/WIN VEERA.webp',
    shortDescription: 'Warrior Formula',
    fullDescription: `Win Veera is a warrior formula designed to fight plant challenges effectively. This powerful solution tackles tough agricultural challenges with strength and precision.`,
    features: ['Warrior strength', 'Challenge fighter', 'Effective formula', 'Powerful solution'],
    usage: ['Use against challenges', 'Apply when needed', 'Follow warrior protocol', 'Strategic application'],
    ingredients: ['Warrior compounds', 'Challenge fighters', 'Strength enhancers', 'Power agents'],
    safetyTips: ['Handle with strength', 'Use strategically', 'Store warrior-safe', 'Follow protocols'],
    price: '₹720',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-yield-power',
    name: 'Win Yield Power',
    category: 'granular',
    image: '/poduct/WIN YIELD POWER.webp',
    shortDescription: 'Biomass Hydrolysate',
    fullDescription: `Win Yield Power is composed with Biological enzymatic hydrolysis and double chelating technology. This technology helps in skillful blending of Alginic Acid, Seaweed extract, Protein, mineral, Fulvic, Humic and Amino Acid large and medium trace elements. It is one of the most comprehensive total nutrient Product. Due to specially added ADO, it can adjust the pH value of soil bidirectionally and has remarkable recovery- effect on Soil acidification, salinization on saline-alkali land. Helps in restoring Soil Vitality and Soil Flora balance, Rebuilds Soil aggregate structure to improve the growth environment of root system and Solve the problem of soil compaction completely. Win Yield Power works on all types of crop like Field crop, cash crop, Horticulture, plantation crop and vegetables and fruits.

Effectiveness:
• Suitable to improve productivity of a wide range of crops such as vegetables, fruit crops, plantation, field crops, ornamental, fiber crops. Home and gardens etc.

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 500 gms.`,
    features: [
      'Biological enzymatic hydrolysis technology',
      'Double chelating technology',
      'Comprehensive total nutrient product',
      'pH adjustment capability (bidirectional)',
      'Soil acidification recovery effect',
      'Restores soil vitality and flora balance',
      'Rebuilds soil aggregate structure',
      'Solves soil compaction problems',
      'Contains alginic acid, seaweed extract, proteins'
    ],
    usage: [
      '300 gm to 500 gm per Acre at sowing/planting',
      'Top-dressing for best results - use twice in crop',
      'After 20-25 days from first use',
      '1gm/1tr at plant growing period',
      'Use along with fertilizers as regular practice',
      'Works on all types of crops'
    ],
    ingredients: [
      'Biomass hydrolysate',
      'Alginic acid',
      'Seaweed extract',
      'Protein compounds',
      'Fulvic and humic acids',
      'Amino acids',
      'Trace elements (large and medium)',
      'Special ADO compounds'
    ],
    safetyTips: [
      'Follow recommended dosage',
      'Use twice in crop cycle for best results',
      'Use with regular fertilizer practice',
      'Safe for all crop types',
      'Store in dry place'
    ],
    price: '₹950',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'winmitra-gold',
    name: 'Winmitra Gold',
    category: 'specialty',
    image: '/poduct/WINMITRA GOLD.webp',
    shortDescription: 'Premium Gold Formula',
    fullDescription: `Winmitra Gold represents the pinnacle of agricultural nutrition with gold-standard quality. This premium product delivers exceptional results with unmatched quality and performance.`,
    features: ['Gold standard', 'Premium quality', 'Ultimate nutrition', 'Exceptional results'],
    usage: ['Premium application', 'Use for gold results', 'Follow gold standards', 'Premium protocol'],
    ingredients: ['Gold-grade nutrients', 'Premium compounds', 'Ultimate additives', 'Excellence enhancers'],
    safetyTips: ['Handle premium product', 'Follow gold protocols', 'Premium storage', 'Quality assurance'],
    price: '₹1350',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'win-veera',
    name: 'Win Veera',
    category: 'liquids',
    image: '/poduct/WIN VEERA.webp',
    shortDescription: 'Biostimulant',
    fullDescription: `Win Veera is a naturally driven organic product that influences all crops plant physiological systems. Win Veera penetrates through the cellular membrane to stimulate the plant's physiological process. Win Veera accelerates cellular division and increases vegetative growth. Win Veera enhances the enzymatic activities to strengthen the plant defense mechanism at the time of flowering & fruiting to resist pests & diseases. Win Veera promotes root growth and enhances the ability to absorb plant nutrients from the soil. Win Veera reduces flower and fruit drops. Win Veera significance increase in quality and quantity yield.

Effectiveness:
• Improve the resistance for stem borer and leaf folder in paddy crop.

Recommended Dosage:
• 2.5 ml per 1 ltr. of water
• 250 ml per acre

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 250 ml | 500 ml | 1 ltr.`,
    features: [
      'Naturally driven organic product',
      'Influences all crop plant physiological systems',
      'Penetrates through cellular membrane',
      'Stimulates plant physiological processes',
      'Accelerates cellular division',
      'Increases vegetative growth',
      'Enhances enzymatic activities',
      'Strengthens plant defense mechanism',
      'Promotes root growth and nutrient absorption',
      'Reduces flower and fruit drops',
      'Improves resistance to stem borer and leaf folder in paddy'
    ],
    usage: [
      '2.5 ml per 1 litre of water',
      '250 ml per acre',
      'Use along with fertilizers as regular practice',
      'Apply during flowering & fruiting stages',
      'Suitable for all crops',
      'Especially effective for paddy crop resistance'
    ],
    ingredients: [
      'Naturally driven organic compounds',
      'Cellular membrane penetrators',
      'Physiological process stimulants',
      'Enzymatic activity enhancers',
      'Root growth promoters',
      'Defense mechanism strengtheners'
    ],
    safetyTips: [
      'Follow recommended dosage: 2.5ml per litre',
      'Use with regular fertilizer practice',
      'Naturally driven organic formulation',
      'Safe for all crop types',
      'Store in cool, dry place'
    ],
    price: '₹680',
    inStock: true,
    application: 'All Crops - Especially Paddy'
  },
  {
    id: 'winmitra-gold',
    name: 'Winmitra Gold',
    category: 'granular',
    image: '/poduct/WINMITRA GOLD.webp',
    shortDescription: 'Biostimulant',
    fullDescription: `Winmitra Gold is anatually driven organic Granules which influences all crops plant physiological systems. Winmitra Gold penetrates through the cellular membrane to stimulate the plants physiological process. Winmitra Gold accelerates cellular division and increases vegetative growth. Winmitra Gold enhances the enzymatic activities to strengthen the plant defense mechanism at the time of flowering & fruiting to resist pests & diseases. Winmitra Gold promotes root growth and enhances the ability to absorb plant nutrients from the soil. Winmitra Gold reduces flower and fruit drops. Winmitra Gold significance increase in quality and quantity yield.

Effectiveness:
• Effective and long duration protection from early short borer and top borer with unique mode of action

Recommended Dosage:
• 4 kg per acre

For Better Efficacy:
• Use along with fertilizers as per regular farmer practice.

Packaging Size: 4 kg.`,
    features: [
      'Naturally driven organic granules',
      'Influences all crops plant physiological systems',
      'Penetrates through cellular membrane',
      'Stimulates plant physiological processes',
      'Accelerates cellular division',
      'Increases vegetative growth',
      'Enhances enzymatic activities',
      'Strengthens plant defense mechanism',
      'Promotes root growth and nutrient absorption',
      'Reduces flower and fruit drops',
      'Effective protection from early short borer and top borer',
      'Long duration protection with unique mode of action'
    ],
    usage: [
      '4 kg per acre',
      'Use along with fertilizers as regular practice',
      'Apply during planting or growing season',
      'Suitable for all crops',
      'Effective for borer protection',
      'Apply at flowering & fruiting stages for best results'
    ],
    ingredients: [
      'Naturally driven organic compounds',
      'Cellular membrane penetrators',
      'Physiological process stimulants',
      'Enzymatic activity enhancers',
      'Root growth promoters',
      'Defense mechanism strengtheners',
      'Borer protection agents'
    ],
    safetyTips: [
      'Follow recommended dosage: 4kg per acre',
      'Use with regular fertilizer practice',
      'Naturally driven organic formulation',
      'Safe for all crop types',
      'Store in dry place'
    ],
    price: '₹890',
    inStock: true,
    application: 'All Crops - Borer Protection'
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'liquids', name: 'Liquids', count: products.filter(p => p.category === 'liquids').length },
  { id: 'powder', name: 'Powder', count: products.filter(p => p.category === 'powder').length },
  { id: 'organic', name: 'Organic', count: products.filter(p => p.category === 'organic').length },
  { id: 'granular', name: 'Granular', count: products.filter(p => p.category === 'granular').length },
  { id: 'specialty', name: 'Specialty', count: products.filter(p => p.category === 'specialty').length },
  { id: 'mineral', name: 'Mineral', count: products.filter(p => p.category === 'mineral').length }
];