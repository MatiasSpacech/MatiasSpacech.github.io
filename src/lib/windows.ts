import type { AppId } from './apps';

export type OSWindow = {
  id: AppId;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
};

export type Bounds = {
  width: number;
  height: number;
};
