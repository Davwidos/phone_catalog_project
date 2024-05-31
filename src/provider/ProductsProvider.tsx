import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Product } from '../types/Product';
import { ProductCategory as Category } from '../types/ProuductCategory';
import { useSearchParams } from 'react-router-dom';
import { useProductDetails } from './ProductDetailsProvider';

interface ProductsContextI {
  products: Product[];
  pending: boolean;
  error: boolean;
  category?: Category;
  setProductCategory: (category: Category) => void;
  newModels: Product[];
  hotPricesModels: Product[];
  youMayAlsoLikeProducts: Product[];
}

const ProductsContext = createContext<ProductsContextI>({
  products: [],
  pending: false,
  error: false,
  setProductCategory: () => {},
  newModels: [],
  hotPricesModels: [],
  youMayAlsoLikeProducts: [],
});

interface Props extends PropsWithChildren {
  category?: Category;
}

export const ProductsProider: FC<Props> = ({ category, children }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [productCategory, setProductCategory] = useState<Category | undefined>(
    category,
  );
  const { details } = useProductDetails();
  const [searchParams] = useSearchParams();

  const shuffleArray = (array: Product[]) => {
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  };

  const newModels = useMemo(
    () => shuffleArray(allProducts.filter(p => p.year >= 2022)),
    [allProducts],
  );

  const hotPricesModels = useMemo(
    () => shuffleArray(allProducts.filter(p => p.fullPrice - p.price > 50)),
    [allProducts],
  );

  const youMayAlsoLikeProducts = useMemo(() => {
    return shuffleArray(
      allProducts.filter(
        p => p.name.substring(0, 15) === details?.name.substring(0, 15),
      ),
    );
  }, [allProducts, details]);

  useEffect(() => {
    setProductCategory(category);
  }, [category]);

  const productsFromCategory = useMemo(() => {
    const filteredProducts = productCategory
      ? allProducts.filter(p => p.category === productCategory)
      : allProducts;

    const sortBy = searchParams.get('sortBy') || 'newest';
    // const perPage = parseInt(searchParams.get('perPage') || '8', 10);
    const sortedProducts = filteredProducts.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'price-low':
          aValue = a.price;
          bValue = b.price;

          return aValue - bValue;
        case 'price-high':
          aValue = a.price;
          bValue = b.price;

          return bValue - aValue;
        case 'newest':
          aValue = a.year;
          bValue = b.year;

          return bValue - aValue;
        case 'oldest':
          aValue = a.year;
          bValue = b.year;

          return aValue - bValue;
        default:
          return 0;
      }
    });

    return sortedProducts;
  }, [productCategory, allProducts, searchParams]);

  useEffect(() => {
    setPending(true);
    fetch('api/products.json')
      .then(response => response.json())
      .then(data => setAllProducts(data))
      .catch(() => setError(true))
      .finally(() => setPending(false));
  }, []);

  const value: ProductsContextI = {
    products: productsFromCategory,
    error,
    pending,
    category: productCategory,
    setProductCategory,
    newModels,
    hotPricesModels,
    youMayAlsoLikeProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
