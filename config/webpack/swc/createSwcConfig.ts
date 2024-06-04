import type { Config } from '@swc/core';

export const createSwcConfig = (isDevelopment: boolean): Config => {
  return {
    jsc: {
      parser: {
        syntax: 'typescript',
        dynamicImport: true,
      },
      target: 'es2016',
      transform: {
        react: {
          development: isDevelopment,
          refresh: isDevelopment,
          runtime: 'automatic',
        },
      },
    },
  };
};
