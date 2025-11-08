export interface User {
  id: string;
  name: string;
  level: number;
  experience: number;
  points: number;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  subject: string;
  difficulty: string;
}