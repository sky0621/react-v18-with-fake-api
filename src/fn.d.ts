import { AddAlbumPayload, Album } from './store/album';

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

export type AddAlbumFunc = (payload: AddAlbumPayload) => Promise<Album>;
