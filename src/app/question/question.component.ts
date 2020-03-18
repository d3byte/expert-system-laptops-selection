import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuestionInterface} from '../share/interfaces/question.interface';
import {AnswerInterface} from '../share/interfaces/answer.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() public question: QuestionInterface;

  @Output() public nextQuestion: EventEmitter<AnswerInterface> = new EventEmitter();

  public selectedAnswer: AnswerInterface;

  public handleAnswerSelect(answer: AnswerInterface): void {
    this.selectedAnswer = answer;
  }

  public proceed(): void {
    if (this.selectedAnswer) {
      this.nextQuestion.emit(this.selectedAnswer);
    }
  }
}
