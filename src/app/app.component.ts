import {Component, OnInit} from '@angular/core';
import {QuestionsService} from './services/questions/questions.service';
import {ScaleService} from './services/scale/scale.service';
import {QuestionInterface} from './share/interfaces/question.interface';
import {AnswerInterface} from './share/interfaces/answer.interface';
import {LaptopInterface} from './share/interfaces/laptop.interface';
import {LaptopsService} from './services/laptops/laptops.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public questions: QuestionInterface[];
  public activeQuestion = 0;

  public finished: boolean;
  public sortedLaptops: LaptopInterface[];

  constructor(private questionsService: QuestionsService, private scaleService: ScaleService, private laptopsService: LaptopsService) { }

  ngOnInit() {
    this.getQuestions();
  }

  private getQuestions(): void {
    this.questions = [...this.questionsService.questions];
  }

  public handleNextQuestion(answer: AnswerInterface, index: number): void {
    answer.scaleIncrement.forEach(scaleIncrement => {
      const updatedScaleValue = this.scaleService.userScale$.value[scaleIncrement] + 1;
      this.scaleService.patchUserScale(scaleIncrement, updatedScaleValue);
    });

    this.activeQuestion = index + 1;

    if (index === this.questions.length - 1) {
      this.finished = true;
      this.sortedLaptops = this.laptopsService.getLaptopsSortedByScale();
    }
  }
}
