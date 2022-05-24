import React from 'react';
import { Link } from '@mui/material';
import styles from './NotFound.module.scss';

const NotFoundPage: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.mainbox}>
      <div className={styles.first}>4</div>
      <div className={styles.second}>0</div>
      <div className={styles.third}>4</div>
      <div className={styles.msg}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          <Link href="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
