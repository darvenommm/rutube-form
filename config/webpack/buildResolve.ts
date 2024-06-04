import type { Configuration } from 'webpack';

import type { IBuildOptions } from './types/types';

export const buildResolve = ({
  paths,
}: IBuildOptions): Configuration['resolve'] => {
  return {
    alias: {
      '@': paths.src,
    },
    extensions: ['.tsx', '.ts', '.js'],
  };
};
