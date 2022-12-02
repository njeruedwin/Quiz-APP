import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./pages/quiz/quiz.component";
import { QuizzesComponent } from "./pages/quizzes/quizzes.component";
import { ScoreComponent } from "./pages/score/score.component";

const routes : Routes =[
    {path : '', component: QuizzesComponent},
    {path: 'quiz/:id', component: QuizComponent},
    {path: 'quiz/:id/score', component: ScoreComponent}
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class QuizRoutingModule{}