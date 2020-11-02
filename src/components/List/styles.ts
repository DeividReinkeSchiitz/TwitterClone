import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background: var(--secondary);
  border-radius: 14px;

  & + div {
    margin-top: 20px;
  }

  top: 0;
`;

export const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
  padding: 0 10px;
`;

export const Item = styled.div`
  border-bottom: 1px solid var(--gray);
  padding: 10px 14px;

  :last-child {
    border-bottom: 0px;
  }
`;
