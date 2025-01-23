import React from 'react';

type HeaderProps = {
  children?: React.node[];
};

const Header = ({ children }: HeaderProps) => (
  <div>
    Header
    {children}
  </div>
);

export default Header;
