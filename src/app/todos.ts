export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export const todos = [
  {
    id: 1,
    title: 'Angular',
    completed: false,
  },
  {
    id: 2,
    title: 'RxJS',
    completed: false,
  },
  {
    id: 3,
    title: 'TypeScript',
    completed: false,
  },
];
