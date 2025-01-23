import React from 'react';

type ProductProps = {
  children?: React.node[];
};

const Product = ({ children }: ProductProps) => (
  <div>
    Product
    {children}
  </div>
);

export default Product;
