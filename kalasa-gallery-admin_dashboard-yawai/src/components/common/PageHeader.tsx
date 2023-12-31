import React from 'react';

const Header = ({ title }: { title: string }) => {
  return (
    <h1
      className="text-heading font-normal text-primary"
      style={{
        //* just temporary
        fontFamily: 'cardo',
      }}
    >
      {title}
    </h1>
  );
};

export default Header;
