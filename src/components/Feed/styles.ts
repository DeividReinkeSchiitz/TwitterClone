import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: solid 2px;
  border-bottom-color: var(--twitter);

  height: auto;
  padding: 10px 0px;
  margin: 10px 0px;

  color: var(--twitter);

  font-weight: bold;
  font-size: 15px;

  :hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  div:last-child {
    border-bottom: 0px;
  }
`;
