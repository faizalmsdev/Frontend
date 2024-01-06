import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, width = '80%', height = '400px' }) => {
  const containerStyle = {
    width,
    height,
    margin: '0 auto',
    marginTop: '28px',
    padding: '24px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return <div style={containerStyle} >{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Container;
