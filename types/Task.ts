export interface Task {
  id: string;
  text: string;
  date: string | null; // YYYY-MM-DD or null for someday
  done: boolean;
  doneDate?: string;
}
