import styled, { css } from "styled-components";

interface ContentProps {
  highlightBackground?: boolean;
  dangerous?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const Content = styled.div<ContentProps>`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${(props) => (props.highlightBackground ? "#FFF" : "var(--titles)")};
  transition: 0.2s;
  overflow: hidden;

  ${(props) =>
    props.highlightBackground &&
    css`
      background-color: var(--green);
    `}

  ${(props) =>
    props.dangerous &&
    css`
      background-color: var(--red);
    `}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
