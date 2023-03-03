import React from 'react';
import Header from './Header';
import Button from 'components/Button/Button';
import styles from './Overview.module.scss';

const data = [
  { title: 'Document owner', value: 'Vardenis Pavardenis' },
  { title: 'Creation date', value: '2020.03.10 12:00' },
  { title: 'Deadline', value: '2020.03.21 14:00' },
];

const Overview = () => (
  <div className={styles.overview}>
    <Header>Overview</Header>
    <div className={styles.content}>
      {data.map((item) => (
        <div key={item.value}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.value}>{item.value}</p>
        </div>
      ))}
    </div>
    <div className={styles.buttonWrapper}>
      <Button>Show all participants</Button>
    </div>
  </div>
);

export default Overview;
