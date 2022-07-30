import { ITask } from "../Interfaces";
import { StyledListItem, StyledDeleteButton } from "./styles/style";

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
            <StyledListItem key={item.id}>
              <div>
                {/* onChange & checked */}
                <input
                  type="checkbox"
                  onChange={() => togglecomplete(item.id)}
                  checked={item.isCompleted}
                />
                <div
                  className="list-item-inner-container"
                  style={{
                    textDecoration: item.isCompleted ? "line-through" : "none",
                  }}
                >
                  <span> {item.title}</span>
                  <span> {item.deadline} days</span>
                </div>
              </div>
              <StyledDeleteButton onClick={() => deleteFromList(item.id)}>
                x
              </StyledDeleteButton>
            </StyledListItem>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
