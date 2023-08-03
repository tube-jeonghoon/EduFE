export interface Topic {
  id?: number;
  name?: string;
  created_at?: Date;
  quizzes?: Quiz[];
  contents?: Content[];
}

export interface Quiz {
  id?: number;
  topic?: Topic;
  quiz?: string;
  answerList?: string[];
  answer?: string;
  created_at?: Date;
}

export interface Content {
  id?: number;
  originalName?: string;
  name?: string;
  length?: number;
  quality?: string;
  topic?: Topic;
}
