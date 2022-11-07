import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function AuthGuard({ children }) {
  const { push } = useRouter();
  const { isLoggedIn, register_success } = useSelector(
    (state) => state.account
  );

  if (!isLoggedIn && !register_success) {
    push('/account/login');
  }

  return isLoggedIn || register_success ? children : null;
}

export default AuthGuard;
