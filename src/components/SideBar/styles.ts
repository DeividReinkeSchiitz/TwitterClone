import styled from "styled-components";

import { Search } from "../../styles/Icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    width: min(399px, 100%);
    background: var(--primary);
    flex-direction: column;

    color: var(--white);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 24px 200px;
  margin-top: 3px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;

  color: white;
  padding-left: 5px;
  outline: 0px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: var(--search);

  width: min(399px, 100%);
  height: auto;

  padding: 0 10px;
  margin: 10px;

  border-radius: 19.5px;
`;

export const SearchIcon = styled(Search)`
  height: 27px;
  width: 27px;

  fill: whitesmoke;
`;
