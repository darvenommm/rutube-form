import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { buildDevServer } from './buildDevServer';

import type { Configuration } from 'webpack';

import type { IBuildOptions } from './types/types';

export const buildConfig = (options: IBuildOptions): Configuration => {
  const { mode, paths, isDevelopment } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:8].bundle.js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolve(options),
    devServer: buildDevServer(options),
    devtool: isDevelopment && 'eval-source-map',
  };
};
