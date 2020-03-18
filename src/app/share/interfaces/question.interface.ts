import {AnswerInterface} from './answer.interface';

export interface QuestionInterface {
  title: string;
  answers: AnswerInterface[];
}
