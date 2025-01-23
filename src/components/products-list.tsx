import React from 'react';

type ProductsListProps = {
  children?: React.node[];
};

const ProductsList = ({ children }: ProductsListProps) => (
  <div>
    ProductsList
    {children}
  </div>
);

export default ProductsList;
