import React from 'react';
import MainHeader from './MainHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = props => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
