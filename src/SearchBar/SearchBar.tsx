import React, { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { Input } from './Styles';

interface SearchArgs {
  variables: {
    filter: {
      name: string;
    }
  }
}

interface Props {
  search(args: SearchArgs): void;
}

export function SearchBar({ search }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    function changeSearchQuery(e: React.FormEvent<HTMLInputElement>) {
      setSearchQuery(e.currentTarget.value);
    }

    useEffect(() => {
      if (searchQuery.length > 1) {
        throttle(() => search({ variables: {filter: { name: searchQuery }}}), 300)();
      }
    }, [searchQuery, search]);

    return <Input value={searchQuery} onChange={changeSearchQuery} />;
}
