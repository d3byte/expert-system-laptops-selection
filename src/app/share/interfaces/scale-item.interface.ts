import {ScaleInterface} from './scale.interface';

export interface ScaleItemInterface {
  key: keyof ScaleInterface;
  value: number;
}
