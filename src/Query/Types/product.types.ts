export interface GetProductsData {
    id: number;
    name: DescriptionWeb;
    price: number;
    customListPrice: null;
    member: number;
    perDay: boolean;
    images: Image[];
    retailPriceForDisplay?: number | null;
    displayRetailPrice?: boolean;
    slug?: string;
    subscriptionProduct: boolean;
    subscriptionMonthlyPrice?: number;
    vat?: number;
    priceExclVat: number;
    isInCart?: boolean;
    hasInventoryBulk?: boolean;
    hasInventory?: boolean;
    hasVariants?: boolean;
    descriptionWeb?: DescriptionWeb;
    type?: string;
    sortPopular?: number;
    sortType?: string;
    productAvailability?: number;
}

export interface DescriptionWeb {
    en?: string;
    no?: string;
}

export interface Image {
    link: string;
    heading: DescriptionWeb | string;
}




export interface SingleProductData {
    id: number;
    productGroup: ProductGroup;
    channelGroups: ChannelGroup[];
    includedAccessories: any[];
    recommendedAccessories: RecommendedAccessory[];
    variants: Variant[];
    variantDimensions: VariantDimension[];
    userPreferedLocation: null;
    photosVideos: PhotosVideo[];
    locations: Location[];
    retailPriceForDisplay: null;
    displayRetailPrice: boolean;
    slug: string;
    customPricingScheme: string;
    subscriptionProduct: boolean;
    subscriptionMonthlyPrice: number;
    productQuestionTemplateId: null;
    productQuestionEnable: boolean;
    productQuestionTemplates: any[];
}

export interface ChannelGroup {
    id: number;
    name: string;
    pricingAdditionalItemsId: number;
    longDescription: string;
    imageUrl: string;
    imageHighlightedUrl: string;
    adminVisible: boolean;
    price: number;
}

export interface Location {
    id: number;
    name: string;
    address: string;
    lat: number;
    lon: number;
    locationGroupName: string;
    openingHours: string;
    channelId: number;
    channelGroupId: number;
    handoverUserTimeForPickup: HandoverUserTimeFor[];
    handoverUserTimeForReturn: HandoverUserTimeFor[];
    description: null;
}

export interface HandoverUserTimeFor {
    id: number;
    displayName: string;
    autoHandoverUserTimeId: number | null;
    autoHandoverUserFlipDay: boolean | null;
    dayOfWeek: string;
    cutOffTime: null;
}

export interface PhotosVideo {
    link: string;
    name: Description;
    description: Description;
    type: string;
}

export interface Description {
    no: string;
}

export interface ProductGroup {
    name: DescriptionApp;
    customListPrice: null;
    descriptionWeb: DescriptionApp;
    descriptionApp: DescriptionApp;
    usageAreas: DescriptionApp;
    summary: DescriptionApp;
    titleTag: DescriptionApp;
    hasFixedPeriod: boolean;
    fixedPeriod: null;
    hasInventory: boolean;
    hasInventoryBulk: boolean;
    price: number;
    member: number;
    perDay: boolean;
    isMember: boolean;
    images: ProductGroupImage[];
    productCategories: ProductCategory[];
}

export interface DescriptionApp {
    no: string;
    en: string;
}

export interface ProductGroupImage {
    link: string;
    heading: Description;
}

export interface ProductCategory {
    id: number;
    name: DescriptionApp;
    parent: number;
    sortPopular: number;
    categoryImageDesktopUrl: null;
    categoryImageMobileUrl: null;
    categoryDisplayText: string;
    slug: string;
    categoryImageDisplay: boolean;
    title: DescriptionApp;
    description: DescriptionApp;
    metaTitle: null;
    metaDescription: null;
    rentalCategory: boolean;
}

export interface RecommendedAccessory {
    id: number;
    name: DescriptionApp;
    descriptionWeb: DescriptionApp;
    usageAreas: DescriptionApp;
    sizeUnits: number;
    images: ProductGroupImage[];
    price: number;
    vatRate: number;
    customListPrice: null;
    member: number;
    type: string;
    perDay: boolean;
    customPricingScheme: string;
    hasInventory: boolean;
    displayRetailPrice: null;
    subscriptionProduct: boolean;
    subscriptionMonthlyPrice: number;
    locations: any[];
    singleUnit: boolean;
    defaultSelection: string;
}

export interface VariantDimension {
    dimensionId: number;
    dimensionName: Description;
    optionId: number;
    optionName: string;
    optionShortName: string;
    subproductId: null;
    subproductProductGroupId: null;
    subproductDimensionId: null;
    subproductGroupId: null;
    required: boolean;
    showImage: boolean;
    showInfo: boolean;
    displayOrderDimension: number;
    displayOrderOption: number;
    images: ProductGroupImage[];
}

export interface Variant {
    variantId: number;
    optionCombination: Array<number[]>;
    productGroupId: number;
    variantProductId: number;
    showInfo: boolean;
    hasInventory: boolean;
    name: string;
    description: null;
    images: VariantImage[];
    subscriptionProduct: boolean;
    priceSubscription: null;
    customPricingScheme: string;
}

export interface VariantImage {
    link: string;
    heading: string;
}
