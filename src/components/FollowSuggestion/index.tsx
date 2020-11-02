import React from "react";

import {
  Container,
  Avatar,
  ProfileData,
  Name,
  NameRouter,
  FollowButton,
} from "./styles";

const FollowSuggestion: React.FC = () => {
  return (
    <Container>
      <Avatar />
      <ProfileData>
        <Name>Deivid Reinke Schiitz</Name>
        <NameRouter>@Deivid_Reinke</NameRouter>
      </ProfileData>

      <FollowButton>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
