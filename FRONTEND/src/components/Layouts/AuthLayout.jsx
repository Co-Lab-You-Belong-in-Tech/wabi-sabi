import { Router, useRouter } from 'next/router';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function AuthLayout({ children }) {
  const { push } = useRouter();
  const { isLoggedIn } = useSelector((state) => state.account);
  return (
    <div>
      <div>
        <main>{isLoggedIn ? children : push('/login')}</main>
      </div>
    </div>
  );
}
export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
