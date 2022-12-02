
import { UserAnswer } from "./user-answer";
import { Quiz } from "./quiz";

export interface Score {
    quiz: Quiz;
    scoredAnswers: UserAnswer[];
    score: number;
    questionCount: number;
}
