import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = `${environment.strapiUrl}/quizzes`;

  constructor(private http : HttpClient) { }

  getQuizzes () {
    return this.http.get<Quiz[]>(this.url)
  }

  getQuiz(id: number){
    return this.http.get<Quiz>(`${this.url}/${id}`);
  }
  
  score(id: number, answers: UserAnswer[]){
    return this.http.post<Score>(`${this.url}/${id}/score`, answers)
  }
}
