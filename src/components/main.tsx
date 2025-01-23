import React from 'react';

type MainProps = {
  children?: React.node[];
};

const Main = ({ children }: MainProps) => (
  <div>
    Main
    {children}
  </div>
);

export default Main;
