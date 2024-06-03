import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';
import useDebounce from './debounce';

type Props = {
  path: 'Phones' | 'Tablets' | 'Accessories';
};

export const Search: FC<Props> = ({ path }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const debounce = useDebounce(setSearchParams, 500);
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;

    setSearch(value);
    searchParams.set('search', value);

    if (value === '') {
      searchParams.delete('search');
    }

    debounce(searchParams);
  };

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [path, searchParams]);

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};
