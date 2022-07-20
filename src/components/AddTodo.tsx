import React, { useState } from "react";
import { ITask } from "../Interfaces";
import * as Styled from "../style";

type Props = {
  addToList(newTodo: ITask): void;
};

const AddTodo = ({ addToList }: Props) => {
  const defaultInputValues = {
    title: "",
    deadline: 0,
  };
  const [formData, setFormData] = useState(defaultInputValues);
  const { title, deadline } = formData;

  //event automatically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  //event automatically
  const addTodo = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const newTodo: ITask = {
      id: Math.random(),
      title: title,
      deadline: deadline,
      isCompleted: false,
    };
    addToList(newTodo);
    setFormData(defaultInputValues);
  };

  return (
    <form onSubmit={addTodo}>
      <label>
        {" "}
        New Todo
        {/* onChange & value */}
        <Styled.Input
          type="text"
          id="title"
          onChange={handleChange}
          value={title}
          placeholder="New Todo"
        />
      </label>
      <label>
        Deadline
        <Styled.Input
          type="number"
          id="deadline"
          onChange={handleChange}
          value={deadline}
          placeholder="New Todo"
        />
      </label>
      <Styled.AddButton>Add Todo</Styled.AddButton>
    </form>
  );
};

export default AddTodo;
