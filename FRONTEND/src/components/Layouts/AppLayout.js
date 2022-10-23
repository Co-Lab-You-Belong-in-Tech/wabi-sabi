import React from 'react';
import PropTypes from 'prop-types'
import Footer from "../Footer";

function AppLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
