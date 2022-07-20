import { ITask } from "../Interfaces";
import * as Styled from "../style";

type Props = {
  todos: ITask[];
  togglecomplete(id: number): void;
  deleteFromList(id: number): void;
};

const TodoList = ({ todos, togglecomplete, deleteFromList }: Props) => {
  return (
    <>
      <h3>Todos - title and deadline: </h3>
      <ul>
        {todos.map((item) => {
          return (
            <Styled.ListItem key={item.id}>
              <div>
                {/* onChange & checked */}
                <input
                  type="checkbox"
                  onChange={() => togglecomplete(item.id)}
                  checked={item.isCompleted}
                />
                <div
                  className="list-item-container"
                  style={{
                    textDecoration: item.isCompleted ? "line-through" : "none",
                  }}
                >
                  <span> {item.title}</span>
                  <span> {item.deadline} days</span>
                </div>
              </div>
              <Styled.DeleteButton onClick={() => deleteFromList(item.id)}>
                x
              </Styled.DeleteButton>
            </Styled.ListItem>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
