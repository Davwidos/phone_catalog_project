export const productCategories = ['phones', 'tablets', 'accessories'] as const;

export type ProductCategory = (typeof productCategories)[number];
