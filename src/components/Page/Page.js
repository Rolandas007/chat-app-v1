import React from 'react';
import Header from 'components/Header/Header';
import Chat from 'components/Chat/Chat';
import styles from './Page.module.scss';

const Page = () => (
  <div className={styles.page}>
    <Header />
    <div className={styles.content}>
      <div className={styles.document}></div>
      <div className={styles.info}>
        <Chat />
      </div>
    </div>
  </div>
);

export default Page;
