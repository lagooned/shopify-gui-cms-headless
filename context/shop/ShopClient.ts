import Client from 'shopify-buy';

const ShopClient = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_DOMAIN ?? '',
  storefrontAccessToken: process.env.NEXT_PUBLIC_REACT_APP_SHOPIFY_API ?? '',
});

export default ShopClient;
