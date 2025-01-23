import React from 'react';

type FooterProps = {
  children?: React.node[];
};

const Footer = ({ children }: FooterProps) => (
  <div>
    Footer
    {children}
  </div>);

export default Footer;
