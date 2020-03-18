import {ScaleInterface} from './scale.interface';

export interface AnswerInterface {
 text: string;
 scaleIncrement: (keyof ScaleInterface)[];
}
