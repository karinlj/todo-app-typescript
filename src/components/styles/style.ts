import styled from "styled-components";

export const theme = {
  bgColors: {
    header: "transparent",
    footer: "#323a4e",
  },
  colors: {
    text: "#fff",
    darkerText: "#aec2ee",
  },
};

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.bgColors.header};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    @media all and (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
`;
export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.bgColors.footer};
  text-align: center;
  padding: 3rem 1rem;
  margin-top: 8rem;
  font-size: 0.9rem;
  a {
    color: ${({ theme }) => theme.colors.darkerText};
    margin-left: 0.5rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const StyledInput = styled.input`
  padding: 1rem 0.5rem;
  border-radius: 3px;
  border: none;
  width: 100%;
  margin: 0.4rem 0;
  font-size: 1rem;
`;

export const StyledAddButton = styled.button`
  background: transparent;
  color: #fff;
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
export const StyledListItem = styled.li`
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
  .list-item-inner-container {
    display: inline;
  }
  span {
    margin-right: 2rem;
  }
`;
export const StyledDeleteButton = styled.button`
  background: transparent;
  color: red;
  font-size: 1.3rem;
  padding: 3px;
  border: none;
  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }
`;
