import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import styles from './style.module.css';

const AbsoluteFixed = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`${styles.scrollContainer} ${className || ''}`}
    >
      <div className={styles.scrollContent}>
        <div className={styles.stickyContainer}>
          <div className={styles.absoluteContainer}>{children}</div>
        </div>
      </div>
    </div>
  );
});

export default AbsoluteFixed;
