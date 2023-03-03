import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

Comment.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
