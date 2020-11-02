import styled, { css } from "styled-components";
import {
  ArrowLeft,
  Home,
  Email,
  Search,
  Notifications,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(600px, 100%);

  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

export const Header = styled.div`
  z-index: 2;
  align-self: top;
  display: flex;
  height: min-content;
  text-align: left;
  padding: 8 0 9 13;

  border-bottom: 1px solid var(--gray);

  > button {
    height: max-content;
    padding: 8px;
    width: auto;
    border-radius: 50%;

    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 25px;
  height: 25px;
  color: var(--twitter);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  > strong {
    font-size: 19px;
    color: var(--white);
  }
  > span {
    font-size: 15px;
    color: var(--gray);
    margin-bottom: 10px;
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background: var(--primary);
  padding: 8px calc(min(8px, 30%) + 3px);

  border-top: 1px solid var(--gray);
  @media (min-width: 500px) {
    display: none;
  }
`;

const IconCss = css`
  width: 31px;
  height: 31px;
  cursor: pointer;

  color: var(--gray);

  &:hover,
  &.active {
    color: var(--twitter);
  }
`;

export const SearchIcon = styled(Search)`
  ${IconCss}
`;
export const EmailIcon = styled(Email)`
  ${IconCss}
`;
export const BellIcon = styled(Notifications)`
  ${IconCss}
`;
export const HomeIcon = styled(Home)`
  ${IconCss}
`;
