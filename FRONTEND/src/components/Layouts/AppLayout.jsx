import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import DesktopHeader from '../DesktopHeader';
import Footer from '../Footer';
import { getAllMemories } from '../../redux/features/memory/memorySlice';
import { getPublicMemories } from '../../redux/features/discover/discoverSlice';
import moment from 'moment/moment';
import { resetCardsState, setDate } from '../../redux/features/card/cardSlice';

function AppLayout({ children, renderSide, renderNav }) {
  const { isLoggedIn, register_success } = useSelector(
    (state) => state.account
  );
  const date = useSelector((state) => state.card.date);
  const router = useRouter();
  const protectedRoutes = [
    '/welcome',
    '/home',
    '/memories',
    '/discover',
    '/memory/[id]',
    '/discover/[memoryId]',
    '/memory/new',
  ];

  useEffect(() => {
    if (isLoggedIn && register_success) {
      router.push('/welcome');
    } else if (
      isLoggedIn &&
      (router.pathname === '/account/login' ||
        router.pathname === '/account/register' ||
        router.pathname === '/')
    ) {
      router.push('/home');
    }
  }, [isLoggedIn, register_success]);

  useEffect(() => {
    if (!isLoggedIn && protectedRoutes.includes(router.pathname)) {
      toast.warning('You need to be logged in to access this page');
      router.push('/account/login');
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllMemories());
      dispatch(getPublicMemories());
    }

    if (isLoggedIn && moment().format('L') !== date) {
      dispatch(resetCardsState());
      dispatch(setDate(moment().format('L')));
    }
  }, [isLoggedIn]);

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
