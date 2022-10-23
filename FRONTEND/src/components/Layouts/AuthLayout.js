import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

function AuthLayout({ children }) {
  const { push } = useRouter();
  // const { isLoggedIn } = useSelector((state) => state.account);
  const isLoggedIn = true;
  return (
    <div>
      <div>
        <main>{isLoggedIn ? children : push('/account/login')}</main>
      </div>
    </div>
  );
}
export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
