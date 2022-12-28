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
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Scatter Chart Component',
    src: '',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
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
