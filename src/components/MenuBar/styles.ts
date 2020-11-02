import styled, { css } from "styled-components";
import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Twitter,
} from "../../styles/Icons";
import Button from "../Button";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;

    align-items: center;

    width: auto;
    height: auto;
    max-height: 100vh;

    padding: 9px 19px 20px;
    color: #fff;
    position: sticky;
    left: 0;
    top: 0;

    overflow-y: auto;
  }
`;

export const LogoContainer = styled.div`
  width: 33px;
  height: 33px;
  margin-bottom: 10px;

  height: auto;
`;
export const Logo = styled(Twitter)``;

export const MenuButton = styled.button`
  min-height: 50px;

  height: auto;
  width: 100%;

  cursor: pointer;
  border-radius: 25px;
  padding: 8.25px 8.25px;
  margin-top: 10px;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    display: flex;
    > span {
      color: #fff;
      text-align: start;
      display: inline;
      font-weight: bold;
      font-size: 10px;
      margin-left: 19px;
      font-size: 19px;
    }
  }

  &:hover {
    background-color: var(--twitter-dark-hover);
    flex-shrink: 0;

    > span,
    svg {
      color: var(--twitter);
    }
  }

  &.active {
    > span {
      color: var(--twitter);
    }
  }
`;

export const TweetButton = styled(Button)`
  height: auto;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 1280px) {
    height: 40px;
    width: 40px;
    > span {
      display: none;
    }
  }
`;

const IconCss = css`
  width: 30px;
  height: 30px;
  color: var(--white);
  flex-shrink: 0;
`;

export const ProfileIcon = styled(Person)`
  fill: var(--twitter);
  ${IconCss}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
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

export const BotSide = styled.div`
  margin-top: 20px;

  display: flex;
  position: absolute;

  bottom: 0;
  right: 0;
  height: auto;
  width: auto;

  flex-direction: row;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 5px;
  font-size: 14px;
  white-space: nowrap;

  > span {
    color: var(--gray);
  }

  @media (max-width: 1280px) {
    > span,
    strong {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: none;
      padding-right: 20px;
    }
  }
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;
  border-radius: 20px;

  bottom: 0;
  background: var(--gray);

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const ExitButton = styled(ExitToApp)`
  ${IconCss}
  @media (max-width: 1280px) {
    width: 40px;
    height: 40px;

    margin-right: 18px;
  }

  cursor: pointer;
  :hover {
    fill: var(--like);
  }
`;
