import React from 'react';

type ShopProviderValue = {
  products: Array<any>;
};

const InitialState: ShopProviderValue = { products: [] };

const ShopContext = React.createContext(InitialState);

export default ShopContext;
