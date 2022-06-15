import React from 'react';
import type { Product } from 'shopify-buy';

type ShopProviderValue = {
  products: Array<Product>;
};

const InitialState: ShopProviderValue = { products: [] };

const ShopContext = React.createContext(InitialState);

export default ShopContext;
