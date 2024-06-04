export type BuildMode = 'development' | 'production';

export interface IBuildPaths {
  entry: string;
  output: string;
  public: string;
  src: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  isDevelopment: boolean;
  isProduction: boolean;
  port: number;
  paths: IBuildPaths;
}
