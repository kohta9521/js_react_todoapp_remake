import { TodoType } from "./types/todo";

export const Todo =(
  // props: Pick<TodoType, "userId" | "title" | "completed">
    props: Omit<TodoType, "Id">
  ) => {
  const { title, userId, completed = false } = props;
  const completMark = completed ? "[完]" : "[未]";

  return (
    <p>{`${completMark} ${title}ユーザー:${userId}`}</p>
  )
}