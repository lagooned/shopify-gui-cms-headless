import React, { useEffect, useMemo, useState } from 'react';
import type { Product } from 'shopify-buy';
import ShopClient from './ShopClient';
import ShopContext from './ShopContext';

type ShopProviderProps = {
  children: JSX.Element;
};

const ShopProvider = ({ children }: ShopProviderProps) => {
  const [products, setProducts] = useState([] as Product[]);
  const value = useMemo(() => ({ products }), [products]);

  useEffect(() => {
    ShopClient.product.fetchAll().then((ps) => setProducts(ps));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
