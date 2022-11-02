import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import DesktopHeader from '../desktopHeader';

function AppLayout({ children, renderSide }) {
  return (
    <div className='font-roboto'>
      <DesktopHeader renderSide={renderSide} />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;

AppLayout.defaultProps = {
  renderSide: true,
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
