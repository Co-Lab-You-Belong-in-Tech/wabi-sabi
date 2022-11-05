import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import DesktopHeader from '../desktopHeader';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';


function AppLayout({ children, renderSide, renderNav }) {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();
  const protectedRoutes = ['/home', '/memories', '/discover', '/memory/[memoryId]', '/discover/[memoryId]', '/memory/new'];
  
  useEffect(() => {
    console.log(router.pathname);
    if (isLoggedIn && (router.pathname === '/account/login' || router.pathname === '/account/register' || router.pathname === '/')) {
      router.push('/home');
    }

    if (!isLoggedIn && protectedRoutes.includes(router.pathname)) {
      router.push('/account/login');
      toast.warning('You need to be logged in to access this page');
    }
  }, []);
  return (
    <div className="font-roboto">
      <DesktopHeader renderSide={renderSide} />
      {children}
      <Footer renderNav={renderNav} />
    </div>
  );
}

export default AppLayout;

AppLayout.defaultProps = {
  renderSide: true,
  renderNav: true,
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
