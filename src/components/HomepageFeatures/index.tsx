import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import {useColorMode} from '@docusaurus/theme-common';


const getFeatureList = (colorMode: string) => {
  return [
  {
    title: 'Servermap Component',
    src: useBaseUrl(colorMode === 'dark' ? '/img/servermap-with-label-dark.png' : '/img/servermap-with-label.png'),
    description: (
      <>
        Open-source network-map library, specifically for application topology.
      </>
    ),
  },
  {
    title: 'Scatter Chart Component',
    description: (
      <>
        Open-source scatter-chart library, specifically designed for visualizing request and response patterns over time.
      </>
    ),
  },
]};

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures(props): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.center)}>
          {getFeatureList(colorMode).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          {/* <img src={useBaseUrl(colorMode === 'dark' ? '/img/servermap-with-label-dark.png' : '/img/servermap-with-label.png')} /> */}
        </div>
      </div>
    </section>
  );
}
