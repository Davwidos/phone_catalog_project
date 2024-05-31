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
    const referenceModels = allProducts.slice(0, 10);

    return shuffleArray(
      allProducts.filter(p =>
        referenceModels.some(
          model => model.itemId.substring(0, 15) === p.itemId.substring(0, 15),
        ),
      ),
    );
  }, [allProducts]);

  useEffect(() => {
    setProductCategory(category);
  }, [category]);

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
