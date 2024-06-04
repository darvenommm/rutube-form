import { join } from 'node:path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { createSwcConfig } from './swc/createSwcConfig';

import type { ModuleOptions } from 'webpack';

import type { IBuildOptions } from './types/types';

export const buildLoaders = ({
  isDevelopment,
  paths,
}: IBuildOptions): ModuleOptions['rules'] => {
  const tsLoader = {
    test: /\.[jt]sx?$/i,
    exclude: /(node_modules)/,
    use: [
      {
        loader: 'swc-loader',
        options: createSwcConfig(isDevelopment),
      },
    ],
  };

  const stylesLoader = {
    test: /\.s(a|c)ss$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDevelopment,
          modules: {
            localIdentName: isDevelopment
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:10]',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDevelopment,
          sassOptions: {
            includePaths: [join(paths.src, 'shared', 'styles')],
          },
        },
      },
    ],
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif|avif|webp)$/i,
    type: 'asset/resource',
  };

  const textLoader = {
    test: /\.txt$/i,
    type: 'assets/source',
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const svgLoaders = [
    {
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: '@svgr/webpack',
    },
  ];

  return [
    tsLoader,
    stylesLoader,
    ...svgLoaders,
    imageLoader,
    textLoader,
    fontsLoader,
  ];
};
