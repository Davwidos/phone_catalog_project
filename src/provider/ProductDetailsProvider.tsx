import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AccesoryDetails } from '../types/AccesoryDetails';
import { PhoneDetails } from '../types/PhoneDetails';
import { TabletDetails } from '../types/TabletDetails';
import { useParams } from 'react-router-dom';

type Details = PhoneDetails | TabletDetails | AccesoryDetails;

interface ProductDetailsContextI {
  details?: Details;
}

const ProductDetailsContext = createContext<ProductDetailsContextI>({});

export const ProductDetailsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const [detailsArray, setDetailsArray] = useState<Details[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('api/phones.json').then(response => response.json()),
      fetch('api/tablets.json').then(response => response.json()),
      fetch('api/accessories.json').then(response => response.json()),
    ]).then(data => setDetailsArray(data.flat()));
  }, []);

  const details = useMemo(
    () => detailsArray.find(d => d.id === id),
    [id, detailsArray],
  );

  const value: ProductDetailsContextI = {
    details,
  };

  return (
    <ProductDetailsContext.Provider value={value}>
      {children}
    </ProductDetailsContext.Provider>
  );
};
