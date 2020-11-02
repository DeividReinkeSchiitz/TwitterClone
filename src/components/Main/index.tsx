import React from "react";
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  SearchIcon,
  EmailIcon,
  BellIcon,
  BottomMenu,
  HomeIcon,
} from "./styles";
import ProfilePage from "../ProfilePage/index";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon>ola</BackIcon>
        </button>
        <ProfileInfo>
          <strong>Deivid Reinke Schiitz</strong>
          <span>G12 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
