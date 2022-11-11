import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import {useColorMode} from '@docusaurus/theme-common';

export default function HomepageFeatures(props): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.center)}>
          <img src={useBaseUrl(colorMode === 'dark' ? '/img/servermap-with-label-dark.png' : '/img/servermap-with-label.png')} />
        </div>
      </div>
    </section>
  );
}
