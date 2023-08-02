export class Topic {
  id?: number;
  name?: string;
  created_at?: Date;
  quizzes?: Quiz[];
  contents?: Content[];
}

export class Quiz {
  id?: number;
  topic?: Topic;
  quiz?: string;
  answerList?: string[];
  answer?: string;
  created_at?: Date;
}

export class Content {
  id?: number;
  originalName?: string;
  name?: string;
  length?: number;
  quality?: string;
  topic?: Topic;
}
