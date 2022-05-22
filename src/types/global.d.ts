declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

declare module '*.scss' {
  const className: { readonly [key: string]: string };
  export default className;
}
