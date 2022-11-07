import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function AuthLayout({ children }) {
  const { push } = useRouter();
  const { isLoggedIn, register_success } = useSelector(
    (state) => state.account,
  );
  return (
    <div>
      <div>
        <main>
          {isLoggedIn || register_success ? children : push('/account/login')}
        </main>
      </div>
    </div>
  );
}
export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
