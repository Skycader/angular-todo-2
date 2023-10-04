export interface ITodo {
  title: string;
  status: TodoStatus;
}

export enum TodoStatus {
  UNDONE = 0,
  IN_PROGRESS = 1,
  DONE = 1,
}
