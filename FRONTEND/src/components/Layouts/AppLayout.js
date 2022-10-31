import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import DesktopHeader from '../desktopHeader';

function AppLayout({ children, renderSide }) {
  return (
    <div>
      <DesktopHeader renderSide={renderSide} />
      {children}
      <Footer />
    </div>
  );
}

AppLayout.defaultProps = {
  renderSide: true,
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
