import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: fit-content;
  padding: 1rem;
  background-color: #0074c1;
  cursor: pointer;
  user-select: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 100%;
  &:hover {
    background-color: #225089;
    color: white;
  }
  &:active {
    background-color: #1b3a61;
  }
  &:disabled {
    background-color: #c3c3c3;
    color: white;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export default function MenuButton({ opened = false, onClick }) {
  return (
    <ButtonContainer onClick={() => onClick()}>
      <FontAwesomeIcon className="md:text-4xl text-xl" icon={opened === false ? faBars : faXmark}></FontAwesomeIcon>
      <div>{opened === true ? "CLOSE" : "MENU"}</div>
    </ButtonContainer>
  );
}
