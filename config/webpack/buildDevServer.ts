import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import type { IBuildOptions } from './types/types';

export const buildDevServer = ({
  paths,
  port,
}: IBuildOptions): DevServerConfiguration => {
  return {
    static: {
      directory: paths.public,
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port,
  };
};
