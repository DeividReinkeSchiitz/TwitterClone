import styled, { css } from "styled-components";
import { LocationOn, Cake } from "../../styles/Icons";
import Button from "../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;

  height: 100%;
  overflow-y: auto;

  //DISABLE HORIZONTAL SCROLL
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const IconCss = css`
  width: 20px;
  height: 20px;

  color: var(--twitter);
`;

export const CakeIcon = styled(Cake)`
  ${IconCss};
`;
export const LocationIcon = styled(LocationOn)`
  ${IconCss};
`;

export const ProfileData = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  height: auto;
  justify-content: center;

  padding: 10px 10px 10px 10px;
  margin-top: 70px;
  > ul {
    display: flex;
    flex-direction: column;
    height: auto;

    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  /*   height: 33vw;
  max-height:119px; */
  height: min(33vw, 199px);
  background: var(--twitter);
`;
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  border-bottom: 0px;
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const Followage = styled.div`
  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  width: auto;
  height: auto;
  right: 7px;
  top: -60px;
  padding: 8px 15px;

  font-size: 14px;
`;
