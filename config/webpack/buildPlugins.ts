import { join } from 'node:path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { ProgressPlugin, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { Configuration } from 'webpack';

import type { IBuildOptions } from './types/types';

export const buildPlugins = ({
  paths,
  isDevelopment,
  isProduction,
}: IBuildOptions): Configuration['plugins'] => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: join(paths.public, 'index.html'),
  });

  const hotModulePlugin = new ReactRefreshWebpackPlugin();
  const progressPlugin = new ProgressPlugin();
  const stylePlugin = new MiniCssExtractPlugin();
  const definePlugin = new DefinePlugin({
    __IS_PROD__: JSON.stringify(isProduction),
    __IS_DEV__: JSON.stringify(isProduction),
  });

  const commonPlugins = [htmlPlugin, definePlugin];

  if (isDevelopment) {
    return [...commonPlugins, hotModulePlugin, progressPlugin];
  }

  if (isProduction) {
    return [...commonPlugins, stylePlugin];
  }
};
