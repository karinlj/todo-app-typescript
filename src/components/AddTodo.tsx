import React, { useState } from "react";
import { ITask } from "../Interfaces";
import { StyledInput, StyledAddButton } from "./styles/style";
//import * as Styled from "./styles/style";

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
        <StyledInput
          type="text"
          id="title"
          onChange={handleChange}
          value={title}
          placeholder="New Todo"
        />
      </label>
      <label>
        Deadline
        <StyledInput
          type="number"
          id="deadline"
          onChange={handleChange}
          value={deadline}
          placeholder="New Todo"
        />
      </label>
      <StyledAddButton>Add Todo</StyledAddButton>
    </form>
  );
};

export default AddTodo;
