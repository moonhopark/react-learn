import React from 'react';

import './appStyles.css';
import styles from './appStyles.module.css';
import Inline from './Inline';
import CSSModuleChild from './CSSModuleChild';

const CSSModule = () => {
  return (
    <div>
      <h1 className="error">Error</h1>

      <h1 className={styles.success}>Success</h1>
      <CSSModuleChild />
    </div>
  );
};

export default CSSModule;
