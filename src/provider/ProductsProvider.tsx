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

interface ProductsContextI {
  products: Product[];
  pending: boolean;
  error: boolean;
  category?: Category;
  setProductCategory: (category: Category) => void;
}

const ProductsContext = createContext<ProductsContextI>({
  products: [],
  pending: false,
  error: false,
  setProductCategory: () => {},
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
  const [searchParams] = useSearchParams();

  useEffect(() => setProductCategory(category), [category]);

  const productsFromCategory = useMemo(() => {
    const filteredProducts = productCategory
      ? allProducts.filter(p => p.category === productCategory)
      : allProducts;

    const sortBy = searchParams.get('sortBy') || 'newest';
    const perPage = parseInt(searchParams.get('perPage') || '8', 10);
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

    return sortedProducts.slice(0, perPage);
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
    category,
    setProductCategory,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
