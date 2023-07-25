import React from 'react';
import MainHeader from './MainHeader';

const Layout = props => {
  return (
    <div className="max-w-[1200px] mx-auto bg-slate-50">
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
