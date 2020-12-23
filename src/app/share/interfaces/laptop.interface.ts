import {ScaleInterface} from './scale.interface';

export interface LaptopInterface {
  title: string;
  imageUrl: string;
  scale: ScaleInterface;
  globalCriteria?: number;
}
