import { useState } from "react";
import { ITask } from "./Interfaces";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { GlobalStyles } from "./components/styles/Global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/style";

function App() {
  const [todos, setTodos] = useState<ITask[]>([
    { id: 1, title: "First todo", deadline: 0, isCompleted: false },
    { id: 2, title: "Second todo", deadline: 1, isCompleted: false },
    { id: 3, title: "Third todo", deadline: 3, isCompleted: true },
  ]);

  const addToList = (addedTodo: ITask) => {
    setTodos([addedTodo, ...todos]);
  };

  //map/if -> search for item to modify
  const togglecomplete = (id: number) => {
    let updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      } else return item;
    });
    setTodos(updatedTodos);
  };

  //filter -> search for remaining
  const deleteFromList = (id: number) => {
    let remainingTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(remainingTodos);
    //setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      <main>
        <AddTodo addToList={addToList} />
        <TodoList
          todos={todos}
          togglecomplete={togglecomplete}
          deleteFromList={deleteFromList}
        />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
