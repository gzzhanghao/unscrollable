import { FC, ReactNode } from 'react';

import styles from './style.css';

const AbsoluteFixed: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollContent}>
        <div className={styles.stickyContainer}>
          <div className={styles.absoluteContainer}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteFixed;
