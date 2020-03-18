import { Injectable } from '@angular/core';
import {QuestionInterface} from '../../share/interfaces/question.interface';
import {questions} from './constants/questions.const';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public questions: QuestionInterface[] = questions;
}
