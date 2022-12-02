import { Question } from "./question";

export interface Quiz {
    id: number;
    name: string;
    description: string;
    questions: Question[];
}
