import React from 'react';
import UserHeader from './UserHeader';
import Header from './Header';
import Footer from './Footer';

function isUserLoggedIn() {
  return localStorage.getItem('isLogin') === 'true';
}

const HeaderFooterRoute = (props) => {
  return (
    <>
      {isUserLoggedIn() ? <UserHeader /> : <Header />}
      {props.children}
      <Footer />
    </>
  );
}

export default HeaderFooterRoute;
