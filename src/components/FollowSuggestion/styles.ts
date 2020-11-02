import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  flex-shrink: 0;
  background: var(--gray);

  border-radius: 50%;
`;
export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10px;

  white-space: nowrap;
`;

export const Name = styled.span`
  font-size: 15px;
`;
export const NameRouter = styled.span`
  font-size: 15px;
  color: var(--gray);
`;

export const FollowButton = styled.button`
  padding: 5px 15px;
  color: var(--twitter);
  border: 1px solid var(--twitter);
  width: auto;
  font-weight: bold;
  border-radius: 15px;
`;
