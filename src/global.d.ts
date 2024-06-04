declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const imageSrc: string;
  export default imageSrc;
}

declare module '*.jpg' {
  const imageSrc: string;
  export default imageSrc;
}

declare module '*.jpeg' {
  const imageSrc: string;
  export default imageSrc;
}

declare module '*.gif' {
  const imageSrc: string;
  export default imageSrc;
}

declare module '*.avif' {
  const imageSrc: string;
  export default imageSrc;
}

declare module '*.webp' {
  const imageSrc: string;
  export default imageSrc;
}

declare module '*.txt' {
  const text: string;
  export default text;
}

declare module '*.woff' {
  const fontSrc: string;
  export default fontSrc;
}

declare module '*.woff2' {
  const fontSrc: string;
  export default fontSrc;
}

declare module '*.eot' {
  const fontSrc: string;
  export default fontSrc;
}

declare module '*.ttf' {
  const fontSrc: string;
  export default fontSrc;
}

declare module '*.otf' {
  const fontSrc: string;
  export default fontSrc;
}

declare module '*.svg' {
  const Svg: React.FunctionComponent<React.SVGProps<SVGElement>>;
  export default Svg;
}

declare module '*.svg?url' {
  const svgSrc: string;
  export default svgSrc;
}
