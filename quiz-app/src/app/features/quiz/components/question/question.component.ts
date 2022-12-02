import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/data/models/question';
import { UserAnswer } from 'src/app/data/models/user-answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question = {} as Question;
  @Input() number = 0;

  @Output() setAnswer = new EventEmitter<UserAnswer>()

  selectedAnswer = '';

  constructor(){}

  pickAnswer(id: number, answer: string, value: string){
    this.selectedAnswer = `[${answer}] ${value}`;
    this.setAnswer.emit({ questionId: id, value: answer})
  }

}
