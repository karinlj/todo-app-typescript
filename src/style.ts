import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  padding: 1rem 0.5rem;
  border-radius: 3px;
  border: none;
  width: 100%;
  margin: 0.4rem 0;
  font-size: 1rem;
`;

export const AddButton = styled.button`
  background: transparent;
  color: white;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  width: 100%;
  margin-top: 0.7rem;
  transition: all 0.3s ease-in;
  &:hover {
    background: white;
    color: #272e3d;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #445069;
  padding: 0.3rem 0;
  font-size: 1.1rem;
  margin-top: 1rem;
  input {
    margin-right: 0.5rem;
  }
  .list-item-container {
    display: inline;
  }
  span {
    margin-right: 2rem;
  }
`;
export const DeleteButton = styled.button`
  background: transparent;
  color: red;
  font-size: 1.3rem;
  padding: 3px;
  border: none;
`;
