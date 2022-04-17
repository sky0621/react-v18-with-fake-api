import { AddAlbumPayload } from './store/album';

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

export type OnSuccessFunc = () => void;

export type AddAlbumFunc = (payload: AddAlbumPayload) => void;
export type EditAlbumFunc = (payload: EditAlbumPayload) => void;
