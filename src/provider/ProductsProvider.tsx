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

  useEffect(() => setProductCategory(category), [category]);

  const productsFromCategory = useMemo(
    () =>
      productCategory
        ? allProducts.filter(p => p.category === productCategory)
        : allProducts,
    [productCategory, allProducts],
  );

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
