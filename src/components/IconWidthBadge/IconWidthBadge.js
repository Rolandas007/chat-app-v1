import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconWidthBadge.module.scss';

const IconWidthBadge = ({ count, icon }) => (
  <>
    {count > 0 && <span className={styles.badge}>{count}</span>}
    {icon}
  </>
);

IconWidthBadge.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default IconWidthBadge;
