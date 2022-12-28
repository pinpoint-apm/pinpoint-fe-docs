import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import {useColorMode} from '@docusaurus/theme-common';

type StringFunction = (colorMode: string) => string;

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string | StringFunction;
}

export function Image({ src, ...props }: ImageProps): JSX.Element {
  const { colorMode } = useColorMode();

  const getSrc = () => {
    if (typeof src === 'string') {
      return src
    } 
    return src?.(colorMode)
  }

  return (
    <img {...props} src={useBaseUrl(getSrc())} />
  );
}
