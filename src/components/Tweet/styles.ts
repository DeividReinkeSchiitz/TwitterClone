import styled from "styled-components";
import { Chat, Favorite } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid;
  height: auto;
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;

  font-style: 13px;
  color: var(--gray);
  padding-left: 60px;
  margin-bottom: 2px;
`;
export const Body = styled.div`
  display: flex;
  position: relative;
`;

export const Avatar = styled.div`
  position: absolute;
  background-color: var(--gray);
  border-radius: 50%;
  height: 49px;
  width: 49px;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  white-space: nowrap;

  > span,
  time {
    color: var(--gray);
  }

  > span {
    padding-left: 10px;
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 20px;
  }
`;
export const Dots = styled.div`
  height: 5px;
  width: 5px;
  align-self: center;
  padding: 2px;
  border-radius: 50%;
  margin-top: 3px;
  background-color: var(--gray);
  margin-right: 10px;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background-color: var(--gray);
  border-radius: 25px;

  margin: 20px 0px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Status = styled.div`
  margin: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

export const RetweetIcon = styled(Favorite)`
  fill: var(--retweet);
  width: 19px;
  margin-right: 5px;
  height: 19px;
`;

export const LikeIcon = styled(Favorite)`
  fill: var(--like);
  width: 19px;
  height: 19px;
  margin-right: 5px;
`;

export const ChatIcon = styled(Chat)`
  fill: var(--gray);
  width: 19px;
  height: 19px;
  margin-right: 5px;
`;
